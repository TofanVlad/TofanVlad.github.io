/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./@corepack/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/modules/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yellowTail: ["YellowTail"],
        spaceGrotesk: [`'Space Grotesk'`],
      },
    },
  },
  plugins: [],
};
