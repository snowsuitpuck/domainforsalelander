# Domain For Sale Landing (React + Vite)

This repository contains a lightweight landing page to advertise that a domain is for sale. It auto-detects the current hostname at runtime and renders a clean CTA for buyers to inquire via email. It is pre-configured for deployment on Cloudflare Pages.

## Features
- Auto-detects domain (window.location.host) and updates the page title/SEO meta at runtime
- Optional price via querystring: add `?price=$9,999` to display an asking price
- Clean, responsive design without external dependencies
- Static legal pages: Privacy Policy, Terms of Service, Contact
- Cloudflare Pages support files: `_headers`, `robots.txt`, `sitemap.xml`

## Configuration
- Contact email used on the main landing: update `emailUser` and `emailDomain` in `src/App.jsx` (defaults to `sales@example.com`).
- If you want a different CTA mechanism (e.g., form), you can replace the mailto link with your provider.

## Local development
- Install dependencies: `npm install`
- Start dev server: `npm run dev`

## Build
- Production build: `npm run build`
- Preview local build: `npm run preview`

## Deploying to Cloudflare Pages
1. Create a new project in Cloudflare Pages and connect this repository.
2. Set the following build settings:
   - Framework preset: None (or Vite)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: use the default, or set an environment variable `NODE_VERSION=18` or higher
3. Ensure the following files exist (they will be copied to the build output by Vite because they live under `public/`):
   - `public/_headers` – basic security headers and caching
   - `public/robots.txt` – allows indexing
   - `public/sitemap.xml` – simple sitemap for the static pages
4. If you map multiple custom domains to the same Pages project, the landing will automatically show the active domain.

No SPA routing is used, so `_redirects` is not required.

## Notes
- You can advertise a price by appending a querystring to the URL, e.g. `https://yourdomain.com/?price=$4,999`.
- Static pages are available at `/privacy-policy.html`, `/terms-of-service.html`, and `/contact-us.html`.
