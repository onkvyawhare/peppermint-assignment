/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo
        secondary: "#F43F5E", // Rose
        accent: "#22C55E", // Green
      },
    },
  },
  plugins: [],
};
