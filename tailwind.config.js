/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playwrite: ["Playwrite AU SA", "serif"],
        IBMPlex: ["IBM Plex Sans Arabic", "serif"],
      },
    },
  },
  plugins: [],
};
