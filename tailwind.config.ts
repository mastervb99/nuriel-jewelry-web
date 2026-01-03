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
        // Nuriel Ocean/Pearl/Light Theme
        pearl: {
          50: "#fefefe",    // pearl-white
          100: "#faf9f7",   // pearl-cream
          200: "#e8f4f8",   // ocean-mist
          300: "#d1e9f0",
          400: "#a3d3e0",
          500: "#4a90a4",   // ocean-blue
          600: "#3a7a8f",
          700: "#2c5f70",   // ocean-deep
          800: "#1e4550",
          900: "#0f2d35",
        },
        light: {
          golden: "#f4e4bc", // golden-light
          rose: "#f7e7e1",   // rose-light
          aurora: "#e1f0ff", // aurora-light
        },
      },
      backgroundImage: {
        "ocean-gradient": "linear-gradient(135deg, #4a90a4 0%, #2c5f70 100%)",
        "pearl-gradient": "linear-gradient(135deg, #fefefe 0%, #faf9f7 50%, #e8f4f8 100%)",
        "aurora-gradient": "linear-gradient(135deg, #e1f0ff 0%, #f7e7e1 50%, #f4e4bc 100%)",
        "mystical-gradient": "linear-gradient(135deg, #4a90a4 0%, #e8f4f8 50%, #f4e4bc 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgb(74, 144, 164), 0 0 10px rgb(74, 144, 164)" },
          "100%": { boxShadow: "0 0 10px rgb(74, 144, 164), 0 0 20px rgb(74, 144, 164), 0 0 30px rgb(74, 144, 164)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;