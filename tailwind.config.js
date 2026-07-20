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
        'forge-ink': '#1C1917',
        'forge-body': '#57534E',
        'forge-muted': '#78716C',
        'forge-mist': '#FAFAF9',
        'forge-line': '#E7E5E4',
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'heading-tight': '-0.02em',
      },
      lineHeight: {
        'heading': '1.1',
        'body': '1.5',
      },
    },
  },
  plugins: [],
}