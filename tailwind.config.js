/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F5EF',
        sand: '#EFEBE0',
        ink: '#0A1F18',
        forest: {
          50: '#edf7f2',
          100: '#d3ebe0',
          200: '#a7d7c1',
          300: '#73bd9d',
          400: '#44a079',
          500: '#1f8460',
          600: '#126a4c',
          700: '#0f5440',
          800: '#0d4333',
          900: '#0a3327',
        },
        gold: {
          300: '#eccb86',
          400: '#e0b45c',
          500: '#d19a3c',
          600: '#b47f2a',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,31,24,0.04), 0 12px 40px -12px rgba(10,31,24,0.12)',
        lift: '0 24px 60px -20px rgba(10,31,24,0.28)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progressBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        fadeup: 'fadeInUp 0.45s cubic-bezier(0.22,1,0.36,1)',
        progress: 'progressBar 6000ms linear forwards',
      },
    },
  },
  plugins: [],
}
