/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0c0c0e",
          soft: "#1a1a1d",
          muted: "#4a4a52"
        },
        bone: {
          50: "#fbf8f3",
          100: "#f5f1ea",
          200: "#ece5d8",
          300: "#ddd2bd"
        },
        gold: {
          400: "#c9a15e",
          500: "#b8935a",
          600: "#9b7a45",
          700: "#7a5f34"
        }
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        kicker: "0.22em"
      },
      boxShadow: {
        card: "0 20px 40px -20px rgba(12, 12, 14, 0.25)",
        pop: "0 30px 60px -25px rgba(12, 12, 14, 0.35)"
      }
    }
  },
  plugins: []
}