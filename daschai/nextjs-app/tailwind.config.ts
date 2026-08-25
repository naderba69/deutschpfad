import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#0b0f19",
        cardBg: "#1f2937",
        accent: "#6366f1",
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Cascadia Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
