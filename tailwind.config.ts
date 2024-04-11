import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xxs: "320px",
        xs: "400px",
      },
      colors: {
        gunther: "#FFEFEE",
        pink: "#E800A4",
        purple: "#A81AE9",
        yellow: "#FFC700",
        green: "#218B81",
        white: "#FFFFFF",
        black: {
          600: "#5D606A",
          800: "#36383D",
          900: "#222325",
        },
        blush: {
          100: "#FFF6F5",
          200: "#FFECE9",
          500: "#EB96AB",
          border: "#EB96AB",
        },
      },
      borderRadius: {
        ten: "10px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
