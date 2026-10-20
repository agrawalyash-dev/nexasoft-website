import SectionHeading from "@/components/section-heading";
import { models } from "../data";

const EngagementModels = () => {
  return (
    <section className="py-16 lg:py-22">
      <div className="global-padding-x">
        <SectionHeading
          title="Ways to work with us"
          description="Choose the model that fits your stage and budget."
        />

        <ul className="grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
          {models.map((m) => (
            <li
              key={m.name}
              className="flex flex-col border-r border-b border-border p-6 sm:p-7"
            >
              <h3 className="text-xl font-semibold tracking-tight">{m.name}</h3>
              <p className="mt-4 text-sm font-semibold text-brand-navy">
                Best for
              </p>
              <p className="mt-1 text-base leading-relaxed text-foreground/80">
                {m.bestFor}
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-navy">
                How it works
              </p>
              <p className="mt-1 mb-8 text-base leading-relaxed text-foreground/80">
                {m.how}
              </p>
              <p className="mt-auto flex items-baseline justify-between border-t border-border pt-4 text-sm">
                <span className="text-muted-foreground">Typical start</span>
                <span className="font-semibold text-foreground tabular-nums">
                  {m.start}
                </span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-base text-foreground/80">
          Not sure which fits? Most clients start with a two-week discovery
          sprint, and we recommend a model at the end of it.
        </p>
      </div>
    </section>
  );
};

export default EngagementModels;
