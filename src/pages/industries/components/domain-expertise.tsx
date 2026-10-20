import SectionHeading from "@/components/section-heading";
import { expertise } from "../data";

/* Navy band (same treatment as the Services page's delivery standards). */
const DomainExpertise = () => {
  return (
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
        <SectionHeading
          tone="dark"
          title="Why industry knowledge matters"
          description="Less explaining, faster delivery, fewer surprises."
        />
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e) => (
            <li
              key={e.title}
              className="relative border-t border-white/15 pt-5"
            >
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
              />
              <h3 className="text-xl font-semibold tracking-tight">
                {e.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-white/75">
                {e.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DomainExpertise;
