import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import TechMarquee from "@/pages/home/components/tech-marquee";
import { industries } from "../data";

/* Two short bands that send readers deeper: Industries, then Technology. */
const IndustriesTechnology = () => {
  return (
    <section className="py-16 lg:py-22">
      <div className="global-padding-x">
        <SectionHeading
          title="Services shaped for your industry"
          description="Applied with deep knowledge of your sector's rules, systems and customers."
          action={{ label: "Explore Industries", href: "/industries" }}
        />

        <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ name, slug, art }) => (
            <li key={name}>
              <Link
                to={`/industries#${slug}`}
                className={cn(
                  "group relative isolate flex min-h-40 items-end overflow-hidden p-5 text-white outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/60 sm:min-h-48 sm:p-6",
                  art,
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-30% to-[#0b1430]/85"
                />
                <span className="max-w-[14ch] text-lg leading-snug font-semibold">
                  {name}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute top-5 right-5 size-5 stroke-[1.6] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 lg:mt-20">
          <TechMarquee label="Built on platforms you trust" />
          <Link
            to="/technology"
            className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy outline-none hover:text-brand-blue focus-visible:underline"
          >
            See our technology
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesTechnology;
