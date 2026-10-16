import type { Config } from "tailwindcss";

// Colours are CSS variables (see src/index.css) so the light and dark themes share one palette.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: v("ink"),
        steel: v("steel"),
        paper: v("paper"),
        card: v("card"),
        line: v("line"),
        stone: v("stone"),
        sage: v("sage"),
        navy: v("hero"),
        ivory: v("on-dark"),
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      keyframes: {
        up: { from: { opacity: "0", transform: "translateY(26px)" }, to: { opacity: "1", transform: "none" } },
        ruler: { from: { clipPath: "inset(0 100% 0 0)" }, to: { clipPath: "inset(0)" } },
        drop: { from: { opacity: "0", transform: "translateY(-8px) scale(.96)" }, to: { opacity: "1", transform: "none" } },
        ring: { from: { transform: "scale(.8)", opacity: ".9" }, to: { transform: "scale(1.35)", opacity: "0" } },
      },
      animation: {
        up: "up .85s cubic-bezier(.2,.7,.2,1) both",
        ruler: "ruler 1.7s .5s cubic-bezier(.65,0,.2,1) both",
        drop: "drop .3s both",
        ring: "ring 1.1s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
