/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/.{page}",
        "./pages/**/*.{js,ts,jsx,tsx,*.page}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
