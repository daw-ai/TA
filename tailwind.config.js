/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "blue-600": "#2563EB",
        "blue-700": "#1D4ED8",
        "gray-900": "#111827",
        "gray-800": "#1F2937",
        "gray-600": "#4B5563",
        "gray-300": "#D1D5DB",
        "gray-200": "#E5E7EB",
        "gray-100": "#F3F4F6",
        "green-500": "#22C55E",
        "purple-600": "#9333EA",
        "teal-400": "#2DD4BF",
      },
    },
  },
  plugins: [],
};

