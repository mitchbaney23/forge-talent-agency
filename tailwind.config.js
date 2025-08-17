/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forge-orange': '#D35400',
        'forge-orange-dark': '#B84300',
        'forge-orange-light': '#E67E22',
        'forge-charcoal': '#1E1E1E',
        'text-gray': '#333333',
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'heading-tight': '-0.5px',
        'button': '0.5px',
      },
      lineHeight: {
        'heading': '1.1',
        'body': '1.5',
      },
    },
  },
  plugins: [],
}