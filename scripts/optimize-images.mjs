#!/usr/bin/env node
/** Resize and compress all images in public/ingested/detourconali/ to web-safe WebP */
import { readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = join(root, "public", "ingested", "detourconali");

const MAX_EDGE = 1600;
const QUALITY = 82;

const files = await readdir(imgDir);
for (const f of files) {
  if (!/\.(jpg|jpeg|png|webp)$/i.test(f)) continue;
  const src = join(imgDir, f);
  const dest = join(imgDir, f.replace(/\.(jpg|jpeg|png)$/i, ".webp"));
  const s = await stat(src);
  // skip if already a small file (< 200KB)
  if (s.size < 200_000 && f.endsWith(".webp")) {
    console.log(`  skip ${f} (${Math.round(s.size/1024)}KB — already small)`);
    continue;
  }
  try {
    const info = await sharp(src)
      .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(dest + ".tmp");
    // replace original with optimized
    const fs = await import("node:fs/promises");
    await fs.rename(dest + ".tmp", dest);
    if (dest !== src) await fs.unlink(src).catch(() => {});
    console.log(`  ✓ ${f} → ${dest.split(/[/\\]/).pop()} (${Math.round(s.size/1024)}KB → ${Math.round(info.size/1024)}KB)`);
  } catch (e) {
    console.log(`  ✗ ${f} — ${e.message}`);
  }
}
console.log("Done.");
