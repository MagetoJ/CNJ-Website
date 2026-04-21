import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // CNJ Safaris Brand Colors
        "jungle-dark": "#064E3B",
        "jungle-green": "#0D6B56",
        "leaf-green": "#22C55E",
        "sage-light": "#E8F5E9",
        "cream": "#FFFBF0",
      },
      backgroundImage: {
        "gradient-jungle": "linear-gradient(135deg, #064E3B 0%, #0D6B56 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
