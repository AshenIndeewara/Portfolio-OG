/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05071a',
          900: '#0a0e1a',
          800: '#0d1226',
          700: '#111830',
        },
        cyan: {
          400: '#22d3ee',
          DEFAULT: '#00d2ff',
        },
        blue: {
          accent: '#3a7bd5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top left, #1a2a4a 0%, #0a0e1a 60%)',
        'accent-gradient': 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
