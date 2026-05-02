/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        paper: "#f4efe4",
        paperDark: "#e8e1d0",
        rule: "#1a1a1a",
        accent: "#8b1a1a",
        muted: "#5a5650",
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Times New Roman"', "Times", "serif"],
        body: ['"Lora"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        hand: ['"Caveat"', "cursive"],
      },
      letterSpacing: {
        masthead: "0.02em",
        section: "0.18em",
      },
    },
  },
  plugins: [],
};
