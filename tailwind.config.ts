import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yoink: {
          orange: "#EA580C",
          black: "#0A0A0A",
          white: "#FFFFFF",
          ash: "#A3A3A3",
          panel: "#141414",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-space-grotesk)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(10, 10, 10, 0.08)",
        brutal: "7px 7px 0 #EA580C",
        brutalWhite: "7px 7px 0 #FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
