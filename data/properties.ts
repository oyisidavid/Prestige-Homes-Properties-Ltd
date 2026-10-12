export interface PropertyOption {
    sizeSqM: number;
    priceNaira: number;
    typology?: string;
    initialDepositNaira?: number;
    monthlyInstallmentNaira?: number;
    durationMonths?: number;
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
    // Peace Crest Estate (Sherretti, Kabusa–Abuja)
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
                initialDepositNaira: 1400000,
                monthlyInstallmentNaira: 466666,
                durationMonths: 12,
            },
            {
                sizeSqM: 250,
                priceNaira: 12000000,
                typology: "250 SQM Residential Plot",
                initialDepositNaira: 2400000,
                monthlyInstallmentNaira: 800000,
                durationMonths: 12,
            },
            {
                sizeSqM: 500,
                priceNaira: 25000000,
                typology: "500 SQM Residential Plot",
                initialDepositNaira: 5000000,
                monthlyInstallmentNaira: 1666666,
                durationMonths: 12,
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

    // 1. 1000sqm 12unit blocks of flat
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
        image: "/images/solar-city-apo.jpg",
        description:
            "High-density multi-family residential plot in Solar City Apo, custom-designed for a modern 12-unit block of flats. Outstanding rental yield and institutional capital appreciation within Burum West District, with verified FCDA Certificate of Occupancy documentation, central solar utilities, and wide paved internal road network.",
        infrastructureProgress: 85,
        category: "typology",
        options: [
            {
                sizeSqM: 1000,
                priceNaira: 54000000,
                typology: "12-Unit Block of Flats Plot",
                initialDepositNaira: 10800000,
                monthlyInstallmentNaira: 3600000,
                durationMonths: 12,
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

    // 2. 600sqm 6Bed fully detached duplex
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
                initialDepositNaira: 6360000,
                monthlyInstallmentNaira: 2120000,
                durationMonths: 12,
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

    // 3. 450sqm 5bed fully detached
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
                initialDepositNaira: 4800000,
                monthlyInstallmentNaira: 1600000,
                durationMonths: 12,
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

    // 4. 350sqm 4 bed fully detached
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
                initialDepositNaira: 3800000,
                monthlyInstallmentNaira: 1266666,
                durationMonths: 12,
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

    // 5. 250sqm semi detached duplex
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
                initialDepositNaira: 2680000,
                monthlyInstallmentNaira: 893333,
                durationMonths: 12,
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

    // 6. Solar City 170sqm terrace 1
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
                initialDepositNaira: 1800000,
                monthlyInstallmentNaira: 600000,
                durationMonths: 12,
            },
        ],
        amenities: [
            "3 Ensuite Bedrooms & Modern Living Area",
            "Private Front Porch & Car Port",
            "FCDA C of O Verified Title",
            "Solar Grid & Street Lighting",
            "Security Gatehouse & Patrols",
            "Flexible 12-Month Installment Terms",
        ],
    },

    // 7. Solar City Apo (Master Development)
    {
        id: "solar-city-apo",
        slug: "solar-city-apo",
        name: "Solar City Apo (Masterplan)",
        tagline: "Flagship Solar-Powered Residential Sub-Division",
        district: "Burum West District, Apo",
        city: "Abuja",
        titleDocument: "FCDA C of O",
        status: "Selling",
        startingPrice: 9000000,
        image: "/images/solar-city-apo.jpg",
        description:
            "Solar City Apo is a premier master-planned estate strategically situated in the rapid growth corridor of Burum West District, Apo, Abuja. Powered by decentralized solar infrastructure, wide paved internal roads, central drainage, and perimeter security fencing. Features immediate plot allocation with FCDA Certificate of Occupancy documentation.",
        infrastructureProgress: 85,
        category: "estate",
        options: [
            { sizeSqM: 170, priceNaira: 9000000, typology: "Terrace 1 Duplex Plot", initialDepositNaira: 1800000, monthlyInstallmentNaira: 600000, durationMonths: 12 },
            { sizeSqM: 250, priceNaira: 13400000, typology: "Semi-Detached Duplex Plot", initialDepositNaira: 2680000, monthlyInstallmentNaira: 893333, durationMonths: 12 },
            { sizeSqM: 350, priceNaira: 19000000, typology: "4 Bed Fully Detached Duplex Plot", initialDepositNaira: 3800000, monthlyInstallmentNaira: 1266666, durationMonths: 12 },
            { sizeSqM: 450, priceNaira: 24000000, typology: "5 Bed Fully Detached Duplex + BQ", initialDepositNaira: 4800000, monthlyInstallmentNaira: 1600000, durationMonths: 12 },
            { sizeSqM: 600, priceNaira: 31800000, typology: "6 Bed Fully Detached Mansion + BQ", initialDepositNaira: 6360000, monthlyInstallmentNaira: 2120000, durationMonths: 12 },
            { sizeSqM: 1000, priceNaira: 54000000, typology: "12-Unit Block of Flats Plot", initialDepositNaira: 10800000, monthlyInstallmentNaira: 3600000, durationMonths: 12 },
        ],
        amenities: [
            "Solar Streetlights & Power Grid",
            "Paved Access & Asphalt Roads",
            "Security Gatehouse & 24/7 Patrol",
            "Perimeter Wall & CCTV Surveillance",
            "Central Water Treatment Plant",
            "Underground Drainage System",
        ],
    },

    // 8. The Embassy Wasa (Master Development)
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
        image: "/images/the-embassy-wasa.jpg",
        description:
            "The Embassy in Wasa District is designed as an exclusive smart estate community nestled along the expanding Wasa-Apo expressway. Designed for high capital appreciation and institutional land banking, offering multi-family terrace duplexes, detached duplexes, and apartment block land subdivisions.",
        infrastructureProgress: 60,
        category: "estate",
        options: [
            { sizeSqM: 150, priceNaira: 7500000, typology: "3 Bedroom Terrace Duplex", initialDepositNaira: 1500000, monthlyInstallmentNaira: 500000, durationMonths: 12 },
            { sizeSqM: 250, priceNaira: 12500000, typology: "4 Bedroom Semi-Detached Duplex", initialDepositNaira: 2500000, monthlyInstallmentNaira: 833333, durationMonths: 12 },
            { sizeSqM: 350, priceNaira: 17500000, typology: "4 Bedroom Fully Detached Duplex", initialDepositNaira: 3500000, monthlyInstallmentNaira: 1166666, durationMonths: 12 },
            { sizeSqM: 450, priceNaira: 22500000, typology: "5 Bedroom Fully Detached Duplex + BQ", initialDepositNaira: 4500000, monthlyInstallmentNaira: 1500000, durationMonths: 12 },
            { sizeSqM: 1000, priceNaira: 50000000, typology: "Block of Flats / Multi-Unit Sub-Division", initialDepositNaira: 10000000, monthlyInstallmentNaira: 3333333, durationMonths: 12 },
        ],
        amenities: [
            "Smart Home Automation Infrastructure",
            "Green Recreational Parks & Children Play Zone",
            "Integrated Primary School & Nursery Site",
            "Dedicated Commercial Mall & Supermarket Zone",
            "Gated Community Gatehouse & Access Control",
            "Power Supply & Underground Utilities",
            "On-site Healthcare Clinic Reserve",
        ],
    },
];

export function getEstateBySlug(slug: string): EstateListing | undefined {
    return featuredEstates.find((e) => e.slug === slug || e.id === slug);
}

// Exactly 6 curated home page previews representing Sherretti/Kabusa, Apo, and Wasa corridors
export const homeFeaturedEstates: EstateListing[] = [
    // 1. Sherretti, Kabusa–Abuja (Flagship Estate)
    featuredEstates.find((e) => e.id === "peace-crest-estate")!,
    // 2. Burum West District, Apo (Flagship Masterplan)
    featuredEstates.find((e) => e.id === "solar-city-apo")!,
    // 3. Wasa District Corridor (Flagship Masterplan)
    featuredEstates.find((e) => e.id === "the-embassy-wasa")!,
    // 4. Burum West District, Apo (Luxury Mansion Typology)
    featuredEstates.find((e) => e.id === "600sqm-6bed-fully-detached-duplex")!,
    // 5. Burum West District, Apo (Accessible Smart Terrace Typology)
    featuredEstates.find((e) => e.id === "solarcity-170sqm-terrace-1")!,
    // 6. Burum West District, Apo (High-Density Multi-Family Typology)
    featuredEstates.find((e) => e.id === "1000sqm-12unit-blocks-of-flat")!,
].filter(Boolean);