module.exports = {
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-40px)" },
        },
        floatReverse: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(40px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        gradientMove: "gradientMove 8s ease infinite",
        float: "float 12s ease-in-out infinite",
        floatReverse: "floatReverse 15s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease forwards",
      },
    },
  },
};
