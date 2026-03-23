# AIToolPick — Affiliate AI Tool Review Website

A production-ready affiliate review website built with **Next.js 14** (App Router), **Tailwind CSS**, and **Framer Motion**. Designed for Vercel deployment.

## Features

| Feature | Description |
|---|---|
| **Dark Premium Design** | Background #0d1117, card #161b22, accent purple #7c3aed, Inter font |
| **Glowing Card Effect** | Mouse-following glow border on all review cards (adapted from 21st.dev/aceternity) |
| **3D Scroll Animation** | Hero section with ContainerScroll — mock dashboard tilts in 3D on scroll |
| **6 Sample Reviews** | Realistic AI tool reviews including Airies (with discount code AIRIES12AF) |
| **Comparison Table** | Filterable by category with star ratings and affiliate links |
| **Scroll Reveal** | Fade-up animations on all sections using IntersectionObserver |
| **Responsive** | Mobile-first design with collapsible navbar |
| **Affiliate Banner** | Fixed top disclosure banner, dismissible |
| **Newsletter Signup** | Email capture with success state |

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, 3D scroll animation, featured reviews, categories, trust section, email capture |
| `/reviews/[slug]` | Individual review — breadcrumbs, pros/cons, full review, sticky sidebar with rating breakdown |
| `/best-tools` | Comparison table — category filters, all tools with ratings and affiliate links |
| `/about` | About page — methodology, affiliate disclosure |

## Sample Tools

| Tool | Category | Rating | Discount Code |
|---|---|---|---|
| Airies | Productivity | 4.5 | AIRIES12AF |
| Writerly AI | Writing | 4.0 | — |
| PixelCraft | Images | 4.5 | — |
| SEOBot | SEO | 4.0 | — |
| ClipWise | Video | 4.5 | — |
| CodeWhisper | Coding | 4.0 | — |

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Deploy to Vercel

1. Push the project to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel will auto-detect Next.js and configure the build.
4. Click **Deploy**.

No environment variables are required for the base site.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | App Router, SSG, file-based routing |
| React 18 | UI components |
| TypeScript 5 | Type safety |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | ContainerScroll 3D animation |
| Lucide React | Icons |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout (navbar, banner, footer)
│   ├── globals.css           # Global styles + Tailwind
│   ├── about/page.tsx        # About page
│   ├── best-tools/page.tsx   # Comparison table
│   └── reviews/[slug]/
│       ├── page.tsx          # Review page (server component)
│       └── client.tsx        # Review page (client component)
├── components/
│   ├── ui/
│   │   ├── glowing-effect.tsx
│   │   ├── container-scroll-animation.tsx
│   │   ├── scroll-reveal.tsx
│   │   └── star-rating.tsx
│   ├── affiliate-banner.tsx
│   ├── email-capture.tsx
│   ├── footer.tsx
│   ├── mock-dashboard.tsx
│   ├── navbar.tsx
│   └── review-card.tsx
├── data/
│   └── tools.ts              # Sample AI tool data
└── lib/
    └── utils.ts              # cn() utility
```

## Customisation

To add a new tool review, add an entry to `src/data/tools.ts` following the `AITool` interface. The review page at `/reviews/[slug]` will be automatically generated.

## Licence

MIT
