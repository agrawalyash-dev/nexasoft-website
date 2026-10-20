import {
  Factory,
  HeartPulse,
  Landmark,
  type LucideIcon,
  ShoppingBag,
} from "lucide-react";
import type { FaqItem } from "@/components/faq-section";

export type Industry = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  icon: LucideIcon;
  art: string;
  summary: string;
  challenges: string[];
  build: string[];
  services: string[];
  regulations: string;
  platforms: string;
  outcomes: [string, string][];
  featured: string;
  screenUrl: string;
  cta: string;
};

export const industries: Industry[] = [
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    short: "Banking & Finance",
    tagline: "Secure, compliant platforms for payments, lending and risk.",
    icon: Landmark,
    art: "bg-art-1",
    summary:
      "We build secure, compliant platforms for banks, NBFCs and fintechs, from customer onboarding and lending to payments, fraud detection and core modernisation.",
    challenges: [
      "Loan and account journeys that take days and lose customers halfway",
      "Legacy core systems that make every change slow and risky",
      "Rising fraud and ever-tighter regulatory reporting",
    ],
    build: [
      "Digital onboarding with e-KYC and video KYC",
      "Loan origination and decisioning platforms",
      "UPI, payment gateway and card integrations",
      "Real-time fraud and risk scoring",
      "Core banking modernisation and integration",
      "Regulatory and MIS reporting",
    ],
    services: [
      "digital-engineering",
      "enterprise-applications",
      "ai-data-analytics",
      "cybersecurity",
    ],
    regulations: "RBI guidelines, PCI DSS, ISO 27001",
    platforms:
      "UPI / NPCI, Account Aggregator, Finacle and Flexcube integrations",
    outcomes: [
      ["60%", "Faster loan approvals"],
      ["99.99%", "Platform uptime"],
      ["<200 ms", "Fraud scoring"],
    ],
    featured: "Eleven tools replaced by one platform for a private bank",
    screenUrl: "crm.bankplatform.app/customers",
    cta: "Talk to our banking team",
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    short: "Healthcare",
    tagline:
      "Digital solutions that improve patient care and speed up research.",
    icon: HeartPulse,
    art: "bg-art-4",
    summary:
      "We help hospitals, clinic networks, diagnostic labs and life-sciences companies digitise patient care and clinical operations, while keeping patient data safe and systems connected.",
    challenges: [
      "Patient records scattered across systems that don't talk to each other",
      "Staff buried in paperwork, referrals and claims",
      "Strict privacy rules that slow every new idea",
    ],
    build: [
      "Patient portals, appointment booking and telehealth",
      "EHR and HIS integration",
      "Lab, pharmacy and radiology systems",
      "AI document automation for referrals and claims",
      "Clinical data platforms and analytics",
      "Hospital operations dashboards",
    ],
    services: [
      "digital-engineering",
      "ai-data-analytics",
      "cloud-infrastructure",
      "cybersecurity",
    ],
    regulations: "HL7, FHIR, ABDM, DPDP Act, HIPAA for US clients",
    platforms: "HIS and EHR systems, lab and PACS integrations",
    outcomes: [
      ["35%", "Fewer missed appointments"],
      ["2M+", "Patient records migrated"],
      ["14", "Clinics on one system"],
    ],
    featured:
      "AI that routes 1,200 referrals and claims a day for a hospital network",
    screenUrl: "intake.carenet.app/review",
    cta: "Talk to our healthcare team",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    short: "Retail",
    tagline: "Seamless experiences across web, app and store.",
    icon: ShoppingBag,
    art: "bg-art-2",
    summary:
      "We build fast, reliable commerce for retailers and D2C brands, connecting web, app and store so every order is fulfilled from the right place, even on the busiest sale day.",
    challenges: [
      "Sites that slow down or crash during sales",
      "Online and store stock that never match",
      "Generic experiences that don't bring customers back",
    ],
    build: [
      "Headless storefronts and mobile commerce apps",
      "Order management and inventory sync",
      "POS and store systems integration",
      "Personalisation, search and recommendations",
      "Loyalty programmes and customer data platforms",
      "Marketplace integrations",
    ],
    services: [
      "digital-engineering",
      "ai-data-analytics",
      "cloud-infrastructure",
      "enterprise-applications",
    ],
    regulations: "PCI DSS, consumer data privacy",
    platforms:
      "Shopify, commercetools, Salesforce Commerce, Amazon and Flipkart",
    outcomes: [
      ["3×", "Faster page loads"],
      ["22%", "More repeat orders"],
      ["180", "Stores synced live"],
    ],
    featured: "A commerce engine handling 12,000 orders a minute at peak",
    screenUrl: "shop.urbanthreads.app",
    cta: "Talk to our retail team",
  },
  {
    slug: "manufacturing-logistics",
    name: "Manufacturing & Logistics",
    short: "Manufacturing",
    tagline:
      "Connected factories and real-time visibility across plants and fleets.",
    icon: Factory,
    art: "bg-art-5",
    summary:
      "We connect factories, warehouses and fleets so manufacturers and logistics providers can see, plan and act in real time, from the shop floor to the customer's door.",
    challenges: [
      "Planning done in spreadsheets because the ERP doesn't fit",
      "Machines failing without warning",
      "No live view of shipments until customers call",
    ],
    build: [
      "ERP and MES implementation and integration",
      "IoT machine monitoring and OEE dashboards",
      "Predictive maintenance",
      "Warehouse management systems",
      "Fleet tracking and delay prediction",
      "Supplier and dealer portals",
    ],
    services: [
      "enterprise-applications",
      "ai-data-analytics",
      "cloud-infrastructure",
      "digital-engineering",
    ],
    regulations: "ISO 9001 and IATF 16949 traceability, e-way bill and GST",
    platforms: "SAP S/4HANA, OPC UA, Azure IoT",
    outcomes: [
      ["18%", "Less unplanned downtime"],
      ["4,000+", "Vehicles tracked"],
      ["30%", "Faster dispatch"],
    ],
    featured: "A custom ERP for a multi-plant auto-components maker",
    screenUrl: "erp.plantsuite.app/board",
    cta: "Talk to our manufacturing team",
  },
];

export const heroStats = [
  { value: 4, suffix: "", label: "Core industries" },
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "", label: "Countries served" },
];

export const expertise = [
  {
    title: "Sector-specialist pods",
    text:
      "Each industry has a core team that has delivered in that sector before, so you don't spend weeks teaching us your business.",
  },
  {
    title: "Compliance by design",
    text:
      "Regulatory requirements are captured in discovery and built into the architecture, not patched in before an audit.",
  },
  {
    title: "Ready-made accelerators",
    text:
      "Reusable building blocks, such as e-KYC flows, FHIR connectors and IoT data pipelines, cut weeks off typical timelines.",
  },
  {
    title: "Fluent in your core platforms",
    text:
      "Experience integrating the systems your industry already runs on, from core banking and HIS to SAP and marketplaces.",
  },
];

/* ⚠ Placeholder quotes: replace with real, approved quotes before enabling. */
export const quotes = [
  {
    industry: "Banking",
    text:
      "They understood RBI requirements from the first workshop. We went live on time with no audit findings.",
    by: "Chief Technology Officer, private NBFC",
  },
  {
    industry: "Healthcare",
    text: "Our staff spend their time on patients again, not paperwork.",
    by: "Head of Operations, hospital network",
  },
  {
    industry: "Retail",
    text: "Our biggest sale of the year was also our smoothest.",
    by: "Head of E-commerce, fashion retailer",
  },
  {
    industry: "Manufacturing",
    text: "For the first time, every plant manager looks at the same numbers.",
    by: "VP Operations, auto-components maker",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "My industry isn't listed. Can you still help?",
    a: "Yes. Our services apply across sectors, and we have delivered for government, education and professional services too. We'll be upfront about how much sector experience we bring.",
  },
  {
    q: "How do you handle industry regulations?",
    a: "We capture regulatory requirements during discovery, design them into the architecture and document how each one is met, so audits are straightforward.",
  },
  {
    q: "Can you work with our existing core systems?",
    a: "Yes. Most of our industry work extends or integrates with systems clients already run, such as core banking, HIS, SAP or marketplace platforms, rather than replacing them.",
  },
  {
    q: "Do you sign data processing and confidentiality agreements?",
    a: "Always. Every engagement runs under an NDA, and we sign data processing agreements and follow your security policies where personal or patient data is involved.",
  },
  {
    q: "Can we see work from our industry?",
    a: "Yes. On a call, we can walk you through relevant projects in more detail, keeping client names confidential unless they have agreed to be named.",
  },
];
