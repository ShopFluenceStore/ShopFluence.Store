/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        bg: 'var(--bg)',
        'bg-secondary': 'var(--bg-secondary)',
        text: 'var(--text)',
        'sub-text': 'var(--sub-text)',
        secondBG: 'var(--secondBG)',
        star: 'var(--star)',
        tag: 'var(--tag)',
        white: 'var(--white)',
        black: 'var(--black)',
        warn: 'var(--warn)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}
