import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/section-heading";
import {
  LoanMock,
  MigrationMock,
  PlantsMock,
  RecommendationsMock,
} from "./case-mockups";

const cases = [
  {
    industry: "Banking",
    client: "Mid-size NBFC",
    title: "Rebuilt loan approvals platform for digital lending",
    stat: "62%",
    result: "Faster loan processing",
    art: "bg-art-1",
    Mock: LoanMock,
  },
  {
    industry: "Healthcare",
    client: "Regional hospital network",
    title: "Moved 40 hospital systems to the cloud",
    stat: "0 min",
    result: "Downtime during migration",
    art: "bg-art-4",
    Mock: MigrationMock,
  },
  {
    industry: "Retail",
    client: "Fashion e-commerce brand",
    title: "AI-powered product recommendations",
    stat: "+28%",
    result: "Higher conversion",
    art: "bg-art-2",
    Mock: RecommendationsMock,
  },
  {
    industry: "Manufacturing",
    client: "Auto-components maker",
    title: "One real-time operations view across plants",
    stat: "9",
    result: "Factories connected",
    art: "bg-art-5",
    Mock: PlantsMock,
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-16 lg:py-22">
      <div className="global-padding-x">
        <SectionHeading
          title={
            <>
              Featured
              <br />
              Case Studies
            </>
          }
          description="Real results, real impact."
          action={{ label: "Read All", href: "/case-studies" }}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map(({ Mock, ...c }) => (
            <Link
              key={c.industry}
              to="/case-studies"
              className={cn(
                "group relative isolate flex flex-col overflow-hidden text-white outline-none ring-1 ring-white/10 ring-inset focus-visible:ring-3 focus-visible:ring-brand-orange/60",
                c.art,
              )}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-b from-[#0b1430]/10 via-[#0b1430]/60 via-50% to-[#0b1430]/95"
              />

              {/* Visual: the product we built, fading into the card */}
              <span
                aria-hidden="true"
                className="relative block h-56 overflow-hidden mask-b-from-40% mask-b-to-95%"
              >
                <span className="absolute inset-x-6 top-7 block transition-transform duration-500 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none">
                  <Mock />
                </span>
              </span>

              {/* Story */}
              <span className="flex flex-1 flex-col px-6 pt-2 pb-6">
                <span className="flex min-w-0 items-center gap-2 text-xs">
                  <span className="shrink-0 rounded-sm bg-white/15 px-2 py-0.5 font-medium">
                    {c.industry}
                  </span>
                  <span className="truncate text-white/60">{c.client}</span>
                </span>
                <h3 className="mt-3 mb-8 text-lg leading-snug font-semibold tracking-tight">
                  {c.title}
                </h3>

                <span className="mt-auto flex items-end justify-between gap-4 border-t border-white/15 pt-5">
                  <span className="block min-w-0">
                    <span className="block text-4xl leading-none font-semibold tracking-tight whitespace-nowrap tabular-nums">
                      {c.stat}
                    </span>
                    <span className="mt-2 block text-sm text-white/70">
                      {c.result}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-brand-navy motion-reduce:transition-none"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
