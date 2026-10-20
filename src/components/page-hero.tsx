import type { ReactNode } from "react";
import { ArrowDown, type LucideIcon } from "lucide-react";
import HeroBg from "@/components/hero-bg";
import PageHeroBackdrop from "@/components/page-hero-backdrop";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/utils";

/*
 * Inner-page hero in the home hero's language: particle network, two-line
 * headline with a coral second line, intro beside corner-rule stats, a row of
 * navy/grey tiles that jump to sections on the page, and icon highlights.
 */

export type HeroStat = { value: number; suffix: string; label: string };
export type HeroTile = { href: string; label: ReactNode };
export type HeroHighlight = { icon: LucideIcon; label: string };

const lineAnimation =
  "block animate-in fade-in slide-in-from-bottom-7 duration-900 ease-out fill-mode-both motion-reduce:animate-none";

const Stat = ({ value, suffix, label }: HeroStat) => {
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

type PageHeroProps = {
  title: [string, string];
  intro: ReactNode;
  stats: HeroStat[];
  tiles: HeroTile[];
  tilesLabel: string;
  highlights: HeroHighlight[];
};

const PageHero = (
  { title, intro, stats, tiles, tilesLabel, highlights }: PageHeroProps,
) => {
  return (
    <section className="relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-18 lg:pb-22">
      <PageHeroBackdrop />
      <HeroBg />

      <div className="global-padding-x">
        <h1 className="mb-10 text-5xl leading-none font-semibold tracking-tight sm:text-6xl md:text-7xl lg:mb-11 xl:text-8xl">
          <span className={lineAnimation}>{title[0]}</span>
          <span className={cn(lineAnimation, "text-brand-coral delay-150")}>
            {title[1]}
          </span>
        </h1>

        <div className="grid items-end gap-10 lg:grid-cols-2">
          <p className="max-w-xl text-lg text-pretty">{intro}</p>
          <dl className="grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((s) => <Stat key={s.label} {...s} />)}
          </dl>
        </div>

        {tiles.length > 0 && (
          <nav aria-label={tilesLabel} className="mt-12 sm:mt-14">
            <ul
              className={cn(
                "grid grid-cols-2 gap-1",
                tiles.length === 4
                  ? "lg:grid-cols-4"
                  : "sm:grid-cols-3 xl:grid-cols-6",
              )}
            >
              {tiles.map(({ href, label }, i) => {
                const navy = i % 2 === 0;
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className={cn(
                        "group relative isolate flex h-full min-h-32 items-end overflow-hidden p-4 pr-12 text-base leading-snug font-medium transition-transform duration-300 outline-none hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-brand-orange/60 sm:min-h-38 sm:p-5 sm:pr-12 motion-reduce:transition-none",
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
                      <span>{label}</span>
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
        )}

        <ul className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6 xl:gap-10">
          {highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-start gap-4 md:flex-col md:gap-5 xl:flex-row xl:gap-4"
            >
              <Icon
                aria-hidden="true"
                className="mt-3 size-8 shrink-0 stroke-[1.2] text-brand-navy sm:mt-3.5 sm:size-10 md:mt-0 xl:mt-3.5"
              />
              <span className="relative min-h-15 flex-1 border-t border-l border-brand-navy pt-4 pr-5 pl-5 text-base leading-tight font-semibold text-brand-navy sm:min-h-17 sm:pt-5 sm:pl-6 sm:text-lg md:self-stretch">
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

export default PageHero;
