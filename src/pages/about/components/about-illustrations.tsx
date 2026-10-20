import type { ReactNode } from "react";
import { Check, FolderLock, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const Panel = ({
  art,
  className,
  children,
}: {
  art: string;
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn(
      "relative isolate flex h-52 w-full items-center justify-center overflow-hidden px-6",
      art,
      className,
    )}
  >
    <span className="absolute inset-0 -z-10 bg-[#0b1430]/25" />
    {children}
  </div>
);

const card =
  "rounded-md bg-white text-[10px] text-slate-600 shadow-[0_2px_6px_rgb(0_0_0/0.15),0_20px_40px_-14px_rgb(0_0_0/0.55)]";

const bar = (w: string, tone = "bg-slate-200") => (
  <span className={cn("block h-1.5 rounded-full", tone)} style={{ width: w }} />
);

const Tick = ({ tone = "bg-brand-navy" }: { tone?: string }) => (
  <span
    className={cn(
      "flex size-4 shrink-0 items-center justify-center rounded-full text-white",
      tone,
    )}
  >
    <Check className="size-2.5" strokeWidth={3} />
  </span>
);

const CardHead = ({ title, chip }: { title: string; chip?: string }) => (
  <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
    <span className="text-[11px] font-semibold text-slate-900">{title}</span>
    {chip && (
      <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-600">
        {chip}
      </span>
    )}
  </div>
);

/* 1. Discovery Before Code: scope checklist */
export const DiscoveryArt = () => (
  <Panel art="bg-art-1">
    <div className={cn(card, "w-full max-w-65 overflow-hidden")}>
      <CardHead title="Discovery" chip="Before development" />
      {["Requirements", "Scope", "Risks", "Success measures"].map((
        row,
        i,
        all,
      ) => (
        <div
          key={row}
          className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-2 last:border-b-0"
        >
          <Tick
            tone={i === all.length - 1 ? "bg-brand-coral" : "bg-brand-navy"}
          />
          <span className="font-medium text-slate-800">{row}</span>
          <span className="ml-auto">{bar("28px")}</span>
        </div>
      ))}
    </div>
  </Panel>
);

/* 2. Working Software Every Two Weeks: sprints with demos */
export const SprintArt = () => (
  <Panel art="bg-art-2">
    <div className={cn(card, "w-full max-w-72 p-3")}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-900">
          Sprints
        </span>
        <span className="rounded bg-[#eef1fb] px-1.5 py-0.5 text-[9px] font-medium text-[#223173]">
          Demo every two weeks
        </span>
      </div>
      <div className="mt-3 space-y-2.5">
        {[78, 100, 52].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-11 shrink-0 text-slate-400">Sprint {i + 1}</span>
            <span className="relative h-3 flex-1 rounded-sm bg-slate-100">
              <span
                className={cn(
                  "absolute inset-y-0 left-0 rounded-sm",
                  i === 2 ? "bg-brand-blue/60" : "bg-brand-navy",
                )}
                style={{ width: `${w}%` }}
              />
            </span>
            <span
              className={cn(
                "w-9 shrink-0 rounded-sm px-1 py-0.5 text-center text-[9px] font-medium",
                i === 2
                  ? "bg-slate-100 text-slate-400"
                  : "bg-brand-coral/15 text-brand-coral",
              )}
            >
              Demo
            </span>
          </div>
        ))}
      </div>
    </div>
  </Panel>
);

/* 3. Quality Gates in Every Release */
export const QualityArt = () => (
  <Panel art="bg-art-6">
    <div className={cn(card, "w-full max-w-65 overflow-hidden")}>
      <CardHead title="Release checks" />
      {["Code reviews", "Automated testing", "Performance checks"].map((g) => (
        <div
          key={g}
          className="flex items-center gap-2 border-b border-slate-100 px-3 py-2"
        >
          <span className="font-medium text-slate-800">{g}</span>
          <span className="ml-auto rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700">
            Passed
          </span>
        </div>
      ))}
      <div className="m-2.5 rounded bg-[#1f2d6b] py-1.5 text-center font-medium text-white">
        Release to production
      </div>
    </div>
  </Panel>
);

/* 4. Security by Default */
export const SecurityArt = () => (
  <Panel art="bg-art-2">
    <div className={cn(card, "w-full max-w-65 overflow-hidden")}>
      <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <ShieldCheck className="size-4 text-brand-navy" />
        <span className="text-[11px] font-semibold text-slate-900">
          Security checks
        </span>
      </div>
      {["Secure coding practices", "Dependency scanning", "Access reviews"].map(
        (r) => (
          <div
            key={r}
            className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-2 last:border-b-0"
          >
            <Lock className="size-3 text-slate-400" />
            <span className="font-medium text-slate-800">{r}</span>
            <span className="ml-auto flex size-3.5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="size-2.5" strokeWidth={3} />
            </span>
          </div>
        ),
      )}
    </div>
  </Panel>
);

/* 5. Clear Reporting: weekly status dashboard */
export const ReportingArt = () => (
  <Panel art="bg-art-6">
    <div className={cn(card, "w-full max-w-72 overflow-hidden")}>
      <CardHead title="Weekly status" chip="Shared dashboard" />
      <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 p-3">
        {[
          ["Progress", "72%", "bg-brand-navy"],
          ["Risks", "30%", "bg-brand-orange"],
          ["Milestones", "55%", "bg-brand-blue"],
          ["Budget", "64%", "bg-emerald-500"],
        ].map(([label, w, tone]) => (
          <div key={label}>
            <span className="text-slate-500">{label}</span>
            <span className="mt-1 block h-1.5 rounded-full bg-slate-100">
              <span
                className={cn("block h-full rounded-full", tone)}
                style={{ width: w }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  </Panel>
);

/* 6. You Own Everything: client-owned account */
export const OwnershipArt = () => (
  <Panel art="bg-art-1">
    <div className={cn(card, "w-full max-w-65 overflow-hidden")}>
      <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <FolderLock className="size-4 text-brand-navy" />
        <span className="text-[11px] font-semibold text-slate-900">
          Client-owned accounts
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 p-2.5">
        {["Code", "Designs", "Documentation", "Infrastructure"].map((x) => (
          <div
            key={x}
            className="flex items-center gap-1.5 rounded border border-slate-200 px-2 py-1.5"
          >
            <span className="size-2 rounded-sm bg-brand-navy" />
            <span className="font-medium text-slate-800">{x}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 bg-[#eef1fb] px-3 py-1.5 text-center font-medium text-[#223173]">
        Structured handover
      </div>
    </div>
  </Panel>
);

/* Who we are: the delivery journey, requirements to handover */
export const JourneyArt = () => {
  const steps = [
    "Requirements",
    "Planning",
    "Development",
    "Validation",
    "Handover",
  ];
  return (
    <Panel art="bg-art-1" className="h-auto min-h-80 py-10">
      <div className={cn(card, "w-full max-w-sm overflow-hidden")}>
        <div className="flex items-center gap-2.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
          <span className="flex gap-1">
            <span className="size-1.5 rounded-full bg-slate-300" />
            <span className="size-1.5 rounded-full bg-slate-300" />
            <span className="size-1.5 rounded-full bg-slate-300" />
          </span>
          <span className="text-slate-500">Project delivery</span>
        </div>
        <ol className="relative px-4 py-4">
          <span
            aria-hidden="true"
            className="absolute top-7 bottom-7 left-6.5 w-px bg-slate-200"
          />
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={step} className="relative flex items-center gap-3 py-2">
                <span
                  className={cn(
                    "relative flex size-5 shrink-0 items-center justify-center rounded-full text-white",
                    last
                      ? "bg-brand-coral ring-4 ring-brand-coral/20"
                      : "bg-brand-navy",
                  )}
                >
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="w-24 text-[12px] font-semibold text-slate-900">
                  {step}
                </span>
                <span className="flex-1">
                  {bar(
                    last ? "50%" : "85%",
                    last ? "bg-brand-coral/30" : "bg-slate-200",
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </Panel>
  );
};

/* Company information: a registration card */
export const RegistrationArt = () => (
  <Panel art="bg-art-2" className="h-auto min-h-72 py-10">
    <div className={cn(card, "w-full max-w-sm overflow-hidden")}>
      <div className="flex items-center justify-between bg-brand-navy px-4 py-3 text-white">
        <span className="text-[11px] font-semibold">
          Certificate of incorporation
        </span>
        <span className="rounded bg-emerald-400/20 px-1.5 py-0.5 text-[9px] font-medium text-emerald-200">
          Active
        </span>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <span className="text-slate-400">Legal name</span>
          <span className="mt-0.5 block text-[13px] leading-tight font-semibold text-slate-900">
            Nexasoft Technologies Private Limited
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-3">
          <div>
            <span className="text-slate-400">Incorporated</span>
            <span className="mt-0.5 block font-semibold text-slate-800">
              April 11, 2024
            </span>
          </div>
          <div>
            <span className="text-slate-400">Registrar</span>
            <span className="mt-0.5 block font-semibold text-slate-800">
              RoC Ahmedabad
            </span>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-3">
          <span className="text-slate-400">CIN</span>
          <span className="mt-0.5 block font-mono text-[11px] font-semibold tracking-wide text-[#223173]">
            U26205GJ2024PTC150544
          </span>
        </div>
      </div>
    </div>
  </Panel>
);
