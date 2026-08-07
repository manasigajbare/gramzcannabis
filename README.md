# King of Budz — Cannabis Dispensary Website

A Next.js + Tailwind CSS clone inspired by [King of Budz](https://kingofbudz.com/), featuring a modern cannabis dispensary landing page.

## Features

- **Age verification gate** (21+ modal with localStorage persistence)
- **Responsive navigation** with mobile menu
- **Hero section** with call-to-action buttons
- **Store locations** — 7 Michigan + 1 New York dispensaries
- **Loyalty / rewards** app promotion section
- **Delivery section** with feature highlights
- **KOB TV** episode grid
- **Apparel** shop section
- **Product collections** explorer
- **FAQ accordion** with 10 common questions
- **Footer** with store links and legal pages

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme variables & animations
│   ├── layout.tsx       # Root layout & metadata
│   └── page.tsx         # Homepage
├── components/          # UI components
│   ├── AgeGate.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── StoreLocations.tsx
│   ├── DeliverySection.tsx
│   ├── FAQ.tsx
│   └── ...
└── data/                # Static content
    ├── stores.ts
    ├── faqs.ts
    └── collections.ts
```

## Customization

- **Colors**: Edit CSS variables in `src/app/globals.css` (`--kob-green`, `--kob-gold`, etc.)
- **Store data**: Update `src/data/stores.ts`
- **FAQs**: Update `src/data/faqs.ts`
- **Images**: Replace Unsplash URLs with your own assets

## Build

```bash
npm run build
npm start
```
