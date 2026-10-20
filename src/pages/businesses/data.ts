import {
  BrainCircuit,
  Cloud,
  Code,
  LayoutGrid,
  type LucideIcon,
  ShieldCheck,
  Users,
} from "lucide-react";

export type BusinessUnit = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  icon: LucideIcon;
  art: string;
  lead: string;
  detail: string;
  offerings: [string, string][];
  facts: [string, string][];
  highlight: [string, string];
  cta: string;
};

export const units: BusinessUnit[] = [
  {
    slug: "digital",
    name: "Nexasoft Digital",
    short: "Digital",
    tagline: "Products people love to use",
    icon: Code,
    art: "bg-art-1",
    lead:
      "Nexasoft Digital designs and builds web, mobile and platform products, from first prototype to millions of users.",
    detail:
      "Designers, product managers and engineers work as one squad and ship in two-week cycles, so you see working software early and often. Best for companies launching a new product, or rebuilding one that no longer keeps up with customers.",
    offerings: [
      [
        "Product discovery",
        "Workshops that turn an idea into a scoped roadmap.",
      ],
      ["UX and UI design", "Research-led interfaces people understand."],
      ["Web applications", "Portals, dashboards and SaaS products."],
      ["Mobile apps", "Native and cross-platform iOS and Android."],
      [
        "APIs and integrations",
        "Clean interfaces to the systems you already run.",
      ],
      ["Quality engineering", "Automated testing in every release."],
    ],
    facts: [
      ["Team", "90+ designers and engineers"],
      ["Key platforms", "React, Next.js, Flutter, Node.js"],
      ["Typical engagement", "3–9 months"],
      ["Release cadence", "Every 2 weeks"],
    ],
    highlight: ["4.8★", "Average rating across the apps we've shipped"],
    cta: "Explore Digital",
  },
  {
    slug: "enterprise",
    name: "Nexasoft Enterprise",
    short: "Enterprise",
    tagline: "Core systems that run the business",
    icon: LayoutGrid,
    art: "bg-art-5",
    lead:
      "Nexasoft Enterprise implements, integrates and supports the systems your operations depend on: ERP, CRM and service management.",
    detail:
      "We shape these platforms around how your teams actually work, so data is entered once and every department sees the same truth. Best for organisations running on disconnected tools, spreadsheets or ageing ERP.",
    offerings: [
      ["ERP implementation", "SAP S/4HANA rollouts and custom ERP."],
      ["CRM platforms", "Salesforce for sales, service and marketing."],
      ["Service management", "ServiceNow for IT and employee services."],
      ["System integration", "ERP, CRM and legacy systems, connected."],
      ["Data migration", "Years of records moved without losing a row."],
      ["Application support", "Upgrades, fixes and SLAs after go-live."],
    ],
    facts: [
      ["Team", "70+ functional and technical consultants"],
      ["Key platforms", "SAP, Salesforce, ServiceNow"],
      ["Typical engagement", "6–18 months"],
      ["Go-lives", "35+ delivered"],
    ],
    highlight: [
      "11 → 1",
      "Tools consolidated onto one platform for a private bank",
    ],
    cta: "Explore Enterprise",
  },
  {
    slug: "cloud",
    name: "Nexasoft Cloud",
    short: "Cloud",
    tagline: "Infrastructure that scales and never sleeps",
    icon: Cloud,
    art: "bg-art-2",
    lead:
      "Nexasoft Cloud moves, modernises and runs your infrastructure on AWS, Azure and Google Cloud.",
    detail:
      "We migrate in planned waves, automate everything as code and monitor around the clock, so growth never waits on servers. Best for teams leaving data centres, struggling with slow releases or watching cloud bills climb.",
    offerings: [
      ["Cloud migration", "Planned waves with zero unplanned downtime."],
      ["Modernisation", "Monoliths rebuilt as cloud-native services."],
      ["DevOps and CI/CD", "Automated pipelines from commit to production."],
      [
        "Kubernetes platforms",
        "Container platforms your teams can self-serve.",
      ],
      ["Managed operations", "24×7 monitoring, patching and on-call."],
      ["Cost optimisation", "Right-sized spend without slowing teams down."],
    ],
    facts: [
      ["Team", "60+ cloud and DevOps engineers"],
      ["Key platforms", "AWS, Azure, Google Cloud"],
      ["Typical engagement", "2–12 months, then managed"],
      ["Support", "24×7 monitoring"],
    ],
    highlight: ["38%", "Lower infrastructure cost after migration"],
    cta: "Explore Cloud",
  },
  {
    slug: "ai-data",
    name: "Nexasoft AI & Data",
    short: "AI & Data",
    tagline: "From data to decisions",
    icon: BrainCircuit,
    art: "bg-art-6",
    lead:
      "Nexasoft AI & Data builds the data platforms, analytics and AI that turn information into action.",
    detail:
      "We start with a business problem, not a model, and put AI into production with the monitoring and human review real operations need. Best for organisations sitting on data they can't use, or ready to move AI from pilot to production.",
    offerings: [
      [
        "Data platforms",
        "Warehouses and lakehouses on Snowflake and Databricks.",
      ],
      ["Analytics and BI", "Dashboards leaders actually use."],
      ["Machine learning", "Forecasting, scoring and recommendations."],
      ["Generative AI", "Assistants grounded in your own data."],
      ["Document automation", "Extract, classify and route documents."],
      ["Data governance", "Quality, lineage and access you can audit."],
    ],
    facts: [
      ["Team", "45+ data engineers and scientists"],
      ["Key platforms", "Snowflake, Databricks, Power BI"],
      ["Typical engagement", "6-week pilot, then 3–6 months"],
      ["In production", "30+ models"],
    ],
    highlight: ["70%", "Less manual paperwork with AI document routing"],
    cta: "Explore AI & Data",
  },
  {
    slug: "secure",
    name: "Nexasoft Secure",
    short: "Secure",
    tagline: "Security built in, not bolted on",
    icon: ShieldCheck,
    art: "bg-art-4",
    lead:
      "Nexasoft Secure protects your systems, data and people across every layer.",
    detail:
      "We design zero-trust architectures, test defences the way attackers would and monitor continuously, while keeping you compliant. Best for regulated industries, public-sector bodies and any company that handles customer data.",
    offerings: [
      ["Security assessments", "Find the gaps before attackers do."],
      ["Penetration testing", "Web, mobile, cloud and network."],
      ["Zero-trust architecture", "Identity-based access for every request."],
      ["Security operations", "Continuous monitoring and incident response."],
      ["Compliance readiness", "ISO 27001, SOC 2, RBI and GDPR."],
      ["Secure development", "Code reviews and security checks in CI/CD."],
    ],
    facts: [
      ["Team", "35+ security specialists"],
      ["Standards", "ISO 27001, SOC 2, RBI, GDPR"],
      ["Typical engagement", "3-week assessment, then ongoing"],
      ["Coverage", "24×7 monitoring"],
    ],
    highlight: ["100%", "Access requests verified for a state department"],
    cta: "Explore Secure",
  },
  {
    slug: "teams",
    name: "Nexasoft Teams",
    short: "Teams",
    tagline: "Your extended engineering team",
    icon: Users,
    art: "bg-art-1",
    lead:
      "Nexasoft Teams gives you skilled engineers who work as part of your own organisation.",
    detail:
      "From a few specialists to a full offshore development centre: you keep control of the roadmap, and we handle hiring, retention, tooling and delivery management. Best for companies that need to scale engineering fast without the delay of local hiring.",
    offerings: [
      ["Dedicated teams", "Cross-functional squads on your product only."],
      ["Staff augmentation", "Specialists who join your existing team."],
      ["Offshore development centres", "Your own branded team in India."],
      ["Build-operate-transfer", "We build the team, then you take it over."],
      ["QA and testing", "Manual and automated testing teams."],
      ["Delivery management", "Scrum masters and delivery leads."],
    ],
    facts: [
      ["Bench", "200+ engineers available"],
      ["Time zones", "US, UK, EU, Middle East"],
      ["Typical engagement", "12 months and longer"],
      ["Onboarding", "2–3 weeks"],
    ],
    highlight: ["95%", "Engineer retention across client teams"],
    cta: "Build your team",
  },
];

export const groupStats = [
  { value: 6, suffix: "", label: "Specialist businesses" },
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client retention" },
];

export const journey = [
  {
    title: "Discover",
    text:
      "We map your goals, users and current systems, and agree what success looks like.",
    units: ["Digital", "AI & Data"],
  },
  {
    title: "Design",
    text:
      "Architects and designers shape the product, the platform and the security model together.",
    units: ["Digital", "Cloud", "Secure"],
  },
  {
    title: "Build",
    text:
      "Cross-unit squads deliver in two-week sprints, with security reviews in every release.",
    units: ["Digital", "Enterprise", "AI & Data", "Secure"],
  },
  {
    title: "Launch",
    text: "We migrate data, cut over with zero downtime and train your teams.",
    units: ["Cloud", "Enterprise"],
  },
  {
    title: "Run and grow",
    text: "We operate, monitor and improve, and scale the team as you grow.",
    units: ["Cloud", "Secure", "Teams"],
  },
];

export const promises = [
  {
    title: "One contract, one lead",
    text:
      "A single point of accountability from first call to long-term support.",
  },
  {
    title: "Shared standards",
    text:
      "Every unit follows the same delivery, quality and security practices.",
  },
  {
    title: "No hand-off gaps",
    text:
      "Teams overlap at each stage, so knowledge never gets lost between vendors.",
  },
];

export const models = [
  {
    name: "Fixed-scope project",
    bestFor: "Clearly defined builds, MVPs and migrations",
    how: "Agreed scope, timeline and price, delivered in milestones.",
    start: "2–3 weeks",
  },
  {
    name: "Dedicated team",
    bestFor: "Long-running products and roadmaps",
    how:
      "A stable cross-functional team works only on your product, billed monthly.",
    start: "2–4 weeks",
  },
  {
    name: "Staff augmentation",
    bestFor: "Filling specific skill gaps",
    how: "Individual specialists join your existing team and processes.",
    start: "1–3 weeks",
  },
  {
    name: "Managed services",
    bestFor: "Running and supporting live systems",
    how: "Agreed service levels, 24×7 monitoring and support, monthly fee.",
    start: "3–6 weeks",
  },
];

export const faqs = [
  {
    q: "Do I need to know which business unit I need?",
    a: "No. Tell us what you're trying to achieve. Your engagement lead brings in the right teams, and you deal with one contact throughout.",
  },
  {
    q: "Can I work with just one unit?",
    a: "Yes. Many clients start with a single need, such as a cloud migration or a security review, and add other units only if it helps.",
  },
  {
    q: "Where are your teams based, and which time zones do you cover?",
    a: "Our delivery centre is in Vadodara, India. Teams overlap with US, UK, European and Middle Eastern working hours, with a daily stand-up in your time zone.",
  },
  {
    q: "How do you protect our code and data?",
    a: "Every engagement runs under an NDA, with role-based access, encrypted environments and security reviews in each release. Nexasoft Secure sets and audits these standards across all units.",
  },
  {
    q: "How quickly can a team start?",
    a: "A discovery sprint can start within two weeks. Dedicated teams are usually fully onboarded in two to four weeks.",
  },
  {
    q: "What happens after launch?",
    a: "We can run and support your systems under a managed-services agreement, hand over to your team with full documentation and training, or both.",
  },
];
