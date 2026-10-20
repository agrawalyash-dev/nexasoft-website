import SectionHeading from "@/components/section-heading";
import { approach } from "../data";

const Approach = () => {
  return (
    <section
      id="approach"
      className="scroll-mt-24 pb-16 lg:scroll-mt-28 lg:pb-22"
    >
      <div className="global-padding-x">
        <div className="border-t border-border pt-16 lg:pt-22">
          <SectionHeading
            title="What defines our approach"
            description="Six principles in every engagement."
          />
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map(({ title, text, icon: Icon, art: Art }) => (
              <li key={title} className="flex flex-col">
                <div aria-hidden="true">
                  <Art />
                </div>
                <div className="relative flex-1 border-t-2 border-brand-coral pt-5">
                  <Icon
                    aria-hidden="true"
                    className="size-6 stroke-[1.4] text-brand-navy"
                  />
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Approach;
