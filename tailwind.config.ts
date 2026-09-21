import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ice: {
          DEFAULT: "#CFE5EC",
          50: "#E3F0F4",
          100: "#DCEEF3",
          200: "#CFE5EC",
          300: "#C0DAE3",
          400: "#B4D2DC",
          500: "#A7C8D3",
          600: "#93B7C4",
          700: "#7A9EAC",
        },
        ink: {
          DEFAULT: "#101820",
          soft: "#1B2530",
          muted: "#44586A",
          faint: "#5C7284",
        },
        line: "#A9C6D1",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "hero-name": ["clamp(2.8rem, 9vw, 7.8rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "hero-line": ["clamp(2.4rem, 6.2vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "section-head": ["clamp(2.2rem, 5vw, 5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        prime: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
