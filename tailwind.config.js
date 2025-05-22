/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        candal: ['Candal', 'sans-serif'],
      },
      colors: {
        // Custom colors
        primary: '#2B1354',       
        secondary: '#3E216E',     
        green : '#C4CD24',
        black: '#2B282F',
        brand:{
          white: '#EBEBEB',
        },
      },
    },
  },
  plugins: [],
}

