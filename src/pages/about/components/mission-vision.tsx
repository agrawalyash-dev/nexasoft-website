import { Eye, Target } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";

const rings = [60, 110, 160, 210, 260];

/* Concentric rings, the same motif as the CTA, anchored to a corner. */
const Rings = ({ light }: { light?: boolean }) => (
  <svg
    viewBox="0 0 520 520"
    fill="none"
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute -right-24 -bottom-24 -z-10 size-96 sm:size-120",
      light ? "stroke-brand-navy" : "stroke-white",
    )}
  >
    {rings.map((r, i) => (
      <circle key={r} cx={260} cy={260} r={r} strokeOpacity={0.32 - i * 0.05} />
    ))}
    <circle cx={260} cy={200} r={5} className="fill-brand-coral stroke-none" />
  </svg>
);

const items = [
  {
    id: "mission",
    title: "Our Mission",
    icon: Target,
    text:
      "To deliver reliable, secure, and scalable technology solutions through disciplined engineering, transparent collaboration, and a commitment to quality.",
    dark: true,
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: Eye,
    text:
      "To become a trusted technology partner recognized for responsible software delivery, continuous improvement, and long-term client value.",
    dark: false,
  },
];

/* Two statement panels: one navy art, one grey, each with its own rings. */
const MissionVision = () => {
  return (
    <section
      id="mission-vision"
      className="scroll-mt-24 py-16 lg:scroll-mt-28 lg:py-22"
    >
      <div className="global-padding-x">
        <SectionHeading
          title="Mission and vision"
          description="Where we are going, and how."
        />

        <ul className="grid gap-1 md:grid-cols-2">
          {items.map(({ id, title, icon: Icon, text, dark }) => (
            <li
              key={id}
              className={cn(
                "relative isolate flex min-h-96 flex-col overflow-hidden p-7 sm:p-10",
                dark ? "bg-art-1 text-white" : "bg-brand-gray text-foreground",
              )}
            >
              {dark && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[#0b1430]/30"
                />
              )}
              <Rings light={!dark} />
              <span
                className={cn(
                  "flex size-12 items-center justify-center",
                  dark ? "bg-white/10 text-white" : "bg-brand-navy text-white",
                )}
              >
                <Icon aria-hidden="true" className="size-6 stroke-[1.5]" />
              </span>
              <h3 className="mt-auto text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
                {title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-4 block h-0.5 w-12 bg-brand-coral"
              />
              <p
                className={cn(
                  "mt-4 max-w-md text-lg leading-relaxed text-pretty",
                  dark ? "text-white/85" : "text-foreground/85",
                )}
              >
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MissionVision;
