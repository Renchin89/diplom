/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    minHeight: {
      0: "0",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      "4/5": "80vh",
      full: "100vh",
    },
    minWidth: {
      0: "0",
      "1/4": "25vw",
      "1/2": "50vw",
      "3/4": "75vw",
      "4/5": "80vw",
      screen: "100vw",
    },
    extend: {
      spacing: {
        18: "4.5rem",
        88: "22rem",
        92: "23rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        200: "50rem",
        240: "60rem",
        256: "64rem",
      },
      colors: {
        primary: {
          DEFAULT: "#1C212D",
        },
        secondary: {
          DEFAULT: "#FFD831",
        },
        tertiary: {
          DEFAULT: "#1F4590",
        },
        wallpaper: {
          DEFAULT: "#fff",
          light: "#F2F7FA",
          dark: "#1C212D",
        },
        status: {
          DEFAULT: "#DD3838",
          red: "#DD3838",
          orange: "#FFB302",
          yellow: "#FCE83A",
          green: "#07C180",
          gray: "9EA7AD",
          cyan: "2DCCFF",
        },
        fontSize: {
          xxs: ["0.625rem", { lineHeight: "0.75rem" }],
        },
      },
    },
  },
  plugins: [],
  important: true,
};
