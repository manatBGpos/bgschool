/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'image-title':"url('/src/assets/background/highway-blue-sky.jpg')"
      },
      backdropOpacity: {
        15: '.15',
      }
    },
  },
  plugins: [],
}