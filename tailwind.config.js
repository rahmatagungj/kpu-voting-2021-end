module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  options: {
    safelist: [/data-theme$/],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#014E87",
      "primary-focus": "#015E87",
      "primary-content": "#ffffff",
      secondary: "#ffa426",
      "secondary-focus": "#ffa436",
      "secondary-content": "#ffffff",
      accent: "#37cdbe",
      "accent-focus": "#2aa79b",
      "accent-content": "#ffffff",
      neutral: "#3d4451",
      "neutral-focus": "#2a2e37",
      "neutral-content": "#ffffff",
      "base-100": "#ffffff",
      "base-200": "#f9fafb",
      "base-300": "#d1d5db",
      "base-content": "#1f2937",
      info: "#2094f3",
      success: "#009485",
      warning: "#ffa426",
      error: "#ff5724",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#014E87",
      "primary-focus": "#015E87",
      "primary-content": "#ffffff",
      secondary: "#ffa426",
      "secondary-focus": "#ffa436",
      "secondary-content": "#ffffff",
      accent: "#37cdbe",
      "accent-focus": "#2aa79b",
      "accent-content": "#ffffff",
      neutral: "#3d4451",
      "neutral-focus": "#2a2e37",
      "neutral-content": "#ffffff",
      "base-100": "#ffffff",
      "base-200": "#f9fafb",
      "base-300": "#d1d5db",
      "base-content": "#1f2937",
      info: "#2094f3",
      success: "#009485",
      warning: "#ffa426",
      error: "#ff5724",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#014E87",
      "primary-focus": "#015E87",
      "primary-content": "#ffffff",
      secondary: "#ffa426",
      "secondary-focus": "#ffa436",
      "secondary-content": "#ffffff",
      accent: "#37cdbe",
      "accent-focus": "#2aa79b",
      "accent-content": "#ffffff",
      neutral: "#3d4451",
      "neutral-focus": "#2a2e37",
      "neutral-content": "#ffffff",
      "base-100": "#ffffff",
      "base-200": "#f9fafb",
      "base-300": "#d1d5db",
      "base-content": "#1f2937",
      info: "#2094f3",
      success: "#009485",
      warning: "#ffa426",
      error: "#ff5724",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
