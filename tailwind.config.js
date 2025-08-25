/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,jsx}",
        "./src/pages/**/*.{js,jsx}",
        "./src/components/**/*.{js,jsx}",
        "./src/features/**/*.{js,jsx}",
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                'inter': ['"Inter"', 'sans-serif'],
                'sans': ['"Inter"', 'sans-serif'],
            },
        },
    }, 
    plugins: [],
}
