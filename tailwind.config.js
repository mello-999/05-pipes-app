// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        combate: "#ff0000",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cyberpunk"],
    darkTheme: "dark",
  },
};
