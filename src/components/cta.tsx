import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const rings = [
  { r: 70, opacity: 0.35 },
  { r: 130, opacity: 0.25 },
  { r: 190, opacity: 0.18 },
  { r: 250, opacity: 0.12 },
  { r: 310, opacity: 0.08 },
];

const orbit = "origin-[320px_320px] transform-view motion-reduce:animate-none";

type CtaProps = {
  title?: string;
  description?: string | React.ReactNode;
  label?: string;
  href?: string;
};

const Cta = ({
  title = "Ready to move your business forward?",
  description =
    "Tell us what you’re building. We’ll reply within one working day.",
  label = "Talk to Our Team",
  href = "/contact",
}: CtaProps) => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-brand-navy py-16 text-white lg:py-20"
    >
      {/* Grid, visible on the right and fading out before it reaches the text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-size-[32px_32px] mask-l-from-35% mask-l-to-85%"
      />

      <div className="global-padding-x flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-white/85">
            {description}
          </p>
        </div>

        {/* Anchor: the glow and rings are centred on this box, i.e. on the button */}
        <div className="relative isolate self-start lg:self-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-180 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-brand-coral/30 to-transparent to-70%"
          />
          <svg
            viewBox="0 0 640 640"
            fill="none"
            stroke="#fff"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-120 -translate-x-1/2 -translate-y-1/2 lg:size-160"
          >
            {rings.map(({ r, opacity }) => (
              <circle key={r} cx={320} cy={320} r={r} strokeOpacity={opacity} />
            ))}
            <g stroke="none">
              <g className={`${orbit} animate-orbit`}>
                <circle cx={320} cy={190} r={5} className="fill-brand-coral" />
              </g>
              <g className={`${orbit} animate-orbit-slow`}>
                <circle cx={570} cy={320} r={4} className="fill-white/80" />
              </g>
            </g>
          </svg>

          <Button
            variant="outline"
            nativeButton={false}
            render={<Link to={href} />}
            className="bg-brand-navy"
          >
            {label}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
