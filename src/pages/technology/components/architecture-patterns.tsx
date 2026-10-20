import SectionHeading from "@/components/section-heading";
import { patterns } from "../data";

const ArchitecturePatterns = () => {
  return (
    <section className="py-16 lg:py-22">
      <div className="global-padding-x">
        <SectionHeading
          title="How we design systems"
          description="The simplest architecture that will still work in three years."
        />
        <ul className="grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {patterns.map((p) => (
            <li
              key={p.name}
              className="flex flex-col border-r border-b border-border p-6 sm:p-7"
            >
              <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 mb-6 text-base leading-relaxed text-foreground/80">
                {p.what}
              </p>
              <div className="mt-auto border-t border-border pt-4">
                <p className="text-sm font-semibold text-brand-navy">
                  We use it when
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                  {p.when}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArchitecturePatterns;
