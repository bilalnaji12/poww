/**
 * Set VITE_SITE_URL to the public production origin before deploying a custom domain.
 * The fallback matches the current Pawmade Workers deployment.
 */
const configuredSiteUrl = (import.meta.env["VITE_SITE_URL"] as string | undefined)?.trim();

export const SITE_URL = (
  configuredSiteUrl || "https://pawmade-site.pawmade.workers.dev"
).replace(/\/+$/, "");
