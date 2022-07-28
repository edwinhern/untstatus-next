module.exports = {
  enable: process.env.NODE_ENV === "production",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: [],
  },
  theme: {
    extend: {
      height: {
        "half-screen": "50vh",
      },
    },
  },
  plugins: [],
};
