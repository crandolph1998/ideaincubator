/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#F3F4F6',
        foreground: '#2E3A46',
        card: '#F7F7F7',
        muted: '#6B7280',
        border: '#E5E7EB',
        primary: '#E98986',
        accent: '#E7DBAE'
      },
      boxShadow: {
        glow: '0 10px 30px rgb(233 137 134 / .25)'
      }
    }
  },
  plugins: []
};
