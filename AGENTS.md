AGENTS.md — Prestige Homes & Properties Ltd

1. Executive Context & Brand Identity

Company: Prestige Homes & Properties Ltd

Brand Tagline: "...crafting quality, Delivering value"

Headquarters / Market: Federal Capital Territory (FCT), Abuja, Nigeria.

Key Coverage Districts: Maitama, Guzape, Asokoro, Katampe Extension, Jabi, Wuye, Idu Industrial/Residential, Karsana, Kyami, Lugbe, and the Airport Road growth corridor.

Target Audience: High-Net-Worth Individuals (HNWIs), diaspora investors seeking verified land banking, and commercial buyers requiring verifiable, authentic land titles.

Core Conversion Goal: Frictionless property discovery driving qualified WhatsApp consultations, direct phone inquiries, and scheduled on-site inspections.

2. Design System & Semantic Tokens

Strictly apply these semantic tokens across all UI output. Never write arbitrary hex values directly inside component JSX.

Color Tokens

brand.forest.DEFAULT: #0D5C28 (Primary brand emerald green from corporate identity)

brand.forest.dark: #073B18 (Primary hover states, deep headers, high-emphasis text)

brand.forest.light: #E8F4EC (Pill backgrounds, badge fills, active tint states)

brand.gold.DEFAULT: #9E6A1B (Accent brand gold, verification shields, secondary CTAs)

brand.gold.dark: #7C5212 (Gold hover states, dark badge outlines)

brand.gold.light: #F9F3EA (Subtle gold backgrounds, installment callout fills)

surface.canvas: #F8FAF9 (Main page canvas; clean off-white preventing stark glare)

surface.card: #FFFFFF (Card surfaces, modals, popovers)

surface.border: #E2E8F0 (Default 1px container and card separation borders)

text.primary: #0F172A (Primary headings, prices, key metrics)

text.secondary: #334155 (Body descriptions, specs, subtitle copy)

text.muted: #64748B (Secondary labels, form hints, micro-copy)

Typography Hierarchy

Display / Headings: Modern, high-contrast serif or sharp geometric sans (Playfair Display, Plus Jakarta Sans, or Cinzel). Enforce tracking-tight font-bold text-text-primary.

Interface / Body: High-legibility sans-serif (Plus Jakarta Sans or Inter). Maintain comfortable line heights (leading-relaxed).

Brand Tagline: Displayed with refined italic styling (font-serif italic text-brand-gold).

3. Responsive Breakpoint & Device Matrix

Every component must be explicitly designed for mobile, tablet, and desktop viewports.

A. Mobile Viewport (< 640px / Default)

Layout: Strict single-column stack (flex-col, grid-cols-1).

Container Padding: Tight gutters (px-4 py-8).

Headlines: Clamped typography scale (text-2xl to text-3xl).

Property Cards: Full-width cards with full-bleed media and 2x2 specification grids.

Conversion UX: Mandatory sticky bottom bar rendering instant Call and WhatsApp buttons (fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-surface-border p-3).

Navigation: Collapsible slide-over drawer with 48px touch targets.

B. Tablet Viewport (sm: 640px to md: 768px – lg: 1023px)

Layout: Two-column responsive grid (grid-cols-1 sm:grid-cols-2).

Container Padding: Moderate spacing (px-6 py-12).

Headlines: Scaled display typography (text-3xl md:text-4xl).

Category Chips: Horizontally scrollable container with momentum scroll and hidden scrollbars (flex overflow-x-auto no-scrollbar gap-2).

Search Bar: 2x2 modular filter card rather than a single horizontal strip.

C. Desktop Viewport (lg: 1024px and above)

Layout: Three-column property grid (lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto).

Container Padding: Generous spacing (px-8 py-20).

Headlines: Display scale (text-4xl lg:text-5xl font-extrabold tracking-tight).

Search Bar: Unified horizontal pill bar with segmented filter dropdowns (Location, Type, Budget) and embedded search button.

4. Abuja Real Estate Domain Standards

Currency & Financial Formatting:

Always display prices in Nigerian Naira using the standard symbol (₦) or ISO code (NGN) with proper comma separators (e.g., ₦45,000,000 or ₦1.5B).

For installment terms, state the initial deposit and duration explicitly: "From ₦5,000,000 deposit • Up to 24 months plan".

Standard Measurement Units:

Always use SqM (Square Metres) or Hectares. Never use Sq Ft or Acres unless explicitly requested.

Title Transparency & Verification:

Every listing must display its legal status using verified trust tags (e.g., Certificate of Occupancy (C of O), Right of Occupancy (R of O), Governor's Consent, FCDA Approved Layout).

Lead Routing:

Direct WhatsApp actions must include dynamic URL-encoded pre-filled messages:

https://wa.me/234XXXXXXXXXX?text=Hello%20Prestige%20Homes,%20I%20am%20interested%20in%20[Property-Title]%20in%20[District].

5. Frontend Engineering & Quality Guards

Framework: Next.js App Router (TypeScript) + Tailwind CSS + Lucide React.

No Monolithic Files: Pages (page.tsx) must strictly orchestrate modular sub-components located in @/components/sections/, @/components/properties/, and @/components/ui/.

Core Web Vitals & Image Optimization:

All property images must use next/image with enforced explicit aspect ratios (aspect-[16/10] or aspect-[4/3]) to prevent Cumulative Layout Shift (CLS).

Include polished skeleton loading states and robust onError image fallbacks displaying a branded placeholder container.

Accessibility & Touch Safeguards:

Interactive targets must measure at least min-h-[44px] and min-w-[44px] on touch devices.

Zero hover-gated critical data: Pricing, title status, and plot size must be statically visible on touchscreens without requiring mouse hover (group-hover).

Full keyboard focusability required: focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none.

Type Strictness: All property entities, filter states, and inquiry payloads must be typed via interfaces in @/types/real-estate.ts. No any types permitted.

6. Site Route Architecture

/: High-converting Hero with multi-device filter, Proof & Metrics Ribbon, Featured Estates, Infrastructure Highlights, Allocation Gallery, Testimonials, Direct Lead Capture.

/properties: Comprehensive filterable catalog with responsive district tabs, sort controls, and multi-device grid.

/properties/[slug]: Property photo gallery with lightbox, specification breakdown, title documentation shield, interactive installment calculator, and direct inspection booking drawer.

/about: (Corporate profile, vision, leadership, and FCDA compliance standards — placeholder for upcoming content).

/contact: Abuja head office details, interactive map, operational hours, direct phone links, and inspection booking form.