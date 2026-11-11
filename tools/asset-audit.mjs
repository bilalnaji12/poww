#!/usr/bin/env node
import { readdir, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const roots = ["src/assets", "public"];
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);
const files = [];

async function walk(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (imageExtensions.has(extname(entry.name).toLowerCase())) {
      const details = await stat(path);
      files.push({ path, bytes: details.size, extension: extname(entry.name).toLowerCase() });
    }
  }
}

for (const root of roots) await walk(root);
files.sort((a, b) => b.bytes - a.bytes);

console.log("Image assets (largest first):");
for (const file of files) {
  const sizeKb = (file.bytes / 1024).toFixed(1).padStart(7);
  const flag = file.bytes > 250 * 1024 ? "  REVIEW: over 250 KB" : "";
  console.log(`${sizeKb} KB  ${relative(process.cwd(), file.path)}${flag}`);
}
console.log(`\n${files.length} image files scanned. Prefer responsive WebP/AVIF for large photographic assets, preserve PNG for transparency, and always set width/height plus useful alt text in markup.`);
