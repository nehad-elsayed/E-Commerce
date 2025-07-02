/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      
    },
    extend: {
      // if i want to increase the font size of the text
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      screens: {
        "3xl" : "1600px",
      },
     
    },
    // here if i want to extchange the color of the text
  },
  plugins: [
    {
      darkMode: "class",
    },
  ],
}

