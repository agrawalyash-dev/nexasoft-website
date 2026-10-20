import { ArrowDown, BadgeCheck, MapPin, UserRound } from "lucide-react";
import HeroBg from "@/components/hero-bg";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/utils";
import { groupStats, units } from "../data";

const lineAnimation =
  "block animate-in fade-in slide-in-from-bottom-7 duration-900 ease-out fill-mode-both motion-reduce:animate-none";

const highlights = [
  { icon: MapPin, label: "Headquartered in Vadodara" },
  { icon: UserRound, label: "One engagement lead" },
  { icon: BadgeCheck, label: "One delivery standard" },
];

/* Stat with the home hero's corner rule + coral node. */
const Stat = ({ value, suffix, label }: (typeof groupStats)[number]) => {
  const [ref, current] = useCountUp<HTMLElement>(value);
  return (
    <div className="relative flex flex-col-reverse justify-end border-t border-l border-brand-navy pt-4 pl-4 sm:pl-5">
      <span
        aria-hidden="true"
        className="absolute -top-0.75 -left-0.75 size-1.5 bg-brand-coral"
      />
      <dt className="mt-1.5 text-sm text-muted-foreground">{label}</dt>
      <dd>
        <b
          ref={ref}
          className="block text-3xl leading-none font-semibold tracking-tight text-brand-navy tabular-nums sm:text-4xl"
        >
          {current}
          {suffix}
        </b>
      </dd>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-18 lg:pb-22">
      <HeroBg />

      <div className="global-padding-x">
        <h1 className="mb-10 text-5xl leading-none font-semibold tracking-tight sm:text-6xl md:text-7xl lg:mb-11 xl:text-8xl">
          <span className={lineAnimation}>Six businesses,</span>
          <span className={cn(lineAnimation, "text-brand-coral delay-150")}>
            one partner.
          </span>
        </h1>

        <div className="grid items-end gap-10 lg:grid-cols-2">
          <p className="max-w-lg text-lg text-pretty">
            Nexasoft is a technology group headquartered in Vadodara. Our six
            businesses share one engineering culture, one talent pipeline and
            one standard for delivery, so you get specialist depth without
            juggling vendors.
          </p>

          <dl className="grid grid-cols-3 gap-4 sm:gap-6">
            {groupStats.slice(0, 3).map((s) => <Stat key={s.label} {...s} />)}
          </dl>
        </div>

        {/* The six businesses */}
        <nav aria-label="Our businesses" className="mt-12 sm:mt-14">
          <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 xl:grid-cols-6">
            {units.map(({ slug, short }, i) => {
              const navy = i % 2 === 0;
              return (
                <li key={slug}>
                  <a
                    href={`#${slug}`}
                    className={cn(
                      "group relative isolate flex min-h-32 items-end overflow-hidden p-4 text-base leading-snug font-medium transition-transform duration-300 outline-none hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-brand-orange/60 sm:min-h-38 sm:p-5 motion-reduce:transition-none",
                      navy
                        ? "bg-brand-navy text-white"
                        : "bg-brand-gray text-foreground",
                    )}
                  >
                    {navy
                      ? (
                        <>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 bg-radial-[at_88%_12%] from-brand-coral/50 to-transparent to-45%"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[28px_28px]"
                          />
                        </>
                      )
                      : (
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 bg-radial-[at_12%_90%] from-brand-navy/15 to-transparent to-45%"
                        />
                      )}

                    <span>
                      Nexasoft
                      <br />
                      {short}
                    </span>

                    <ArrowDown
                      aria-hidden="true"
                      className="absolute top-4 right-4 size-7 stroke-[1.6] transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Highlights, as on the home hero */}
        <ul className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6 xl:flex xl:flex-wrap xl:gap-x-12 xl:gap-y-6">
          {highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-start gap-4 md:flex-col md:gap-5 xl:flex-row xl:gap-4"
            >
              <Icon
                aria-hidden="true"
                className="mt-3 size-8 shrink-0 stroke-[1.2] text-brand-navy sm:mt-3.5 sm:size-10 md:mt-0 xl:mt-3.5"
              />
              <span className="relative min-h-15 flex-1 border-t border-l border-brand-navy pt-4 pr-5 pl-5 text-base leading-tight font-semibold text-brand-navy sm:min-h-17 sm:pt-5 sm:pl-6 sm:text-lg md:self-stretch xl:min-w-52 xl:flex-none xl:pr-11">
                <span
                  aria-hidden="true"
                  className="absolute -top-0.75 -left-0.75 size-1.5 bg-brand-coral"
                />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
