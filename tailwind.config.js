/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');
module.exports = {
    darkMode: ['selector', '[class="app-dark"]'],
    content: ['./src/**/*.{html,ts,scss,css}', './index.html', './node_modules/primeng/**/*.{js,ts}'],
    plugins: [primeui],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        }
    },
    safelist: [
        'text-blue-600', 'bg-blue-600',
        'text-green-200', 'bg-green-200',
        'text-orange-500', 'bg-orange-500',
        // Adicione outras cores se usar mais

        'text-blue-100', 'bg-orange-100',
        'text-green-100', 'bg-green-100',
        'text-orange-100', 'bg-orange-100',
      ],
};
