/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px", // ✅ Set max width at xl
        "2xl": "1280px" // ✅ Prevent it from going wider than 1280px
      },
    },
    extend: {
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        candal: ['Candal', 'sans-serif'],
      },
      fontSize: {
        "section-heading":'56px'
      },
      letterSpacing: {
        tightest: "-0.04em",  // -4%
      },
      colors: {
        // Custom colors
        primary: '#2B1354',       
        secondary: '#3E216E',     
        green : '#C4CD24',
        brand:{
          white: '#EBEBEB',
          black: '#2B282F',
        },
      },
    },
  },
  plugins: [],
}

