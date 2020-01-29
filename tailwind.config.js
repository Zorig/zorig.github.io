const { colors, fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  theme: {
    colors: {
      ...colors,
      cyan: "#00ffff",
    },
    fontFamily: {
      ...fontFamily,
      body: ["Ubuntu", ...fontFamily.sans],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
