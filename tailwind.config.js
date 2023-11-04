/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D72050",

          secondary: "#F3F3F3",

          accent: "#706F6F",

          neutral: "#2a323c",

          "base-100": "#fff",

          info: "#E7E7E7",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
