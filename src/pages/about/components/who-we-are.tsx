import SectionHeading from "@/components/section-heading";
import { JourneyArt } from "./about-illustrations";

const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="scroll-mt-24 pb-16 lg:scroll-mt-28 lg:pb-22"
    >
      <div className="global-padding-x">
        <SectionHeading
          title="Who we are"
          description="Structured, accountable software delivery."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:items-stretch lg:gap-16">
          <div>
            <p className="max-w-xl text-2xl leading-snug font-medium tracking-tight text-brand-navy text-pretty sm:text-3xl">
              Incorporated on April 11, 2024, and registered in Vadodara,
              Gujarat, India.
            </p>

            <div className="mt-8 max-w-xl space-y-5 border-l-3 border-brand-navy pl-5 text-base leading-relaxed text-foreground/85 sm:pl-6 sm:text-lg">
              <p>
                As a technology-focused organization, we emphasize a
                professional and accountable approach to software delivery. From
                understanding project requirements to validating releases and
                completing handovers, we focus on keeping our work structured,
                our communication clear, and our deliverables aligned with
                agreed objectives.
              </p>
              <p>
                Our approach combines thoughtful planning, iterative
                development, quality assurance, and security-conscious practices
                to help businesses turn requirements into reliable software
                solutions.
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We aim to build technology that solves practical challenges,
              supports business objectives, and remains maintainable as needs
              evolve.
            </p>
          </div>

          <div className="flex flex-col">
            <div aria-hidden="true" className="flex-1">
              <JourneyArt />
            </div>
            <figure className="relative border-t-2 border-brand-coral bg-brand-navy px-5 py-5 text-white sm:px-7 sm:py-6">
              <figcaption className="text-sm text-white/65">
                Our philosophy is simple
              </figcaption>
              <blockquote className="mt-1.5 text-xl leading-snug font-semibold tracking-tight text-balance sm:text-2xl">
                Great software requires more than code. It requires clarity,
                collaboration, security, and consistent execution.
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
