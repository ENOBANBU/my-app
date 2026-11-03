/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        // chunky "pixel" drop shadow
        pixel: '6px 6px 0 0 #000',
        'pixel-sm': '4px 4px 0 0 #000',
      },
    },
  },
  plugins: [],
}

