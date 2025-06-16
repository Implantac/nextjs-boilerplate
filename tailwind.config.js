/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a2234',
        secondary: '#2a3245',
        accent: '#ff9800',
        'accent-dark': '#e08800',
        'accent-light': 'rgba(255, 152, 0, 0.2)',
        success: '#4CAF50',
        warning: '#FFC107',
        danger: '#F44336',
        info: '#2196F3',
        violet: '#8B5CF6',
        blue: '#3B82F6',
        green: '#10B981',
        red: '#EF4444',
        yellow: '#F59E0B',
        pink: '#EC4899',
        indigo: '#6366F1',
        purple: '#8B5CF6',
        orange: '#F97316',
      },
    },
  },
  plugins: [],
}
