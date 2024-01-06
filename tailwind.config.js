/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
				Roboto: ["Roboto", "sans-serif"]
			},
      animation: {
        "rotate-scale-down": "rotate-scale-down 10s linear infinite both",
        "slide-in-left": "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-left": "slide-out-left 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
      },
      keyframes: {
        "rotate-scale-down": {
          "0%": {
            transform: "scale(1)",
            opacity: 0 // Fully visible at the beginning
          },
          "50%": {
            transform: "scale(0.5) ",
            opacity: 1 // Fully visible at the middle
          },
          "70%": {
            transform: "scale(0.7)",
            opacity: 1 // Fade out at the smaller size
          },
          to: {
            transform: "scale(1)",
            opacity: 0 // Fully visible at the end
          }
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-out-left": {
          "0%": {
            transform: "translateX(0)",
            // opacity: "1"
          },
          to: {
            display: "none",
            transform: "translateX(-1000px)",

          }
        }
      },
    },
  },
  plugins: [],
}

