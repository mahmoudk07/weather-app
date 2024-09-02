const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundColor: {
        "weatherCard-bg": "rgba(47, 53, 64, 255)",
      },
      screens: {
        xs: "470px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
