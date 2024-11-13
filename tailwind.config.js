// tailwind.config.js
module.exports = {
  content: [
    './src/css/**/*.{html,css}',
    // './src/js/**/*.{html,js}',
    './src/html/**/*.{html,js}',
    './src/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  plugins: [
    // require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}