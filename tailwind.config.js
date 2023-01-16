/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    colors : {
      'yellow' : {
        '500' : '#eab308'
      },
      'slate' : {
        '400' : '#94a3b8'
      },
      'gray' : {
        '200' : '#e5e7eb',
        '700' : '#374151',
        '900' : '#111827'
      }
    }
  },
  plugins: [],
}
