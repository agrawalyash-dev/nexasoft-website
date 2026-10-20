import SectionHeading from "@/components/section-heading";
import { standards } from "../data";

/* Navy band with the CTA's grid texture; six standards with coral rules. */
const DeliveryStandards = () => {
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
          title="How every service is delivered"
          description="The same standards, whichever service you choose."
        />

        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s) => (
            <li
              key={s.title}
              className="relative border-t border-white/15 pt-5"
            >
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
              />
              <h3 className="text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 max-w-sm text-base leading-relaxed text-white/75">
                {s.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DeliveryStandards;
