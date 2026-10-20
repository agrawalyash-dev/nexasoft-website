import type { ComponentType } from "react";
import { ArrowDownRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { type Layer, layers } from "../data";
import {
  BackendArt,
  CloudArt,
  DataArt,
  EnterpriseArt,
  MobileArt,
  QualityArt,
  SecurityArt,
  WebArt,
} from "./layer-illustrations";

const layerArt: Record<string, ComponentType> = {
  web: WebArt,
  mobile: MobileArt,
  backend: BackendArt,
  "data-ai": DataArt,
  "cloud-devops": CloudArt,
  enterprise: EnterpriseArt,
  security: SecurityArt,
  quality: QualityArt,
};

const bySlug = Object.fromEntries(layers.map((l) => [l.slug, l]));
const preview = (slug: string) =>
  bySlug[slug].tech
    .slice(0, 3)
    .map((t) => t.name.split(/,| and | or /)[0].trim())
    .join(" · ");

const Band = ({ slug, tone }: { slug: string; tone: string }) => {
  const layer = bySlug[slug];
  return (
    <a
      href={`#${slug}`}
      className={cn(
        "group flex min-h-16 items-center justify-between gap-4 px-4 py-3 text-white transition-[filter] outline-none hover:brightness-115 focus-visible:ring-3 focus-visible:ring-brand-orange/60 sm:min-h-18 sm:px-5",
        tone,
      )}
    >
      <span className="min-w-0">
        <span className="block text-sm font-semibold sm:text-base">
          {layer.name}
        </span>
        <span className="mt-0.5 hidden truncate text-xs text-white/65 sm:block">
          {preview(slug)}
        </span>
      </span>
      <ArrowDownRight
        aria-hidden="true"
        className="size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-100"
      />
    </a>
  );
};

const Rail = ({ slug, tone }: { slug: string; tone: string }) => (
  <a
    href={`#${slug}`}
    className={cn(
      "flex items-center justify-center py-4 text-white transition-[filter] outline-none hover:brightness-115 focus-visible:ring-3 focus-visible:ring-brand-orange/60",
      tone,
    )}
  >
    <span className="rotate-180 text-xs font-semibold tracking-wide whitespace-nowrap [writing-mode:vertical-rl] sm:text-sm">
      {bySlug[slug].name}
    </span>
  </a>
);

const StackDiagram = () => (
  <nav
    aria-label="Technology stack layers"
    className="grid grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] gap-1 sm:grid-cols-[2.75rem_minmax(0,1fr)_2.75rem]"
  >
    <Rail slug="security" tone="bg-[#0b1430]" />
    <div className="grid gap-1">
      <div className="grid grid-cols-2 gap-1">
        <Band slug="web" tone="bg-brand-blue" />
        <Band slug="mobile" tone="bg-brand-blue" />
      </div>
      <Band slug="backend" tone="bg-[#26398a]" />
      <Band slug="enterprise" tone="bg-brand-navy" />
      <Band slug="data-ai" tone="bg-[#1a2760]" />
      <Band slug="cloud-devops" tone="bg-[#121c4a]" />
    </div>
    <Rail slug="quality" tone="bg-brand-coral" />
  </nav>
);

/* One block per layer: name and purpose on the left, technologies on the right. */
const LayerBlock = ({ layer }: { layer: Layer }) => {
  const Art = layerArt[layer.slug];
  return (
    <article
      id={layer.slug}
      aria-labelledby={`${layer.slug}-title`}
      className="grid scroll-mt-24 gap-8 border-t border-border py-12 lg:scroll-mt-28 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12 lg:py-16"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div aria-hidden="true">
          <Art />
        </div>
        <h3
          id={`${layer.slug}-title`}
          className="mt-6 text-3xl font-medium tracking-tight lg:text-4xl"
        >
          {layer.name}
        </h3>
        <p className="mt-2 max-w-xs text-base text-muted-foreground">
          {layer.purpose}
        </p>
      </div>

      <div>
        <div className="hidden grid-cols-[minmax(0,3fr)_minmax(0,4fr)_minmax(0,5fr)] gap-6 border-b border-border pb-3 text-xs font-medium text-muted-foreground md:grid">
          <span>Technology</span>
          <span>Used for</span>
          <span>We recommend it when</span>
        </div>
        <ul>
          {layer.tech.map((t) => (
            <li
              key={t.name}
              className="grid gap-1.5 border-b border-border py-4 md:grid-cols-[minmax(0,3fr)_minmax(0,4fr)_minmax(0,5fr)] md:gap-6"
            >
              <span className="relative text-base font-semibold text-brand-navy">
                {t.name}
              </span>
              <span className="text-base text-foreground/85">{t.usedFor}</span>
              <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                <span className="font-medium text-foreground/70 md:hidden">
                  When:
                </span>
                {t.when}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const TechStack = () => {
  return (
    <section className="pb-6 lg:pb-10">
      <div className="global-padding-x">
        <SectionHeading
          title="What we build with"
          description="And when we'd recommend each one."
        />

        <div className="mb-14 grid gap-10 lg:mb-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
          <div>
            <p className="max-w-md text-lg leading-relaxed">
              Every product we build sits on the same eight layers. The
              experience your users see sits on top; the infrastructure that
              runs it sits at the base.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Security and quality aren't separate stages. They run alongside
              every layer, from the first line of code to production. Select a
              layer to see what we use and when we'd recommend it.
            </p>
          </div>
          <StackDiagram />
        </div>

        {layers.map((layer) => <LayerBlock key={layer.slug} layer={layer} />)}
      </div>
    </section>
  );
};

export default TechStack;
