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
This project is configured to deploy with **GitHub Actions** via `.github/workflows/deploy.yml`.

### Do I need GitHub Actions, or can I just click "Rebuild" after merge?
Short answer:
- If Pages **Source = GitHub Actions**: you should keep this workflow. Merging to `main` automatically runs build + deploy.
- If Pages **Source = Deploy from a branch**: GitHub does not run your Astro build for you. You would need to commit built static files (for example `dist/`) or use another build step elsewhere.

For Astro projects, **GitHub Actions is the recommended approach** because it builds from source each deploy.

### One-time GitHub setup (recommended)
1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Ensure your deployment branch is `main` (or update workflow trigger).

### Deploy
Every push to `main` triggers:
1. `npm install`
2. `npm run build`
3. Upload `dist/`
4. Deploy to Pages

> Note: This workflow currently uses `npm install` and disables setup-node package-manager cache so deploys work even without a committed lockfile.
> If you add `package-lock.json`, you can switch back to `npm ci` and re-enable npm caching for stricter reproducibility and faster installs.

### Do you need an Astro adapter?
No adapter is required for GitHub Pages here because the site is static (`output: 'static'`) and deployed from generated files.
