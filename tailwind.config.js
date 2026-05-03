/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:       "rgb(var(--color-ink-rgb) / <alpha-value>)",
        paper:     "rgb(var(--color-paper-rgb) / <alpha-value>)",
        paperDark: "rgb(var(--color-paper-dark-rgb) / <alpha-value>)",
        rule:      "rgb(var(--color-rule-rgb) / <alpha-value>)",
        accent:    "rgb(var(--color-accent-rgb) / <alpha-value>)",
        muted:     "rgb(var(--color-muted-rgb) / <alpha-value>)",
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
