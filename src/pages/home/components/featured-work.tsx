import { type ComponentType, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/section-heading";
import {
  Customer360Screen,
  DocumentExtractionScreen,
  FleetMapScreen,
  MigrationPlanScreen,
  PolicyEditorScreen,
  ProductionBoardScreen,
  StorefrontScreen,
  UpiPaymentScreen,
} from "./work-screens";

/*
 * Featured Work as a showcase carousel (the format Wipro, Tech Mahindra and
 * HCLTech use on their homepages): one large story at a time. The visual is
 * the product we built, framed as a live app (browser window or phone), above
 * the headline result in very large type; a white content box overlaps it.
 * Controls: prev/next, a counter, clickable progress segments, "Next" preview.
 * Swipe works on touch.
 *
 * ⚠ All results and copy are placeholders. Replace with real project data.
 */

type Project = {
  industry: string;
  type: string;
  title: string;
  excerpt: string;
  metric: string;
  metricLabel: string;
  /** The product we built. `url` frames it in a browser; omit it for phone screens. */
  screen: { Mock: ComponentType; url?: string };
  art: string;
};

const projects: Project[] = [
  {
    industry: "Banking",
    type: "Case Study",
    title: "Enterprise Digital Platform",
    excerpt:
      "A growing private bank replaced eleven separate tools with one platform for onboarding, lending and servicing, built around a shared customer record.",
    metric: "11→1",
    metricLabel: "Tools replaced by one platform",
    art: "bg-art-1",
    screen: { Mock: Customer360Screen, url: "crm.bankplatform.app/customers" },
  },
  {
    industry: "Enterprise IT",
    type: "Success Story",
    title: "Global Cloud Migration",
    excerpt:
      "Three ageing data centres across two continents moved to the cloud in planned waves, with infrastructure as code and automated failover.",
    metric: "38%",
    metricLabel: "Lower infrastructure cost",
    art: "bg-art-4",
    screen: { Mock: MigrationPlanScreen, url: "ops.migration-hub.app/plan" },
  },
  {
    industry: "Retail",
    type: "Case Study",
    title: "High-Volume Commerce Engine",
    excerpt:
      "A headless storefront and event-driven order pipeline that stays fast through every festival sale, however big the spike.",
    metric: "12k",
    metricLabel: "Orders per minute at peak",
    art: "bg-art-2",
    screen: { Mock: StorefrontScreen, url: "shop.urbanthreads.app" },
  },
  {
    industry: "Financial Services",
    type: "Case Study",
    title: "Secure Mobile Banking",
    excerpt:
      "Native iOS and Android apps with biometric login, instant UPI transfers and real-time fraud alerts, replacing a dated web-wrapped app.",
    metric: "4.8★",
    metricLabel: "App store rating",
    art: "bg-art-6",
    screen: { Mock: UpiPaymentScreen },
  },
  {
    industry: "Healthcare",
    type: "Case Study",
    title: "AI Workflow Automation",
    excerpt:
      "An AI pipeline that reads incoming referrals and claims, routes each to the right team, and sends low-confidence cases for human review.",
    metric: "70%",
    metricLabel: "Less manual paperwork",
    art: "bg-art-4",
    screen: {
      Mock: DocumentExtractionScreen,
      url: "intake.carenet.app/review",
    },
  },
  {
    industry: "Government",
    type: "Success Story",
    title: "Zero-Trust Security Architecture",
    excerpt:
      "Identity and device checks on every request, least-privilege access and one audit trail, replacing a flat internal network.",
    metric: "100%",
    metricLabel: "Access requests verified",
    art: "bg-art-1",
    screen: { Mock: PolicyEditorScreen, url: "policy.secure-access.app" },
  },
  {
    industry: "Logistics",
    type: "Case Study",
    title: "Real-Time Data Analytics",
    excerpt:
      "Live telemetry from thousands of vehicles, delay prediction and self-serve dashboards, so dispatch acts before customers notice.",
    metric: "2 hrs",
    metricLabel: "Earlier delay warnings",
    art: "bg-art-2",
    screen: { Mock: FleetMapScreen, url: "fleet.routeview.app/live" },
  },
  {
    industry: "Manufacturing",
    type: "Case Study",
    title: "Custom ERP Implementation",
    excerpt:
      "An ERP shaped around the shop floor, connecting purchasing, production and dispatch across every plant on one system.",
    metric: "45%",
    metricLabel: "Less excess inventory",
    art: "bg-art-5",
    screen: { Mock: ProductionBoardScreen, url: "erp.plantsuite.app/board" },
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

/*
 * Below lg the screen sits in its own stage above the number (normal flow,
 * scaled to fit, fading out at the bottom). From lg the stage covers the
 * whole visual and the screen floats top-right, tucked under the content box.
 */
const Screen = ({ screen }: { screen: Project["screen"] }) => {
  const { Mock, url } = screen;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mb-6 h-48 overflow-hidden select-none mask-b-from-55% sm:h-60 md:h-72 lg:absolute lg:inset-0 lg:mb-0 lg:h-auto lg:overflow-visible lg:mask-none"
    >
      <div
        className={cn(
          "absolute top-2 left-1/2 origin-top -translate-x-1/2 scale-[0.68] sm:scale-85 md:scale-100 lg:top-10 lg:max-h-62 lg:translate-x-0 lg:overflow-hidden lg:mask-b-from-55%",
          url ? "w-100 lg:left-[36%]" : "lg:left-[52%]",
        )}
      >
        {url
          ? (
            <div className="overflow-hidden rounded-lg bg-white shadow-[0_2px_6px_rgb(0_0_0/0.15),0_40px_70px_-20px_rgb(0_0_0/0.6)] ring-1 ring-white/20">
              <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-100 px-3 py-2">
                <span className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-slate-300" />
                  <span className="size-2 rounded-full bg-slate-300" />
                  <span className="size-2 rounded-full bg-slate-300" />
                </span>
                <span className="flex flex-1 items-center gap-1.5 truncate rounded bg-white px-2 py-1 text-[9px] text-slate-500">
                  <Lock className="size-2.5 shrink-0" />
                  {url}
                </span>
              </div>
              <Mock />
            </div>
          )
          : <Mock />}
      </div>
    </div>
  );
};

const Slide = ({ project, active }: { project: Project; active: boolean }) => {
  return (
    <div
      aria-hidden={!active}
      className="grid w-full shrink-0 items-center lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
    >
      {/* Visual: the result, very large */}
      <div
        className={cn(
          "relative isolate flex flex-col overflow-hidden p-6 text-white sm:p-8 lg:h-120 lg:justify-end lg:p-12",
          project.art,
        )}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-[#0b1430]/85 via-[#0b1430]/30 to-[#0b1430]/10"
        />

        {/* The product we built, framed as a live app */}
        <Screen screen={project.screen} />
        <span className="relative block text-6xl leading-[0.85] font-semibold tracking-tighter tabular-nums sm:text-7xl lg:text-8xl">
          {project.metric}
        </span>
        <span className="relative mt-3 block max-w-xs text-base text-white/80 lg:mt-4 lg:text-lg">
          {project.metricLabel}
        </span>
      </div>

      {/* Content box, overlapping the visual on desktop */}
      <div className="relative z-10 border border-border bg-white p-7 sm:p-9 lg:-ml-20 lg:p-11 lg:shadow-[0_30px_60px_-30px_rgb(15_23_42/0.45)]">
        <p className="text-xs font-semibold tracking-wider text-brand-blue uppercase">
          {project.type} · {project.industry}
        </p>
        <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {project.excerpt}
        </p>
        <Link
          to="/case-studies"
          tabIndex={active ? 0 : -1}
          className="group mt-8 inline-flex items-center gap-2 bg-brand-navy px-5 py-3 text-sm font-semibold text-white outline-none transition-colors hover:bg-brand-blue focus-visible:ring-3 focus-visible:ring-brand-orange/60"
        >
          Read the story
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const n = projects.length;

  const go = (i: number) => setIndex((i + n) % n);
  const next = projects[(index + 1) % n];

  return (
    <section
      id="work"
      aria-roledescription="carousel"
      aria-label="Featured work"
      className="overflow-hidden pt-6 pb-16 lg:pb-22"
    >
      <div className="global-padding-x">
        <SectionHeading
          title={
            <>
              Built for Real-World
              <br />
              Business Challenges
            </>
          }
          description="Eight industries. One standard of engineering."
          action={{ label: "View All Work", href: "/case-studies" }}
        />

        {/* Track */}
        <div
          className="overflow-hidden"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((p, i) => (
              <Slide key={p.title} project={p} active={i === index} />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => go(index - 1)}
              className="flex size-11 items-center justify-center border border-border text-slate-700 transition-colors outline-none hover:border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-3 focus-visible:ring-brand-orange/60"
            >
              <ArrowLeft className="size-4.5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => go(index + 1)}
              className="flex size-11 items-center justify-center border border-border text-slate-700 transition-colors outline-none hover:border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-3 focus-visible:ring-brand-orange/60"
            >
              <ArrowRight className="size-4.5" />
            </button>
          </div>

          <p
            className="text-sm font-medium text-slate-900 tabular-nums"
            aria-live="polite"
          >
            {pad(index + 1)} <span className="text-slate-400">/ {pad(n)}</span>
          </p>

          {/* Progress segments */}
          <div className="flex min-w-48 flex-1 gap-1.5">
            {projects.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-label={`Show ${p.title}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className="group flex h-6 flex-1 items-center outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/60"
              >
                <span
                  className={cn(
                    "block h-0.5 w-full transition-colors duration-300",
                    i === index
                      ? "bg-brand-navy"
                      : "bg-slate-200 group-hover:bg-slate-400",
                  )}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            className="hidden items-center gap-2 text-sm text-slate-500 outline-none hover:text-brand-navy focus-visible:underline md:flex"
          >
            Next:
            <span className="font-semibold text-slate-900">{next.title}</span>
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
