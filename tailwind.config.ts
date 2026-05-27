import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // CNJ Safaris Brand Colors
        "safari-gold": "#C5A02E",
        "earth-brown": "#3E2723",
        "deep-black": "#0A0A0A",
        "warm-beige": "#D7CCC8",
        "olive-green": "#556B2F",
      },
      backgroundImage: {
        "gradient-safari": "linear-gradient(135deg, #3E2723 0%, #556B2F 100%)",
        "cinematic-overlay": "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(10,10,12,0.9) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
