# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI TOOLBEE GUIDE - A comprehensive visual reference guide for camera techniques, lighting, styles, and visual effects used in AI image/video generation. Built with Next.js + React + Tailwind CSS, based on the tbplus design system.

## Development Commands

```bash
npm install    # First time only
npm run dev    # Development server on port 3000
npm run build  # Production build
npm run start  # Start production server
```

## Project Architecture

### Tech Stack
- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Clerk** (authentication - optional, works without valid keys)
- **Lucide React** (icons)
- **Paperlogy** (custom Korean font)

### File Structure
```
app/
├── layout.js              ← RootLayout (Clerk, Paperlogy font, CherryBlossom)
├── page.js                ← Landing page (Hero, Features, ServiceDetail, Reviews, Pricing)
├── globals.css            ← Global styles (Tailwind + animations)
├── fonts/                 ← Paperlogy font files (.woff)
├── data/
│   ├── cameraData.js      ← Original data (exported as ES module)
│   └── guideData.js       ← Category definitions + helper functions
├── guide/
│   ├── page.js            ← Guide list (card grid + category tabs)
│   └── [slug]/page.js     ← Content detail page
├── dashboard/page.js      ← User dashboard (Clerk auth required)
├── profile/page.js        ← Profile settings (Clerk auth required)
└── components/
    ├── Header.js           ← Floating pill navigation (scroll-responsive)
    ├── Hero.js             ← Full-screen hero with background image
    ├── Features.js         ← 3-card feature grid
    ├── ServiceDetail.js    ← Alternating image+text sections
    ├── Reviews.js          ← Horizontal review carousel
    ├── Pricing.js          ← 3-tier pricing cards
    ├── Footer.js           ← Company info footer
    ├── CherryBlossom.js    ← Canvas particle animation
    ├── ClerkWrapper.js     ← Optional Clerk provider wrapper
    ├── ContentCard.js      ← Guide card for grid view
    ├── ContentDetail.js    ← Full content viewer
    ├── ImageModal.js       ← Image lightbox modal
    └── VideoModal.js       ← Video player modal
```

### Data Organization
Data lives in `app/data/cameraData.js` (exported `cameraData` object). Categories are defined in `app/data/guideData.js`:

- **tutorial**: 7 tutorial blocks
- **expert**: 13 expert chapters (protected)
- **style**: 8 art styles (digital painting, anime, watercolor, etc.)
- **medium**: 11 media types (oil, pencil, photography, etc.)
- **camera**: 32 techniques (shots, angles, perspectives, compositions)
- **lighting**: 12 lighting setups (natural, studio, mood)
- **video**: 15 video techniques (movement, transitions, effects)
- **practice**: 7 practice assignments

### Adding New Content
1. Add data entry to `app/data/cameraData.js` with unique key
2. Add the key to the appropriate category in `app/data/guideData.js`
3. The guide page automatically renders based on data structure

### Design System (from tbplus)
- **Colors**: Orange→Red gradient (`from-orange-500 to-red-500`) accent
- **Cards**: `rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2`
- **Buttons**: `rounded-full` gradient buttons, hover `scale-105`
- **Header**: Floating pill nav (`rounded-full`, white on scroll)
- **Typography**: Paperlogy font, bold emphasis
- **Animations**: Cherry blossom particles, fadeIn, modalFadeIn

### Clerk Authentication
- Set valid keys in `.env.local` to enable auth
- App works without Clerk (graceful degradation via ClerkWrapper)
- Dashboard and Profile pages require authentication

## Important Notes
- Original vanilla HTML/CSS/JS files (`index.html`, `styles.css`, `app.js`, `data.js`) are preserved in root
- The `tool/` directory contains a separate React application for AI prompt generation
- Images are served from `public/images/`
