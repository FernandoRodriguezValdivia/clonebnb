/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      black: '#1F1F1F',
      green: '#299868',
      white: '#FEFEFF',
      red: '#FF3636',
      gray: '#AAAAAA',
      opacity: '#EDEDED'
    },
    fontFamily: {
      sans: ['IBM Plex Sans Hebrew', 'sans-serif']
    },
    borderRadius: {
      '1xs': '.5rem',
      '2lg': '1.5rem'
    },
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(248px, 1fr))'
      }
    }
  },
  plugins: []
};
