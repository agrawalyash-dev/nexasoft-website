import { ArrowLeft, ArrowRight, ChevronRight, Quote } from "lucide-react";
import { Link, useParams } from "react-router";
import Cta from "@/components/cta";
import HeroBg from "@/components/hero-bg";
// import PageHeroBackdrop from "@/components/page-hero-backdrop";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CaseScreen from "./components/case-screen";
import { caseStudies } from "./data";

const H2 = (
  { children, dark }: { children: React.ReactNode; dark?: boolean },
) => (
  <h2
    className={cn(
      "text-3xl leading-tight font-medium tracking-tight sm:text-4xl",
      dark && "text-white",
    )}
  >
    {children}
  </h2>
);

const RuledList = ({ items }: { items: string[] }) => (
  <ul className="mt-6 border-b border-border">
    {items.map((item) => (
      <li
        key={item}
        className="relative border-t border-border py-4 text-base leading-relaxed text-foreground/85"
      >
        {item}
      </li>
    ))}
  </ul>
);

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const index = caseStudies.findIndex((c) => c.slug === slug);

  if (index === -1) {
    return (
      <div className="global-padding-x py-24">
        <h1 className="text-4xl font-semibold tracking-tight">
          Case study not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          It may have moved. Browse all our case studies instead.
        </p>
        <Button
          className="mt-8"
          nativeButton={false}
          render={<Link to="/case-studies" />}
        >
          All case studies
          <ArrowRight />
        </Button>
      </div>
    );
  }

  const cs = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article>
      <title>{`${cs.title} · Nexasoft case study`}</title>
      <meta name="description" content={cs.tagline} />

      {/* Hero */}
      <header className="relative isolate overflow-hidden pt-10 pb-12 sm:pt-12 lg:pb-16">
        {/* <PageHeroBackdrop /> */}
        <HeroBg />
        <div className="global-padding-x">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link to="/case-studies" className="hover:text-brand-navy">
              Case studies
            </Link>
            <ChevronRight aria-hidden="true" className="size-3.5" />
            <span className="text-foreground">{cs.industry}</span>
          </nav>

          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {cs.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-pretty text-foreground/80">
            {cs.tagline}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-12 lg:grid-cols-4">
            {[
              ["Client", cs.client, cs.clientType],
              ["Location", cs.location, null],
              ["Timeline", cs.timeline, null],
            ].map(([term, value, sub]) => (
              <div
                key={term}
                className="relative border-t border-l border-brand-navy pt-4 pl-4 sm:pl-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-0.75 -left-0.75 size-1.5 bg-brand-coral"
                />
                <dt className="text-sm text-muted-foreground">{term}</dt>
                <dd className="mt-1 text-base leading-snug font-semibold text-brand-navy">
                  {value}
                </dd>
                {sub && (
                  <dd className="mt-0.5 text-sm text-muted-foreground">
                    {sub}
                  </dd>
                )}
              </div>
            ))}
            <div className="relative border-t border-l border-brand-navy pt-4 pl-4 sm:pl-5">
              <span
                aria-hidden="true"
                className="absolute -top-0.75 -left-0.75 size-1.5 bg-brand-coral"
              />
              <dt className="text-sm text-muted-foreground">Headline result</dt>
              <dd className="mt-1 text-4xl leading-none font-semibold tracking-tight text-brand-coral tabular-nums">
                {cs.metric}
              </dd>
              <dd className="mt-1.5 text-sm text-muted-foreground">
                {cs.metricLabel}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* The product we built */}
      <section aria-label="The product we built" className="global-padding-x">
        <div
          className={cn(
            "relative isolate overflow-hidden px-5 py-12 sm:px-10 sm:py-16",
            cs.art,
          )}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[#0b1430]/25"
          />
          <div
            aria-hidden="true"
            className="mx-auto w-full max-w-md md:[zoom:1.3] lg:[zoom:1.45]"
          >
            <CaseScreen item={cs} />
          </div>
        </div>
      </section>

      {/* Overview + engagement */}
      <section className="py-16 lg:py-22">
        <div className="global-padding-x grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <H2>Overview</H2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85 sm:text-xl">
              {cs.overview}
            </p>
          </div>
          <aside className="self-start border border-border">
            <div className="border-b border-border p-6">
              <p className="text-sm text-muted-foreground">Team</p>
              <p className="mt-1 text-base leading-relaxed font-medium">
                {cs.teamShape}
              </p>
            </div>
            <div className="border-b border-border p-6">
              <p className="text-sm text-muted-foreground">Timeline</p>
              <p className="mt-1 text-base leading-relaxed font-medium">
                {cs.timeline}
              </p>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground">Technology</p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {cs.technologies.map((t) => (
                  <li
                    key={t}
                    className="border border-brand-navy/20 px-2.5 py-1 text-sm text-brand-navy"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Challenge vs what we built */}
      <section className="pb-16 lg:pb-22">
        <div className="global-padding-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2>The challenge</H2>
            <RuledList items={cs.challenge} />
          </div>
          <div>
            <H2>What we built</H2>
            <RuledList items={cs.solution} />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative isolate overflow-hidden bg-brand-navy py-16 text-white lg:py-22">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-size-[32px_32px] mask-l-from-35% mask-l-to-85%"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-radial-[circle_440px_at_90%_10%] from-brand-coral/25 to-transparent"
        />
        <div className="global-padding-x">
          <H2 dark>Results</H2>
          <dl className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {cs.results.map((r) => (
              <div
                key={r.text}
                className="relative flex flex-col-reverse justify-end border-t border-white/15 pt-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
                />
                <dt className="mt-2 text-base leading-relaxed text-white/75">
                  {r.text}
                </dt>
                <dd className="text-4xl leading-none font-semibold tracking-tight tabular-nums sm:text-5xl">
                  {r.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 lg:py-22">
        <div className="global-padding-x">
          <H2>Architecture</H2>
          <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {cs.architecture.map((a) => (
              <li
                key={a}
                className="relative border-t border-border pt-4 text-base leading-relaxed text-foreground/85"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
                />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Client quote */}
      {cs.quote && (
        <section className="pb-16 lg:pb-22">
          <div className="global-padding-x">
            <figure className="border-l-3 border-brand-coral bg-[#f5f7fb] px-6 py-10 sm:px-12 sm:py-14">
              <Quote aria-hidden="true" className="size-9 text-brand-coral" />
              <blockquote className="mt-6 max-w-4xl text-2xl leading-snug font-medium tracking-tight sm:text-3xl">
                “{cs.quote.text}”
              </blockquote>
              <figcaption className="mt-8 text-base">
                <span className="font-semibold text-brand-navy">
                  {cs.quote.author}
                </span>
                <span className="text-muted-foreground">, {cs.quote.role}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* Next */}
      <section className="pb-16 lg:pb-22">
        <div className="global-padding-x grid gap-4 border-t border-border pt-10 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-blue"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All case studies
          </Link>
          <Link
            to={`/case-studies/${next.slug}`}
            className="group flex items-center justify-between gap-6 border border-border p-5 transition-colors hover:border-brand-navy sm:p-6"
          >
            <span>
              <span className="block text-sm text-muted-foreground">
                Next case study · {next.industry}
              </span>
              <span className="mt-1 block text-lg leading-snug font-semibold group-hover:text-brand-navy">
                {next.title}
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="size-5 shrink-0 text-brand-navy transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </section>

      <Cta
        title="Have a challenge like this?"
        description="Tell us about it. We'll reply within one working day and can usually start with a short discovery sprint."
        label="Discuss your project"
      />
    </article>
  );
};

export default CaseStudyDetail;
