# DESIGN.md — Prestige Homes & Properties Ltd Design System

## 1. Visual Archetype & Brand Identity
- **Archetype**: Institutional, high-trust commercial real estate. Balances high-conversion real estate mechanics (metrics, clear land titles, flexible installment plans) with an elevated, premium architectural aesthetic.
- **Brand Colors**:
  - `brand-forest`: `#0D5C28` (Primary brand emerald green – main CTAs, active badges, header highlights)
  - `brand-forest-dark`: `#073818` (Dark green for high-contrast text and solid banners)
  - `brand-gold`: `#9E6A1B` (Warm gold – trust badges, verification pills, accent borders)
  - `brand-gold-dark`: `#8A5814` (Hover/pressed state for gold accents)
  - `surface-bg`: `#F8FAF9` (Subtle off-white background with a faint cool/clean tint; avoids raw `#FFFFFF` glare)
  - `surface-card`: `#FFFFFF` (Listing cards and elevated containers)
  - `border-subtle`: `#E5E7EB` (Clean 1px borders)
  - `text-primary`: `#0F172A` (Deep slate for high-contrast readability)
  - `text-secondary`: `#475569` (Muted gray for body copy, specs, and details)
  - `text-muted`: `#94A3B8` (Tertiary labels and micro-copy)
- **Typography Scale**:
  - Headings: `Plus Jakarta Sans` or `Inter`, font weight `font-bold` / `font-extrabold`, `tracking-tight`.
  - Body: `Inter` or system sans-serif, `font-normal` or `font-medium`, line-height `leading-relaxed`.
  - Taglines / Quotes: Light italicized display treatments matching brand identity.

---

## 2. Responsive Viewport & Breakpoint Matrix

### Mobile Viewport (`< 640px` / Default)
- **Layout**: Single-column stack (`flex-col`, `grid-cols-1`).
- **Container Spacing**: `px-4 py-8` with vertical rhythm spacing of `space-y-6`.
- **Typography**: 
  - Hero Title: Clamped to `text-2xl sm:text-3xl font-extrabold`.
  - Section Headings: `text-xl sm:text-2xl font-bold`.
- **Property Cards**: Full width; specs arranged in a 2x2 compact grid.
- **Navigation & Search**: Collapsible drawer menu; multi-step vertical stacked search modal.
- **Conversion Anchors**: Fixed, sticky bottom conversion bar (`h-14 bg-white/95 backdrop-blur border-t border-gray-200`) containing instant WhatsApp Inquiry and Direct Call actions.

### Tablet Viewport (`sm: 640px` to `lg: 1023px`)
- **Layout**: Two-column responsive grid (`grid-cols-1 sm:grid-cols-2`).
- **Container Spacing**: `px-6 py-12`.
- **Typography**:
  - Hero Title: `text-3xl md:text-4xl font-extrabold`.
  - Section Headings: `text-2xl md:text-3xl font-bold`.
- **District Chips**: Horizontally scrollable flex strip with hidden scrollbar (`overflow-x-auto no-scrollbar whitespace-nowrap`).
- **Property Cards**: Side-by-side display with full listing specs visible without hover.

### Desktop Viewport (`lg: 1024px+`)
- **Layout**: Three-column property grid (`lg:grid-cols-3 xl:grid-cols-3`). Max-width constrained: `max-w-7xl mx-auto px-8 py-20`.
- **Typography**:
  - Hero Title: `text-5xl lg:text-6xl font-extrabold tracking-tight`.
  - Section Headings: `text-3xl lg:text-4xl font-bold`.
- **Search System**: Horizontal segmented search filter bar anchored inside the hero section fold.
- **Micro-Interactions**: Smooth elevation lifts on hover (`hover:-translate-y-1 hover:shadow-lg transition-all duration-200`).

---

## 3. Core Component Blueprints

### A. Proof & Trust Ribbon (Directly Below Hero)
- **Structure**: 4-column metric grid (`grid-cols-2 md:grid-cols-4 gap-4`).
- **Metrics to Display**:
  - Handed-Over / Allocated Units (e.g., `1,500+ Allocated`)
  - Title Transparency (e.g., `100% Verified Titles`)
  - Active Abuja Locations (e.g., `12+ Prime Districts`)
  - Structured Payment Plans (e.g., `Up to 24 Months`)
- **Visual Style**: Clean numeric display (`text-2xl lg:text-3xl font-bold text-brand-forest`) over muted labels (`text-xs font-semibold tracking-wider text-text-secondary uppercase`).

### B. High-Converting Property Listing Card
Each card must display complete property metadata directly on the card face:
1. **Media Container**:
   - Aspect ratio: `aspect-[16/10]` or `aspect-[4/3]`.
   - Top-Left Badge: Property Status (`Off-Plan`, `Ready to Build`, `Completed`).
   - Top-Right Badge: Legal Title (`C of O`, `R of O`, `FCDA Approved Layout`).
2. **Geographic & Title Block**:
   - Property / Estate Title (`text-lg font-bold text-text-primary line-clamp-1`).
   - Location Row with Map Pin: District, City (e.g., `Guzape II, Abuja`).
3. **Property Specifications Matrix**:
   - Plot/Floor Size (`e.g., 500 SqM`).
   - Units/Typology (`Land`, `4-Bed Semi-Detached Duplex`, etc.).
   - Key Estate Feature (`Paved Access`, `Central Infrastructure`, `24/7 Power`).
4. **Pricing & Installment Terms**:
   - Outright Purchase Price: Prominent, high-contrast formatting (`text-xl font-black text-brand-forest`).
   - Installment Highlight: Clear duration terms (e.g., `"Deposit from ₦3,000,000 • Spread over 24 months"`).
5. **Action Buttons**:
   - Primary: View Estate Details.
   - Secondary Conversion: Direct WhatsApp / Book Site Inspection.

### C. District Filter Chips
- Render interactive pills for quick area filtering:
  - `All`, `Maitama`, `Guzape`, `Katampe`, `Jabi`, `Wuye`, `Airport Road Corridor`, `Lugbe`, `Kuje`.
- Active State: `bg-brand-forest text-white shadow-sm`.
- Inactive State: `bg-white text-text-secondary border border-border-subtle hover:border-brand-forest/50`.

---

## 4. Usability, Accessibility & Performance Standards
- **Touch Accessibility**: Every button, chip, and card link must meet a minimum touch target size of `min-h-[44px]` and `min-w-[44px]` across mobile and tablet screens.
- **Image Performance**: Use Next.js `next/image` with predefined aspect ratios and skeleton loading placeholders to eliminate Cumulative Layout Shift (CLS).
- **Format Integrity**:
  - Currency: Always formatted in Nigerian Naira (`₦`) with standard grouping (e.g., `₦75,000,000`).
  - Land Measurement: Always use `SqM` (Square Metres) or `Hectares`, never `Sq Ft`.
- **Keyboard Navigation**: Ensure distinct, high-contrast `:focus-visible` outline rings on all interactive elements.