export interface PropertyOption {
    sizeSqM: number;
    priceNaira: number;
    typology?: string;
}

export interface EstateListing {
    id: string;
    slug: string;
    name: string;
    tagline?: string;
    district: string;
    city: string;
    titleDocument: string;
    status: "Pre-Sales" | "Selling" | "Sold Out";
    startingPrice: number;
    options: PropertyOption[];
    amenities: string[];
    image: string;
    gallery?: string[];
    description: string;
    infrastructureProgress: number;
    coordinates?: string;
    category?: "typology" | "estate";
}

export const contactDetails = {
    company: "Prestige Homes & Properties Ltd",
    phone: "+234 809 696 0065",
    whatsapp: "2348096960065",
    address: "FF6A, 4th Floor, Ocean Centre, Plot 1018, Cadastral Zone B18, Off Oladipo Diya Road, Apo, Gudu, Abuja",
    email: "info@prestigehomeslimited.com",
    tagline: "...crafting quality, Delivering value",
    openingHours: "Mon - Sat: 8:00 AM - 6:00 PM",
};

export const featuredEstates: EstateListing[] = [
    // 1. The Embassy 150 SqM 3-Bed Terrace Duplex — ₦6,000,000
    {
        id: "embassy-150sqm-3bed-terrace",
        slug: "embassy-150sqm-3bed-terrace",
        name: "The Embassy 150 SqM 3-Bed Terrace Duplex",
        tagline: "Modern Solar-Equipped Smart Terrace",
        district: "Wasa District Corridor",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Pre-Sales",
        startingPrice: 6000000,
        image: "/images/properties/embassy-150sqm-terrace-aerial.jpg",
        gallery: [
            "/images/properties/embassy-150sqm-terrace-aerial.jpg",
            "/images/properties/embassy-150sqm-terrace-overhead.jpg",
            "/images/properties/embassy-150sqm-terrace-front.jpg",
            "/images/theembassy.jpg",
        ],
        description:
            "Modern 3-bedroom terrace duplex plot within The Embassy, Wasa District, Abuja. Engineered with contemporary architectural lines, dedicated rooftop solar integration, covered parking forecourts, and landscaped walkways. Offers exceptional capital growth and verifiable FCDA Certificate of Occupancy documentation.",
        infrastructureProgress: 60,
        category: "typology",
        options: [
            {
                sizeSqM: 150,
                priceNaira: 6000000,
                typology: "3-Bed Terrace Duplex Plot",
            },
        ],
        amenities: [
            "3 Ensuite Bedrooms & Private Balcony",
            "Rooftop Solar Array Pre-Installation",
            "Dedicated Covered Carport Forecourt",
            "FCDA C of O Guaranteed Title Documentation",
            "Gated Community Security & CCTV",
            "Paved Internal Boulevards & Drainage",
        ],
    },

    // 2. Peace Crest Estate (Sherretti, Kabusa–Abuja) — ₦7,000,000
    {
        id: "peace-crest-estate",
        slug: "peace-crest-estate",
        name: "Peace Crest Estate",
        tagline: "Planned Development & Prime Land Banking",
        district: "Sherretti, Kabusa–Abuja",
        city: "Abuja",
        titleDocument: "FCDA Approved",
        status: "Selling",
        startingPrice: 7000000,
        image: "/images/properties/peace-crest-estate.jpg",
        description:
            "Peace Crest Estate is located in Sherretti, Kabusa–Abuja, offering different plot options to suit diverse property goals. Positioned strategically around key landmarks and essential amenities including Apo–Pyakasa, Kabusa Junction, Sunnyvale, Suncity, and the Africa Medical Centre of Excellence (AMCE). Whether your goal is to build your home, secure land for future development, or expand your property portfolio, Peace Crest Estate delivers verified FCDA Approved titles in an accessible, rapidly developing Abuja hub.",
        infrastructureProgress: 75,
        category: "estate",
        options: [
            {
                sizeSqM: 150,
                priceNaira: 7000000,
                typology: "150 SQM Residential Plot",
            },
            {
                sizeSqM: 250,
                priceNaira: 12000000,
                typology: "250 SQM Residential Plot",
            },
            {
                sizeSqM: 500,
                priceNaira: 25000000,
                typology: "500 SQM Residential Plot",
            },
        ],
        amenities: [
            "FCDA Approved Layout & Verified Titles",
            "Near Africa Medical Centre of Excellence (AMCE)",
            "Adjacent to Sunnyvale & Suncity Estates",
            "Quick Access to Apo–Pyakasa & Kabusa Junction",
            "Gated Community with Secured Environment",
            "Dedicated Green Recreational Areas & School Site",
            "Stable Power Supply & Good Road Network",
            "Designated Supermarket & Healthcare Clinic Zone",
        ],
    },

    // 3. The Embassy Wasa (Master Development) — ₦7,500,000
    {
        id: "the-embassy-wasa",
        slug: "the-embassy-wasa",
        name: "The Embassy Wasa (Masterplan)",
        tagline: "Pre-Sales High-Yield Opportunity",
        district: "Wasa District Corridor",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Pre-Sales",
        startingPrice: 7500000,
        image: "/images/properties/the-embassy-wasa-masterplan.jpg",
        gallery: [
            "/images/properties/the-embassy-wasa-masterplan.jpg",
            "/images/properties/the-embassy-wasa-aerial.jpg",
            "/images/theembassy.jpg",
        ],
        description:
            "The Embassy in Wasa District is designed as an exclusive smart estate community nestled along the expanding Wasa-Apo expressway. Designed for high capital appreciation and institutional land banking, offering multi-family terrace duplexes, detached duplexes, and apartment block land subdivisions.",
        infrastructureProgress: 60,
        category: "estate",
        options: [
            { sizeSqM: 150, priceNaira: 7500000, typology: "3 Bedroom Terrace Duplex" },
            { sizeSqM: 250, priceNaira: 12500000, typology: "4 Bedroom Semi-Detached Duplex" },
            { sizeSqM: 350, priceNaira: 17500000, typology: "4 Bedroom Fully Detached Duplex" },
            { sizeSqM: 450, priceNaira: 22500000, typology: "5 Bedroom Fully Detached Duplex + BQ" },
            { sizeSqM: 1000, priceNaira: 50000000, typology: "Block of Flats / Multi-Unit Sub-Division" },
        ],
        amenities: [
            "Smart Home Automation Infrastructure",
            "Gated Community Gatehouse & Access Control",
            "24/7 Secured Environment & Surveillance",
            "Paved Internal Road Network & Drainage",
            "Dedicated Power Supply & Underground Utilities",
            "Green Recreational Parks & Play Zones",
            "Integrated Primary & Nursery School Site",
            "Dedicated Commercial Mall & Supermarket Zone",
            "On-site Healthcare Clinic Reserve",
        ],
    },

    // 4. Solar City 170 SqM Terrace 1 — ₦9,000,000
    {
        id: "solarcity-170sqm-terrace-1",
        slug: "solarcity-170sqm-terrace-1",
        name: "Solar City 170 SqM Terrace 1",
        tagline: "Smart Terrace Residential Duplex",
        district: "Burum West District, Apo",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Selling",
        startingPrice: 9000000,
        image: "/images/properties/solar-city-170sqm-terrace-front.jpg",
        gallery: [
            "/images/properties/solar-city-170sqm-terrace-front.jpg",
            "/images/properties/solar-city-170sqm-terrace-perspective.jpg",
            "/images/properties/solar-city-170sqm-terrace-night.jpg",
            "/images/properties/solar-city-170sqm-terrace-aerial.jpg",
        ],
        description:
            "Smart 3-bedroom terrace duplex plot (Terrace 1) offering an accessible entry point into institutional land ownership in Apo, Abuja. Delivers guaranteed FCDA C of O documentation, solar electricity, and high capital growth along the Burum West corridor.",
        infrastructureProgress: 85,
        category: "typology",
        options: [
            {
                sizeSqM: 170,
                priceNaira: 9000000,
                typology: "3-Bed Terrace Duplex (Terrace 1)",
            },
        ],
        amenities: [
            "3 Ensuite Bedrooms & Modern Living Area",
            "Private Front Porch & Car Port",
            "FCDA C of O Verified Title",
            "Solar Grid & Street Lighting",
            "Security Gatehouse & Patrols",
            "Central Drainage & Reticulation",
        ],
    },

    // 5. The Embassy 250 SqM 4-Bed Semi-Detached Duplex — ₦10,000,000
    {
        id: "embassy-250sqm-4bed-semi-detached",
        slug: "embassy-250sqm-4bed-semi-detached",
        name: "The Embassy 250 SqM 4-Bed Semi-Detached Duplex",
        tagline: "Contemporary Semi-Detached Executive Villa",
        district: "Wasa District Corridor",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Pre-Sales",
        startingPrice: 10000000,
        image: "/images/properties/embassy-250sqm-semi-detached-front.jpg",
        gallery: [
            "/images/properties/embassy-250sqm-semi-detached-front.jpg",
            "/images/theembassy.jpg",
        ],
        description:
            "Executive 4-bedroom semi-detached duplex plot situated in The Embassy, Wasa District. Features striking geometric architecture, dual covered carports, expansive glass apertures, private garden compound, and verified FCDA C of O land title documentation.",
        infrastructureProgress: 60,
        category: "typology",
        options: [
            {
                sizeSqM: 250,
                priceNaira: 10000000,
                typology: "4-Bed Semi-Detached Duplex Plot",
            },
        ],
        amenities: [
            "4 Ensuite Bedrooms & Upper Floor Terrace",
            "Double Covered Vehicle Carport",
            "Private Compound Grounds & Green Lawn",
            "FCDA C of O Guaranteed Ownership",
            "Smart Estate Power & Infrastructure",
            "24/7 Gatehouse Access Control",
        ],
    },

    // 4. 250 SqM Semi-Detached Duplex — ₦13,400,000
    {
        id: "250sqm-semi-detached-duplex",
        slug: "250sqm-semi-detached-duplex",
        name: "250 SqM Semi-Detached Duplex",
        tagline: "Modern Semi-Detached Residential Design",
        district: "Burum West District, Apo",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Selling",
        startingPrice: 13400000,
        image: "/images/properties/solar-city-250sqm-semi-detached-front.jpg",
        gallery: [
            "/images/properties/solar-city-250sqm-semi-detached-front.jpg",
            "/images/properties/solar-city-250sqm-semi-detached-side.jpg",
            "/images/properties/solar-city-250sqm-semi-detached-street.jpg",
            "/images/properties/solar-city-250sqm-semi-detached-night.jpg",
        ],
        description:
            "Sleek 4-bedroom semi-detached duplex design engineered for urban elegance and optimal land utilization in Burum West District, Apo. An exceptional high-yield asset for buy-to-let investors and private homeowners alike.",
        infrastructureProgress: 85,
        category: "typology",
        options: [
            {
                sizeSqM: 250,
                priceNaira: 13400000,
                typology: "4-Bed Semi-Detached Duplex",
            },
        ],
        amenities: [
            "4 Ensuite Bedrooms & Contemporary Kitchen",
            "Private Compound with Front & Side Access",
            "FCDA C of O Land Ownership Guarantee",
            "Solar Powered Internal Streetlights",
            "Perimeter Wall Security & Gatehouse",
            "Paved Asphalt Road Network",
        ],
    },

    // 5. 350 SqM 4-Bed Fully Detached Duplex — ₦19,000,000
    {
        id: "350sqm-4bed-fully-detached",
        slug: "350sqm-4bed-fully-detached",
        name: "350 SqM 4-Bed Fully Detached Duplex",
        tagline: "Contemporary Detached Family Home",
        district: "Burum West District, Apo",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Selling",
        startingPrice: 19000000,
        image: "/images/properties/solar-city-350sqm-fully-detached-front.jpg",
        gallery: [
            "/images/properties/solar-city-350sqm-fully-detached-front.jpg",
            "/images/properties/solar-city-350sqm-fully-detached-entrance.jpg",
            "/images/properties/solar-city-350sqm-fully-detached-side.jpg",
            "/images/properties/solar-city-350sqm-fully-detached-approach.jpg",
            "/images/properties/solar-city-350sqm-fully-detached-street.jpg",
        ],
        description:
            "Contemporary 4-bedroom detached villa plot combining modern architectural aesthetics with functional urban luxury. Offers comfortable perimeter privacy, parking for 4 cars, and instant allocation within the master-planned Solar City Apo development.",
        infrastructureProgress: 85,
        category: "typology",
        options: [
            {
                sizeSqM: 350,
                priceNaira: 19000000,
                typology: "4-Bed Fully Detached Duplex",
            },
        ],
        amenities: [
            "4 Ensuite Bedrooms & Guest Powder Room",
            "Dedicated 4-Car Parking Courtyard",
            "FCDA C of O Verified Documentation",
            "Immediate Site Allocation & Demarcation",
            "Solar Streetlights & Central Drainage",
            "Paved Asphalt Estate Access",
        ],
    },

    // 6. 450 SqM 5-Bed Fully Detached Duplex — ₦24,000,000
    {
        id: "450sqm-5bed-fully-detached",
        slug: "450sqm-5bed-fully-detached",
        name: "450 SqM 5-Bed Fully Detached Duplex",
        tagline: "Executive Detached Villa with Boys Quarters",
        district: "Burum West District, Apo",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Selling",
        startingPrice: 24000000,
        image: "/images/properties/solar-city-450sqm-fully-detached-front.jpg",
        gallery: [
            "/images/properties/solar-city-450sqm-fully-detached-front.jpg",
            "/images/properties/solar-city-450sqm-fully-detached-street.jpg",
            "/images/properties/solar-city-450sqm-fully-detached-pool.jpg",
            "/images/properties/solar-city-450sqm-fully-detached-carport.jpg",
            "/images/properties/solar-city-450sqm-fully-detached-side.jpg",
        ],
        description:
            "Executive 5-bedroom detached duplex plot tailored for family living and long-term prestige. Positioned along prime internal boulevards of Solar City Apo with immediate layout demarcation, verified FCDA title, and seamless connection to the Apo-Gudu transit corridor.",
        infrastructureProgress: 85,
        category: "typology",
        options: [
            {
                sizeSqM: 450,
                priceNaira: 24000000,
                typology: "5-Bed Fully Detached Duplex + BQ",
            },
        ],
        amenities: [
            "5 Ensuite Bedrooms with Private Balconies",
            "Integrated Maid's Room / Domestic Quarters (BQ)",
            "Spacious Family Lounge & Formal Dining Area",
            "FCDA Certificate of Occupancy Guarantee",
            "Solar Streetlights & Clean Water Reticulation",
            "Asphalt Paved Access Roads & Drainage",
        ],
    },

    // 7. 600 SqM 6-Bed Fully Detached Duplex — ₦31,800,000
    {
        id: "600sqm-6bed-fully-detached-duplex",
        slug: "600sqm-6bed-fully-detached-duplex",
        name: "600 SqM 6-Bed Fully Detached Duplex",
        tagline: "Ultra-Luxury Mansion Plot with Penthouse & BQ",
        district: "Burum West District, Apo",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Selling",
        startingPrice: 31800000,
        image: "/images/properties/solar-city-600sqm-fully-detached-front.jpg",
        gallery: [
            "/images/properties/solar-city-600sqm-fully-detached-front.jpg",
            "/images/properties/solar-city-600sqm-fully-detached-perspective.jpg",
            "/images/properties/solar-city-600sqm-fully-detached-aerial.jpg",
            "/images/properties/solar-city-600sqm-fully-detached-entrance.jpg",
            "/images/properties/solar-city-600sqm-fully-detached-street.jpg",
        ],
        description:
            "Ultra-luxury 6-bedroom fully detached duplex plot featuring an expansive 600 SqM footprint inside Solar City Apo. Designed for high-net-worth homeowners seeking privacy, generous grounds for swimming pool and landscaped gardens, penthouse lounge, and attached domestic quarters (BQ).",
        infrastructureProgress: 85,
        category: "typology",
        options: [
            {
                sizeSqM: 600,
                priceNaira: 31800000,
                typology: "6-Bed Fully Detached Duplex + BQ",
            },
        ],
        amenities: [
            "6 Ensuite Bedrooms + Penthouse Terrace",
            "Attached Domestic Staff Quarters (BQ)",
            "Generous Parking for up to 6 Vehicles",
            "FCDA C of O Guaranteed Title Documentation",
            "Solar Streetlights & Underground Electrical Cabling",
            "24/7 Security Patrol & CCTV Surveillance",
        ],
    },

    // 8. 1000 SqM 12-Unit Block of Flats — ₦54,000,000
    {
        id: "1000sqm-12unit-blocks-of-flat",
        slug: "1000sqm-12unit-blocks-of-flat",
        name: "1000 SqM 12-Unit Block of Flats",
        tagline: "High-Density Multi-Family Investment Sub-Division",
        district: "Burum West District, Apo",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Selling",
        startingPrice: 54000000,
        image: "/images/properties/solar-city-1000sqm-block-flats-street.jpg",
        gallery: [
            "/images/properties/solar-city-1000sqm-block-flats-street.jpg",
            "/images/properties/solar-city-1000sqm-block-flats-entrance.jpg",
            "/images/properties/solar-city-1000sqm-block-flats-front.jpg",
            "/images/properties/solar-city-1000sqm-block-flats-aerial.jpg",
            "/images/properties/solar-city-1000sqm-block-flats-solar-carport.jpg",
        ],
        description:
            "High-density multi-family residential plot in Solar City Apo, custom-designed for a modern 12-unit block of flats. Outstanding rental yield and institutional capital appreciation within Burum West District, with verified FCDA Certificate of Occupancy documentation, central solar utilities, and wide paved internal road network.",
        infrastructureProgress: 85,
        category: "typology",
        options: [
            {
                sizeSqM: 1000,
                priceNaira: 54000000,
                typology: "12-Unit Block of Flats Plot",
            },
        ],
        amenities: [
            "Approved Architectural Design for 12 Units",
            "FCDA Verified C of O Title Documents",
            "Immediate Physical Plot Allocation & Demarcation",
            "Independent Solar Streetlights & Power Grid",
            "Perimeter Wall & 24/7 Gated Security",
            "Central Water Treatment & Drainage System",
        ],
    },
];

export function getEstateBySlug(slug: string): EstateListing | undefined {
    return featuredEstates.find((e) => e.slug === slug || e.id === slug);
}

// Exactly 6 curated home page previews ordered cheapest to highest across Wasa, Sherretti/Kabusa, and Apo corridors
export const homeFeaturedEstates: EstateListing[] = [
    // 1. Wasa District Corridor (The Embassy Smart Terrace) — ₦6M
    featuredEstates.find((e) => e.id === "embassy-150sqm-3bed-terrace")!,
    // 2. Sherretti, Kabusa–Abuja (Flagship Estate) — ₦7M
    featuredEstates.find((e) => e.id === "peace-crest-estate")!,
    // 3. Burum West District, Apo (Accessible Smart Terrace) — ₦9M
    featuredEstates.find((e) => e.id === "solarcity-170sqm-terrace-1")!,
    // 4. Wasa District Corridor (The Embassy Semi-Detached Duplex) — ₦10M
    featuredEstates.find((e) => e.id === "embassy-250sqm-4bed-semi-detached")!,
    // 5. Burum West District, Apo (Luxury Mansion Typology) — ₦31.8M
    featuredEstates.find((e) => e.id === "600sqm-6bed-fully-detached-duplex")!,
    // 6. Burum West District, Apo (High-Density Multi-Family Typology) — ₦54M
    featuredEstates.find((e) => e.id === "1000sqm-12unit-blocks-of-flat")!,
].filter(Boolean);