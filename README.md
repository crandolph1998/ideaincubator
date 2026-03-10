# Idea Incubator Agency Website (Astro)

Rebuild of the agency website using **Astro.js + Tailwind CSS** with shadcn-style component primitives.

## Stack
- Astro
- Tailwind CSS
- Astro React integration (ready for future shadcn/react components)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
This project is already configured for GitHub Pages via `.github/workflows/deploy.yml`.

### One-time GitHub setup
1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Ensure your default deployment branch is `main` (or update the workflow trigger).

### Deploy
Every push to `main` triggers a build and deployment.

### Do you need an Astro adapter?
No adapter is required for GitHub Pages because this site is built as static output (`output: 'static'`) and deployed from the generated `dist/` folder.
