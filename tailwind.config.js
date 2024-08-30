/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "weatherCard-bg": 'rgba(47, 53, 64, 255)',
      },
    },
  },
  plugins: [],
};

