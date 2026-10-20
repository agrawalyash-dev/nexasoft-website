import { Check } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { principles } from "../data";

const HowWeChoose = () => {
  return (
    <section className="pb-16 lg:pb-22">
      <div className="global-padding-x">
        <SectionHeading
          title="How we choose"
          description="Every option passes five checks."
        />

        <div className="relative">
          {/* connector */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-6 w-px bg-brand-navy/20 lg:top-1/2 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
          />

          <ol className="relative flex flex-col gap-3 lg:flex-row lg:items-stretch">
            <li className="flex shrink-0 items-center self-start lg:self-center">
              <span className="relative bg-brand-gray px-4 py-2.5 text-sm font-semibold">
                Every option
              </span>
            </li>

            {principles.map(({ keyword, line, icon: Icon }) => (
              <li
                key={keyword}
                className="relative flex flex-1 items-center gap-4 border border-border bg-white p-4 lg:flex-col lg:items-start lg:gap-0 lg:p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center bg-brand-navy text-white">
                  <Icon aria-hidden="true" className="size-5 stroke-[1.6]" />
                </span>
                <span className="block lg:mt-5">
                  <span className="block text-lg font-semibold tracking-tight">
                    {keyword}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {line}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-coral text-white lg:absolute lg:top-4 lg:right-4 lg:ml-0"
                >
                  <Check className="size-3" strokeWidth={3} />
                </span>
              </li>
            ))}

            <li className="flex shrink-0 items-center self-start lg:self-center">
              <span className="relative bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white">
                <span
                  aria-hidden="true"
                  className="absolute -top-0.75 -left-0.75 size-1.5 bg-brand-coral"
                />
                Your stack
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowWeChoose;
