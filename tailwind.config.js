module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  corePlugins: {
    preflight: false, // Disable if conflicting with other CSS
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
