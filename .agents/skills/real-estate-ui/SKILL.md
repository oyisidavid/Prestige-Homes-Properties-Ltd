---
name: real-estate-ui
description: >-
  Design, build, refine, and audit high-converting, institutional-grade real estate web components
  and layouts for Prestige Homes & Properties Ltd (Abuja, Nigeria). Use this skill whenever creating or
  modifying property listing cards, hero search bars, district filter chips, trust ribbons, inspection forms,
  or enforcing brand visual identity and accessibility standards.
---

# Prestige Homes & Properties — Real Estate UI Design Skill

## Overview
This skill provides comprehensive guidelines, visual design tokens, responsive layout rules, component blueprints, and quality verification checklists for creating high-converting, institutional-grade real estate user interfaces for **Prestige Homes & Properties Ltd** in Federal Capital Territory (FCT), Abuja, Nigeria.

---

## 1. Visual Archetype & Semantic Design Tokens

### Brand Identity & Archetype
- **Visual Archetype**: High-trust commercial & residential real estate. Elevated architectural aesthetic paired with conversion-driven mechanics (verified title badges, direct land metrics, flexible payment breakdowns).
- **Brand Tagline**: *"...crafting quality, Delivering value"*

### Design System Tokens
Always use predefined Tailwind class names or CSS variables. Never write arbitrary hex codes directly inside component JSX/TSX.

| Token Group | Class / Token Name | Hex Code | Recommended Usage |
| :--- | :--- | :--- | :--- |
| **Forest Primary** | `bg-brand-forest`, `text-brand-forest` | `#0D5C28` | Primary CTAs, active badge fills, key metric highlights |
| **Forest Dark** | `bg-brand-forest-dark`, `text-brand-forest-dark` | `#073818` | Dark header banners, high-contrast hover states |
| **Forest Light** | `bg-brand-forest/10`, `bg-emerald-50` | `#E8F4EC` | Pill backgrounds, active badge tints |
| **Gold Accent** | `bg-brand-gold`, `text-brand-gold` | `#9E6A1B` | Trust shields, verification pills, secondary accents |
| **Gold Dark** | `bg-brand-gold-dark`, `text-brand-gold-dark` | `#8A5814` | Gold hover states, badge outlines |
| **Canvas Background**| `bg-surface-bg` | `#F8FAF9` | Off-white page canvas (prevents stark white glare) |
| **Card Surface** | `bg-surface-card` | `#FFFFFF` | Listing cards, modal dialogs, flyout drawers |
| **Subtle Border** | `border-gray-200`, `border-border-subtle` | `#E5E7EB` | 1px container and card separation borders |
| **Text Primary** | `text-text-primary`, `text-slate-900` | `#0F172A` | Headings, property titles, primary prices |
| **Text Secondary** | `text-text-secondary`, `text-slate-600` | `#475569` | Body descriptions, property specifications |
| **Text Muted** | `text-text-muted`, `text-slate-400` | `#94A3B8` | Micro-copy, tertiary labels, timestamps |

---

## 2. Responsive Viewport Matrix

Every real estate UI component MUST be explicitly implemented and verified across mobile, tablet, and desktop viewports:

### A. Mobile Viewport (`< 640px`)
- **Layout**: Strict single-column vertical stack (`flex-col`, `grid-cols-1`).
- **Container Gutters**: Tight padding (`px-4 py-8`, vertical spacing `space-y-6`).
- **Typography Scale**: Clamped font sizing (`text-2xl sm:text-3xl font-extrabold tracking-tight`).
- **Property Cards**: Full-width display with 2x2 specification grids.
- **Navigation & Search**: Collapsible drawer menu; slide-over stacked filter modal.
- **Conversion Anchors**: Mandatory fixed sticky conversion bar at screen bottom (`fixed bottom-0 inset-x-0 z-50 h-16 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2 flex items-center justify-between gap-2`).

### B. Tablet Viewport (`640px` – `1023px`)
- **Layout**: Two-column responsive grid (`grid-cols-1 sm:grid-cols-2`).
- **Container Gutters**: Moderate padding (`px-6 py-12`).
- **District Chips**: Horizontally scrollable filter strip with hidden scrollbars (`flex overflow-x-auto no-scrollbar gap-2`).
- **Search System**: 2x2 modular filter card.

### C. Desktop Viewport (`1024px+`)
- **Layout**: Three-column property grid (`lg:grid-cols-3 max-w-7xl mx-auto px-8 py-20`).
- **Typography Scale**: Display scale (`text-5xl lg:text-6xl font-extrabold tracking-tight`).
- **Search System**: Unified horizontal pill search bar with segmented filter dropdowns (District, Property Type, Budget).
- **Micro-Interactions**: Subtle elevation hover transitions (`hover:-translate-y-1 hover:shadow-xl transition-all duration-200`).

---

## 3. Abuja Real Estate Domain Standards

1. **Currency & Financial Formatting**:
   - Always display prices in Nigerian Naira (`₦` / `NGN`) formatted with standard grouping (e.g., `₦45,000,000` or `₦1.5B`).
   - For installment terms, state initial deposit and duration clearly: `"Deposit from ₦5,000,000 • Up to 24 months plan"`.
2. **Measurement Units**:
   - Always use **SqM** (Square Metres) or **Hectares**. Never use Sq Ft or Acres unless requested.
3. **Legal Title Transparency**:
   - Prominently display legal title verification tags on all estate/land cards:
     - `Certificate of Occupancy (C of O)`
     - `Right of Occupancy (R of O)`
     - `Governor's Consent`
     - `FCDA Approved Layout`
4. **Lead Routing & Conversion**:
   - Direct WhatsApp actions must use dynamically pre-filled URL-encoded messages:
     `https://wa.me/234XXXXXXXXXX?text=Hello%20Prestige%20Homes,%20I%20am%20interested%20in%20[Property-Title]%20in%20[District].`

---

## 4. Core Component Blueprints

### A. High-Converting Property Listing Card (`ListingCard.tsx`)
Each property card must present complete metadata on the card face without requiring mouse hover:
1. **Media Container**:
   - Aspect ratio: `aspect-[16/10]` or `aspect-[4/3]` using `next/image`.
   - Top-Left Badge: Property Status (`Off-Plan`, `Ready to Build`, `Completed`).
   - Top-Right Badge: Legal Title (`C of O`, `R of O`, `FCDA Approved Layout`).
2. **Location & Title Block**:
   - Property Title: `text-lg font-bold text-text-primary line-clamp-1`.
   - District Pin: Location row (e.g., `Guzape II, Abuja`).
3. **Specification Matrix (2x2)**:
   - Size (e.g., `500 SqM`).
   - Typology (e.g., `4-Bed Semi-Detached Duplex`).
   - Core Feature (e.g., `Paved Access Roads`, `Central Sewage`).
4. **Pricing & Installment Terms**:
   - Outright Purchase Price: Prominent display (`text-xl font-black text-brand-forest`).
   - Installment terms callout (e.g., `Deposit ₦3,000,000 • 24 Mos`).
5. **Action Controls**:
   - Primary: View Details link.
   - Secondary Conversion: Instant WhatsApp Inquiry / Site Inspection trigger.

### B. Proof & Trust Ribbon (`TrustRibbon.tsx`)
- Render directly below hero fold as a 4-column metric grid (`grid-cols-2 md:grid-cols-4 gap-4`).
- Metrics: `1,500+ Units Allocated`, `100% Verified Titles`, `12+ Prime Abuja Districts`, `Up to 24 Months Installment`.

### C. District Filter Chips (`DistrictFilter.tsx`)
- Interactive pills for Abuja growth corridors (`All`, `Maitama`, `Guzape`, `Katampe`, `Jabi`, `Wuye`, `Airport Road Corridor`, `Lugbe`, `Kuje`).
- Active state: `bg-brand-forest text-white shadow-sm`.
- Inactive state: `bg-white text-text-secondary border border-border-subtle hover:border-brand-forest/50`.

---

## 5. Accessibility, Touch & Code Quality Guards

- **Touch Target Safeguard**: Interactive elements (buttons, filter chips, links) must meet minimum `min-h-[44px]` and `min-w-[44px]` touch target dimensions.
- **Zero Hover-Gated Critical Data**: Pricing, plot size, title legal status, and district location MUST remain visible statically on mobile touchscreens.
- **CLS Prevention**: All listing images must use `next/image` with predefined aspect ratios and skeleton shimmer placeholders.
- **Focusability**: Full keyboard navigation support via `focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none`.
- **Strict Typing**: All property structures, filter parameters, and lead payloads must be strictly typed via TypeScript interfaces (no `any` types).

---

## 6. Execution & Verification Checklist

When building or updating real estate UI components with this skill:

1. [ ] **Design Tokens**: Verify components use `brand-forest`, `brand-gold`, `surface-bg`, and `text-primary` tokens.
2. [ ] **Currency & Units**: Ensure prices use `₦` symbol and plot measurements use `SqM`/`Hectares`.
3. [ ] **Legal Title Badges**: Confirm trust tags (`C of O`, `R of O`, `FCDA Approved Layout`) are visible.
4. [ ] **Mobile Conversion Bar**: Verify sticky bottom bar is present on screens `< 640px`.
5. [ ] **Touch Target Check**: Ensure touch interactive elements measure at least `44px x 44px`.
6. [ ] **WhatsApp URL Encoding**: Confirm dynamic pre-filled text in WhatsApp lead links.
