import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF7",
        "bg-deep": "#0B1410",
        ink: "#0C1210",
        "ink-soft": "#4B5750",
        "ink-faint": "#8A928C",
        primary: "#2DBD6E",
        "primary-deep": "#16543A",
        "primary-soft": "#E9F7EF",
        line: "#E4E7E1",
        "line-deep": "#1D2A24",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        drawRing: {
          "0%": { strokeDashoffset: "530" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drawRing: "drawRing 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
