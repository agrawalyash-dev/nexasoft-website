import { ShieldCheck, TrendingUp, Users } from "lucide-react";
import type { HeroHighlight, HeroStat } from "@/components/page-hero";
import {
  Customer360Screen,
  DocumentExtractionScreen,
  FleetMapScreen,
  PolicyEditorScreen,
  ProductionBoardScreen,
  StorefrontScreen,
  UpiPaymentScreen,
} from "@/pages/home/components/work-screens";
import { LoanMock, MigrationMock } from "@/pages/home/components/case-mockups";

export const heroStats: HeroStat[] = [
  { value: 40, suffix: "+", label: "Enterprise systems migrated" },
  { value: 62, suffix: "%", label: "Faster digital decisioning" },
  { value: 99, suffix: ".99%", label: "Platform uptime delivered" },
];

export const heroHighlights: HeroHighlight[] = [
  { icon: Users, label: "Sector-specialist engineering squads" },
  { icon: ShieldCheck, label: "Production compliance & bank-grade security" },
  { icon: TrendingUp, label: "Audited, measurable business ROI" },
];

export type CaseCategory =
  | "all"
  | "banking"
  | "healthcare"
  | "retail"
  | "manufacturing"
  | "enterprise"
  | "logistics";

export interface CategoryOption {
  id: CaseCategory;
  name: string;
}

export const categories: CategoryOption[] = [
  { id: "all", name: "All Work" },
  { id: "banking", name: "Banking & NBFC" },
  { id: "healthcare", name: "Healthcare & AI" },
  { id: "retail", name: "Retail & E-Commerce" },
  { id: "manufacturing", name: "Manufacturing & ERP" },
  { id: "enterprise", name: "Cloud & Enterprise IT" },
  { id: "logistics", name: "Logistics & Fleet" },
];

export interface CaseStudyItem {
  id: string;
  slug: string;
  category: CaseCategory;
  industry: string;
  client: string;
  clientType: string;
  location: string;
  title: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  art: string;
  url?: string;
  ScreenComponent: React.ComponentType;
  overview: string;
  challenge: string[];
  solution: string[];
  architecture: string[];
  results: { stat: string; text: string }[];
  technologies: string[];
  timeline: string;
  teamShape: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudyItem[] = [
  {
    id: "banking-lending-platform",
    slug: "digital-lending-platform",
    category: "banking",
    industry: "Banking & FinTech",
    client: "Mid-size NBFC",
    clientType: "Non-Banking Financial Company",
    location: "Mumbai & Ahmedabad",
    title: "Rebuilt digital loan approvals platform for fast retail lending",
    tagline:
      "End-to-end automated underwriting, KYC validation and instant disbursals.",
    metric: "62%",
    metricLabel: "Faster loan processing & approval times",
    art: "bg-art-1",
    ScreenComponent: LoanMock,
    overview:
      "A fast-growing retail lending NBFC struggled with multi-day turnaround times due to fragmented legacy underwriting systems, manual document verification, and spreadsheet credit checks. Nexasoft engineered a unified, compliant digital loan management platform that automated 71% of standard loan applications and slashed decision time from 36 hours to under 4 hours.",
    challenge: [
      "Average decision turnaround was 36-48 hours across 24 retail branches.",
      "Manual credit assessment spreadsheets caused high human error and operational bottlenecks.",
      "Fragmented third-party APIs for CIBIL, Aadhaar KYC, and bank statement analysis created high failure rates.",
      "Inability to scale during festive retail demand spikes.",
    ],
    solution: [
      "Engineered a resilient event-driven underwriting engine in Go and React with rule-based credit scoring.",
      "Integrated instant Aadhaar e-KYC, PAN verification, and automated bank statement parsing via Account Aggregator.",
      "Implemented a real-time risk dashboard with role-based branch and underwriter queues.",
      "Built automated audit trails compliant with RBI digital lending guidelines.",
    ],
    architecture: [
      "React 19 single-page application with micro-frontend underwriting console.",
      "Event-driven Go microservices orchestrated via Apache Kafka.",
      "PostgreSQL with row-level encryption and strict role-based access control.",
      "AWS multi-AZ infrastructure with automated failover and 99.99% SLA.",
    ],
    results: [
      {
        stat: "62%",
        text: "Reduction in average loan decisioning time (from 36h to 4.2h)",
      },
      {
        stat: "71%",
        text: "Standard retail loans auto-approved without manual intervention",
      },
      {
        stat: "₹850Cr+",
        text: "Disbursed through the platform in the first 9 months",
      },
      { stat: "0", text: "Compliance exceptions during regulatory RBI review" },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Go",
      "Kafka",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    timeline: "14 weeks from discovery workshop to branch rollout",
    teamShape:
      "1 Engagement Lead, 1 Solutions Architect, 3 Backend, 2 Frontend, 1 QA",
    quote: {
      text:
        "Nexasoft didn't just write code; their engineers understood RBI compliance and credit risk mechanics from day one. Our underwriting throughput doubled without increasing headcount.",
      author: "Rajesh S.",
      role: "Chief Technology Officer, NBFC Partner",
    },
  },
  {
    id: "healthcare-cloud-migration",
    slug: "hospital-systems-cloud-migration",
    category: "healthcare",
    industry: "Healthcare",
    client: "Regional Hospital Network",
    clientType: "Multi-facility Healthcare Provider (18 Hospitals)",
    location: "Western India",
    title: "Zero-downtime cloud migration of 40 critical hospital systems",
    tagline:
      "Planned wave migration with zero clinical disruption and continuous EHR access.",
    metric: "0 min",
    metricLabel: "Clinical downtime across all 4 waves",
    art: "bg-art-4",
    ScreenComponent: MigrationMock,
    overview:
      "An 18-hospital network was running mission-critical Electronic Health Records (EHR), laboratory information, pharmacy, and billing systems on aged, co-located on-premise servers facing imminent hardware end-of-life. Nexasoft planned and executed a 4-wave cloud migration with active-passive shadow synchronization, ensuring round-the-clock clinical operations with zero minutes of unscheduled downtime.",
    challenge: [
      "Legacy Windows Server and Oracle environments hosting 40 interdependent systems.",
      "Absolute zero-tolerance for outage in emergency room triage, ICU, and surgical records.",
      "Strict data residency, DISHA regulations, and patient confidentiality mandates.",
      "Bandwidth constraints across remote tier-2 hospital locations.",
    ],
    solution: [
      "Architected landing zones on AWS and hybrid direct-connect pipelines with hardware IPsec VPN tunnels.",
      "Employed CDC (Change Data Capture) database replication to synchronize millions of patient records continuously.",
      "Executed cutovers during low-activity weekend windows with automated verification tests.",
      "Instituted end-to-end telemetry and automated health checks across all hospital endpoints.",
    ],
    architecture: [
      "AWS Landing Zone with multi-account isolation and VPC peering.",
      "Database migration with AWS DMS & continuous replication.",
      "Terraform Infrastructure as Code (IaC) with automated rollback safeguards.",
      "SOC 2 and HIPAA-aligned security auditing with AWS CloudTrail and GuardDuty.",
    ],
    results: [
      {
        stat: "0 min",
        text: "Unscheduled downtime experienced across 18 hospitals",
      },
      {
        stat: "40/40",
        text:
          "Critical clinical and administrative systems successfully migrated",
      },
      {
        stat: "34%",
        text:
          "Reduction in annual infrastructure and operational maintenance costs",
      },
      {
        stat: "< 2s",
        text: "Average EHR query latency achieved across all regional clinics",
      },
    ],
    technologies: [
      "AWS",
      "Terraform",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Datadog",
      "Linux",
    ],
    timeline: "20 weeks across architecture, staging, and 4 scheduled waves",
    teamShape:
      "1 Lead Cloud Architect, 2 DevOps/SRE Engineers, 2 Database Migration Specialists, 1 Project Lead",
    quote: {
      text:
        "Migrating hospital records without interrupting doctors or emergency admissions seemed near impossible. Nexasoft's rehearsals and automated failover gave our board complete confidence.",
      author: "Dr. Ananya V.",
      role: "Chief Operating Officer",
    },
  },
  {
    id: "retail-commerce-engine",
    slug: "high-volume-commerce-engine",
    category: "retail",
    industry: "Retail & E-Commerce",
    client: "Urban Threads & Co.",
    clientType: "D2C Fashion & Apparel Brand",
    location: "Bengaluru",
    title:
      "High-volume headless commerce engine with real-time AI recommendations",
    tagline:
      "Sub-second storefront with event-driven order processing capable of 12k peak orders/min.",
    metric: "+28%",
    metricLabel: "Increase in checkout conversion",
    art: "bg-art-2",
    url: "shop.urbanthreads.app",
    ScreenComponent: StorefrontScreen,
    overview:
      "A fast-growing fashion e-commerce brand was losing customers during flash festive sales as their monolithic platform crashed under traffic surges. Nexasoft replaced the monolith with a decoupled headless architecture featuring edge-rendered storefronts, a distributed checkout queue, and an in-memory recommendation engine.",
    challenge: [
      "Frequent checkout crashes and timeouts during Diwali and festive promotional sales.",
      "High page load times (>4.8 seconds on 4G mobile) causing a 68% mobile drop-off rate.",
      "Inventory synchronization delays resulting in accidental overselling and client refunds.",
      "Rigid CMS preventing the marketing team from launching campaign pages rapidly.",
    ],
    solution: [
      "Built a modern headless frontend on Next.js edge runtime with ISR (Incremental Static Regeneration).",
      "Engineered an event-driven order processing pipeline with Redis caching and Kafka queue isolation.",
      "Integrated machine learning recommendation model showing personalized products based on cart intent.",
      "Connected warehouse management systems for sub-second live inventory updates.",
    ],
    architecture: [
      "Next.js App Router deployed to edge CDN nodes.",
      "Node.js microservices with Redis Cluster for distributed cart state.",
      "Apache Kafka for order queue decoupling and payment webhooks.",
      "PostgreSQL with Read Replicas and Elasticsearch for lightning-fast catalog search.",
    ],
    results: [
      { stat: "+28%", text: "Increase in overall checkout conversion rate" },
      {
        stat: "12,000",
        text: "Peak orders processed per minute without a single error",
      },
      {
        stat: "750ms",
        text: "Average mobile storefront page load time achieved nationwide",
      },
      {
        stat: "18%",
        text:
          "Growth in average order value (AOV) driven by AI recommendations",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Redis",
      "Kafka",
      "Elasticsearch",
      "PostgreSQL",
    ],
    timeline: "12 weeks MVP launch, continuous bi-weekly feature sprints",
    teamShape:
      "1 Product Lead, 1 UI/UX Specialist, 3 Full-Stack Engineers, 1 Data/AI Engineer",
    quote: {
      text:
        "Our biggest sale day of the year was completely stress-free. Zero downtime, blazing fast checkouts, and our conversion rate jumped significantly.",
      author: "Vikram K.",
      role: "VP of Digital Commerce",
    },
  },
  {
    id: "manufacturing-operations-erp",
    slug: "manufacturing-operations-platform",
    category: "manufacturing",
    industry: "Manufacturing & ERP",
    client: "Auto-Components Manufacturer",
    clientType: "Tier-1 Automotive Component Supplier",
    location: "Sanand & Pune",
    title:
      "Unified shop-floor operations & OEE telemetry across 9 production plants",
    tagline:
      "Connecting plant machinery, raw inventory, and dispatch into one real-time dashboard.",
    metric: "9 Plants",
    metricLabel: "Connected into one unified view",
    art: "bg-art-5",
    url: "erp.plantsuite.app/board",
    ScreenComponent: ProductionBoardScreen,
    overview:
      "A premier automotive parts manufacturer operated 9 factories across western and northern India, with each unit maintaining isolated legacy spreadsheets and standalone ERP modules. Management had zero real-time visibility into machine downtime, batch bottlenecks, or inventory scrap. Nexasoft engineered a custom shop-floor operations platform connecting IoT machine telemetry with production schedules and ERP ledgers.",
    challenge: [
      "Each plant reported production numbers 24 to 48 hours late via manual Excel logs.",
      "Unplanned machine breakdowns halted assembly lines without automated maintenance alerts.",
      "High excess buffer inventory kept at each plant due to inaccurate consumption forecasts.",
      "Difficulties meeting stringent audit traceability requirements from OEM automakers.",
    ],
    solution: [
      "Deployed IoT edge gateway telemetry to collect real-time machine uptime, stroke counts, and power draw.",
      "Developed an intuitive touch-friendly shop-floor interface for line operators and shift supervisors.",
      "Engineered automated predictive maintenance triggers and OEE (Overall Equipment Effectiveness) analytics.",
      "Integrated end-to-end QR code tracking from raw coil receipt through stamping to dispatch palleting.",
    ],
    architecture: [
      "React dashboard with real-time WebSocket telemetry updates.",
      "Go microservices ingestion pipeline processing 25,000 sensor telemetry events/sec.",
      "TimescaleDB for high-speed time-series analytics and PostgreSQL for enterprise business logic.",
      "Local edge offline caching allowing plants to operate even during local internet disruptions.",
    ],
    results: [
      {
        stat: "9",
        text: "Factories and 140+ assembly lines connected in real time",
      },
      {
        stat: "45%",
        text:
          "Reduction in excess raw inventory holding through JIT synchronization",
      },
      {
        stat: "14%",
        text:
          "Increase in Overall Equipment Effectiveness (OEE) within 6 months",
      },
      {
        stat: "100%",
        text:
          "Batch-level component traceability compliant with automotive OEM audits",
      },
    ],
    technologies: [
      "React",
      "Go",
      "TimescaleDB",
      "MQTT",
      "Docker",
      "Node.js",
      "Tailwind CSS",
    ],
    timeline:
      "16 weeks to pilot plant launch, 8 weeks for rollout across remaining 8 units",
    teamShape:
      "1 Industrial Domain Lead, 1 IoT/Edge Specialist, 3 Backend Engineers, 2 Frontend Engineers",
    quote: {
      text:
        "For the first time in 20 years, our executive leadership can see the exact output of any plant in Gujarat or Maharashtra right from their phone. Nexasoft made our shop floors truly intelligent.",
      author: "Harish P.",
      role: "Executive Director of Operations",
    },
  },
  {
    id: "banking-customer-360",
    slug: "enterprise-customer-360",
    category: "banking",
    industry: "Banking & FinTech",
    client: "Commercial Private Bank",
    clientType: "Private Sector Bank",
    location: "Mumbai",
    title: "Enterprise Customer 360 platform replacing eleven legacy tools",
    tagline:
      "Consolidated servicing, lending, and relationship management on a single interface.",
    metric: "11→1",
    metricLabel: "Disparate tools consolidated into one platform",
    art: "bg-art-1",
    url: "crm.bankplatform.app/customers",
    ScreenComponent: Customer360Screen,
    overview:
      "Relationship managers and customer service teams at a private bank had to juggle 11 separate legacy terminals—ranging from core banking screens to credit card portals and grievance systems. Nexasoft engineered a unified Customer 360 workstation, delivering instant context, predictive product suggestions, and one-click servicing across all touchpoints.",
    challenge: [
      "Branch relationship managers spent 7+ minutes logging into multiple tools per customer query.",
      "Fragmented customer view caused missed cross-selling opportunities and frustrated high-net-worth clients.",
      "Strict data privacy regulations requiring granular field-level masking and auditable access logs.",
      "Complex integration requirements with 30-year-old mainframe core banking systems.",
    ],
    solution: [
      "Engineered a high-performance single-screen workspace uniting accounts, loans, credit cards, and service tickets.",
      "Implemented a secure aggregation middleware caching customer profiles with real-time core system synchronization.",
      "Built automated next-best-action AI recommendations for branch and RM advisory.",
      "Implemented role-based field masking protecting sensitive Aadhaar, PAN, and balance data.",
    ],
    architecture: [
      "React with design system components optimized for high data density.",
      "Node.js API gateway with Redis cluster caching and circuit breaker resilience.",
      "Enterprise Service Bus (ESB) connectors to legacy Core Banking (Finacle) and card platforms.",
      "Bank-grade audit log stream with tamper-proof event hashing.",
    ],
    results: [
      {
        stat: "11→1",
        text: "Tools consolidated into one streamlined browser workstation",
      },
      {
        stat: "65%",
        text:
          "Reduction in branch customer servicing and query resolution time",
      },
      {
        stat: "+31%",
        text: "Increase in relationship manager cross-sell conversion",
      },
      {
        stat: "100%",
        text:
          "Audit log adherence verified by internal risk and compliance boards",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
    ],
    timeline: "16 weeks to rollout across 120 pilot branches",
    teamShape:
      "1 Banking Practice Lead, 1 Principal Architect, 4 Engineers, 2 Integration Specialists",
    quote: {
      text:
        "Our branch managers love the new Customer 360 interface. Everything they need is on one screen, and our servicing speed has improved dramatically.",
      author: "Sunita M.",
      role: "Head of Retail Banking Operations",
    },
  },
  {
    id: "healthcare-ai-claims",
    slug: "ai-claims-workflow-automation",
    category: "healthcare",
    industry: "Healthcare & AI",
    client: "National Health Insurer",
    clientType: "Healthcare Claims & Third-Party Administrator (TPA)",
    location: "New Delhi & Vadodara",
    title:
      "AI workflow automation for clinical referral and claims document triage",
    tagline:
      "Intelligent OCR extraction, fraud pattern detection and automated adjudications.",
    metric: "70%",
    metricLabel: "Less manual paperwork and data entry",
    art: "bg-art-4",
    url: "intake.carenet.app/review",
    ScreenComponent: DocumentExtractionScreen,
    overview:
      "A national health TPA received over 35,000 scanned clinical discharge summaries, hospital bills, and diagnostic reports each week. Teams of medical coders manually transcribed doctor notes and invoices into billing systems. Nexasoft developed an AI document extraction pipeline with human-in-the-loop review that automated 70% of intake volume.",
    challenge: [
      "Inbound discharge summaries with inconsistent layouts, poor scans, and handwritten prescriptions.",
      "Average claim adjudication cycle took 9 working days, creating backlog during epidemic spikes.",
      "High human fatigue causing transcription errors and incorrect tariff code applications.",
      "Stringent patient privacy regulations prohibiting raw clinical text storage on public cloud AI APIs.",
    ],
    solution: [
      "Trained custom on-premise vision and OCR models optimized for Indian medical bills and pharmacy receipts.",
      "Built automated ICD-10 medical coding mapping and hospital package tariff cross-verification.",
      "Designed an ultra-clean triage workbench highlighting low-confidence fields for rapid human verification.",
      "Connected directly to insurer core claims engines via secure webhook dispatches.",
    ],
    architecture: [
      "Python AI/ML service pipeline with FastAPI and PyTorch models.",
      "Secure on-premise GPU inference cluster ensuring clinical data remains within protected VPC.",
      "React document review workbench with dual-pane PDF viewing and inline corrections.",
      "PostgreSQL and RabbitMQ for asynchronous claim processing and priority scheduling.",
    ],
    results: [
      {
        stat: "70%",
        text: "Reduction in manual medical transcription and entry paperwork",
      },
      {
        stat: "3 Days",
        text: "Claims adjudication cycle reduced from 9 days to under 3 days",
      },
      {
        stat: "98.2%",
        text:
          "Accuracy on medical bill line items and diagnostic tariff mapping",
      },
      {
        stat: "4x",
        text:
          "Throughput capacity increase without expanding administrative staff",
      },
    ],
    technologies: [
      "Python",
      "PyTorch",
      "FastAPI",
      "React",
      "RabbitMQ",
      "PostgreSQL",
      "Docker",
    ],
    timeline: "14 weeks from dataset annotation to full production integration",
    teamShape:
      "1 AI/ML Lead, 2 Machine Learning Engineers, 2 Full-Stack Engineers, 1 Medical Domain Advisor",
    quote: {
      text:
        "The accuracy of Nexasoft's document extraction engine exceeded our expectations. Our medical adjudication team now focuses purely on complex exceptions rather than manual typing.",
      author: "Dr. K. Ramanathan",
      role: "Chief Medical Officer & VP Claims",
    },
  },
  {
    id: "logistics-fleet-telemetry",
    slug: "real-time-fleet-telemetry-analytics",
    category: "logistics",
    industry: "Logistics & Fleet",
    client: "Express Logistics Network",
    clientType: "Interstate Freight & Express Parcel Operator",
    location: "Pan-India",
    title:
      "Real-time telemetry and predictive delay analytics across 4,200 vehicles",
    tagline:
      "Live route optimization, predictive ETAs and automated driver safety monitoring.",
    metric: "2 hrs",
    metricLabel: "Earlier delay warnings before customer impact",
    art: "bg-art-2",
    url: "fleet.routeview.app/live",
    ScreenComponent: FleetMapScreen,
    overview:
      "A national logistics carrier operating thousands of interstate container trucks lacked centralized real-time tracking. Delays caused by highway congestion, toll jams, or breakdowns were discovered only when consignments failed to arrive at hub cross-docks. Nexasoft created a scalable IoT streaming engine and dispatcher control tower providing predictive delay warnings.",
    challenge: [
      "GPS tracking devices across 12 different vendor models with irregular transmission intervals.",
      "Hub cross-dock managers had no advance notice of delayed trucks, causing idle labor costs.",
      "Lack of temperature and door-open telemetry for cold-chain pharmaceutical cargo.",
      "Inability to give corporate B2B clients accurate real-time shipment ETAs.",
    ],
    solution: [
      "Built a unified IoT telemetry ingestion pipeline normalizing protocols across all hardware trackers.",
      "Developed an algorithmic ETA prediction model factoring historical route speeds, weather, and toll wait times.",
      "Created a high-density interactive dispatch map with geofencing and automatic breach alerts.",
      "Shipped customer-facing tracking portals with live milestones and dynamic delay notifications.",
    ],
    architecture: [
      "Go telemetry gateway handling 40,000 GPS pings/minute with minimal resource overhead.",
      "Apache Kafka and Redis for geospatial indexing and live vehicle state tracking.",
      "React frontend with Mapbox GL vector tile rendering and cluster visualization.",
      "ClickHouse analytical store for post-trip driver behavior and route efficiency reporting.",
    ],
    results: [
      {
        stat: "2 hrs",
        text:
          "Earlier delay warnings, enabling dispatch to re-route or reschedule cross-docks",
      },
      {
        stat: "14%",
        text:
          "Reduction in fleet idling and fuel consumption across trunk lines",
      },
      {
        stat: "99.8%",
        text:
          "Cold-chain temperature compliance maintained for pharma consignments",
      },
      {
        stat: "4,200+",
        text: "Interstate commercial vehicles tracked simultaneously 24×7",
      },
    ],
    technologies: [
      "Go",
      "Kafka",
      "Redis",
      "React",
      "Mapbox",
      "ClickHouse",
      "Docker",
    ],
    timeline: "12 weeks to pilot corridor, 6 weeks nationwide rollout",
    teamShape:
      "1 Fleet Solutions Architect, 3 Backend/Distributed Systems Engineers, 2 UI Engineers",
    quote: {
      text:
        "Route visibility is night and day compared to our old portal. Our dispatchers solve bottlenecks two hours before they reach the delivery hub.",
      author: "Amitabh C.",
      role: "Head of Linehaul Operations",
    },
  },
  {
    id: "security-zero-trust",
    slug: "zero-trust-security-architecture",
    category: "enterprise",
    industry: "Public Sector & Security",
    client: "Municipal Smart City Governance",
    clientType: "Urban Municipal Authority & Smart City SPV",
    location: "Western India",
    title:
      "Zero-trust identity architecture & unified access control for 180+ agencies",
    tagline:
      "Granular least-privilege security replacing perimeter VPNs and legacy flat networks.",
    metric: "100%",
    metricLabel: "Access requests continuously verified & logged",
    art: "bg-art-1",
    url: "policy.secure-access.app",
    ScreenComponent: PolicyEditorScreen,
    overview:
      "A municipal smart city authority connecting over 180 department agencies, contractors, and public works vendors operated on vulnerable flat networks and shared credentials. Nexasoft architected a modern Zero-Trust Network Access (ZTNA) framework with strict identity verification, micro-segmentation, and continuous device posture checks.",
    challenge: [
      "Over 4,500 government employees and third-party contractors using shared passwords.",
      "Traditional perimeter firewalls left internal municipal databases vulnerable to lateral movement.",
      "Lack of centralized audit logs for who accessed citizen records or traffic control systems.",
      "Requirement to comply with national cybersecurity agency (CERT-In) guidelines.",
    ],
    solution: [
      "Implemented central Single Sign-On (SSO) with mandatory phishing-resistant FIDO2 hardware MFA.",
      "Enacted contextual least-privilege access rules evaluated on device health, IP location, and time.",
      "Architected application micro-segmentation replacing vulnerable internal VPNs.",
      "Built centralized SIEM event streaming for instant anomaly and unauthorized access detection.",
    ],
    architecture: [
      "OpenID Connect / SAML identity provider federation with granular policy evaluation.",
      "Envoy-based reverse proxy enforcing TLS 1.3 mutual authentication (mTLS).",
      "Elastic SIEM and Wazuh agent monitoring across 320 server nodes.",
      "Terraform policies version-controlled in Git for immutable infrastructure security.",
    ],
    results: [
      {
        stat: "100%",
        text: "Administrative access requests verified with contextual MFA",
      },
      {
        stat: "0",
        text:
          "Security breaches or lateral intrusions since platform commissioning",
      },
      {
        stat: "180+",
        text:
          "Government department systems brought under single identity governance",
      },
      {
        stat: "100%",
        text: "Full compliance with CERT-In directives and ISO 27001 standards",
      },
    ],
    technologies: [
      "OpenID Connect",
      "Envoy",
      "Terraform",
      "Elasticsearch",
      "Linux",
      "Docker",
      "React",
    ],
    timeline: "18 weeks across audit, pilot deployment, and municipal rollout",
    teamShape:
      "1 Chief Security Architect, 2 Identity & Cloud Specialists, 2 DevSecOps Engineers",
    quote: {
      text:
        "Securing hundreds of municipal systems used by thousands of staff was an enormous undertaking. Nexasoft established a zero-trust model without disrupting citizen service delivery.",
      author: "P. Mehta, IAS",
      role: "CEO & Special Commissioner",
    },
  },
  {
    id: "fintech-mobile-banking",
    slug: "secure-mobile-banking-app",
    category: "banking",
    industry: "Banking & FinTech",
    client: "Urban Co-operative Bank",
    clientType: "Licensed Scheduled Urban Bank",
    location: "Gujarat",
    title:
      "Modern mobile banking application with biometric auth & instant UPI transfers",
    tagline:
      "Native iOS and Android banking app replacing outdated web wrappers.",
    metric: "4.8★",
    metricLabel: "Average user app store rating",
    art: "bg-art-6",
    ScreenComponent: UpiPaymentScreen,
    overview:
      "A licensed scheduled bank serving 450,000 customers had an outdated web-wrapper mobile app suffering from 2.1-star ratings, frequent session timeouts, and lack of modern payment support. Nexasoft engineered a secure native mobile banking suite with biometric login, instant UPI 2.0 payments, deposit management, and real-time fraud alerts.",
    challenge: [
      "App store rating was 2.1★ with thousands of negative reviews citing payment crashes.",
      "Absence of NPCI-certified UPI payments forced younger customers to switch to neo-banks.",
      "High fraud vulnerability and non-compliance with latest RBI mobile application guidelines.",
      "Cumbersome branch-dependent account management processes.",
    ],
    solution: [
      "Developed high-performance native iOS and Android apps with frictionless biometric face/fingerprint authentication.",
      "Integrated certified NPCI UPI SDK allowing instant peer-to-peer and merchant QR payments.",
      "Built end-to-end fixed deposit creation, passbook downloads, and card freeze features directly in-app.",
      "Implemented device binding, root detection, and real-time transaction risk scoring.",
    ],
    architecture: [
      "Flutter framework with native platform security bridges.",
      "Encrypted SQLite storage with SQLCipher and hardware Keystore/Keychain key protection.",
      "Hardened API gateway with dynamic payload signing and certificate pinning.",
      "Active-active microservices backend connected to FIS and Finacle core systems.",
    ],
    results: [
      {
        stat: "4.8★",
        text:
          "App Store & Play Store rating across 38,000+ verified customer reviews",
      },
      {
        stat: "3.2x",
        text: "Increase in active monthly mobile banking users within 6 months",
      },
      {
        stat: "68%",
        text:
          "Reduction in routine branch footfall for passbooks and fund transfers",
      },
      {
        stat: "0",
        text:
          "Payment security breaches or credential theft incidents recorded",
      },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "AWS",
      "NPCI UPI",
    ],
    timeline:
      "16 weeks from prototype to NPCI certification and app store release",
    teamShape:
      "1 Mobile Solutions Lead, 3 Mobile Engineers, 2 Backend Engineers, 1 Security Specialist",
    quote: {
      text:
        "Nexasoft transformed our mobile banking experience from an embarrassment to a proud competitive advantage. Our younger customer base grew by 40% in six months.",
      author: "Bhavin P.",
      role: "Managing Director",
    },
  },
];
