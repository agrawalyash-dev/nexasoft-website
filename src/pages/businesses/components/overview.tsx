import { Building2 } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { units } from "../data";

const line = "bg-brand-navy/30";

const Structure = () => (
  <div
    aria-label="How Nexasoft is structured"
    role="group"
    className="relative isolate overflow-hidden bg-[#f5f7fb] px-4 py-8 sm:px-10 sm:py-10"
  >
    {/* blueprint grid */}
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(34_49_115/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(34_49_115/0.06)_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_at_50%_40%,black_30%,transparent_80%)]"
    />

    <div className="flex flex-col items-center">
      {/* Your business */}
      <div className="flex items-center gap-2.5 border border-brand-navy/25 bg-white px-4 py-2.5">
        <Building2
          aria-hidden="true"
          className="size-4.5 stroke-[1.6] text-brand-navy"
        />
        <span className="text-sm font-semibold">Your business</span>
      </div>
      <span aria-hidden="true" className={cn("h-8 w-px", line)} />

      {/* Engagement lead */}
      <div className="relative bg-brand-navy px-6 py-3.5 text-center text-white">
        <span
          aria-hidden="true"
          className="absolute -top-0.75 -left-0.75 size-1.5 bg-brand-coral"
        />
        <span className="block text-base font-semibold">
          One engagement lead
        </span>
        <span className="mt-0.5 block text-xs text-white/70">
          One contract, one point of accountability
        </span>
      </div>
      <span aria-hidden="true" className={cn("h-6 w-px", line)} />

      {/* The six businesses */}
      <ul className="grid w-full grid-cols-3 gap-x-3 gap-y-6">
        {units.map(({ slug, short, tagline, icon: Icon }, i) => {
          const col = i % 3;
          const firstRow = i < 3;
          return (
            <li key={slug} className="relative">
              {/* branch from the lead (first row) or from the tile above */}
              <span
                aria-hidden="true"
                className={cn("absolute bottom-full left-1/2 h-6 w-px", line)}
              />
              {firstRow && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -top-6 h-px",
                    line,
                    col === 0 && "left-1/2 -right-1.5",
                    col === 1 && "-right-1.5 -left-1.5",
                    col === 2 && "right-1/2 -left-1.5",
                  )}
                />
              )}
              {/* drop to the foundation (second row) */}
              {!firstRow && (
                <span
                  aria-hidden="true"
                  className={cn("absolute top-full left-1/2 h-6 w-px", line)}
                />
              )}

              <a
                href={`#${slug}`}
                className="group flex h-full flex-col border border-brand-navy/15 bg-white p-3 transition-colors duration-300 outline-none hover:border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-3 focus-visible:ring-brand-orange/60 sm:p-4 motion-reduce:transition-none"
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 stroke-[1.6] text-brand-navy transition-colors duration-300 group-hover:text-white"
                />
                <span className="mt-3 block text-sm leading-tight font-semibold sm:text-base">
                  {short}
                </span>
                <span className="mt-1 hidden text-xs leading-snug text-muted-foreground transition-colors duration-300 group-hover:text-white/70 sm:block">
                  {tagline}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Shared foundation */}
      <div className="mt-6 flex w-full flex-wrap items-center gap-x-4 gap-y-2 border border-brand-navy/20 bg-brand-navy/5 px-4 py-3">
        <span className="text-sm font-semibold text-brand-navy">
          Shared foundation
        </span>
        <span className="flex flex-wrap gap-1.5">
          {["Delivery playbook", "Quality gates", "Security reviews"].map((
            item,
          ) => (
            <span
              key={item}
              className="border border-brand-navy/15 bg-white px-2 py-0.5 text-xs text-foreground/80"
            >
              {item}
            </span>
          ))}
        </span>
      </div>
    </div>
  </div>
);

const Overview = () => {
  return (
    <section className="pb-16 lg:pb-22">
      <div className="global-padding-x">
        <div className="border-t border-border pt-16 lg:pt-22">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                title="How we're built"
                description="Specialist depth, without the hand-offs."
                size="compact"
                className="mb-8 lg:mb-8"
              />
              <p className="max-w-lg text-base leading-relaxed text-foreground/85 sm:text-lg">
                Most technology programmes need more than one kind of expert. At
                Nexasoft, each of them is a dedicated business with its own
                leadership and track record.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/85 sm:text-lg">
                You only ever deal with one lead. They bring in the right
                businesses at the right time, and every team works to the same
                standards, so nothing gets lost between them.
              </p>
            </div>

            <Structure />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
