import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
        '8xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          green: '#00C112',
          blue: '#00364C',
        },
        'light-blue': '#005FC6',
      },
      fontFamily: {
        sans: ['Encode Sans Semi Expanded', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
}

export default config
