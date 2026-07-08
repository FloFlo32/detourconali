#!/usr/bin/env node
/**
 * refetch-images — re-downloads full-resolution images from detourconali.com (Wix CDN).
 */
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as cheerio from "cheerio";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = join(root, "public", "ingested", "detourconali");
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";

const PAGES = [
  "https://www.detourconali.com/",
  "https://www.detourconali.com/tours",
  "https://www.detourconali.com/about",
  "https://www.detourconali.com/gallery",
  "https://www.detourconali.com/custom-guided-tours-puerto-rico",
  "https://www.detourconali.com/group-tour-experiences-puerto-rico",
  "https://www.detourconali.com/el-yunque-adventure-tours-puerto-rico",
];

async function fetchPage(url) {
  try {
    const r = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(20000) });
    return r.ok ? r.text() : null;
  } catch { return null; }
}

async function downloadImage(url, dest) {
  try {
    console.log(`  Trying: ${url.slice(0, 100)}`);
    const r = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(30000) });
    if (!r.ok) { console.log(`    → HTTP ${r.status}`); return false; }
    const buf = Buffer.from(await r.arrayBuffer());
    console.log(`    → ${buf.length} bytes`);
    if (buf.length < 1000) return false;
    await writeFile(dest, buf);
    console.log(`  ✓ ${dest.split(/[/\\]/).pop()} (${Math.round(buf.length / 1024)}KB)`);
    return true;
  } catch (e) {
    console.log(`    → Error: ${e.message}`);
    return false;
  }
}

/** Wix: request a specific large size */
function toLargeSize(url) {
  // Replace existing size params with a large size
  const base = url.replace(/\/v1\/(fill|fit|crop)\/[^/]+\/[^?]+/, "").replace(/\?.*$/, "");
  // Request w_1400 from the Wix CDN
  const m = base.match(/^(https:\/\/static\.wixstatic\.com\/media\/[^/]+\.(jpg|jpeg|png|webp))/i);
  if (m) return `${m[1]}/v1/fill/w_1400,q_90/img.webp`;
  return base;
}

await mkdir(imgDir, { recursive: true });

const seen = new Set();
const rawUrls = [];

for (const page of PAGES) {
  console.log(`Scraping ${page}...`);
  const html = await fetchPage(page);
  if (!html) { console.log("  (failed)"); continue; }

  const raw = html.match(/https:\/\/static\.wixstatic\.com\/media\/[^"'\s<>)\\]+/g) || [];
  for (let u of raw) {
    u = u.replace(/\\u002F/g, "/");
    const clean = u.replace(/\/v1\/(fill|fit|crop)\/[^/]+\/.*$/, "").replace(/\?.*$/, "");
    if (!seen.has(clean) && /\.(jpg|jpeg|png|webp)/i.test(clean)) {
      seen.add(clean);
      rawUrls.push(clean);
    }
  }
  console.log(`  Found ${seen.size} unique so far`);
}

console.log(`\nTotal: ${rawUrls.length} unique images. Downloading at large size...`);

let idx = 6;
let downloaded = 0;
for (const baseUrl of rawUrls.slice(0, 60)) {
  // Try multiple strategies
  const strategies = [
    `${baseUrl}/v1/fill/w_1400,q_90/img.webp`,
    `${baseUrl}/v1/fill/w_1200,q_85/img.jpg`,
    baseUrl, // original
  ];

  const ext = "webp";
  const filename = `img-${String(idx).padStart(3, "0")}.${ext}`;
  const dest = join(imgDir, filename);

  let ok = false;
  for (const url of strategies) {
    ok = await downloadImage(url, dest);
    if (ok) break;
  }
  if (ok) downloaded++;
  idx++;
}

console.log(`\nDone — ${downloaded} images downloaded to public/ingested/detourconali/`);
