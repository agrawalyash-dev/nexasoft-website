import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { type CaseCategory, caseStudies, categories } from "../data";
import CaseScreen from "./case-screen";

/*
 * Case study index: industry filters, then cards that open each study's own
 * page (/case-studies/:slug), the way large IT services firms present work.
 */
export const CaseShowcase = () => {
  const [category, setCategory] = useState<CaseCategory>("all");
  const visible = caseStudies.filter((c) =>
    category === "all" || c.category === category
  );

  return (
    <section id="case-studies" className="pb-16 lg:pb-22">
      <div className="global-padding-x">
        <SectionHeading
          title="Client case studies"
          description="Challenges solved, choices made and outcomes measured."
        />

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter by industry"
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const active = category === cat.id;
              const count = cat.id === "all"
                ? caseStudies.length
                : caseStudies.filter((c) => c.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 border px-3.5 py-2 text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/60",
                    active
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-border text-foreground/80 hover:border-brand-navy hover:text-brand-navy",
                  )}
                >
                  {cat.name}
                  <span
                    className={cn(
                      "text-xs tabular-nums",
                      active ? "text-white/70" : "text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            Showing {visible.length} of {caseStudies.length}
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cs) => (
            <li
              key={cs.id}
              className="animate-in fade-in duration-300 motion-reduce:animate-none"
            >
              <Link
                to={`/case-studies/${cs.slug}`}
                className={cn(
                  "group relative isolate flex h-full flex-col overflow-hidden text-white outline-none ring-1 ring-white/10 ring-inset focus-visible:ring-3 focus-visible:ring-brand-orange/60",
                  cs.art,
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-linear-to-b from-[#0b1430]/10 via-[#0b1430]/60 via-50% to-[#0b1430]/95"
                />
                <span
                  aria-hidden="true"
                  className="relative block h-56 overflow-hidden mask-b-from-45% mask-b-to-95%"
                >
                  <span className="absolute inset-x-6 top-7 block transition-transform duration-500 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none">
                    <CaseScreen item={cs} />
                  </span>
                </span>

                <span className="flex flex-1 flex-col px-6 pt-2 pb-6">
                  <span className="flex min-w-0 items-center gap-2 text-xs">
                    <span className="shrink-0 bg-white/15 px-2 py-0.5 font-medium">
                      {cs.industry}
                    </span>
                    <span className="truncate text-white/60">{cs.client}</span>
                  </span>
                  <h3 className="mt-3 mb-8 text-lg leading-snug font-semibold tracking-tight">
                    {cs.title}
                  </h3>

                  <span className="mt-auto flex items-end justify-between gap-4 border-t border-white/15 pt-5">
                    <span className="block min-w-0">
                      <span className="block text-4xl leading-none font-semibold tracking-tight whitespace-nowrap tabular-nums">
                        {cs.metric}
                      </span>
                      <span className="mt-2 block text-sm text-white/70">
                        {cs.metricLabel}
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
