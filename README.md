# Frontier Tesla

A single-page marketing website for a fictional Tesla rental and subscription service in San Francisco. It shows what a polished, dark and cinematic landing page for a car rental business can look like, with smooth scroll animations.

## What it does

The page walks a visitor through the whole rental pitch:

- Hero section with the main offer and calls to action
- How it works, in a few simple steps
- Vehicle showcase for the 2025 Tesla Model 3
- Pricing: $65 per day on weekdays, $85 per day on weekends, $500 refundable deposit, 2 day minimum
- Customer reviews
- Pickup location
- FAQ and footer with contact links

It is a static front end only. There is no booking, payment, login or backend, and the buttons link to sections on the same page.

## Tech stack

- Next.js 16 (App Router, static export) and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion for animations

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000/frontier-tesla (the site uses the base path `/frontier-tesla`, set in `next.config.ts`).

## Build a static demo

```bash
npm run build
```

This writes plain static files to `out/` (a prebuilt copy is also committed in `out/`). No API keys or environment variables are needed. To preview the result, serve the parent folder of `out` so the base path matches, for example:

```bash
mkdir -p preview && rm -rf preview/frontier-tesla && cp -r out preview/frontier-tesla
npx serve preview
```

Then open http://localhost:3000/frontier-tesla/.

To host it at the root of a domain instead, remove the `basePath` line in `next.config.ts` before building.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the site and publishes `out/` to GitHub Pages on every push to `main`. The live URL is normally https://maxawad.github.io/frontier-tesla/ once Pages is enabled for the repository.

## Status

Working demo of a front-end design. The business, prices, reviews and contact details are sample content, not a real service. Frontier Tesla is not affiliated with Tesla, Inc.
