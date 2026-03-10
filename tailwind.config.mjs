/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#F3F4F6',
        foreground: '#2E3A46',
        muted: '#6B7280',
        card: '#F7F7F7',
        border: '#E5E7EB',
        primary: '#E98986',
        accent: '#9AA6B2',
        notice: '#E7DBAE'
      },
      boxShadow: {
        soft: '0 10px 30px rgb(46 58 70 / 0.08)'
      }
    }
  },
  plugins: []
};
