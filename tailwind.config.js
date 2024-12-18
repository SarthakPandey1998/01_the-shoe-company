/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "media700":"700px",
        "media600":"600px",
        "media450":"450px"
      },
      backgroundImage: {
        "testimonial-section":"url('./Images/testimonial-section-background.png')"
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("open-menu", ".open-menu &");
    }),
    plugin(function({ addVariant }) {
      addVariant("active", ".active&");
    })
  ],
}

