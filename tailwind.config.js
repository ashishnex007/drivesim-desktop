/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "#101929",
        'yellow': '#F9AF06',
        'darkBlue': '#2F5479',
        'white': '#fbfbfb',
      },
    },
  },
  plugins: [],
}