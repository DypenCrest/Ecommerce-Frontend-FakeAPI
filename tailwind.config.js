/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-img": "url('/assets/images/banner1.jpg')", // Update the path accordingly
      },
    },
  },
  plugins: [],
};
