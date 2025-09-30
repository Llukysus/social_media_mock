/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        instagram: {
          primary: '#E4405F',
          secondary: '#F77737',
          tertiary: '#FCAF45',
        },
        tiktok: {
          primary: '#000000',
          secondary: '#FF0050',
          accent: '#25F4EE',
        }
      },
    },
  },
  plugins: [],
}
