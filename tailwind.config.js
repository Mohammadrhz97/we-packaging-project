/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playwrite: ["Playwrite AU SA", "serif"],
        IBMPlex: ["IBM Plex Sans Arabic", "serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFAEC",
        whiteCream: "#F5ECD5",
        green: "#578E7E",
      },
    },
  },
  plugins: [],
};
