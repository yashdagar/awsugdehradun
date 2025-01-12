/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "rgb(var(--primary))",
      secondary: "rgb(var(--secondary))",
      white: "rgb(var(--white))",
      blue: "rgb(var(--blue))",
      black: "rgb(var(--black))",
      gray: {
        100: "rgb(var(--gray-100))",
        200: "rgb(var(--gray-200))",
        500: "rgb(var(--gray-500))",
        900: "rgb(var(--gray-900))",
      },
      transparent: "#0000",
    },
    fontFamily: {
      sans: [
        "__Inter_36bd41",
        "__Inter_Fallback_36bd41",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {},
  },
  plugins: [],
};
