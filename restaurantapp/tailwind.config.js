/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      "2xsm":"10px",
      "xsm":"12px",
      "sm":"14px",
      "reg":"16px",
      "lg":"18px",
      "2xl":"22px",
      "3xl":"26px",
      "4xl":"30px",
      "5xl":"36px",
      "6xl":"42px",
      "7xl":"508px",
    }

  },
  plugins: [],
}