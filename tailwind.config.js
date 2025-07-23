/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
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