# Domain For Sale Landing (React + Vite)

This is a minimal React + Vite landing page that automatically displays the active hostname (the parked domain) and a single call-to-action to email our acquisitions inbox. Ready for Cloudflare Pages deployment.

## Features
- Auto-detects domain (window.location.host) and updates page title/SEO at runtime
- One clean CTA: email domains@blankhappens.com
- No client-side routing, no frameworks beyond React
- Cloudflare Pages support files: `_headers`, `robots.txt`, `sitemap.xml`

## Configuration
- Contact email is set to `domains@blankhappens.com` in `src/App.jsx`.
- If you need a different CTA (form, etc.), replace the `mailto:` link in `App.jsx`.

## Local development
- Install dependencies: `npm install`
- Start dev server: `npm run dev`

## Build
- Production build: `npm run build`
- Preview local build: `npm run preview`

## Deploying to Cloudflare Pages
1. Create a new project in Cloudflare Pages and connect this repository.
2. Build settings:
   - Framework preset: None (or Vite)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: default or 18+
3. Ensure the following files exist under `public/` (they will be copied to `dist`):
   - `public/_headers` – basic security headers and caching
   - `public/robots.txt` – indexing configuration
   - `public/sitemap.xml` – lists only `/`
4. If you map multiple custom domains to the same Pages project, the landing will automatically show the active domain.

No SPA routing is used, so `_redirects` is not required.

## Notes
- Point any parked domain (CNAME/A) to this Pages project; the page will show that domain and provide the email CTA.
