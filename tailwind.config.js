/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00616C",
        lineColor: "#E2E8F0"
      },
      boxShadow: {
        teal: "0 10px 15px -3px rgba(0, 128, 128, 0.5), 0 4px 6px -2px rgba(0, 128, 128, 0.3)",
        "custom-teal": "0px 4px 15px rgba(5, 193, 156, 0.7)"
      }
    }
  },
  plugins: []
};
