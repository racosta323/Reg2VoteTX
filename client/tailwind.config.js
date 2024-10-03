/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,tx,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms'],
}

