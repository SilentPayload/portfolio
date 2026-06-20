// Resolves the correct site URL in every environment:
// - Vercel deployments: uses the auto-set VERCEL_URL env var
// - Local dev: falls back to localhost:3000
// - Custom domain later: set NEXT_PUBLIC_SITE_URL in Vercel project settings
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");
