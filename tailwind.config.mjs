/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F6F7',
        foreground: '#1F2A37',
        card: '#FFFFFF',
        border: '#E5E7EB',
        primary: '#E78178',
        accent: '#9AA6B2',
        notice: '#E7D8A8'
      }
    }
  },
  plugins: []
};
