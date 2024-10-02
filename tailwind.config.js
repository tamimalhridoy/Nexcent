/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D4D4D",
        secondary: "#717171",
        brand: "#4CAF4F",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
