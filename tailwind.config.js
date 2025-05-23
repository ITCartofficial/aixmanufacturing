/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#5D60EF",
          hover: "#4439c9",
        },
      
    },
  },
},
  plugins: [],
};
