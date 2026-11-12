import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Vite loads .env for the app; this tiny parser lets the Node maintenance scripts
// use the same URL without adding dotenv as a runtime dependency.
for (const file of [".env", ".env.local"]) {
  try {
    const content = readFileSync(resolve(file), "utf8");
    for (const line of content.split(/\r?\n/)) {
      const match = line.match(/^\s*(?:export\s+)?([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (!match || process.env[match[1]] !== undefined) continue;
      process.env[match[1]] = match[2].replace(/^(["'])(.*)\1$/, "$2");
    }
  } catch {
    // Environment files are optional; CI can set SITE_URL directly.
  }
}

export const siteUrl = (process.env.VITE_SITE_URL || "https://pawmade-site.pawmade.workers.dev").replace(/\/+$/, "");

export const publicRoutes = [
  { path: "/" },
  { path: "/cat-wooden-puzzle/" },
  { path: "/dog-wooden-puzzle/" },
  { path: "/christmas-cat-wooden-jigsaw-puzzle/" },
];
