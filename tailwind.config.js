/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        profile__animate: {
          "0%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wobble: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "15%": {
            transform: "translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -3deg)",
          },
          "30%": { transform: "translate3d(1%, 0, 0) rotate3d(0, 0, 1, 3deg)" },
          "45%": {
            transform: "translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -3deg)",
          },
          "60%": { transform: "translate3d(1%, 0, 0) rotate3d(0, 0, 1, 2deg)" },
          "70%": {
            transform: "translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          },
          "0%": { transform: "translate3d(0, 0, 0)" },
        },
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "359%": { transform: "rotate(359deg)" },
        },
      },
      animation: {
        profile__animate: "profile__animate 8s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        wobble: "wobble ease-in-out",
        rotation: "rotation 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
