import HeroBg from "@/components/hero-bg";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Asterisk, Globe } from "lucide-react";
import { Link } from "react-router";
import HeroBackdrop from "./hero-backdrop";
import TechMarquee from "./tech-marquee";

const lineAnimation =
  "block animate-in fade-in slide-in-from-bottom-7 duration-900 ease-out fill-mode-both motion-reduce:animate-none";

const actions = [
  {
    label: ["Explore Our", "Capabilities"],
    href: "/services",
    variant: "navy" as const,
  },
  {
    label: ["Talk to", "Our Team"],
    href: "/contact",
    variant: "gray" as const,
  },
];

const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 21.5h20" />
    <path d="M6 21.5V3.5l8 2.5v15.5" />
    <path d="M14 10l4 1.5v10" />
    <path d="M10 9v.01M10 12v.01M10 15v.01M10 18v.01" />
  </svg>
);

const highlights = [
  { icon: Globe, label: "Global Presence" },
  { icon: BuildingIcon, label: "Enterprise Grade" },
  { icon: Asterisk, label: "Multi-Industry Expertise" },
];

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-18">
      <HeroBackdrop />
      <HeroBg />

      <div className="global-padding-x">
        <h1 className="mb-10 text-5xl leading-none font-semibold tracking-tight sm:text-6xl md:text-7xl lg:mb-11 xl:text-8xl">
          <span className={lineAnimation}>Technology That Moves</span>
          <span className={cn(lineAnimation, "text-brand-coral delay-150")}>
            Businesses Forward
          </span>
        </h1>

        <div className="grid items-end gap-10 lg:grid-cols-2">
          <p className="max-w-xs text-lg text-pretty">
            Building intelligent software, digital infrastructure and secure
            technology services for businesses worldwide.
          </p>

          <div className="grid grid-cols-2 gap-1">
            {actions.map((action) => (
              <Link
                key={action.href}
                to={action.href}
                className={cn(
                  "group relative isolate flex min-h-32 items-end overflow-hidden p-4 sm:min-h-38 sm:p-5 text-base leading-snug font-medium transition-transform duration-300 outline-none hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-brand-orange/60 motion-reduce:transition-none",
                  action.variant === "navy"
                    ? "bg-brand-navy text-white"
                    : "bg-brand-gray text-foreground",
                )}
              >
                {/* Decorative layers */}
                {action.variant === "navy"
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
                  {action.label[0]}
                  <br />
                  {action.label[1]}
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute top-4 right-4 size-8 stroke-[1.6] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>

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
                {/* Corner node — echoes the particle network in the background */}
                <span
                  aria-hidden="true"
                  className="absolute -top-0.75 -left-0.75 size-1.5 bg-brand-coral"
                />
                {label}
              </span>
            </li>
          ))}
        </ul>

        <TechMarquee className="mt-14" />
      </div>
    </section>
  );
};

export default Hero;
