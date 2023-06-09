/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-better': 'cubic-bezier(0.62, -0.01, 0.09, 0.96)',
        'out-better': 'cubic-bezier(1, 0.01, 0.26, 0.82)',
        smoother: 'cubic-bezier(.72,-0.01,.35,1)',
      },
      animation: {
        'slide-fade-down': 'slide-fade-down 500ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
