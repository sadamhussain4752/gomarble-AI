import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#007bff',
        background: '#f8f9fa',
        text: '#000000',
        card: '#ffffff',
        secondary: '#6c757d',
        darkblue: '#0c3655',
        skyblue: '#1A8DE1',
        border: '#8d8e8e',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;