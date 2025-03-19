/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         fadeInDown: {
//           '0%': { opacity: '0', transform: 'translateY(-20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         fadeInUpScale: {
//           '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
//           '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
//         },
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//       },
//       animation: {
//         nav: 'fadeInDown 0.5s ease-out forwards',
//         bgElement: 'fadeIn 0.5s ease-out forwards',
//         badge: 'fadeInUp 0.5s ease-out forwards',
//         heading: 'fadeInUpScale 1s ease-out forwards',
//         paragraph: 'fadeInUp 0.5s ease-out forwards',
//         buttons: 'fadeInUp 0.5s ease-out forwards',
//         chainsHeading: 'fadeInUp 0.5s ease-out forwards',
//         chain: 'fadeInUp 0.5s ease-out forwards',
//       },
//     },
//   },
// };
