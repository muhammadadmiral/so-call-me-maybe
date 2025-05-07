/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom colors
      colors: {
        'annoying-yellow': '#ffff00',
        'annoying-pink': '#ff69b4',
        'annoying-green': '#39ff14',
        'error-red': '#ff3131',
        'virus-red': '#ff0000',
        'warning-orange': '#ff8c00',
        'popup-blue': '#0099ff',
      },
      // Custom animations
      animation: {
        'blink-fast': 'blink 0.5s linear infinite',
        'blink-slow': 'blink 1.5s ease-in-out infinite',
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-reverse': 'spin 3s linear infinite reverse',
        'bounce-small': 'bounce-small 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'marquee': 'marquee 10s linear infinite',
        'rotate-color': 'rotate-color 3s linear infinite',
        'vibrate': 'vibrate 0.1s linear infinite',
        'flip-x': 'flip-x 2s ease-in-out infinite',
        'jello': 'jello 2s infinite',
        'slide-in-out': 'slide-in-out 5s ease-in-out infinite',
        'flash-colors': 'flash-colors 4s linear infinite',
      },
      // Custom keyframes
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'bounce-small': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'rotate-color': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        vibrate: {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-1px, -1px)' },
          '20%': { transform: 'translate(1px, 1px)' },
          '30%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(1px, -1px)' },
          '50%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, 1px)' },
          '70%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '90%': { transform: 'translate(-1px, -1px)' },
        },
        'flip-x': {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
        jello: {
          '0%, 100%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
        },
        'slide-in-out': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'flash-colors': {
          '0%': { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
          '25%': { backgroundColor: 'rgba(0, 255, 0, 0.2)' },
          '50%': { backgroundColor: 'rgba(0, 0, 255, 0.2)' },
          '75%': { backgroundColor: 'rgba(255, 255, 0, 0.2)' },
          '100%': { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
        },
      },
      // Custom filters for visual effects
      filter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(16px)',
      },
      // Text shadows for annoying text effects
      textShadow: {
        'glow': '0 0 5px currentColor',
        'hard': '2px 2px 0 #000',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de',
        'multiple': '3px 3px 0 #ff00de, -3px -3px 0 #00ffde',
      },
      // Box shadows
      boxShadow: {
        'popup': '0 0 15px 5px rgba(0, 0, 0, 0.3)',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de',
        'inner-harsh': 'inset 0 0 10px 5px rgba(0, 0, 0, 0.5)',
        '3d': '5px 5px 0 rgba(0, 0, 0, 0.5)',
      },
      // Backgrounds
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        'glitch-pattern': 'repeating-linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
      // Scale values for hover effects
      scale: {
        '102': '1.02',
        '98': '0.98',
      },
      // Border styles
      borderWidth: {
        '6': '6px',
        '10': '10px',
      },
      // Cursor styles
      cursor: {
        'not-allowed': 'not-allowed',
        'grab': 'grab',
        'grabbing': 'grabbing',
      },
      // Z-index for layering
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Custom text shadow plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 5px currentColor',
        },
        '.text-shadow-hard': {
          textShadow: '2px 2px 0 #000',
        },
        '.text-shadow-neon': {
          textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de',
        },
        '.text-shadow-multiple': {
          textShadow: '3px 3px 0 #ff00de, -3px -3px 0 #00ffde',
        },
      }
      addUtilities(newUtilities)
    }),
    // Custom scrollbar plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
        '.scrollbar-colored': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#ff69b4 #f1f1f1',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ff69b4',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#ff1493',
          },
        },
      }
      addUtilities(newUtilities)
    }),
    // CSS Transforms plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rotate-x-45': {
          transform: 'rotateX(45deg)',
        },
        '.rotate-y-45': {
          transform: 'rotateY(45deg)',
        },
        '.skew-10': {
          transform: 'skew(10deg, 10deg)',
        },
        '.perspective-500': {
          perspective: '500px',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }),
    // Text truncation plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.truncate-2-lines': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.truncate-3-lines': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }),
    // Blur behind filters for glass effects
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-xs': {
          'backdrop-filter': 'blur(2px)',
        },
        '.backdrop-blur-sm': {
          'backdrop-filter': 'blur(4px)',
        },
        '.backdrop-blur-md': {
          'backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(16px)',
        },
      }
      addUtilities(newUtilities)
    }),
    // Add custom form elements plugin
    require('@tailwindcss/forms'),
    // Add custom aspect ratios
    require('@tailwindcss/aspect-ratio'),
    // Add typography plugin
    require('@tailwindcss/typography'),
  ],
}