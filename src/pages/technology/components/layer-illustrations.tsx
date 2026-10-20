import type { ReactNode } from "react";
import { Check, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Small illustrated panels for the stack layers: a navy brand background
 * with a miniature white interface showing what the layer does.
 * Static and decorative (aria-hidden at the call site).
 */

const Panel = ({ art, children }: { art: string; children: ReactNode }) => (
  <div
    className={cn(
      "relative isolate flex h-48 w-full max-w-sm items-center justify-center overflow-hidden px-6",
      art,
    )}
  >
    <span className="absolute inset-0 -z-10 bg-[#0b1430]/25" />
    {children}
  </div>
);

const card =
  "rounded-md bg-white text-[9px] text-slate-600 shadow-[0_2px_6px_rgb(0_0_0/0.15),0_20px_40px_-14px_rgb(0_0_0/0.55)]";
const bar = (w: string, tone = "bg-slate-200") => (
  <span className={cn("block h-1.5 rounded-full", tone)} style={{ width: w }} />
);

/* Web: a browser with a page layout */
export const WebArt = () => (
  <Panel art="bg-art-1">
    <div className={cn(card, "w-full overflow-hidden")}>
      <div className="flex items-center gap-1 border-b border-slate-100 bg-slate-50 px-2.5 py-1.5">
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="ml-2 h-2.5 flex-1 rounded-sm bg-white" />
      </div>
      <div className="space-y-1.5 p-2.5">
        <div className="flex items-center justify-between">
          {bar("28%", "bg-[#223173]")}
          <span className="flex gap-1.5">
            {bar("16px")}
            {bar("16px")}
            {bar("16px")}
          </span>
        </div>
        <div className="rounded bg-linear-to-br from-[#223173] to-[#2a6fd6] p-2">
          <span className="block h-2 w-2/3 rounded-full bg-white/90" />
          <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-white/50" />
          <span className="mt-2 block h-2.5 w-10 rounded-sm bg-brand-coral" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="space-y-1 rounded border border-slate-100 p-1.5"
            >
              <span className="block h-3 rounded-sm bg-slate-100" />
              {bar("80%")}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Panel>
);

/* Mobile: iOS and Android phones running the same app */
const Phone = ({ tilt }: { tilt: string }) => (
  <div
    className={cn(
      card,
      "w-24 overflow-hidden rounded-[14px] border-[3px] border-[#1b2236] p-2",
      tilt,
    )}
  >
    <span className="mx-auto mb-2 block h-1 w-6 rounded-full bg-slate-200" />
    <div className="rounded bg-[#223173] p-1.5">
      <span className="block h-1 w-1/2 rounded-full bg-white/60" />
      <span className="mt-1 block text-[10px] font-semibold text-white">
        ₹24,850
      </span>
    </div>
    <div className="mt-1.5 grid grid-cols-3 gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="mx-auto block size-3.5 rounded-full bg-[#eef1fb]"
        />
      ))}
    </div>
    <div className="mt-1.5 space-y-1">{bar("90%")}{bar("70%")}{bar("80%")}</div>
  </div>
);
export const MobileArt = () => (
  <Panel art="bg-art-6">
    <div className="flex items-end gap-3">
      <Phone tilt="-rotate-3 translate-y-1" />
      <Phone tilt="rotate-3" />
    </div>
  </Panel>
);

/* Backend: an API console */
const calls: [string, string, string, string][] = [
  ["GET", "/api/orders", "200", "38 ms"],
  ["POST", "/api/payments", "201", "112 ms"],
  ["GET", "/api/customers/42", "200", "24 ms"],
  ["PUT", "/api/stock/sku-19", "200", "41 ms"],
];
export const BackendArt = () => (
  <Panel art="bg-art-5">
    <div className="w-full overflow-hidden rounded-md bg-[#0f172a] font-mono text-[9px] text-slate-300 shadow-[0_20px_40px_-14px_rgb(0_0_0/0.6)] ring-1 ring-white/15">
      <div className="border-b border-white/10 px-3 py-1.5 text-slate-500">
        api-gateway · live
      </div>
      <div className="space-y-1.5 px-3 py-2.5">
        {calls.map(([m, path, code, ms]) => (
          <div key={path} className="flex items-center gap-2">
            <span
              className={cn(
                "w-8",
                m === "GET"
                  ? "text-sky-300"
                  : m === "POST"
                  ? "text-amber-200"
                  : "text-violet-300",
              )}
            >
              {m}
            </span>
            <span className="min-w-0 flex-1 truncate">{path}</span>
            <span className="text-emerald-400">{code}</span>
            <span className="w-11 text-right text-slate-500">{ms}</span>
          </div>
        ))}
      </div>
    </div>
  </Panel>
);

/* Data and AI: sources → warehouse → dashboard */
export const DataArt = () => (
  <Panel art="bg-art-6">
    <div className="flex w-full items-center gap-2">
      <div className="space-y-1.5">
        {["ERP", "CRM", "App"].map((s) => (
          <div
            key={s}
            className={cn(card, "px-2 py-1 font-medium text-slate-800")}
          >
            {s}
          </div>
        ))}
      </div>
      <span className="h-px flex-1 border-t border-dashed border-white/50" />
      <div
        className={cn(
          card,
          "flex size-12 flex-col items-center justify-center gap-0.5 text-center font-semibold text-[#223173]",
        )}
      >
        <span className="block h-1 w-6 rounded-full bg-[#223173]" />
        <span className="block h-1 w-6 rounded-full bg-[#223173]/60" />
        <span className="block h-1 w-6 rounded-full bg-[#223173]/30" />
      </div>
      <span className="h-px flex-1 border-t border-dashed border-white/50" />
      <div className={cn(card, "w-24 p-2")}>
        <div className="mb-1 font-semibold text-slate-800">Forecast</div>
        <div className="flex h-9 items-end gap-0.5">
          {[30, 45, 38, 60, 52, 75, 90].map((h, i) => (
            <span
              key={i}
              className={cn(
                "block flex-1 rounded-t-sm",
                i === 6 ? "bg-brand-coral" : "bg-[#223173]/80",
              )}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  </Panel>
);

/* Cloud and DevOps: a CI/CD run */
export const CloudArt = () => (
  <Panel art="bg-art-2">
    <div className={cn(card, "w-full p-3")}>
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-semibold text-slate-800">main · #482</span>
        <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-medium text-emerald-700">
          Deployed
        </span>
      </div>
      <div className="flex items-center">
        {["Build", "Test", "Scan", "Deploy"].map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-1">
              <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span>{s}</span>
            </div>
            {i < 3 && (
              <span className="mx-1 mb-3.5 h-0.5 flex-1 bg-emerald-200" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex justify-between border-t border-slate-100 pt-2">
        <span>ap-south-1 · 12 pods</span>
        <span className="font-medium text-slate-800">4 min 12 s</span>
      </div>
    </div>
  </Panel>
);

/* Enterprise: three connected systems */
export const EnterpriseArt = () => (
  <Panel art="bg-art-5">
    <div className="relative h-32 w-full">
      <svg
        viewBox="0 0 300 128"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
        aria-hidden="true"
      >
        <path
          d="M150 34 L60 98 M150 34 L240 98 M60 98 L240 98"
          stroke="rgb(255 255 255 / 0.55)"
          strokeDasharray="3 4"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {[
        ["SAP S/4HANA", "left-1/2 top-0 -translate-x-1/2"],
        ["Salesforce", "left-0 bottom-0"],
        ["ServiceNow", "right-0 bottom-0"],
      ].map(([name, pos]) => (
        <div key={name} className={cn(card, "absolute px-2.5 py-1.5", pos)}>
          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {name}
          </span>
          <span className="block text-slate-400">Synced</span>
        </div>
      ))}
    </div>
  </Panel>
);

/* Security: shield with access checks */
export const SecurityArt = () => (
  <Panel art="bg-art-4">
    <div className="flex w-full items-center gap-4">
      <div className="relative flex size-20 shrink-0 items-center justify-center">
        <ShieldCheck
          className="size-20 stroke-1 text-white/90"
          aria-hidden="true"
        />
      </div>
      <div className={cn(card, "flex-1 space-y-1.5 p-2.5")}>
        {["Single sign-on", "MFA verified", "Dependency scan", "Access review"]
          .map((c) => (
            <div key={c} className="flex items-center gap-1.5">
              <span className="flex size-3.5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              <span className="flex-1 text-slate-800">{c}</span>
              <Lock className="size-2.5 text-slate-300" aria-hidden="true" />
            </div>
          ))}
      </div>
    </div>
  </Panel>
);

/* Quality: a test run */
export const QualityArt = () => (
  <Panel art="bg-art-1">
    <div className={cn(card, "w-full p-3")}>
      <div className="flex items-baseline justify-between">
        <span className="font-semibold text-slate-800">Test run</span>
        <span className="text-[13px] font-semibold text-emerald-600 tabular-nums">
          412 passed
        </span>
      </div>
      <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-slate-100">
        <span className="block w-[87%] bg-emerald-500" />
      </div>
      <div className="mt-1 flex justify-between text-slate-400">
        <span>Coverage</span>
        <span>87%</span>
      </div>
      <div className="mt-2 space-y-1 border-t border-slate-100 pt-2">
        {[
          ["Unit", "318"],
          ["Integration", "76"],
          ["End-to-end", "18"],
        ].map(([s, n]) => (
          <div key={s} className="flex items-center gap-1.5">
            <Check className="size-2.5 text-emerald-600" strokeWidth={3} />
            <span className="flex-1">{s}</span>
            <span className="tabular-nums">{n}</span>
          </div>
        ))}
      </div>
    </div>
  </Panel>
);
