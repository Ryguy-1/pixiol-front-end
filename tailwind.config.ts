import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // allow manual switching (https://tailwindcss.com/docs/dark-mode)
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
