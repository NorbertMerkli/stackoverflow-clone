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
                primary: "#F48224",
                secondary: "#0095FF",
                yellow: "#FFB502",
                dark: "#242729",
                grey: "#BBC0C4",
                light: "#F5F5F5",
            },
            fontFamily: {
                logo: ["PT Sans", "sans-serif"],
                heading: ["Roboto Slab", "serif"],
                paragraph: ["Source Sans Pro", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
