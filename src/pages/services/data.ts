import {
  BrainCircuit,
  Cloud,
  Code,
  LayoutGrid,
  type LucideIcon,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import type { FaqItem } from "@/components/faq-section";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  art: string;
  summary: string;
  problems: string[];
  included: string[];
  deliverables: string;
  technologies: string;
  timeline: string;
  outcome: [string, string];
  unit: { name: string; slug: string };
  featured: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "digital-engineering",
    name: "Digital Engineering",
    tagline: "Custom web, mobile and platform products, built to scale.",
    icon: Code,
    art: "bg-art-1",
    summary:
      "We design and build custom web, mobile and platform products, from first prototype to millions of users, and keep improving them after launch.",
    problems: [
      "A product idea with no team to build it",
      "An app customers complain about",
      "A platform that slows down as you grow",
    ],
    included: [
      "Product discovery and roadmapping",
      "UX research and UI design",
      "Web applications, portals and SaaS",
      "Native and cross-platform mobile apps",
      "APIs, integrations and platform engineering",
      "Automated testing and quality engineering",
    ],
    deliverables:
      "Clickable prototype, design system, production code in your repository, test suite, release pipeline and handover documentation.",
    technologies:
      "React, Next.js, Flutter, Swift, Kotlin, Node.js, Java, PostgreSQL",
    timeline:
      "Discovery 2–3 weeks, MVP in 10–14 weeks, then releases every two weeks",
    outcome: ["4.8★", "Average rating across the apps we've shipped"],
    unit: { name: "Nexasoft Digital", slug: "digital" },
    featured:
      "Secure mobile banking with biometric login and instant UPI transfers",
    cta: "Start a product conversation",
  },
  {
    slug: "enterprise-applications",
    name: "Enterprise Applications",
    tagline:
      "ERP, CRM and core platforms that keep every team on the same data.",
    icon: LayoutGrid,
    art: "bg-art-5",
    summary:
      "We implement, integrate and support ERP, CRM and service management platforms, shaped around how your teams really work.",
    problems: [
      "Teams re-typing data between systems",
      "A month-end close that takes weeks",
      "An ageing ERP nobody wants to touch",
    ],
    included: [
      "ERP implementation and upgrades (SAP S/4HANA, custom ERP)",
      "CRM implementation (Salesforce)",
      "IT and employee service management (ServiceNow)",
      "System integration and middleware",
      "Data migration and cleansing",
      "Application support and enhancements",
    ],
    deliverables:
      "Process blueprint, configured platform, integrations, migrated data with reconciliation reports, trained users and a support runbook.",
    technologies:
      "SAP S/4HANA, Salesforce, ServiceNow, MuleSoft, .NET, SQL Server",
    timeline:
      "Blueprint 4–6 weeks, rollout 4–12 months in waves, then ongoing support",
    outcome: [
      "11 → 1",
      "Tools consolidated onto one platform for a private bank",
    ],
    unit: { name: "Nexasoft Enterprise", slug: "enterprise" },
    featured:
      "A custom ERP shaped around the shop floor of a multi-plant manufacturer",
    cta: "Plan your rollout",
  },
  {
    slug: "ai-data-analytics",
    name: "AI & Data Analytics",
    tagline:
      "Data platforms, machine learning and generative AI that turn information into decisions.",
    icon: BrainCircuit,
    art: "bg-art-6",
    summary:
      "We build the data platforms, dashboards and AI that turn your information into decisions, and run AI in production with proper monitoring and human review.",
    problems: [
      "Data spread across systems nobody trusts",
      "Reports built by hand every week",
      "AI pilots that never reach production",
    ],
    included: [
      "Data platforms and warehousing",
      "Business intelligence and dashboards",
      "Machine learning, forecasting and scoring",
      "Generative AI assistants grounded in your data",
      "Document extraction and workflow automation",
      "Data governance, quality and lineage",
    ],
    deliverables:
      "Data architecture, pipelines, governed data models, dashboards, models in production with monitoring, and model documentation.",
    technologies: "Snowflake, Databricks, Python, dbt, Power BI, Azure OpenAI",
    timeline: "A 6-week pilot on one use case, then scale-up in 3–6 months",
    outcome: ["70%", "Less manual paperwork with AI document routing"],
    unit: { name: "Nexasoft AI & Data", slug: "ai-data" },
    featured:
      "AI that reads and routes 1,200 referrals and claims a day for a hospital network",
    cta: "Find your first AI use case",
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    tagline:
      "Migration, DevOps and managed infrastructure on AWS, Azure and Google Cloud.",
    icon: Cloud,
    art: "bg-art-2",
    summary:
      "We migrate, automate and run your infrastructure on AWS, Azure and Google Cloud, with 24×7 monitoring and continuous cost control.",
    problems: [
      "Costly, ageing data centres",
      "Releases that take days",
      "Cloud bills that keep climbing",
    ],
    included: [
      "Cloud readiness assessment and migration",
      "Landing zones and infrastructure as code",
      "DevOps and CI/CD pipelines",
      "Kubernetes and container platforms",
      "24×7 managed operations and monitoring",
      "Cloud cost optimisation (FinOps)",
    ],
    deliverables:
      "Migration plan by wave, infrastructure as code, CI/CD pipelines, monitoring and alerts, runbooks and monthly cost reports.",
    technologies:
      "AWS, Azure, Google Cloud, Terraform, Kubernetes, GitHub Actions, Datadog",
    timeline:
      "Assessment 2–3 weeks, migration 2–9 months, then managed service",
    outcome: ["38%", "Lower infrastructure cost after migration"],
    unit: { name: "Nexasoft Cloud", slug: "cloud" },
    featured:
      "Three data centres across two continents moved to the cloud in planned waves",
    cta: "Get a cloud assessment",
  },
  {
    slug: "application-modernization",
    name: "Application Modernization",
    tagline:
      "Legacy systems moved to cloud-native architecture without interrupting operations.",
    icon: RefreshCw,
    art: "bg-art-2",
    summary:
      "We move legacy systems to modern, cloud-native architecture step by step, so the business keeps running while the old system is replaced.",
    problems: [
      "A core system only two people understand",
      "Slow, risky releases",
      "Vendors ending support for your platform",
    ],
    included: [
      "Legacy assessment and modernization roadmap",
      "Re-platforming and re-architecture",
      "Monolith to microservices",
      "Database modernization",
      "API layers around legacy systems",
      "Phased cut-over with parallel running",
    ],
    deliverables:
      "System assessment, target architecture, modernized services, migrated data, cut-over plan and a decommissioning plan for the old system.",
    technologies:
      "Java, .NET, Node.js, Kubernetes, Kafka, PostgreSQL, AWS, Azure",
    timeline: "Assessment 3–4 weeks, then modernization in 3–12 month phases",
    outcome: ["0 min", "Business downtime at cut-over"],
    unit: { name: "Nexasoft Cloud", slug: "cloud" },
    featured: "Eleven legacy tools replaced by one platform for a private bank",
    cta: "Assess your legacy system",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    tagline:
      "Threat detection, compliance and security built into every layer.",
    icon: ShieldCheck,
    art: "bg-art-4",
    summary:
      "We protect your systems, data and people across every layer, test defences the way attackers would, and keep you compliant.",
    problems: [
      "An audit coming up",
      "No clear view of your risks",
      "A flat network where one stolen password reaches everything",
    ],
    included: [
      "Security assessments and risk reviews",
      "Penetration testing (web, mobile, cloud, network)",
      "Zero-trust architecture and identity management",
      "Security operations and 24×7 monitoring",
      "Compliance readiness (ISO 27001, SOC 2, RBI, GDPR)",
      "Secure development and code reviews",
    ],
    deliverables:
      "Risk register, penetration test report with fixes, security architecture, policies, incident playbooks and an audit evidence pack.",
    technologies:
      "Microsoft Entra ID, Okta, CrowdStrike, Splunk, Burp Suite, OWASP ZAP",
    timeline:
      "Assessment in 3 weeks, remediation 1–3 months, then ongoing monitoring",
    outcome: ["100%", "Access requests verified for a state department"],
    unit: { name: "Nexasoft Secure", slug: "secure" },
    featured:
      "Zero-trust security architecture for a state government department",
    cta: "Book a security assessment",
  },
];

export const heroStats = [
  { value: 6, suffix: "", label: "End-to-end services" },
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client retention" },
];

export const standards = [
  {
    title: "Discovery before code",
    text:
      "Every engagement starts with a short discovery, so scope, risks and success measures are agreed upfront.",
  },
  {
    title: "Working software every two weeks",
    text:
      "Short sprints with a demo at the end of each, so progress is visible, not just reported.",
  },
  {
    title: "Quality gates in every release",
    text:
      "Code review, automated tests and performance checks before anything reaches production.",
  },
  {
    title: "Security by default",
    text:
      "Secure coding standards, dependency scanning and access reviews are part of every service.",
  },
  {
    title: "Clear reporting",
    text:
      "A weekly status note and a shared dashboard covering progress, risks and budget.",
  },
  {
    title: "You own everything",
    text:
      "Code, designs, documentation and infrastructure live in your accounts, with full handover.",
  },
];

export const industries = [
  {
    name: "Banking & Financial Services",
    slug: "banking-financial-services",
    art: "bg-art-1",
  },
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare-life-sciences",
    art: "bg-art-4",
  },
  { name: "Retail & E-commerce", slug: "retail-ecommerce", art: "bg-art-2" },
  {
    name: "Manufacturing & Logistics",
    slug: "manufacturing-logistics",
    art: "bg-art-5",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "How do you price a project?",
    a: "Fixed price for clearly scoped work, monthly rates for dedicated teams, and a fixed fee for managed services. You get a written estimate after discovery, before any commitment.",
  },
  {
    q: "Can you take over a project another vendor started?",
    a: "Yes. We start with a two-week code and architecture review, tell you honestly what we find, and then propose a plan to stabilise and continue.",
  },
  {
    q: "Do you only build new systems, or also maintain existing ones?",
    a: "Both. Many clients come to us for support and enhancements on systems already in production, under a monthly service agreement.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. Everything we create for you is assigned to you under the contract, and it lives in your repositories and cloud accounts from day one.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Yes. We often build alongside client engineers, follow your tools and processes, and pair with your team so knowledge stays in-house.",
  },
  {
    q: "Which technologies do you use?",
    a: "We pick what fits your goals and existing systems. Our main platforms are listed with each service above and on the Technology page.",
  },
];
