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
│   ├── Navigation.tsx    # Main navigation
│   ├── Footer.tsx        # Site footer
│   ├── CreatorCard.tsx   # Roster grid card
│   ├── TikTokEmbed.tsx   # Live TikTok embed with fallback
│   ├── SocialMediaEmbed.tsx  # Link-out card / embed fallback
│   └── icons.tsx         # Inline SVG icon set (Lucide + Simple Icons)
├── data/
│   └── creators.ts       # Single source of truth for the roster
└── types/
    └── creator.ts        # Creator/CreatorVideo interfaces
```

## Contact

For questions about this website, contact Forge Talent Agency at mitch@forgetalentagency.com.
