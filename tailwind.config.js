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
        // Warm two-color base + flame accent (contrast-verified roles)
        paper: '#FBF7F0',      // page background
        parchment: '#F7F1E8',  // alt sections / cards
        espresso: '#241610',   // ink + dark sections (16.4:1 on paper)
        cocoa: '#4A3B31',      // secondary text (10:1)
        taupe: '#6B5A4E',      // captions/meta (6.2:1 — smallest-text floor)
        flame: '#D35400',      // brand: display type >=24px, graphics only
        ember: '#B84A00',      // links, small accents, buttons (AA on paper)
        'ember-deep': '#A64200', // ember hover
        apricot: '#F5B78A',    // headline color on espresso (10:1)
        amber: '#E8965A',      // secondary accent on dark (7.5:1)
        // Industry chip pairs (pastel fill + same-hue dark text, AA+)
        clay: '#F6DFCB',
        'clay-ink': '#7A3E1D',
        sage: '#D9E8DC',
        'sage-ink': '#254436',
        ochre: '#F2E8C9',
        'ochre-ink': '#4A3A12',
        'teal-tint': '#D4E8ED',
        'teal-ink': '#173F4E',
        'plum-tint': '#F0DEE6',
        'plum-ink': '#4E2A3A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-accent)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3rem, 8.5vw, 7.25rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 2.6vw, 2.125rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        eyebrow: ['0.8125rem', { letterSpacing: '0.18em', lineHeight: '1.2' }],
      },
      lineHeight: {
        body: '1.55',
      },
      transitionTimingFunction: {
        // The only two easings on the site: 'out' for hovers, 'reveal' for entrances
        out: 'cubic-bezier(.33,1,.68,1)',
        reveal: 'cubic-bezier(.16,1,.3,1)',
      },
      keyframes: {
        drift: {
          to: { transform: 'translate3d(-6%, 4%, 0) scale(1.08)' },
        },
      },
      animation: {
        drift: 'drift 26s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
