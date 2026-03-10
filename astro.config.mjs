import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const site = process.env.ASTRO_SITE ?? 'https://ideaincubator.co';
const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind()],
  site,
  base
});
