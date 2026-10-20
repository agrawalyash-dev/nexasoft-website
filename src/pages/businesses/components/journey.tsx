import { useState } from "react";
import { UserRound } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { journey, promises, units } from "../data";

const pad = (n: number) => String(n).padStart(2, "0");

type Lane = {
  name: string;
  icon: typeof UserRound;
  active: boolean[];
  lead?: boolean;
};

const lanes: Lane[] = [
  {
    name: "Engagement lead",
    icon: UserRound,
    active: journey.map(() => true),
    lead: true,
  },
  ...units.map((u) => ({
    name: u.short,
    icon: u.icon,
    active: journey.map((step) => step.units.includes(u.short)),
  })),
];

const Plan = (
  { stage, onSelect }: { stage: number; onSelect: (i: number) => void },
) => (
  <div className="overflow-hidden rounded-md bg-white text-slate-700 shadow-[0_2px_6px_rgb(0_0_0/0.15),0_40px_80px_-30px_rgb(0_0_0/0.6)]">
    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-xs">
      <span className="font-semibold text-slate-900">Engagement plan</span>
      <span className="text-slate-500">Who is involved at each stage</span>
    </div>

    <div className="px-3 pt-3 pb-4 sm:px-5">
      {/* stage headers */}
      <div className="grid grid-cols-[5.5rem_repeat(5,minmax(0,1fr))] sm:grid-cols-[9rem_repeat(5,minmax(0,1fr))]">
        <span />
        {journey.map((step, i) => (
          <button
            key={step.title}
            type="button"
            tabIndex={-1}
            onClick={() => onSelect(i)}
            className={cn(
              "border-b-2 px-1 pb-2 text-center text-[11px] font-semibold transition-colors sm:text-xs",
              i === stage
                ? "border-brand-coral text-brand-navy"
                : "border-transparent text-slate-400 hover:text-slate-700",
            )}
          >
            <span className="sm:hidden">{pad(i + 1)}</span>
            <span className="hidden sm:inline">{step.title}</span>
          </button>
        ))}
      </div>

      {/* lanes */}
      <div className="relative mt-1">
        {/* active column highlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-22 right-0 grid grid-cols-5 sm:left-36"
        >
          {journey.map((step, i) => (
            <span
              key={step.title}
              className={cn(
                "transition-colors duration-300",
                i === stage && "bg-[#eef1fb]",
              )}
            />
          ))}
        </span>

        {lanes.map(({ name, icon: Icon, active, lead }) => (
          <div
            key={name}
            className={cn(
              "relative grid grid-cols-[5.5rem_repeat(5,minmax(0,1fr))] items-center border-b border-slate-100 py-2 last:border-b-0 sm:grid-cols-[9rem_repeat(5,minmax(0,1fr))]",
              lead && "border-slate-200",
            )}
          >
            <span className="flex min-w-0 items-center gap-2 pr-2">
              <Icon
                aria-hidden="true"
                className={cn(
                  "size-3.5 shrink-0 stroke-[1.8]",
                  lead ? "text-brand-coral" : "text-brand-navy",
                )}
              />
              <span
                className={cn(
                  "truncate text-[11px] sm:text-xs",
                  lead ? "font-semibold text-slate-900" : "text-slate-700",
                )}
              >
                {lead
                  ? (
                    <>
                      <span className="sm:hidden">Lead</span>
                      <span className="hidden sm:inline">{name}</span>
                    </>
                  )
                  : name}
              </span>
            </span>
            {active.map((on, i) => (
              <span key={i} className="relative h-3.5">
                {on && (
                  <span
                    className={cn(
                      "absolute inset-y-0 transition-colors duration-300",
                      !active[i - 1] ? "left-1 rounded-l-sm" : "left-0",
                      !active[i + 1] ? "right-1 rounded-r-sm" : "right-0",
                      lead
                        ? "bg-brand-coral"
                        : i === stage
                        ? "bg-brand-navy"
                        : "bg-brand-navy/25",
                    )}
                  />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Journey = () => {
  const [stage, setStage] = useState(0);

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-16 text-white lg:py-22">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-size-[32px_32px] mask-l-from-30% mask-l-to-80%"
      />

      <div className="global-padding-x">
        <SectionHeading
          tone="dark"
          title="One partner, end to end"
          description="The right specialists at every stage, under one roof."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
          {/* Stages */}
          <div>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/80">
              You never have to work out which business you need. One engagement
              lead stays with you throughout and brings in each specialist team
              at the right moment.
            </p>

            <ol className="border-t border-white/15">
              {journey.map((step, i) => {
                const open = i === stage;
                return (
                  <li key={step.title} className="border-b border-white/15">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() =>
                        setStage(i)}
                      onMouseEnter={() =>
                        setStage(i)}
                      className="group flex w-full items-baseline gap-4 py-4 text-left outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/60"
                    >
                      <span
                        className={cn(
                          "w-6 shrink-0 text-sm font-semibold tabular-nums transition-colors",
                          open ? "text-brand-coral" : "text-white/45",
                        )}
                      >
                        {pad(i + 1)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "block text-xl font-semibold tracking-tight transition-colors",
                            open
                              ? "text-white"
                              : "text-white/60 group-hover:text-white/85",
                          )}
                        >
                          {step.title}
                        </span>
                        <span
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none",
                            open
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <span className="overflow-hidden">
                            <span className="block pt-2 text-sm leading-relaxed text-white/75">
                              {step.text}
                            </span>
                            <span className="block pt-2 text-xs text-white/55">
                              Involved: {step.units.join(", ")}
                            </span>
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Plan */}
          <div aria-hidden="true">
            <Plan stage={stage} onSelect={setStage} />
          </div>
        </div>

        {/* Promises */}
        <ul className="mt-16 grid gap-8 sm:grid-cols-3 lg:mt-20">
          {promises.map((p) => (
            <li
              key={p.title}
              className="relative border-t border-white/15 pt-5"
            >
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
              />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/75">
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Journey;
