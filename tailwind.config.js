/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: "100px",
      md:'560px',
      sm:'500px'
    },
    extend: {
      fontFamily: {
        League_Spartan_black: ["League_Spartan_black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
