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
        },
      },
      boxShadow: {
        soft: "0 24px 70px rgba(10, 10, 10, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
