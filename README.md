# Forge Talent Agency Website

The marketing site for Forge Talent Agency — a boutique agency representing creators with real expertise and genuine audiences.

## Features

- **Multi-creator roster**: All creator content is driven by a single data file — add an entry and every page, the sitemap, and the homepage featured card update automatically
- **Real TikTok embeds**: Live video embeds with a designed fallback card when embeds can't load
- **Responsive design**: Optimized for all devices and screen sizes
- **SEO ready**: Per-creator metadata, JSON-LD, sitemap, and robots.txt

## Tech Stack

- **Framework**: Next.js 15 with App Router (React 19)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Email**: Nodemailer (contact form, requires `EMAIL_USER`/`EMAIL_PASS` in `.env.local`)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding a Creator

Edit `src/data/creators.ts`:

1. Add a new entry to the `creators` array (use the commented template in the file).
2. Set `signed: true` when the creator has signed — only signed creators appear on the site.
3. Set `featured: true` on the one creator to spotlight on the homepage.
4. Drop their avatar in `public/assets/images/` and reference it in the entry.

Their roster card, profile page (`/creators/<slug>`), and sitemap entry are generated automatically.

## Project Structure

```
src/
├── app/
│   ├── about/            # About page
│   ├── creators/         # Roster grid + [slug] profile pages
│   ├── contact/          # Contact form (posts to /api/contact)
│   ├── api/contact/      # Nodemailer email handler
│   ├── sitemap.ts        # Generated from creator data
│   └── robots.ts
├── components/
│   ├── Navigation.tsx    # Main navigation (with live local time)
│   ├── Footer.tsx        # Site footer with giant wordmark
│   ├── IndustryGrid.tsx  # Bento tile grid of industries + creators
│   ├── TikTokEmbed.tsx   # Live TikTok embed with fallback
│   ├── SocialMediaEmbed.tsx  # Link-out card / embed fallback
│   ├── Reveal.tsx        # Scroll-reveal wrapper (IntersectionObserver)
│   ├── CountUp.tsx       # Animated stat counter
│   ├── Marquee.tsx       # Industries ticker (with pause control)
│   └── icons.tsx         # Inline SVG icon set (Lucide + Simple Icons)
├── data/
│   ├── creators.ts       # Single source of truth for the roster
│   └── industries.ts     # Industry tiles (chip colors, open seats)
└── types/
    └── creator.ts        # Creator/CreatorVideo interfaces
```

## Design System

Warm paper/espresso palette with a flame-orange accent (tokens in
`tailwind.config.js`), Bricolage Grotesque display type + Instrument Sans body +
Instrument Serif italic accents + JetBrains Mono metadata (loaded via
`next/font`), film-grain texture, and CSS-only motion (scroll reveals, marquee,
count-up stats) — all gated behind `prefers-reduced-motion` and an `html.js`
no-JS guard.

## Contact

For questions about this website, contact Forge Talent Agency at mitch@forgetalentagency.com.
