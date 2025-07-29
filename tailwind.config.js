/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: "#1A1A1D",
                    primary: "#3B1C32",
                    secondary: "#6A1E55",
                    accent: "#A64D79",
                    muted: "#3C3D37"
                },
                light: {
                    bg: "#EEEFE0",
                    primary: "#819A91",
                    secondary: "#A7C1A8",
                    accent: "#D1D8BE",
                    soft: "#E7EFC7"
                }
            },
            animation: {
                fadeOut: 'fadeOut 1s ease-in-out forwards',
            },
            keyframes: {
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
        },
    },
    plugins: [],
};