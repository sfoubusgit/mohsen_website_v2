# Mohsen Website Neu

This folder contains the new website rebuild for Mohsen Abyari.

## Why it lives here

- The original site remains untouched as reference material.
- The new site is built in isolation inside `mohsen_website_neu`.
- Reusable assets can be copied over deliberately instead of inheriting the old positioning by accident.

## Run locally

From the repository root:

```powershell
cd .\mohsen_website_neu
npm run dev
```

Then open `http://localhost:3001`.

The scripts reuse the parent project's installed Next.js dependency, so no second install step is required for this first pass.

## Known placeholders

- `Impressum` needs final legal business details before launch.
- `Datenschutz` needs review against the final hosting/contact setup.
- The confidential contact form is currently a UI-first implementation and should be wired to a secure server-side endpoint before production use.
- Sector trust tiles are intentionally generic until approved logos or verified references are supplied.
