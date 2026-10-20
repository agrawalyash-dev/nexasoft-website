import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/use-count-up";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const stats = [
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client retention" },
];

const milestones = [
  {
    year: "2016",
    title: "Founded",
    detail: "Started as a four-person engineering team building web products.",
  },
  {
    year: "2018",
    title: "First enterprise partner",
    detail: "Delivered a full ERP rollout for a national manufacturing group.",
  },
  {
    year: "2020",
    title: "Cloud and data practice",
    detail: "Launched dedicated teams for cloud migration and analytics.",
  },
  {
    year: "2023",
    title: "Going global",
    detail:
      "Began serving clients across the Middle East, Europe and North America.",
  },
  {
    year: "Today",
    title: "150+ projects, 12 countries",
    detail:
      "Building, modernizing and scaling products for startups and enterprises.",
  },
];

const GridTexture = ({ className }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
      className,
    )}
  />
);

const Stat = ({ value, suffix, label }: (typeof stats)[number]) => {
  const [ref, current] = useCountUp<HTMLElement>(value);
  return (
    <div className="flex flex-col-reverse border-l border-white/15 pl-4 first:border-l-0 first:pl-0 sm:pl-6">
      <dt className="mt-1 text-xs text-white/70 sm:text-sm">{label}</dt>
      <dd>
        <b
          ref={ref}
          className="block text-3xl leading-none font-semibold tracking-tight tabular-nums sm:text-4xl"
        >
          {current}
          {suffix}
        </b>
      </dd>
    </div>
  );
};

const Timeline = () => (
  <ol className="relative">
    {/* rail */}
    <span
      aria-hidden="true"
      className="absolute top-2 bottom-2 left-1.75 w-px bg-white/25"
    />
    {milestones.map(({ year, title, detail }, i) => {
      const last = i === milestones.length - 1;
      return (
        <li
          key={year}
          className="relative grid grid-cols-[15px_1fr] gap-x-5 pb-7 last:pb-0"
        >
          <span
            aria-hidden="true"
            className={cn(
              "mt-1 size-3.75 rounded-full border-2",
              last
                ? "border-brand-coral bg-brand-coral ring-4 ring-brand-coral/25"
                : "border-white/70 bg-brand-blue",
            )}
          />
          <div>
            <p
              className={cn(
                "text-sm font-semibold tabular-nums",
                last ? "text-brand-coral" : "text-white/60",
              )}
            >
              {year}
            </p>
            <h3 className="mt-0.5 text-base font-semibold sm:text-lg">
              {title}
            </h3>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-white/75">
              {detail}
            </p>
          </div>
        </li>
      );
    })}
  </ol>
);

const Story = () => {
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden bg-brand-navy text-white"
    >
      {/* Navy half: soft light falloff from the top-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_0%_0%,rgb(255_255_255/0.07),transparent_55%)]"
      />

      {/* Blue half (lg+) */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 overflow-hidden bg-linear-to-br from-brand-blue to-[#163d80] lg:block"
      >
        <GridTexture className="z-0" />
      </div>

      <div className="global-padding-x grid lg:grid-cols-2">
        {/* Story */}
        <div className="relative flex flex-col py-16 lg:py-20 lg:pr-14">
          <SectionHeading
            tone="dark"
            size="compact"
            title="Our Story"
            description="We help companies build, modernize, and scale."
            className="mb-8 lg:mb-8"
          />
          <p className="max-w-lg text-base leading-relaxed text-white/85">
            Founded on the belief that technology should drive real business
            outcomes, Nexasoft began as a small team of passionate engineers.
            Today, we partner with startups and enterprises to design, build,
            and scale digital solutions that create lasting value and open new
            possibilities for growth.
          </p>
          <div className="mt-8">
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link to="/about" />}
            >
              Read More
              <ArrowRight />
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/15 pt-6 lg:mt-auto lg:pt-8">
            {stats.map((s) => <Stat key={s.label} {...s} />)}
          </dl>
        </div>

        {/* Milestones */}
        <div className="relative isolate -mx-4 overflow-hidden bg-linear-to-br from-brand-blue to-[#163d80] px-4 py-14 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex lg:items-center lg:bg-none lg:py-20 lg:pr-0 lg:pl-16">
          <GridTexture className="lg:hidden" />
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default Story;
