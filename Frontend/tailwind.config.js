/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poet: ['Poetsen One', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif']
      },
      scrollBehavior: {
      smooth: 'smooth',
      },
    },
  },
  plugins: [],
}
