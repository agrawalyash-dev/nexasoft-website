import { useMemo, useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import {
  type CaseCategory,
  caseStudies,
  type CaseStudyItem,
  categories,
} from "../data";
import { CaseModal } from "./case-modal";
import { Button } from "@/components/ui/button";

export const CaseShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalCase, setActiveModalCase] = useState<CaseStudyItem | null>(
    null,
  );

  const filteredCases = useMemo(() => {
    return caseStudies.filter((item) => {
      const matchesCategory = selectedCategory === "all" ||
        item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.industry.toLowerCase().includes(q) ||
        item.overview.toLowerCase().includes(q) ||
        item.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="case-studies" className="py-16 lg:py-22">
      <div className="global-padding-x">
        <SectionHeading
          title={
            <>
              Client Engagements &amp;
              <br />
              Production Case Studies
            </>
          }
          description="Browse by sector to review challenges solved, architectural choices, and measured outcomes."
        />

        {/* Filter Controls & Search Bar */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter case studies by industry"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              const count = cat.id === "all"
                ? caseStudies.length
                : caseStudies.filter((c) => c.category === cat.id).length;

              return (
                <Button
                  key={cat.id}
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "group focus-visible:ring-2 focus-visible:ring-brand-orange",
                    active
                      ? "border-brand-navy bg-brand-navy text-white shadow-sm"
                      : "border-border bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
                  )}
                >
                  <span>{cat.name}</span>
                  <span
                    className={cn(
                      "rounded-full size-6 flex items-center justify-center tabular-nums",
                      active
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-slate-200",
                    )}
                  >
                    {count}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        {filteredCases.length === 0
          ? (
            <div className="rounded-xl border border-dashed border-border p-12 text-center">
              <Filter className="mx-auto size-8 text-slate-400" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                No case studies match your filter
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try choosing another industry category or clearing your search
                term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-md bg-brand-navy px-4 py-2 text-xs font-semibold text-white hover:bg-brand-blue"
              >
                View all case studies
              </button>
            </div>
          )
          : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCases.map((cs: CaseStudyItem) => {
                const Screen = cs.ScreenComponent;
                return (
                  <div
                    key={cs.id}
                    onClick={() => setActiveModalCase(cs)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveModalCase(cs);
                      }
                    }}
                    className={cn(
                      "group relative isolate flex flex-col overflow-hidden text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl outline-none ring-1 ring-white/10 ring-inset focus-visible:ring-3 focus-visible:ring-brand-orange/60 rounded-sm cursor-pointer",
                      cs.art,
                    )}
                  >
                    {/* Dark gradient overlay */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 bg-linear-to-b from-[#0b1430]/20 via-[#0b1430]/70 via-50% to-[#0b1430]/95"
                    />

                    {/* App Screen Mockup Header */}
                    <span
                      aria-hidden="true"
                      className="relative block h-56 overflow-hidden mask-b-from-40% mask-b-to-95% bg-black/10"
                    >
                      <span className="absolute inset-x-5 top-6 block transition-transform duration-500 ease-out group-hover:-translate-y-2 motion-reduce:transition-none">
                        <Screen />
                      </span>
                    </span>

                    {/* Story Content */}
                    <div className="flex flex-1 flex-col p-6 pt-3">
                      {/* Top tags */}
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="shrink-0 rounded bg-white/15 px-2 py-0.5 font-medium tracking-wide">
                          {cs.industry}
                        </span>
                        <span className="truncate text-white/70">
                          {cs.client}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="mt-3 text-lg leading-snug font-semibold tracking-tight text-white group-hover:text-white/95">
                        {cs.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-2 text-xs leading-relaxed text-white/75 line-clamp-3">
                        {cs.overview}
                      </p>

                      {/* Technology tags preview */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cs.technologies.slice(0, 4).map((tech: string) => (
                          <span
                            key={tech}
                            className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/90"
                          >
                            {tech}
                          </span>
                        ))}
                        {cs.technologies.length > 4 && (
                          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/70">
                            +{cs.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Big Metric Banner & Read Action */}
                      <div className="flex items-end justify-between gap-4 border-t border-white/15 pt-5 mt-6">
                        <div className="min-w-0">
                          <span className="block text-3xl sm:text-4xl leading-none font-bold tracking-tight whitespace-nowrap tabular-nums text-white">
                            {cs.metric}
                          </span>
                          <span className="mt-1.5 block text-xs text-white/75 line-clamp-1">
                            {cs.metricLabel}
                          </span>
                        </div>

                        <span
                          aria-hidden="true"
                          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-brand-navy motion-reduce:transition-none"
                        >
                          <ArrowUpRight className="size-4.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
      </div>

      {/* Detail Modal */}
      <CaseModal
        caseStudy={activeModalCase}
        onClose={() => setActiveModalCase(null)}
      />
    </section>
  );
};
