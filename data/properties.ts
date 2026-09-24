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
    description: string;
    infrastructureProgress: number;
    coordinates?: string;
}

export const contactDetails = {
    company: "Prestige Homes & Properties Ltd",
    phone: "+234 809 696 0065",
    whatsapp: "2348096960065",
    address: "4th floor, Ocean Centre, Plot 1018, Cadastral Zone B18, Off Oladipo Diya Road, Apo, Gudu, Abuja",
    email: "info@prestigehomes.ng",
    tagline: "...crafting quality, Delivering value",
    openingHours: "Mon - Sat: 8:00 AM - 6:00 PM",
};

export const featuredEstates: EstateListing[] = [
    {
        id: "solar-city-apo",
        slug: "solar-city-apo",
        name: "Solar City Apo",
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
        options: [
            { sizeSqM: 170, priceNaira: 9000000, typology: "2 Bedroom Apartment Plot", initialDepositNaira: 1800000, monthlyInstallmentNaira: 600000, durationMonths: 12 },
            { sizeSqM: 250, priceNaira: 13400000, typology: "3 Bedroom Terrace Duplex Plot", initialDepositNaira: 2680000, monthlyInstallmentNaira: 893333, durationMonths: 12 },
            { sizeSqM: 350, priceNaira: 19000000, typology: "4 Bedroom Semi-Detached Duplex Plot", initialDepositNaira: 3800000, monthlyInstallmentNaira: 1266666, durationMonths: 12 },
            { sizeSqM: 450, priceNaira: 24000000, typology: "4 Bedroom Fully Detached Duplex Plot", initialDepositNaira: 4800000, monthlyInstallmentNaira: 1600000, durationMonths: 12 },
            { sizeSqM: 600, priceNaira: 31800000, typology: "5 Bedroom Fully Detached Duplex + BQ", initialDepositNaira: 6360000, monthlyInstallmentNaira: 2120000, durationMonths: 12 },
            { sizeSqM: 1000, priceNaira: 54000000, typology: "Commercial / High-Density Prime Plot", initialDepositNaira: 10800000, monthlyInstallmentNaira: 3600000, durationMonths: 12 },
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
    {
        id: "the-embassy-wasa",
        slug: "the-embassy-wasa",
        name: "The Embassy",
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