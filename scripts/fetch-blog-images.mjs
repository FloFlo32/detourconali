#!/usr/bin/env node
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "ingested", "detourconali");

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const posts = [
  { slug: "el-yunque-tours", url: "https://www.detourconali.com/post/your-title-what-s-your-blog-about" },
  { slug: "family-trip-puerto-rico", url: "https://www.detourconali.com/post/how-to-plan-a-memorable-trip-to-puerto-rico-with-your-kids" },
  { slug: "tour-guide-tips", url: "https://www.detourconali.com/post/a-tour-guide-s-tips-to-explore-puerto-rico" },
  { slug: "packing-list-puerto-rico", url: "https://www.detourconali.com/post/planning-a-trip-to-puerto-rico-6-things-you-should-not-forget-to-bring" },
];

async function fetchHtml(url) {
  const r = await fetch(url, {
    headers: { "User-Agent": UA, "Accept": "text/html" },
    signal: AbortSignal.timeout(20000),
  });
  return r.text();
}

async function tryDownload(url, dest) {
  // Try both: with fill params (CDN version) and without (raw version)
  const variants = [
    url,
    // replace fill params with larger size
    url.replace(/\/v1\/fill\/[^/]+\//, "/v1/fill/w_1200,h_630,al_c,q_85,enc_avif/"),
    // try jpeg quality without enc_avif
    url.replace(/\/v1\/fill\/[^/]+\//, "/v1/fill/w_1200,h_630,al_c,q_90/"),
  ];
  for (const v of variants) {
    try {
      const r = await fetch(v, {
        headers: {
          "User-Agent": UA,
          "Referer": "https://www.detourconali.com/",
          "Origin": "https://www.detourconali.com",
        },
        signal: AbortSignal.timeout(20000),
      });
      if (r.ok) {
        const buf = Buffer.from(await r.arrayBuffer());
        if (buf.length > 5000) {
          await writeFile(dest, buf);
          return { url: v, bytes: buf.length };
        }
      }
    } catch {}
  }
  return null;
}

for (const post of posts) {
  console.log(`\n── ${post.slug} ──`);
  try {
    const html = await fetchHtml(post.url);
    // Extract og:image (try multiple patterns)
    const patterns = [
      /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i,
      /<meta[^>]+content="([^"]+)"[^>]+property="og:image"/i,
      /"image"\s*:\s*\{[^}]*"url"\s*:\s*"([^"]+)"/,
    ];
    let imgUrl = null;
    for (const p of patterns) {
      const m = html.match(p);
      if (m) { imgUrl = m[1]; break; }
    }
    // Also look for wixstatic.com image URLs in general
    if (!imgUrl) {
      const wixMatch = html.match(/https:\/\/static\.wixstatic\.com\/media\/[a-f0-9_~mv2.]+\.(jpg|jpeg|png)/i);
      if (wixMatch) imgUrl = wixMatch[0];
    }
    if (!imgUrl) { console.log("  No image found in page"); continue; }
    console.log(`  Found: ${imgUrl.slice(0, 90)}`);

    const ext = imgUrl.toLowerCase().includes(".png") ? ".png" : ".jpg";
    const dest = join(outDir, `blog-${post.slug}${ext}`);
    const result = await tryDownload(imgUrl, dest);
    if (result) {
      console.log(`  ✓ ${Math.round(result.bytes / 1024)}KB → blog-${post.slug}${ext}`);
    } else {
      console.log(`  ✗ All download attempts failed`);
    }
  } catch (e) {
    console.log(`  ✗ Error: ${e.message}`);
  }
}
console.log("\nDone.");
