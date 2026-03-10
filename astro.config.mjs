import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isOrgOrUserSite = repo.endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS && !isOrgOrUserSite ? `/${repo}` : '/';

export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind()],
  site: 'https://ideaincubator.co',
  base,
});
