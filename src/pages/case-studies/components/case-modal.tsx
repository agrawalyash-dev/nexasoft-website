import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  MapPin,
  Quote,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CaseStudyItem } from "../data";

interface CaseModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
}

export const CaseModal = ({ caseStudy, onClose }: CaseModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const Screen = caseStudy.ScreenComponent;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-white shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Sticky Header with artwork bar */}
        <div
          className={cn(
            "relative isolate border-b border-white/15 px-6 py-5 text-white sm:px-8",
            caseStudy.art,
          )}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-b from-[#0b1430]/40 via-[#0b1430]/75 to-[#0b1430]/95"
          />

          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-sm bg-white/20 px-2.5 py-0.5 font-medium tracking-wide uppercase text-white">
                  {caseStudy.industry}
                </span>
                <span className="text-white/70">·</span>
                <span className="font-medium text-white/90">
                  {caseStudy.client}
                </span>
                <span className="text-white/70">·</span>
                <span className="flex items-center gap-1 text-white/80">
                  <MapPin className="size-3.5" />
                  {caseStudy.location}
                </span>
              </div>
              <h2
                id="case-modal-title"
                className="text-xl sm:text-2xl font-bold tracking-tight text-white"
              >
                {caseStudy.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study details"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white transition-colors hover:bg-white hover:text-brand-navy focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-8">
          {/* Top highlight bar */}
          <div className="grid gap-4 sm:grid-cols-3 rounded-lg border border-border bg-slate-50 p-4 sm:p-5">
            <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-border pb-3 sm:pb-0 sm:pr-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Primary Impact
              </span>
              <div className="text-3xl font-extrabold text-brand-navy tracking-tight tabular-nums">
                {caseStudy.metric}
              </div>
              <p className="text-xs text-muted-foreground">
                {caseStudy.metricLabel}
              </p>
            </div>

            <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-border pb-3 sm:pb-0 sm:pr-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="size-3.5 text-brand-coral" /> Timeline
              </span>
              <div className="text-sm font-semibold text-slate-800">
                {caseStudy.timeline}
              </div>
              <p className="text-xs text-muted-foreground">
                From initial workshop to live branches
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Users className="size-3.5 text-brand-blue" /> Squad Shape
              </span>
              <div className="text-sm font-semibold text-slate-800">
                {caseStudy.teamShape}
              </div>
              <p className="text-xs text-muted-foreground">
                Dedicated engineering pod
              </p>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-brand-coral uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="size-4" /> Executive Overview
            </h3>
            <p className="text-base leading-relaxed text-slate-700 font-normal">
              {caseStudy.overview}
            </p>
          </div>

          {/* Visual Mockup Preview */}
          <div className="rounded-xl border border-border bg-slate-900/5 p-4 sm:p-6 overflow-hidden">
            <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground font-medium">
              <span>Production Interface Architecture</span>
              {caseStudy.url && (
                <span className="rounded bg-white px-2 py-0.5 border border-border text-[11px] font-mono text-slate-600">
                  https://{caseStudy.url}
                </span>
              )}
            </div>
            <div className="mx-auto max-w-lg transform scale-95 sm:scale-100 transition-all">
              <Screen />
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* The Challenge */}
            <div className="space-y-3 rounded-lg border border-red-100 bg-red-50/40 p-5">
              <h4 className="text-sm font-bold text-red-900 uppercase tracking-wider flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-500" />{" "}
                The Challenge
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {caseStudy.challenge.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Engineering Solution */}
            <div className="space-y-3 rounded-lg border border-emerald-100 bg-emerald-50/40 p-5">
              <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />{" "}
                Engineering Solution
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {caseStudy.solution.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Measurable Results */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-brand-navy" />{" "}
              Measurable Business Outcomes
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {caseStudy.results.map((r, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-slate-50/70 p-4 relative overflow-hidden"
                >
                  <span className="absolute top-0 left-0 h-1 w-full bg-brand-coral" />
                  <div className="text-2xl font-bold tracking-tight text-brand-navy tabular-nums">
                    {r.stat}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-slate-600">
                    {r.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights & Tech Stack */}
          <div className="space-y-4 rounded-lg border border-border bg-white p-5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="size-4 text-brand-blue" />{" "}
              Architecture & Technology Stack
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2 text-xs text-slate-600">
              {caseStudy.architecture.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-border flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-slate-500">
                Core Technologies:
              </span>
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-brand-navy/5 px-2.5 py-1 text-xs font-medium text-brand-navy border border-brand-navy/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial Quote */}
          {caseStudy.quote && (
            <div className="relative rounded-xl border border-brand-navy/15 bg-brand-navy/5 p-6 sm:p-7">
              <Quote className="absolute top-5 right-5 size-8 text-brand-navy/20" />
              <p className="relative italic text-slate-800 text-sm sm:text-base leading-relaxed">
                "{caseStudy.quote.text}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="size-9 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                  {caseStudy.quote.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {caseStudy.quote.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {caseStudy.quote.role}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer */}
        <div className="border-t border-border bg-slate-50 px-6 py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Have a challenge similar to this? Our specialists can structure a
            2-week pilot.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={onClose}
              className="w-1/2 sm:w-auto"
            >
              Close
            </Button>
            <Button
              nativeButton={false}
              render={<Link to="/contact" onClick={onClose} />}
              className="w-1/2 sm:w-auto"
            >
              Discuss Your Project
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
