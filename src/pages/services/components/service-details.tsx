import type { ComponentType } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AiDataMock,
  CloudMock,
  CybersecurityMock,
  DigitalEngineeringMock,
  EnterpriseAppsMock,
  ModernizationMock,
} from "@/pages/home/components/service-mockups";
import { type Service, services } from "../data";

const screens: Record<string, ComponentType> = {
  "digital-engineering": DigitalEngineeringMock,
  "enterprise-applications": EnterpriseAppsMock,
  "ai-data-analytics": AiDataMock,
  "cloud-infrastructure": CloudMock,
  "application-modernization": ModernizationMock,
  cybersecurity: CybersecurityMock,
};

const ServiceDetail = (
  { service, flip }: { service: Service; flip: boolean },
) => {
  const Icon = service.icon;
  const Screen = screens[service.slug];
  const [value, label] = service.outcome;

  return (
    <article
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
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
            id={`${service.slug}-title`}
            className="mt-5 text-4xl leading-tight font-medium tracking-tight lg:text-5xl"
          >
            {service.name}
          </h3>
          <p className="mt-2 max-w-xl text-lg font-medium text-brand-coral">
            {service.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            {service.summary}
          </p>

          <div className="mt-7 max-w-xl border-l-3 border-brand-navy pl-5">
            <p className="text-sm font-semibold">Problems we solve</p>
            <ul className="mt-2 space-y-1.5">
              {service.problems.map((p) => (
                <li key={p} className="text-base text-muted-foreground">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button
              variant="outline"
              className="border-brand-navy text-brand-navy"
              nativeButton={false}
              render={<Link to="/contact" />}
            >
              {service.cta}
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Visual: product screen + headline outcome */}
        <div className={cn("relative isolate overflow-hidden", service.art)}>
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[#0b1430]/20"
          />
          <div
            aria-hidden="true"
            className="relative h-72 overflow-hidden sm:h-80"
          >
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
          <Link
            to="/case-studies"
            className="group flex items-center justify-between gap-6 bg-[#0b1430] px-5 py-3.5 text-sm text-white outline-none hover:bg-[#0e1a3d] focus-visible:ring-3 focus-visible:ring-brand-orange/60 focus-visible:ring-inset sm:px-7"
          >
            <span>
              <span className="text-white/55">Featured work:</span>
              {service.featured}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* What's included */}
      <h4 className="mt-14 text-sm font-semibold text-muted-foreground lg:mt-16">
        What's included
      </h4>
      <ul className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {service.included.map((item) => (
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
      <dl className="mt-12 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
        <div className="border-r border-b border-border p-5 sm:p-6">
          <dt className="text-sm text-muted-foreground">Typical timeline</dt>
          <dd className="mt-1.5 text-base leading-snug font-semibold text-brand-navy">
            {service.timeline}
          </dd>
        </div>
        <div className="border-r border-b border-border p-5 sm:p-6">
          <dt className="text-sm text-muted-foreground">Key technologies</dt>
          <dd className="mt-1.5 text-base leading-snug font-semibold text-brand-navy">
            {service.technologies}
          </dd>
        </div>
        <div className="border-r border-b border-border p-5 sm:p-6">
          <dt className="text-sm text-muted-foreground">Deliverables</dt>
          <dd className="mt-1.5 text-base leading-snug text-foreground/85">
            {service.deliverables}
          </dd>
        </div>
        <div className="border-r border-b border-border p-5 sm:p-6">
          <dt className="text-sm text-muted-foreground">Delivered by</dt>
          <dd className="mt-1.5">
            <Link
              to={`/businesses#${service.unit.slug}`}
              className="group inline-flex items-center gap-1.5 text-base font-semibold text-brand-navy outline-none hover:text-brand-blue focus-visible:underline"
            >
              {service.unit.name}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </dd>
        </div>
      </dl>
    </article>
  );
};

const ServiceDetails = () => {
  return (
    <section className="pb-6 lg:pb-10">
      <div className="global-padding-x">
        <SectionHeading
          title="What we do"
          description="Six services, each delivered end to end."
          action={{ label: "Talk to Our Team", href: "/contact" }}
        />
        {services.map((service, i) => (
          <ServiceDetail
            key={service.slug}
            service={service}
            flip={i % 2 === 1}
          />
        ))}
        <p className="border-t border-border pt-8 text-base text-foreground/80">
          Need engineers inside your own team instead?{" "}
          <Link
            to="/businesses#teams"
            className="font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-blue"
          >
            See Nexasoft Teams
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default ServiceDetails;
