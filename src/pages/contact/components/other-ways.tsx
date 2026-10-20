import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "@/components/section-heading";
import { otherWays } from "../data";

const OtherWays = () => {
  return (
    <section className="pb-16 lg:pb-22">
      <div className="global-padding-x">
        <SectionHeading
          title="Other ways to reach us"
          description="Not a new project? Start here."
        />
        <ul className="grid border-t border-l border-border sm:grid-cols-3">
          {otherWays.map((w) => {
            const external = w.href.startsWith("mailto:");
            const cls =
              "group mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-navy outline-none hover:text-brand-blue focus-visible:underline";
            const inner = (
              <>
                {w.label}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </>
            );
            return (
              <li
                key={w.title}
                className="relative flex flex-col border-r border-b border-border p-6 sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
                />
                <h3 className="text-xl font-semibold tracking-tight">
                  {w.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {w.text}
                </p>
                {external
                  ? <a href={w.href} className={cls}>{inner}</a>
                  : <Link to={w.href} className={cls}>{inner}</Link>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OtherWays;
