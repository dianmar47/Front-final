/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(at 32% 8%, rgb(23, 23, 23) 0, transparent 52%), radial-gradient(at 12% 83%, rgb(165, 243, 252) 0, transparent 63%), radial-gradient(at 23% 48%, rgb(147, 51, 234) 0, transparent 69%), radial-gradient(at 31% 60%, rgb(214, 211, 209) 0, transparent 56%), radial-gradient(at 72% 26%, rgb(147, 51, 234) 0, transparent 17%), radial-gradient(at 40% 66%, rgb(212, 212, 216) 0, transparent 6%)", //"radial-gradient(at center bottom, rgb(21, 94, 117), rgb(49, 46, 129), rgb(23, 23, 23))",
        "gradient-btn":
          "linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)",
      },
      colors: {
        "electric-violet": {
          50: "#faf5ff",
          100: "#f4e8ff",
          200: "#ebd5ff",
          300: "#dbb4fe",
          400: "#c384fc",
          500: "#aa55f7",
          600: "#9333ea",
          700: "#7c22ce",
          800: "#6821a8",
          900: "#541c87",
        },
        anakiwa: {
          50: "#ecfdff",
          100: "#cff9fe",
          200: "#a5f3fc",
          300: "#67eaf9",
          400: "#22d9ee",
          500: "#06bfd4",
          600: "#08a0b2",
          700: "#0e8390",
          800: "#156b75",
          900: "#165b63",
        },
        woodsmoke: {
          50: "#f6f6f7",
          100: "#e1e2e6",
          200: "#c3c4cc",
          300: "#9d9eab",
          400: "#787989",
          500: "#5e5f6e",
          600: "#4a4a57",
          700: "#3f3e47",
          800: "#34343b",
          900: "#18181b",
        },

        blackish: "#18181B",
        bluish: "#A5F3FC",
        blueish: "#3d7b8a",
        purplish: "#9333EA",
        purpleish: "#7b3eb2",
        grayish: "#D4D4D8",
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-y": "gradient-y 4s ease infinite",
        "gradient-xy": "gradient-xy 4s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};

//background-color: rgb(24, 24, 27);
//background-image: radial-gradient(at 32% 8%, rgb(23, 23, 23) 0, transparent 52%), radial-gradient(at 12% 83%, rgb(165, 243, 252) 0, transparent 63%), radial-gradient(at 23% 48%, rgb(147, 51, 234) 0, transparent 69%), radial-gradient(at 31% 60%, rgb(214, 211, 209) 0, transparent 56%), radial-gradient(at 72% 26%, rgb(147, 51, 234) 0, transparent 17%), radial-gradient(at 40% 66%, rgb(212, 212, 216) 0, transparent 6%);
