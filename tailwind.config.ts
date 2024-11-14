import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#011638",
        secondaryDark: "#2E294E",
        terchoryDark: "#9055A2",
        primaryLight: "#E8C1C5",
        secondaryLight: "#D499B9",
      },
    },
  },
  plugins: [],
} satisfies Config;
