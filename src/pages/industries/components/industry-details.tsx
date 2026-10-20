import type { ComponentType } from "react";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Customer360Screen,
  DocumentExtractionScreen,
  ProductionBoardScreen,
  StorefrontScreen,
} from "@/pages/home/components/work-screens";
import { services } from "@/pages/services/data";
import { industries, type Industry } from "../data";

/* Industry-specific product screens, shared with the home page's Featured Work. */
const screens: Record<string, ComponentType> = {
  "banking-financial-services": Customer360Screen,
  "healthcare-life-sciences": DocumentExtractionScreen,
  "retail-ecommerce": StorefrontScreen,
  "manufacturing-logistics": ProductionBoardScreen,
};

const serviceName = Object.fromEntries(services.map((s) => [s.slug, s.name]));

const BrowserFrame = (
  { url, children }: { url: string; children: React.ReactNode },
) => (
  <div className="overflow-hidden rounded-md bg-white shadow-[0_2px_6px_rgb(0_0_0/0.15),0_30px_60px_-20px_rgb(0_0_0/0.6)]">
    <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-100 px-3 py-2">
      <span className="flex gap-1.5">
        <span className="size-2 rounded-full bg-slate-300" />
        <span className="size-2 rounded-full bg-slate-300" />
        <span className="size-2 rounded-full bg-slate-300" />
      </span>
      <span className="flex flex-1 items-center gap-1.5 truncate rounded bg-white px-2 py-1 text-[9px] text-slate-500">
        <Lock className="size-2.5 shrink-0" />
        {url}
      </span>
    </div>
    {children}
  </div>
);

const IndustryDetail = (
  { industry, flip }: { industry: Industry; flip: boolean },
) => {
  const Icon = industry.icon;
  const Screen = screens[industry.slug];

  return (
    <article
      id={industry.slug}
      aria-labelledby={`${industry.slug}-title`}
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
            id={`${industry.slug}-title`}
            className="mt-5 text-4xl leading-tight font-medium tracking-tight lg:text-5xl"
          >
            {industry.name}
          </h3>
          <p className="mt-2 max-w-xl text-lg font-medium text-brand-coral">
            {industry.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            {industry.summary}
          </p>

          <div className="mt-7 max-w-xl border-l-3 border-brand-navy pl-5">
            <p className="text-sm font-semibold">Challenges we hear</p>
            <ul className="mt-2 space-y-1.5">
              {industry.challenges.map((c) => (
                <li key={c} className="text-base text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="outline"
            className="mt-8 border-brand-navy text-brand-navy"
            nativeButton={false}
            render={<Link to="/contact" />}
          >
            {industry.cta}
            <ArrowRight />
          </Button>
        </div>

        {/* Visual: product screen + outcomes + featured work */}
        <div className={cn("relative isolate overflow-hidden", industry.art)}>
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[#0b1430]/20"
          />
          <div
            aria-hidden="true"
            className="relative h-72 overflow-hidden sm:h-80"
          >
            <div className="absolute inset-x-4 top-6 sm:inset-x-10 sm:top-8">
              <BrowserFrame url={industry.screenUrl}>
                <Screen />
              </BrowserFrame>
            </div>
          </div>
          <dl className="relative grid grid-cols-3 border-t-2 border-brand-coral bg-brand-navy text-white">
            {industry.outcomes.map(([value, label]) => (
              <div
                key={label}
                className="flex flex-col-reverse justify-end border-r border-white/15 px-4 py-4 last:border-r-0 sm:px-6 sm:py-5"
              >
                <dt className="mt-1 text-xs leading-snug text-white/70 sm:text-sm">
                  {label}
                </dt>
                <dd className="text-2xl leading-none font-semibold tracking-tight whitespace-nowrap tabular-nums sm:text-3xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            to="/case-studies"
            className="group flex items-center justify-between gap-6 bg-[#0b1430] px-4 py-3.5 text-sm text-white outline-none hover:bg-[#0e1a3d] focus-visible:ring-3 focus-visible:ring-brand-orange/60 focus-visible:ring-inset sm:px-6"
          >
            <span>
              <span className="text-white/55">Featured work:</span>
              {industry.featured}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* What we build */}
      <h4 className="mt-14 text-sm font-semibold text-muted-foreground lg:mt-16">
        What we build
      </h4>
      <ul className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {industry.build.map((item) => (
          <li
            key={item}
            className="relative border-t border-border pt-4 text-lg leading-snug font-semibold"
          >
            <span
              aria-hidden="true"
              className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Facts */}
      <dl className="mt-12 grid border-t border-l border-border lg:grid-cols-3">
        <div className="border-r border-b border-border p-5 sm:p-6">
          <dt className="text-sm text-muted-foreground">Services we bring</dt>
          <dd className="mt-2.5 flex flex-wrap gap-1.5">
            {industry.services.map((slug) => (
              <Link
                key={slug}
                to={`/services#${slug}`}
                className="border border-brand-navy/25 px-2.5 py-1 text-sm font-medium text-brand-navy transition-colors outline-none hover:border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-3 focus-visible:ring-brand-orange/60"
              >
                {serviceName[slug]}
              </Link>
            ))}
          </dd>
        </div>
        <div className="border-r border-b border-border p-5 sm:p-6">
          <dt className="text-sm text-muted-foreground">
            Regulations and standards
          </dt>
          <dd className="mt-1.5 text-base leading-snug font-semibold text-brand-navy">
            {industry.regulations}
          </dd>
        </div>
        <div className="border-r border-b border-border p-5 sm:p-6">
          <dt className="text-sm text-muted-foreground">
            Platforms we integrate
          </dt>
          <dd className="mt-1.5 text-base leading-snug font-semibold text-brand-navy">
            {industry.platforms}
          </dd>
        </div>
      </dl>
    </article>
  );
};

const IndustryDetails = () => {
  return (
    <section className="pb-6 lg:pb-10">
      <div className="global-padding-x">
        <SectionHeading
          title="Industries we serve"
          description="The same capabilities, shaped by each sector's rules and systems."
          action={{ label: "Talk to Our Team", href: "/contact" }}
        />
        {industries.map((industry, i) => (
          <IndustryDetail
            key={industry.slug}
            industry={industry}
            flip={i % 2 === 1}
          />
        ))}
        <p className="border-t border-border pt-8 text-base text-foreground/80">
          We also deliver for government and public-sector bodies, education and
          professional services.{" "}
          <Link
            to="/contact"
            className="font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-blue"
          >
            Talk to us about your sector
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default IndustryDetails;
