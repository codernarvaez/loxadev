module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "loxadev-primary": "#1D5CFC",
        "loxadev-dark": "#3F3F3F",
        "loxadev-secondary": "#636363",
        "loxadev-light-blue": "#CBD9EF",
        "loxadev-ligth-gray": "#f4f4f4",
        "loxadev-black": "#1C1C1C",
      },
      spacing: {
        20.5: "82px",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
