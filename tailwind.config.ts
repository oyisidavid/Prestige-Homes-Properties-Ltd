import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: {
            DEFAULT: "#0D5C28",
            dark: "#073B18",
            light: "#E8F4EC",
          },
          gold: {
            DEFAULT: "#9E6A1B",
            dark: "#7C5212",
            light: "#F9F3EA",
          },
        },
        surface: {
          canvas: "#F8FAF9",
          bg: "#F8FAF9",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
        text: {
          primary: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
        },
      },
    },
  },
  plugins: [],
};
export default config;