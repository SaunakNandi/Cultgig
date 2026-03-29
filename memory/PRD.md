# Indgig Landing Page - PRD

## Problem Statement
Build a stunning, fully responsive single landing page for a mobile app called "Indgig" — a platform connecting artists/freelancers with venues/businesses for gig discovery, booking, and management.

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion + Shadcn UI
- **Backend**: FastAPI (minimal, no active endpoints used)
- **Database**: MongoDB (not actively used — UI-only landing page)

## User Personas
- **Artists/Freelancers**: Musicians, photographers, comedians, creators looking for gigs
- **Venues/Businesses**: Restaurants, cafés, hotels, event organisers looking for talent

## Core Requirements
- Dark theme (#0A0A0A) with golden accent (#FFB902)
- Syne font for headings, Plus Jakarta Sans for body
- Sections: Navbar, Hero, How It Works, Features, Stats, Artist Showcase, Waitlist, Download CTA, Footer
- Scroll-triggered animations, glassmorphism cards, floating phone mockups
- Fully responsive (mobile-first)
- UI-only waitlist (no backend)

## What's Been Implemented (Dec 2025)
- Sticky navbar with blur-on-scroll + mobile hamburger menu
- Hero section with headline, dual CTAs, app store badges, phone mockup, artist avatar row
- How It Works — 3-step flow with golden connector line
- Features Grid — 6 glassmorphism bento cards with Lucide icons
- Stats Strip — Animated count-up counters (500+ Artists, 200+ Venues, 1,000+ Gigs)
- Artist Showcase — 6 artist cards with real faces, roles, gig counts
- Waitlist section — Role toggle (Talent/Business) + email form (UI-only)
- App Download CTA — Full-width banner with phone mockup
- Footer — Logo, links, social icons, copyright
- All sections fully responsive and dark-themed

## Prioritized Backlog
- P0: None (MVP complete)
- P1: Connect waitlist form to backend API for real email collection
- P1: Add real app store links when available
- P2: Add testimonials/reviews section with real user quotes
- P2: Add a blog/press section
- P3: SEO meta tags and Open Graph optimization
- P3: Performance optimization (lazy loading, image compression)
