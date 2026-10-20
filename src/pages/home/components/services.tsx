import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code,
  LayoutGrid,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/section-heading";
import {
  AiDataMock,
  CloudMock,
  CybersecurityMock,
  DigitalEngineeringMock,
  EnterpriseAppsMock,
  ModernizationMock,
} from "./service-mockups";

const smallTile = "top-5 left-5 -right-12 sm:left-6 lg:left-[24%] lg:-right-16";

const services = [
  {
    title: "Digital Engineering",
    slug: "digital-engineering",
    description:
      "Custom web, mobile and platform products, designed for performance and built to scale with your business.",
    icon: Code,
    art: "bg-art-1",
    Mock: DigitalEngineeringMock,
    mock:
      "top-5 left-5 -right-24 sm:left-6 md:left-[28%] md:-right-6 lg:left-[40%]",
    placement: "md:col-span-2",
  },
  {
    title: "Enterprise Applications",
    slug: "enterprise-applications",
    description:
      "ERP, CRM and core platform implementation, integration and support that keeps every team on the same data.",
    icon: LayoutGrid,
    art: "bg-art-5",
    Mock: EnterpriseAppsMock,
    mock: "top-5 left-5 -right-16 sm:left-6",
    placement: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
  },
  {
    title: "AI & Data Analytics",
    slug: "ai-data-analytics",
    description:
      "Machine learning, generative AI and modern data platforms that turn information into decisions.",
    icon: BrainCircuit,
    art: "bg-art-3",
    Mock: AiDataMock,
    mock: "top-5 left-5 -right-12 sm:left-6",
    placement: "lg:row-span-2",
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    description:
      "Migration, DevOps and managed infrastructure on AWS, Azure and GCP.",
    icon: Cloud,
    art: "bg-art-2",
    Mock: CloudMock,
    mock: smallTile,
    placement: "",
  },
  {
    title: "Application Modernization",
    slug: "application-modernization",
    description:
      "Move legacy systems to cloud-native architectures without interrupting operations.",
    icon: RefreshCw,
    art: "bg-art-6",
    Mock: ModernizationMock,
    mock: smallTile,
    placement: "",
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Threat detection, compliance and security built into every layer.",
    icon: ShieldCheck,
    art: "bg-art-4",
    Mock: CybersecurityMock,
    mock: smallTile,
    placement: "md:col-span-2 lg:col-span-1",
  },
];

// Below lg descriptions are always visible; from lg they reveal on hover/focus (always on touch).
const reveal =
  "mt-1.5 max-h-24 opacity-100 transition-[margin,max-height,opacity] duration-300 lg:mt-0 lg:max-h-0 lg:opacity-0 lg:group-hover:mt-1.5 lg:group-hover:max-h-24 lg:group-hover:opacity-100 lg:group-focus-visible:mt-1.5 lg:group-focus-visible:max-h-24 lg:group-focus-visible:opacity-100 lg:pointer-coarse:mt-1.5 lg:pointer-coarse:max-h-24 lg:pointer-coarse:opacity-100 motion-reduce:transition-none";

// The fade behind the text grows with the description so it never overlaps the screen.
const scrim =
  "h-48 transition-[height] duration-300 lg:h-32 lg:group-hover:h-48 lg:group-focus-visible:h-48 lg:pointer-coarse:h-48 motion-reduce:transition-none";

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-22">
      <div className="global-padding-x">
        <SectionHeading
          title="What We Do"
          description="End-to-end technology services to help you build, modernize, and grow."
          action={{ label: "View All Services", href: "/services" }}
        />

        <div className="grid gap-2 md:grid-cols-2 lg:auto-rows-52 lg:grid-cols-3">
          {services.map(
            (
              {
                title,
                slug,
                description,
                icon: Icon,
                art,
                Mock,
                mock,
                placement,
              },
            ) => (
              <Link
                key={title}
                to={`/services#${slug}`}
                className={cn(
                  "group relative isolate flex min-h-80 flex-col justify-end overflow-hidden border border-border bg-slate-900 p-5 text-white outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/60 sm:p-6 lg:min-h-0",
                  placement,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn("absolute inset-0 -z-30", art)}
                />

                <div
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute -z-20 select-none",
                    mock,
                  )}
                >
                  <Mock />
                </div>

                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-0 -z-10 bg-linear-to-t from-[#0b1430]/95 from-40% to-[#0b1430]/0",
                    scrim,
                  )}
                />

                <span className="mb-3 flex size-9 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                  <Icon aria-hidden="true" className="size-4.5 stroke-[1.8]" />
                </span>

                <h3 className="flex items-center gap-1.5 text-lg font-semibold">
                  {title}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4.5 text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                  />
                </h3>
                {/* md: reserve 3 lines so titles in a 2-up row share a baseline */}
                <p
                  className={cn(
                    "max-w-md overflow-hidden text-sm leading-normal text-white/80 md:min-h-16 lg:min-h-0 lg:pointer-coarse:min-h-16",
                    reveal,
                  )}
                >
                  {description}
                </p>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
