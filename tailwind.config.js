/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      animation: {
        'spin-2s': 'spin 2s linear infinite',
        'spin-1.75s': 'spin 1.75s linear reverse infinite',
        'spin-1.5s': 'spin 1.5s linear infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
      },

      keyframes: {
        shake: {
          '0%': 'translate(0)',
          '10%': 'translate(-10px)',
          '20%': 'translate(10px)',
          '30%': 'translate(-10px)',
          '40%': 'translate(10px)',
          '50%': 'translate(-10px)',
          '60%': 'translate(10px)',
          '70%': 'translate(-10px)',
          '80%': 'translate(10px)',
          '90%': 'translate(-10px)',
          '100%': 'translate(0)',   

        },
      },
      
      transform: {
        'shake': 'translate-x(-5px) rotate(-2deg)',
      },
      stroke: {
        'thin': '3px black', // Adjust the width and color as needed
        'thick': '3px red', // You can add more variants
      },
    },
    fontFamily: {
      primary: 'Poppins'
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0'
      },
    },
    screens: {
      's': {'min': '50px', 'max': '639px'},
      // => @media (min-width: 640px and max-width: 767px)

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px)

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px)

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px)

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px)

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px)
    },
   
  },
  plugins: [
    
  ],
}