import {
  BadgeCheck,
  BrainCircuit,
  Cloud,
  FlaskConical,
  LayoutGrid,
  type LucideIcon,
  Monitor,
  Plug,
  Server,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Wallet,
} from "lucide-react";
import type { FaqItem } from "@/components/faq-section";

export type Tech = { name: string; usedFor: string; when: string };
export type Layer = {
  slug: string;
  name: string;
  purpose: string;
  icon: LucideIcon;
  tech: Tech[];
};

export const layers: Layer[] = [
  {
    slug: "web",
    name: "Web",
    purpose: "Fast, accessible interfaces that work on every screen.",
    icon: Monitor,
    tech: [
      {
        name: "React",
        usedFor: "Interactive interfaces, dashboards and portals",
        when:
          "You need a rich UI and a large pool of developers to maintain it",
      },
      {
        name: "Next.js",
        usedFor: "React apps with server rendering and static pages",
        when:
          "Search visibility and first-load speed matter, such as public sites and storefronts",
      },
      {
        name: "TypeScript",
        usedFor: "Typed JavaScript across front end and back end",
        when: "Always; types catch whole classes of bugs before release",
      },
      {
        name: "Tailwind CSS",
        usedFor: "Consistent styling and design systems",
        when:
          "You want a design system that stays consistent as the team grows",
      },
    ],
  },
  {
    slug: "mobile",
    name: "Mobile",
    purpose: "Apps people keep on their home screen.",
    icon: Smartphone,
    tech: [
      {
        name: "Flutter",
        usedFor: "One codebase for iOS and Android",
        when: "You need both platforms quickly with a shared team and budget",
      },
      {
        name: "Swift and SwiftUI",
        usedFor: "Native iOS apps",
        when:
          "The app depends on deep device features or top-tier iOS performance",
      },
      {
        name: "Kotlin and Jetpack Compose",
        usedFor: "Native Android apps",
        when:
          "The same, on Android; Kotlin is Google's preferred language for Android",
      },
    ],
  },
  {
    slug: "backend",
    name: "Backend and APIs",
    purpose: "The services, APIs and data stores behind every product.",
    icon: Server,
    tech: [
      {
        name: "Node.js",
        usedFor: "APIs and real-time services",
        when: "Workloads are I/O-heavy and the team already writes TypeScript",
      },
      {
        name: "Java and Spring Boot",
        usedFor: "Large business systems",
        when:
          "Banking and enterprise systems that need maturity and long-term support",
      },
      {
        name: ".NET (C#)",
        usedFor: "Business applications and APIs",
        when:
          "You run a Microsoft environment such as Azure, SQL Server and Entra ID",
      },
      {
        name: "Python and FastAPI",
        usedFor: "Data and AI services",
        when: "The service sits close to data science or machine learning work",
      },
      {
        name: "Go",
        usedFor: "High-throughput services",
        when:
          "Very high request volumes with low latency, such as order or event pipelines",
      },
      {
        name: "PostgreSQL",
        usedFor: "Primary relational database",
        when:
          "Our default for transactional data: reliable, open source, widely supported",
      },
      {
        name: "Redis",
        usedFor: "Caching, sessions and queues",
        when: "Hot data must be served in milliseconds",
      },
      {
        name: "Apache Kafka",
        usedFor: "Event streaming between systems",
        when: "Many systems need the same events reliably and in order",
      },
    ],
  },
  {
    slug: "data-ai",
    name: "Data and AI",
    purpose: "From raw data to dashboards, models and assistants.",
    icon: BrainCircuit,
    tech: [
      {
        name: "Snowflake",
        usedFor: "Cloud data warehouse",
        when:
          "Analytics teams need fast SQL over large data with little infrastructure to manage",
      },
      {
        name: "Databricks",
        usedFor: "Lakehouse for data engineering and machine learning",
        when: "Large or unstructured data and ML workloads on Apache Spark",
      },
      {
        name: "dbt",
        usedFor: "Tested, version-controlled data transformations",
        when:
          "Always alongside a warehouse; it makes data pipelines reviewable like code",
      },
      {
        name: "Power BI",
        usedFor: "Dashboards and reports",
        when:
          "Business users live in Microsoft 365 and need self-serve reporting",
      },
      {
        name: "scikit-learn and PyTorch",
        usedFor: "Machine learning models",
        when: "Forecasting, scoring and classification on your own data",
      },
      {
        name: "LLM APIs with retrieval (RAG)",
        usedFor: "Assistants and document automation grounded in your content",
        when:
          "Answers must come from your documents, with sources, not the model's memory",
      },
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud and DevOps",
    purpose: "Infrastructure that's automated, observable and repeatable.",
    icon: Cloud,
    tech: [
      {
        name: "AWS, Azure, Google Cloud",
        usedFor: "Hosting, managed databases and services",
        when:
          "We match the cloud to your existing contracts, skills and compliance needs",
      },
      {
        name: "Terraform",
        usedFor: "Infrastructure as code",
        when:
          "Always; every environment is created from reviewed code, never by hand",
      },
      {
        name: "Docker",
        usedFor: "Packaging services consistently",
        when: "Always; the same container runs on a laptop and in production",
      },
      {
        name: "Kubernetes",
        usedFor: "Running many containerised services",
        when:
          "You operate many services that need scaling and self-healing; for a few, simpler managed options are often better",
      },
      {
        name: "GitHub Actions",
        usedFor: "CI/CD pipelines",
        when: "Every change should be built, tested and deployed automatically",
      },
      {
        name: "Grafana, Prometheus or Datadog",
        usedFor: "Monitoring, logs and alerts",
        when: "Always; we agree service levels and alert on them from day one",
      },
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise platforms",
    purpose: "The systems large organisations already run on.",
    icon: LayoutGrid,
    tech: [
      {
        name: "SAP S/4HANA",
        usedFor: "ERP: finance, supply chain, manufacturing",
        when: "You need an integrated ERP with industry processes built in",
      },
      {
        name: "Salesforce",
        usedFor: "CRM for sales, service and marketing",
        when: "Customer-facing teams need one shared view of every customer",
      },
      {
        name: "ServiceNow",
        usedFor: "IT and employee service management",
        when: "Requests, incidents and approvals need one workflow platform",
      },
      {
        name: "MuleSoft",
        usedFor: "Integration between enterprise systems",
        when: "Many systems must exchange data through managed, reusable APIs",
      },
    ],
  },
  {
    slug: "security",
    name: "Security",
    purpose: "Protection built into every layer, not added at the end.",
    icon: ShieldCheck,
    tech: [
      {
        name: "Microsoft Entra ID, Okta",
        usedFor: "Single sign-on, MFA and access control",
        when: "Always; one identity layer for every app",
      },
      {
        name: "OWASP ASVS and OWASP ZAP",
        usedFor: "Security requirements and automated scanning",
        when: "Always; ASVS sets the bar, ZAP checks every build",
      },
      {
        name: "Burp Suite",
        usedFor: "Manual penetration testing",
        when: "Before major releases and on a regular schedule",
      },
      {
        name: "Snyk or Dependabot",
        usedFor: "Dependency vulnerability scanning",
        when: "Always; most modern code is open-source dependencies",
      },
      {
        name: "Microsoft Sentinel, Splunk",
        usedFor: "Security monitoring (SIEM)",
        when: "You need 24×7 detection across systems",
      },
    ],
  },
  {
    slug: "quality",
    name: "Quality and testing",
    purpose: "Confidence in every release.",
    icon: FlaskConical,
    tech: [
      {
        name: "Vitest and Jest",
        usedFor: "Unit tests",
        when: "Always, for business logic",
      },
      {
        name: "Playwright",
        usedFor: "End-to-end browser tests",
        when: "Always, for critical user journeys such as sign-up and checkout",
      },
      {
        name: "k6",
        usedFor: "Load and performance testing",
        when: "Before launches and expected traffic peaks",
      },
      {
        name: "SonarQube",
        usedFor: "Code quality and coverage checks",
        when: "Always, as a gate in the pipeline",
      },
    ],
  },
];

/* True counts from this page, not marketing figures. */
export const heroStats = [
  { value: 8, suffix: "", label: "Stack layers covered" },
  { value: 3, suffix: "", label: "Major clouds" },
  { value: 6, suffix: "", label: "Practices on every project" },
];

export const principles = [
  { keyword: "Fit", line: "Solves your problem, not ours", icon: Target },
  { keyword: "Ownership", line: "Your team can run it", icon: Users },
  { keyword: "Maturity", line: "Proven and well supported", icon: BadgeCheck },
  { keyword: "Compatibility", line: "Works with what you run", icon: Plug },
  { keyword: "Cost", line: "Affordable over five years", icon: Wallet },
];

export const patterns = [
  {
    name: "Modular monolith",
    what:
      "One deployable application, split internally into clearly separated modules.",
    when:
      "Our default for new products: simpler to build, test and run, and modules can be split out later.",
  },
  {
    name: "Microservices",
    what: "Independent services, each owning its data and deployed separately.",
    when:
      "Several teams must ship independently, or parts of the system scale very differently.",
  },
  {
    name: "Event-driven",
    what:
      "Systems publish events, such as “order placed”, that others react to.",
    when:
      "Many systems need the same change reliably, such as orders flowing to inventory, billing and analytics.",
  },
  {
    name: "API-first and headless",
    what: "The API is designed first; web, app and partners all use it.",
    when:
      "The same data serves several channels, such as web, mobile, store and marketplaces.",
  },
  {
    name: "Strangler fig modernisation",
    what:
      "A new system grows around the old one, replacing it feature by feature.",
    when:
      "Replacing a legacy system the business can't afford to switch off in one go.",
  },
  {
    name: "Serverless functions",
    what: "Small pieces of code run on demand by the cloud provider.",
    when:
      "Workloads are spiky or infrequent, such as file processing, schedules and webhooks.",
  },
];

export const practices = [
  {
    title: "Every change is reviewed",
    text:
      "No code reaches the main branch without a pull request approved by another engineer.",
  },
  {
    title: "Automated pipelines",
    text:
      "Every commit is built, tested and scanned automatically; releases go out through the pipeline, never by hand.",
  },
  {
    title: "Infrastructure as code",
    text:
      "Servers, networks and permissions are defined in Terraform and reviewed like application code, so environments can be rebuilt exactly.",
  },
  {
    title: "Tests at three levels",
    text:
      "Unit tests for business logic, integration tests for APIs and end-to-end tests for critical user journeys.",
  },
  {
    title: "Observability from day one",
    text:
      "Logs, metrics and alerts are set up before launch against agreed service levels, so problems are seen before users report them.",
  },
  {
    title: "Documented decisions",
    text:
      "Significant technical choices are recorded as short architecture decision records, so your team knows why the system is built the way it is.",
  },
];

export const aiPractices = [
  {
    title: "Start with one measurable use case",
    text:
      "We agree a business metric (hours saved, error rate, response time) and a baseline before building anything.",
  },
  {
    title: "Grounded in your data",
    text:
      "Assistants answer from your approved documents using retrieval, and show their sources.",
  },
  {
    title: "Evaluated before and after launch",
    text:
      "We test against real examples, track accuracy over time and alert when quality drops.",
  },
  {
    title: "Humans review low-confidence cases",
    text:
      "Anything the system is unsure about goes to a person, and those decisions improve the system.",
  },
  {
    title: "Your data stays protected",
    text:
      "Enterprise AI services configured so your data isn't used to train providers' models, within the region and access rules you set.",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "Can you work with a technology that isn't listed here?",
    a: "Often, yes. The list shows what we use most. If your system runs on something else, we'll tell you honestly how much experience we have before we start.",
  },
  {
    q: "Will we be locked into your technology choices?",
    a: "No. We use mainstream, well-documented technology, keep everything in your repositories and cloud accounts, and document key decisions, so any competent team can take over.",
  },
  {
    q: "Do you recommend one cloud over the others?",
    a: "Not by default. AWS, Azure and Google Cloud are all strong; the right one usually depends on your existing contracts, team skills and compliance needs.",
  },
  {
    q: "Do you always use microservices?",
    a: "No. For most new products we start with a well-structured modular monolith, which is simpler and cheaper to run, and split out services only when there's a clear reason.",
  },
  {
    q: "How do you keep dependencies and frameworks up to date?",
    a: "Automated tools flag outdated and vulnerable packages on every build, and support agreements include regular, planned upgrades.",
  },
];
