/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Text", "Helvetica Neue", "Helvetica", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
