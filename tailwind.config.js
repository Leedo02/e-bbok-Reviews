/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "Pre-light": ["Pretendard-Light"],
        "Pre-regular": ["Pretendard-Regular"],
        "Pre-medium": ["Pretendard-Medium"],
        "Pre-semibold": ["Pretendard-SemiBold"],
        "Pre-bold": ["Pretendard-Bold"],
      },
      colors: {
        light: {
          white: "#ffffff",
          gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },
          black: "#000000",
        },
        dark: {
          white: "#e5e7eb",
          gray: {
            50: "#18181b",
            100: "#27272a",
            200: "#3f3f46",
            300: "#52525b",
            400: "#71717a",
            500: "#a1a1aa",
            600: "#d4d4d8",
            700: "#e4e4e7",
            800: "#f4f4f5",
            900: "#fafafa",
          },
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};
