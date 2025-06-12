/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hacker': {
          'black': '#0a0a0a',
          'dark': '#1a1a1a',
          'gray': '#2a2a2a',
          'green': '#39ff14',
          'cyan': '#00ffff',
          'purple': '#b388ff',
          'red': '#ff073a',
          'yellow': '#ffff00',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite',
        'glitch': 'glitch 0.3s infinite',
        'typewriter': 'typewriter 4s steps(40) 1s infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'cursor-blink': 'cursor-blink 1s infinite',
        'scanner': 'scanner 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          '50%': { textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'scanner': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};