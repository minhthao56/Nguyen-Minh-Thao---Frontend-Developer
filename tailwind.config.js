/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../public/images/SpaceX_Store_Header.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
