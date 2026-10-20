import type { ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type BusinessUnit, units } from "../data";
import {
  AiScreen,
  CloudScreen,
  DigitalScreen,
  EnterpriseScreen,
  SecureScreen,
  TeamsScreen,
} from "./unit-screens";

const screens: Record<string, ComponentType> = {
  digital: DigitalScreen,
  enterprise: EnterpriseScreen,
  cloud: CloudScreen,
  "ai-data": AiScreen,
  secure: SecureScreen,
  teams: TeamsScreen,
};

const Unit = ({ unit, flip }: { unit: BusinessUnit; flip: boolean }) => {
  const Icon = unit.icon;
  const Screen = screens[unit.slug];
  const [value, label] = unit.highlight;

  return (
    <article
      id={unit.slug}
      aria-labelledby={`${unit.slug}-title`}
      className="scroll-mt-24 border-t border-border py-16 lg:scroll-mt-28 lg:py-22"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Story */}
        <div className={cn(flip && "lg:order-last")}>
          <Icon
            aria-hidden="true"
            className="size-8 stroke-[1.4] text-brand-navy"
          />
          <h3
            id={`${unit.slug}-title`}
            className="mt-5 text-4xl leading-tight font-medium tracking-tight lg:text-5xl"
          >
            {unit.name}
          </h3>
          <p className="mt-2 text-lg font-medium text-brand-coral">
            {unit.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
            {unit.lead}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {unit.detail}
          </p>
          <Button
            variant="outline"
            className="mt-8 border-brand-navy text-brand-navy"
            nativeButton={false}
            render={<Link to="/services" />}
          >
            {unit.cta}
            <ArrowRight />
          </Button>
        </div>

        {/* Visual: the unit's product screen + headline stat */}
        <div
          aria-hidden="true"
          className={cn("relative isolate overflow-hidden", unit.art)}
        >
          <span className="absolute inset-0 -z-10 bg-[#0b1430]/20" />
          <div className="relative h-72 overflow-hidden sm:h-80">
            <div className="absolute inset-x-4 top-6 sm:inset-x-10 sm:top-8">
              <Screen />
            </div>
          </div>
          <div className="relative flex items-baseline gap-4 border-t-2 border-brand-coral bg-brand-navy px-5 py-4 text-white sm:px-7 sm:py-5">
            <span className="text-3xl leading-none font-semibold tracking-tight whitespace-nowrap tabular-nums sm:text-4xl">
              {value}
            </span>
            <span className="text-sm leading-snug text-white/80">{label}</span>
          </div>
        </div>
      </div>

      {/* Offerings */}
      <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {unit.offerings.map(([title, desc]) => (
          <li key={title} className="relative border-t border-border pt-5">
            <span
              aria-hidden="true"
              className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
            />
            <Link
              to="/services"
              className="group inline-flex items-center gap-1.5 text-lg font-semibold outline-none hover:text-brand-navy focus-visible:underline"
            >
              {title}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
            <p className="mt-1.5 text-base text-muted-foreground">{desc}</p>
          </li>
        ))}
      </ul>

      {/* Facts */}
      <dl className="mt-12 grid grid-cols-2 border-t border-l border-border lg:grid-cols-4">
        {unit.facts.map(([term, detail]) => (
          <div
            key={term}
            className="border-r border-b border-border p-5 sm:p-6"
          >
            <dt className="text-sm text-muted-foreground">{term}</dt>
            <dd className="mt-1.5 text-base leading-snug font-semibold text-brand-navy sm:text-lg">
              {detail}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
};

const BusinessUnits = () => {
  return (
    <section id="units" className="scroll-mt-20 pb-6 lg:pb-10">
      <div className="global-padding-x">
        <SectionHeading
          title="Our Businesses"
          description="Find the team built for what you need."
          action={{ label: "View All Services", href: "/services" }}
        />
        {units.map((unit, i) => (
          <Unit key={unit.slug} unit={unit} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default BusinessUnits;
