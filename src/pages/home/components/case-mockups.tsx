import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const panel =
  "block overflow-hidden rounded-md border border-white/60 bg-white text-[10px] text-slate-600 shadow-[0_2px_6px_rgb(0_0_0/0.15),0_24px_48px_-12px_rgb(0_0_0/0.55)]";

const Header = ({ title, meta }: { title: string; meta?: string }) => (
  <span className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
    <span className="text-[11px] font-semibold text-slate-900">{title}</span>
    {meta && <span className="text-slate-400">{meta}</span>}
  </span>
);

const tones = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
};
const Pill = (
  { tone, children }: { tone: keyof typeof tones; children: string },
) => (
  <span
    className={cn(
      "rounded px-1.5 py-0.5 font-medium whitespace-nowrap",
      tones[tone],
    )}
  >
    {children}
  </span>
);

/* Banking: loan approvals queue */
const loans: [string, string, number, keyof typeof tones, string][] = [
  ["A. Kulkarni", "₹8.5L", 781, "green", "Approved"],
  ["S. Iyer", "₹3.2L", 742, "green", "Approved"],
  ["R. Mehta", "₹12L", 688, "amber", "Review"],
  ["N. Joshi", "₹5.0L", 755, "green", "Approved"],
];

export const LoanMock = () => (
  <span className={panel}>
    <Header title="Loan applications" meta="Today" />
    <span className="grid grid-cols-2 border-b border-slate-100">
      <span className="block border-r border-slate-100 px-3 py-1.5">
        <span className="block text-slate-400">Avg. decision</span>
        <span className="block text-sm font-semibold text-slate-900 tabular-nums">
          4.2 h
        </span>
      </span>
      <span className="block px-3 py-1.5">
        <span className="block text-slate-400">Auto-approved</span>
        <span className="block text-sm font-semibold text-slate-900 tabular-nums">
          71%
        </span>
      </span>
    </span>
    {loans.map(([name, amount, score, tone, status]) => (
      <span
        key={name}
        className="flex items-center gap-2 border-b border-slate-100 px-3 py-1.5"
      >
        <span className="flex-1 truncate font-medium text-slate-800">
          {name}
        </span>
        <span className="w-9 text-right tabular-nums">{amount}</span>
        <span className="w-7 text-right text-slate-400 tabular-nums">
          {score}
        </span>
        <Pill tone={tone}>{status}</Pill>
      </span>
    ))}
  </span>
);

/* Healthcare: cloud migration tracker */
const systems = [
  "Patient records (EHR)",
  "Lab information",
  "Billing and claims",
  "Pharmacy",
];

export const MigrationMock = () => (
  <span className={panel}>
    <Header title="Cloud migration" meta="Wave 4 of 4" />
    <span className="block border-b border-slate-100 px-3 py-2">
      <span className="flex items-baseline justify-between">
        <span className="text-slate-400">Systems migrated</span>
        <span className="text-sm font-semibold text-slate-900 tabular-nums">
          40 / 40
        </span>
      </span>
      <span className="mt-1.5 block h-1.5 rounded-full bg-emerald-500" />
    </span>
    {systems.map((s) => (
      <span
        key={s}
        className="flex items-center gap-2 border-b border-slate-100 px-3 py-1.5"
      >
        <span className="flex size-3.5 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="size-2.5" strokeWidth={3} />
        </span>
        <span className="flex-1 truncate text-slate-800">{s}</span>
        <span className="text-slate-400">0 min down</span>
      </span>
    ))}
  </span>
);

/* Retail: phone with recommendations */
const products: [string, string, string][] = [
  ["Linen shirt", "₹1,899", "from-[#cfd6e4] to-[#b3bdd1]"],
  ["Chino trousers", "₹2,299", "from-[#e4d9c8] to-[#cdbda3]"],
  ["Canvas sneakers", "₹2,999", "from-[#d4e0d8] to-[#b7c9bd]"],
  ["Leather belt", "₹999", "from-[#e0cfc8] to-[#c9b0a5]"],
];

export const RecommendationsMock = () => (
  <span className="mx-auto block w-44 overflow-hidden rounded-[22px] border-[5px] border-[#1b2236] bg-white text-[9px] text-slate-600 shadow-[0_24px_48px_-12px_rgb(0_0_0/0.6)]">
    <span className="mx-auto mt-1.5 block h-1 w-10 rounded-full bg-slate-200" />
    <span className="block px-2.5 pt-2">
      <span className="block text-[11px] font-semibold text-slate-900">
        Recommended for you
      </span>
      <span className="block text-slate-400">Based on your last order</span>
    </span>
    <span className="grid grid-cols-2 gap-1.5 p-2.5">
      {products.map(([name, price, swatch]) => (
        <span key={name} className="block">
          <span
            className={cn(
              "block aspect-square rounded bg-linear-to-br",
              swatch,
            )}
          />
          <span className="mt-1 block truncate font-medium text-slate-800">
            {name}
          </span>
          <span className="block tabular-nums">{price}</span>
        </span>
      ))}
    </span>
  </span>
);

/* Manufacturing: plants overview */
const plants: [string, number, boolean][] = [
  ["Pune", 86, true],
  ["Chakan", 82, true],
  ["Nashik", 79, true],
  ["Hosur", 88, true],
  ["Sanand", 64, false],
  ["Manesar", 84, true],
  ["Chennai", 81, true],
  ["Halol", 85, true],
  ["Nagpur", 77, true],
];

export const PlantsMock = () => (
  <span className={panel}>
    <Header title="Plant overview" meta="Live" />
    <span className="grid grid-cols-3">
      {plants.map(([name, oee, ok]) => (
        <span
          key={name}
          className="block border-r border-b border-slate-100 px-2.5 py-2 nth-[3n]:border-r-0"
        >
          <span className="flex items-center gap-1">
            <span
              className={cn(
                "block size-1.5 shrink-0 rounded-full",
                ok ? "bg-emerald-500" : "bg-amber-500",
              )}
            />
            <span className="truncate text-slate-500">{name}</span>
          </span>
          <span className="mt-0.5 block text-sm font-semibold text-slate-900 tabular-nums">
            {oee}%
          </span>
        </span>
      ))}
    </span>
  </span>
);
