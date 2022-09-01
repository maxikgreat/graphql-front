/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        bastille: 'var(--bastille)',
        grey: 'var(--grey)',
        'baltic-sea': 'var(--baltic-sea)',
        'error': 'var(--error)',
        secondary: 'var(--secondary)',
        'hollywood-cerise': 'var(--hollywood-cerise)',
        'dim-secondary': 'var(--dim-secondary)',
        'dim-white': 'var(--dim-white)',
        'dim-blue': 'var(--dim-blue)'
      },
      fontFamily: {
        sans: 'SF',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
