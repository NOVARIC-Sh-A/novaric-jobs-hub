/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'novaric-red': '#8B2526',
                'novaric-blue': '#00AEEF',
                'novaric-dark-blue': '#19213E',
            },
        },
    },
    plugins: [],
}
