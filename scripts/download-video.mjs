#!/usr/bin/env node
/**
 * Download first Wix hero video from detourconali.com
 * Fetches live token from page, downloads HLS segments, concatenates to MP4
 */
import { writeFile, mkdir, appendFile, unlink, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public");
const outFile = join(outDir, "hero-video.mp4");

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
const REFERER = "https://www.detourconali.com/";
const headers = { "User-Agent": UA, "Referer": REFERER, "Origin": "https://www.detourconali.com" };

async function get(url, raw = false) {
  const r = await fetch(url, { headers, signal: AbortSignal.timeout(30000) });
  if (!r.ok) throw new Error(`HTTP ${r.status} ${r.statusText} — ${url}`);
  return raw ? Buffer.from(await r.arrayBuffer()) : r.text();
}

console.log("1. Fetching homepage to extract live token...");
const html = await get("https://www.detourconali.com/");

const videoId = "401c00_5e4df0655c804b39bb71cbe954592554";

// Find the live token (iat around current time, not the static iat:1000 one)
const tokenMatches = [...html.matchAll(/master\.m3u8\?token=(eyJ[A-Za-z0-9_\-.]+)/g)].map(m => m[1]);
console.log(`  Found ${tokenMatches.length} token(s)`);

// Pick the live token (decode JWT payload to check iat > 1000000000)
let liveToken = null;
for (const t of tokenMatches) {
  try {
    const payload = JSON.parse(Buffer.from(t.split(".")[1], "base64url").toString());
    console.log(`  Token iat=${payload.iat} exp=${payload.exp} (${payload.iat > 1_000_000_000 ? "LIVE" : "static"})`);
    if (payload.iat > 1_000_000_000) { liveToken = t; break; }
  } catch {}
}

if (!liveToken) {
  console.log("  No live token found, trying static token...");
  liveToken = tokenMatches[0];
}
if (!liveToken) throw new Error("No token found in page");
console.log(`  Using token (first 40 chars): ${liveToken.slice(0, 40)}...`);

console.log("\n2. Fetching M3U8 manifest...");
const m3u8Url = `https://video.wixstatic.com/video/${videoId}/,480p,720p,1080p,/mp4/file.mp4.urlset/master.m3u8?token=${liveToken}`;
let manifest;
try {
  manifest = await get(m3u8Url);
  console.log("  Master manifest:\n" + manifest);
} catch (e) {
  console.log(`  Master manifest failed: ${e.message}`);
  // Try gcp-repackager URL
  const gcpUrl = `https://gcp-repackager.wixmp.com/video.wixstatic.com/video/${videoId}/,480p,720p,1080p,/mp4/file.mp4.urlset/master.m3u8?token=${liveToken}`;
  console.log(`  Trying GCP repackager: ${gcpUrl.slice(0, 100)}...`);
  manifest = await get(gcpUrl);
  console.log("  GCP manifest:\n" + manifest);
}

// Parse the 480p playlist URL from master manifest
const lines = manifest.split("\n").map(l => l.trim()).filter(Boolean);
const playlistLine = lines.find(l => l.includes("480p") || (!l.startsWith("#") && l.endsWith(".m3u8")));
if (!playlistLine) throw new Error("No 480p playlist in master manifest");

const baseUrl = m3u8Url.replace(/[^/]+$/, "");
const playlistUrl = playlistLine.startsWith("http") ? playlistLine : baseUrl + playlistLine;
console.log(`\n3. Fetching 480p playlist: ${playlistUrl.slice(0, 100)}...`);
const playlist = await get(playlistUrl);
console.log("  Playlist:\n" + playlist.slice(0, 500));

// Download segments
const segLines = playlist.split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("#"));
const playlistBase = playlistUrl.replace(/[^/]+$/, "");
console.log(`\n4. Downloading ${segLines.length} segments...`);
const tmpDir = join(root, ".tmp-video-segments");
await mkdir(tmpDir, { recursive: true });

const segFiles = [];
for (let i = 0; i < segLines.length; i++) {
  const segUrl = segLines[i].startsWith("http") ? segLines[i] : playlistBase + segLines[i];
  const segFile = join(tmpDir, `seg-${String(i).padStart(5, "0")}.ts`);
  segFiles.push(segFile);
  try {
    const buf = await get(segUrl, true);
    await writeFile(segFile, buf);
    if (i % 10 === 0) process.stdout.write(`\r  ${i + 1}/${segLines.length} segments`);
  } catch (e) { console.log(`\n  Segment ${i} failed: ${e.message}`); }
}
console.log(`\n  All segments downloaded.`);

// Concatenate all .ts files into one file (browsers can play .ts directly or we rename to .mp4)
console.log("\n5. Concatenating segments...");
const { createWriteStream } = await import("node:fs");
const out = createWriteStream(outFile);
for (const f of segFiles) {
  if (existsSync(f)) {
    const chunk = await readFile(f);
    await new Promise((res, rej) => out.write(chunk, e => e ? rej(e) : res()));
  }
}
await new Promise((res) => out.end(res));

// Cleanup
for (const f of segFiles) await unlink(f).catch(() => {});
await (await import("node:fs/promises")).rmdir(tmpDir).catch(() => {});

const { stat } = await import("node:fs/promises");
const s = await stat(outFile);
console.log(`\n✓ Done! ${outFile} (${Math.round(s.size / 1024 / 1024)}MB)`);
