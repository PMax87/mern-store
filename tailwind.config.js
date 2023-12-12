/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Open Sans", "ui-sans-serif", "system-ui"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
