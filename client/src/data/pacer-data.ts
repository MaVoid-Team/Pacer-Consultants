export interface Service {
    id: string;
    title: string;
    category: "Design" | "Management" | "Studies";
    description: string;
    details: string[];
}

export interface Project {
    id: string;
    title: string;
    location: string;
    category: "Maritime" | "Residential" | "Commercial" | "Industrial" | "Infrastructure";
    description: string;
    image: string;
}

export interface Client {
    name: string;
    logo?: string;
}

export const services: Service[] = [
    {
        id: "architecture",
        title: "Architecture",
        category: "Design",
        description: "Creating spaces that foster collaboration, communication, and efficiency with a focus on cost-effective, innovative solutions.",
        details: [
            "Full Architectural Design",
            "Landscaping & Urban Design",
            "Innovative Interior Themes",
            "Alternative Construction Methods"
        ]
    },
    {
        id: "integrated-engineering",
        title: "Integrated Engineering",
        category: "Design",
        description: "Inclusive design strategy with a focus on sustainability and structural integrity using modern BIM methodologies.",
        details: [
            "Civil & Structural Engineering",
            "Electrical & Mechanical Systems",
            "Sustainable UV-Protective Engineering",
            "BIM-Compliant Documentation"
        ]
    },
    {
        id: "project-management",
        title: "Project Management",
        category: "Management",
        description: "Comprehensive planning, coordination, and monitoring to ensure project success from inception to delivery.",
        details: [
            "Integration Management & Tracking",
            "Cost Estimation & Quality Control",
            "Contract Administration",
            "Project Risk Controls"
        ]
    },
    {
        id: "construction-management",
        title: "Construction Management",
        category: "Management",
        description: "Synchronous management and scheduling of all construction activities to guarantee on-time delivery.",
        details: [
            "Site Mobilization & Management",
            "Execution Monitoring",
            "Safety & Quality Supervision",
            "Hand-over Coordination"
        ]
    },
    {
        id: "asset-evaluation",
        title: "Asset Evaluation",
        category: "Studies",
        description: "Detailed evaluations and market surveys for infrastructure assets across the Middle East.",
        details: [
            "Data Gathering & Physical Inspections",
            "Asset Classification & Depreciation Analysis",
            "Market Surveys & Appraisal",
            "Financial Reporting"
        ]
    },
    {
        id: "environmental-studies",
        title: "Environmental & Sustainability",
        category: "Studies",
        description: "Assessing impacts and promoting resource efficiency for long-term project viability.",
        details: [
            "Environmental Impact Assessment (EIA)",
            "Feasibility Studies",
            "Resource Efficiency & Waste Management",
            "Renewable Energy Integration"
        ]
    }
];

export const projects: Project[] = [
    {
        id: "marassi-marina",
        title: "Marassi Marina",
        location: "Sidi Abdel Rahman, North Coast, Egypt",
        category: "Maritime",
        description: "A flagship maritime project involving complex lagoon engineering and master planning for a world-class marina.",
        image: "/images/clinique-hero.webp"
    },
    {
        id: "sokhna-basin-2",
        title: "Sokhna Basin 2",
        location: "Suez, Egypt",
        category: "Maritime",
        description: "Expansion of one of Egypt's major port facilities, focusing on dredging, quay walls, and infrastructure.",
        image: "/images/clinique-facade-1.webp"
    },
    {
        id: "mivida-parcel-27",
        title: "Mivida Parcel 27",
        location: "New Cairo, Egypt",
        category: "Residential",
        description: "Extensive residential development for Emaar, featuring luxury housings and integrated community facilities.",
        image: "/images/clinique-facade-2.webp"
    },
    {
        id: "al-manzel",
        title: "Al-Manzel Showroom",
        location: "Cairo, Egypt",
        category: "Commercial",
        description: "Architecture and interior design for a flagship luxury furniture showroom.",
        image: "/images/clinique-hero.webp"
    },
    {
        id: "ejesco-plant",
        title: "Ejesco Plant",
        location: "Sadat City, Egypt",
        category: "Industrial",
        description: "A specialized production facility catering to industrial manufacturing needs.",
        image: "/images/clinique-facade-1.webp"
    }
];

export const clients: Client[] = [
    { name: "USAID" },
    { name: "The World Bank" },
    { name: "European Union" },
    { name: "Citibank" },
    { name: "QNB" },
    { name: "Emaar Misr" },
    { name: "Oberoi Hotels & Resorts" },
    { name: "Marassi" }
];

export const contactInfo = {
    address: "72 Mossadak Street, Dokki, Giza 12311, Egypt",
    phones: ["+2 (02) 3748 4835", "+2 (02) 3749 2835"],
    emails: ["projects@pacer-consultants.com", "info@pacer-consultants.com"],
    social: {
        linkedin: "https://www.linkedin.com/company/pacerconsultants/",
        instagram: "https://www.instagram.com/pacerconsultants/"
    },
    workingHours: "Sun - Thur, 8 AM - 5 PM"
};
