/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(222 47% 4%)',
        foreground: 'hsl(210 40% 98%)',
        card: 'hsl(222 47% 7%)',
        muted: 'hsl(215 24% 18%)',
        primary: 'hsl(263 90% 67%)',
        accent: 'hsl(190 95% 52%)'
      },
      boxShadow: {
        glow: '0 0 0 1px hsl(263 90% 67% / .45), 0 0 40px hsl(263 90% 67% / .25)'
      }
    }
  },
  plugins: []
};
