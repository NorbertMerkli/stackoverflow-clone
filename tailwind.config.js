/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F48024",
                secondary: "#0095FF",
                grey: "#6A737C",
                disabled: "#BCBBBB",
                light: "#F8F9F9",
                dark: "#242729",
                yellow: "#FFB500",
            },
            fontFamily: {
                logo: ["PT Sans", "sans-serif"],
                heading: ["Roboto Slab", "serif"],
                paragraph: ["Source Sans Pro", "sans-serif"],
            },
        },
    },
    plugins: [],
};
