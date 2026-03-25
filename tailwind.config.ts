import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7B2FBE",
        magenta: "#C2185B",
        red: "#E8334A",
        gold: "#F5C842",
        dark: "#0D0A14",
        cream: "#FFF8F0",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7B2FBE, #C2185B, #E8334A)",
      },
    },
  },
  plugins: [],
};
export default config;
