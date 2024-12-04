/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-bg':"url('/src/assets/background/student1.jpg')"
      },
      backdropOpacity: {
        15: '.15',
      }
    },
  },
  plugins: [],
}