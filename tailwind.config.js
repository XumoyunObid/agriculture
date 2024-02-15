/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#274C5B",
        secondary: "#7EB693",
        funkyYellow: "#EFD372",
        discoBall: "#D4D4D4",
        doctor: "#F9F8F8",
        heavySugar: "#EFF6F1",
        cityRain: "#525C60",
      },
      backgroundImage: {
        'aboutbg': "url('./src/assets/Home/aboutBg.png')",
        'homebg': "url('./src/assets/Home/bannerBg.png')",
        'shopbg': "url('./src/assets/Home/shopBg.png')",
        'singleshopbg': "url('./src/assets/Home/singleshopBg.jpg')",
        'offer1': "url('./src/assets/Home/offer1.png')",
        'offer2': "url('./src/assets/Home/offer2.png')"
      }
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
  },
  plugins: [],
};