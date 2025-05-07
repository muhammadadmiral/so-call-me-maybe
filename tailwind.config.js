/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Enhanced color palette with pink focus
      colors: {
        'annoying-yellow': '#ffff00',
        'annoying-pink': '#ff69b4',
        'vibrant-pink': '#ff1493', // Hot pink
        'neon-pink': '#ff00ff',    // Magenta
        'soft-pink': '#ffb6c1',    // Light pink
        'deep-pink': '#ff0080',    // Deep pink
        'pastel-pink': '#ffd1dc',  // Pastel pink
        'annoying-green': '#39ff14',
        'error-red': '#ff3131',
        'virus-red': '#ff0000',
        'warning-orange': '#ff8c00',
        'popup-blue': '#0099ff',
        'electric-purple': '#9b30ff',
        'toxic-green': '#00ff84',
        'cyber-yellow': '#ffd300',
        'blinding-cyan': '#00ffff',
      },
      // Enhanced animations
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
        'tilt-shake': 'tilt-shake 0.3s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'bounce-in': 'bounce-in 1s ease-out',
        'fade-in-out': 'fade-in-out 2s ease-in-out infinite',
        'rotate-scale': 'rotate-scale 2s ease-in-out infinite',
        'rainbow-text': 'rainbow-text 5s linear infinite',
        'electric-shake': 'electric-shake 0.2s ease-in-out infinite',
        'bounce-horizontal': 'bounce-horizontal 1s infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
      },
      // Enhanced keyframes
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
        'tilt-shake': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'heartbeat': {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'rotate-scale': {
          '0%': { transform: 'rotate(0) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'rainbow-text': {
          '0%': { color: '#ff0000' },
          '16.6%': { color: '#ff8000' },
          '33.3%': { color: '#ffff00' },
          '50%': { color: '#00ff00' },
          '66.6%': { color: '#0000ff' },
          '83.3%': { color: '#8000ff' },
          '100%': { color: '#ff0000' },
        },
        'electric-shake': {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
          '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
          '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
          '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
        },
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25px)' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#ff69b4' },
        },
      },
      // Custom filters for visual effects
      filter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(16px)',
        'saturate-200': 'saturate(2)',
        'hue-rotate-180': 'hue-rotate(180deg)',
        'brightness-150': 'brightness(1.5)',
        'contrast-200': 'contrast(2)',
      },
      // Enhanced text shadows
      textShadow: {
        'glow': '0 0 5px currentColor',
        'hard': '2px 2px 0 #000',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de',
        'multiple': '3px 3px 0 #ff00de, -3px -3px 0 #00ffde',
        'pink-glow': '0 0 4px #ff69b4, 0 0 8px #ff69b4',
        'retro': '2px 2px 0 #ff00de, 4px 4px 0 #00ffde',
        'multilayer': '0 0 3px #ff69b4, 0 0 6px #00ffde, 0 0 9px #ffff00',
        'rainbow': '1px 1px 0 #ff0000, 2px 2px 0 #ff7f00, 3px 3px 0 #ffff00, 4px 4px 0 #00ff00, 5px 5px 0 #0000ff, 6px 6px 0 #4b0082, 7px 7px 0 #9400d3',
      },
      // Enhanced box shadows
      boxShadow: {
        'popup': '0 0 15px 5px rgba(0, 0, 0, 0.3)',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de',
        'inner-harsh': 'inset 0 0 10px 5px rgba(0, 0, 0, 0.5)',
        '3d': '5px 5px 0 rgba(0, 0, 0, 0.5)',
        'pink-pulse': '0 0 0 10px rgba(255, 105, 180, 0.1), 0 0 0 20px rgba(255, 105, 180, 0.05)',
        'rainbow': '0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 165, 0, 0.5), 0 0 30px rgba(255, 255, 0, 0.5), 0 0 40px rgba(0, 128, 0, 0.5), 0 0 50px rgba(0, 0, 255, 0.5), 0 0 60px rgba(75, 0, 130, 0.5), 0 0 70px rgba(238, 130, 238, 0.5)',
        'inner-glow': 'inset 0 0 20px 5px rgba(255, 105, 180, 0.6)',
        'sharp-offset': '8px 8px 0 #ff69b4',
        'double-layer': '0 0 0 4px #ff69b4, 0 0 0 8px #00ffde',
      },
      // Enhanced backgrounds
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        'glitch-pattern': 'repeating-linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        'pink-gradient': 'linear-gradient(45deg, #ff69b4, #ff1493)',
        'wave-pattern': 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'50px\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,25 C150,100 150,-50 300,25 C450,100 450,-50 600,25\' stroke=\'%23ff69b4\' stroke-width=\'3\' fill=\'none\' stroke-dasharray=\'6,6\'/%3E%3C/svg%3E")',
        'diagonal-stripes': 'repeating-linear-gradient(45deg, #ff69b4, #ff69b4 10px, #ff1493 10px, #ff1493 20px)',
        'confetti': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff69b4\' fill-opacity=\'0.6\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        'pink-noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' fill=\'%23ff69b4\' opacity=\'0.1\'/%3E%3C/svg%3E")',
      },
      // Enhanced scale values for hover effects
      scale: {
        '102': '1.02',
        '98': '0.98',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '95': '0.95',
        '90': '0.9',
      },
      // Enhanced border styles
      borderWidth: {
        '6': '6px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
      },
      // Enhanced cursor styles
      cursor: {
        'not-allowed': 'not-allowed',
        'grab': 'grab',
        'grabbing': 'grabbing',
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
        'help': 'help',
        'crosshair': 'crosshair',
      },
      // Enhanced Z-index for layering
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '110': '110',
        '120': '120',
        '130': '130',
      },
      // Font family extensions
      fontFamily: {
        'primary': ['"Fredoka"', 'sans-serif'],
        'digital': ['"VT323"', 'monospace'],
        'round': ['"Nunito"', 'sans-serif'],
        'pixel': ['"DotGothic16"', 'monospace'],
        'bubble': ['"Sniglet"', 'sans-serif'],
        'marker': ['"Permanent Marker"', 'sans-serif'],
        'retro': ['"Bungee"', 'sans-serif'],
      },
      // Letter spacing
      letterSpacing: {
        'widest': '0.25em',
        'ultra-wide': '0.5em',
        'super-wide': '1em',
      },
      // Text decorations
      textDecorationThickness: {
        'auto': 'auto',
        'from-font': 'from-font',
        '0': '0px',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
      textUnderlineOffset: {
        'auto': 'auto',
        '0': '0px',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
      // Adding rotation utility
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '6': '6deg',
        '12': '12deg',
        '270': '270deg',
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
        '.text-shadow-pink-glow': {
          textShadow: '0 0 4px #ff69b4, 0 0 8px #ff69b4',
        },
        '.text-shadow-retro': {
          textShadow: '2px 2px 0 #ff00de, 4px 4px 0 #00ffde',
        },
        '.text-shadow-multilayer': {
          textShadow: '0 0 3px #ff69b4, 0 0 6px #00ffde, 0 0 9px #ffff00',
        },
        '.text-shadow-rainbow': {
          textShadow: '1px 1px 0 #ff0000, 2px 2px 0 #ff7f00, 3px 3px 0 #ffff00, 4px 4px 0 #00ff00, 5px 5px 0 #0000ff, 6px 6px 0 #4b0082, 7px 7px 0 #9400d3',
        },
      }
      addUtilities(newUtilities)
    }),
    // Enhanced scrollbar plugin
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
        '.scrollbar-fancy': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '12px',
            height: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'repeating-linear-gradient(45deg, #ff69b4, #ff69b4 10px, #ff1493 10px, #ff1493 20px)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ff69b4',
            border: '2px dashed #00ffde',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#ff1493',
            borderColor: '#00ffff',
          },
        },
        '.scrollbar-rainbow': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ff69b4',
            borderRadius: '5px',
            border: '1px solid white',
          },
        },
      }
      addUtilities(newUtilities)
    }),
    // CSS Transforms plugin (enhanced)
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
        '.rotate-x-180': {
          transform: 'rotateX(180deg)',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.rotate-z-45': {
          transform: 'rotate(45deg)',
        },
        '.scale-flip-x': {
          transform: 'scaleX(-1)',
        },
        '.scale-flip-y': {
          transform: 'scaleY(-1)',
        },
        '.skew-x-20': {
          transform: 'skewX(20deg)',
        },
        '.skew-y-20': {
          transform: 'skewY(20deg)',
        },
        '.translate-z-10': {
          transform: 'translateZ(10px)',
        },
        '.transform-3d': {
          transform: 'perspective(800px) rotateY(15deg) rotateX(10deg)',
        },
      }
      addUtilities(newUtilities)
    }),
    // Enhanced text truncation plugin
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
        '.truncate-4-lines': {
          display: '-webkit-box',
          '-webkit-line-clamp': '4',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.truncate-5-lines': {
          display: '-webkit-box',
          '-webkit-line-clamp': '5',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }),
    // Enhanced backdrop filters for glass effects
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
        '.backdrop-blur-xl': {
          'backdrop-filter': 'blur(24px)',
        },
        '.backdrop-saturate-150': {
          'backdrop-filter': 'saturate(1.5)',
        },
        '.backdrop-saturate-200': {
          'backdrop-filter': 'saturate(2)',
        },
        '.backdrop-contrast-150': {
          'backdrop-filter': 'contrast(1.5)',
        },
        '.backdrop-brightness-110': {
          'backdrop-filter': 'brightness(1.1)',
        },
        '.backdrop-sepia': {
          'backdrop-filter': 'sepia(0.5)',
        },
        '.backdrop-hue-rotate-90': {
          'backdrop-filter': 'hue-rotate(90deg)',
        },
        '.backdrop-glass': {
          'backdrop-filter': 'blur(8px) saturate(1.2)',
        },
        '.backdrop-frost': {
          'backdrop-filter': 'blur(12px) brightness(1.1) saturate(1.5)',
        },
      }
      addUtilities(newUtilities)
    }),
    // Custom gradients plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.gradient-pink-purple': {
          background: 'linear-gradient(45deg, #ff69b4, #9400d3)',
        },
        '.gradient-pink-cyan': {
          background: 'linear-gradient(45deg, #ff69b4, #00ffff)',
        },
        '.gradient-pink-orange': {
          background: 'linear-gradient(45deg, #ff69b4, #ff8c00)',
        },
        '.gradient-pink-yellow': {
          background: 'linear-gradient(45deg, #ff69b4, #ffff00)',
        },
        '.gradient-rainbow-vertical': {
          background: 'linear-gradient(to bottom, red, orange, yellow, green, blue, indigo, violet)',
        },
        '.gradient-pastel': {
          background: 'linear-gradient(45deg, #ffafbd, #ffc3a0)',
        },
        '.gradient-neon': {
          background: 'linear-gradient(45deg, #ff00de, #00ffde)',
        },
        '.gradient-radial-pink': {
          background: 'radial-gradient(circle, #ff69b4, #ff1493)',
        },
        '.gradient-conic-rainbow': {
          background: 'conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)',
        },
      }
      addUtilities(newUtilities)
    }),
    // Text decoration styles plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-decoration-wavy': {
          textDecorationStyle: 'wavy',
        },
        '.text-decoration-double': {
          textDecorationStyle: 'double',
        },
        '.text-decoration-dotted': {
          textDecorationStyle: 'dotted',
        },
        '.text-decoration-dashed': {
          textDecorationStyle: 'dashed',
        },
        '.text-decoration-pink': {
          textDecorationColor: '#ff69b4',
        },
        '.text-decoration-thick': {
          textDecorationThickness: '3px',
        },
        '.text-decoration-offset-4': {
          textUnderlineOffset: '4px',
        },
      }
      addUtilities(newUtilities)
    }),
    // Glitch text effect plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.glitch-text': {
          position: 'relative',
          '&::before, &::after': {
            content: 'attr(data-text)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          },
          '&::before': {
            left: '2px',
            textShadow: '-2px 0 #ff00de',
            animation: 'glitch-anim-1 2s infinite linear alternate-reverse',
          },
          '&::after': {
            left: '-2px',
            textShadow: '2px 0 #00ffde',
            animation: 'glitch-anim-2 3s infinite linear alternate-reverse',
          },
          '@keyframes glitch-anim-1': {
            '0%, 100%': { clipPath: 'inset(0 0 98% 0)' },
            '20%': { clipPath: 'inset(15% 0 40% 0)' },
            '40%': { clipPath: 'inset(75% 0 14% 0)' },
            '60%': { clipPath: 'inset(20% 0 61% 0)' },
            '80%': { clipPath: 'inset(42% 0 38% 0)' },
          },
          '@keyframes glitch-anim-2': {
            '0%, 100%': { clipPath: 'inset(0 0 78% 0)' },
            '25%': { clipPath: 'inset(42% 0 33% 0)' },
            '50%': { clipPath: 'inset(12% 0 69% 0)' },
            '75%': { clipPath: 'inset(55% 0 5% 0)' },
          },
        },
      }
      addUtilities(newUtilities)
    }),
    // Typing animation plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.typing-animation': {
          overflow: 'hidden',
          borderRight: '3px solid #ff69b4',
          whiteSpace: 'nowrap',
          margin: '0 auto',
          animation: 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
          '@keyframes typing': {
            'from': { width: '0' },
            'to': { width: '100%' },
          },
          '@keyframes blink-caret': {
            'from, to': { borderColor: 'transparent' },
            '50%': { borderColor: '#ff69b4' },
          },
        },
      }
      addUtilities(newUtilities)
    }),
    // Custom blend modes plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.blend-multiply': {
          'mix-blend-mode': 'multiply',
        },
        '.blend-screen': {
          'mix-blend-mode': 'screen',
        },
        '.blend-overlay': {
          'mix-blend-mode': 'overlay',
        },
        '.blend-darken': {
          'mix-blend-mode': 'darken',
        },
        '.blend-lighten': {
          'mix-blend-mode': 'lighten',
        },
        '.blend-color-dodge': {
          'mix-blend-mode': 'color-dodge',
        },
        '.blend-color-burn': {
          'mix-blend-mode': 'color-burn',
        },
        '.blend-difference': {
          'mix-blend-mode': 'difference',
        },
        '.blend-exclusion': {
          'mix-blend-mode': 'exclusion',
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
    // Add container queries plugin
    require('@tailwindcss/container-queries'),
  ],
}