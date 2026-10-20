import { Check } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { commitments } from "../data";

const Commitment = () => {
  return (
    <section
      id="commitment"
      className="scroll-mt-24 pb-16 lg:scroll-mt-28 lg:pb-22"
    >
      <div className="global-padding-x grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:self-center">
          <SectionHeading
            size="compact"
            title="Our commitment"
            description="Three promises we hold ourselves to."
            className="mb-8 lg:mb-8"
          />
          <p className="max-w-lg text-base leading-relaxed text-foreground/85 sm:text-lg">
            We strive to establish clear expectations, communicate progress
            honestly, and follow a consistent delivery process. By combining
            technical discipline with a collaborative mindset, we work toward
            solutions that serve real business needs.
          </p>
        </div>

        <ul className="relative isolate overflow-hidden bg-art-6 text-white">
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-b from-[#0b1430]/20 to-[#0b1430]/80"
          />
          {commitments.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className="relative flex items-center gap-5 border-b border-white/15 px-6 py-7 last:border-b-0 sm:gap-6 sm:px-10 sm:py-9"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-0.5 w-10 bg-brand-coral"
              />
              <Icon
                aria-hidden="true"
                className="size-9 shrink-0 stroke-[1.3] text-white/90 sm:size-10"
              />
              <span className="text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl">
                {title}
              </span>
              <span
                aria-hidden="true"
                className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-coral text-white"
              >
                <Check className="size-3.5" strokeWidth={3} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Commitment;
