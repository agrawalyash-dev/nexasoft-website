import { Check, Fingerprint, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Eight product screens for Featured Work, each a different UI pattern
 * (profile, Gantt, storefront, checkout, document extraction, code editor,
 * map, kanban). Designed to sit inside a browser frame (or their own phone
 * frame). Static, placeholder data.
 */

/* 1. Banking: Customer 360 */
export const Customer360Screen = () => (
  <div className="flex text-[10px] text-slate-600">
    <div className="w-24 shrink-0 space-y-0.5 border-r border-slate-200 bg-slate-50 p-2">
      {["Customers", "Accounts", "Loans", "Service", "Reports"].map((
        item,
        i,
      ) => (
        <div
          key={item}
          className={cn(
            "rounded px-2 py-1.5",
            i === 0 ? "bg-white font-semibold text-[#223173] shadow-sm" : "",
          )}
        >
          {item}
        </div>
      ))}
    </div>
    <div className="min-w-0 flex-1 p-3">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-full bg-[#223173] text-[11px] font-semibold text-white">
          AK
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold text-slate-900">
            Aarav Kulkarni
          </div>
          <div className="text-slate-400">Premier customer · since 2016</div>
        </div>
        <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-medium text-emerald-700">
          KYC verified
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {[
          ["Savings", "₹4.2L", null],
          ["Home loan", "₹38L", 62],
          ["Credit card", "₹18,400", null],
        ].map(([label, value, progress]) => (
          <div
            key={label as string}
            className="rounded border border-slate-200 p-2"
          >
            <div className="text-slate-400">{label}</div>
            <div className="mt-0.5 text-[12px] font-semibold text-slate-900 tabular-nums">
              {value}
            </div>
            {progress
              ? (
                <div className="mt-1.5 h-1 rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#223173]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )
              : (
                <div className="mt-1.5 text-[9px] text-slate-400">
                  {label === "Savings" ? "Active" : "Due 5 Nov"}
                </div>
              )}
          </div>
        ))}
      </div>
      <div className="mt-3 text-[10px] font-semibold text-slate-900">
        Activity
      </div>
      <div className="relative mt-1.5 space-y-2 pl-3.5 before:absolute before:top-1 before:bottom-1 before:left-0.75 before:w-px before:bg-slate-200">
        {[
          ["Loan top-up approved", "Today, 11:42", true],
          ["Address updated in app", "2 days ago", false],
          ["Branch visit · Andheri", "Last week", false],
        ].map(([title, time, hot]) => (
          <div key={title as string} className="relative">
            <span
              className={cn(
                "absolute top-1 -left-3.5 size-1.75 rounded-full",
                hot ? "bg-brand-coral" : "bg-slate-300",
              )}
            />
            <div className="text-slate-800">{title}</div>
            <div className="text-[9px] text-slate-400">{time}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* 2. Cloud migration: Gantt plan */
const waves: [string, number, number, "done" | "live"][] = [
  ["Wave 1 · Core infra", 0, 3, "done"],
  ["Wave 2 · ERP & finance", 2, 4, "done"],
  ["Wave 3 · Customer apps", 5, 4, "done"],
  ["Wave 4 · Data platform", 8, 4, "live"],
];

export const MigrationPlanScreen = () => (
  <div className="p-3 text-[10px] text-slate-600">
    <div className="mb-2.5 flex items-center justify-between">
      <span className="text-[12px] font-semibold text-slate-900">
        Migration plan
      </span>
      <span className="text-slate-400">3 data centres → cloud</span>
    </div>
    <div className="flex">
      <div className="w-28 shrink-0" />
      <div className="grid flex-1 grid-cols-12 text-center text-[8px] text-slate-400">
        {Array.from({ length: 12 }, (_, i) => <span key={i}>W{i + 1}</span>)}
      </div>
    </div>
    <div className="relative mt-1">
      {waves.map(([label, start, len, state]) => (
        <div
          key={label}
          className="flex items-center border-t border-slate-100 py-2"
        >
          <span className="w-28 shrink-0 truncate pr-2 text-slate-700">
            {label}
          </span>
          <span className="relative block h-4 flex-1">
            <span
              className={cn(
                "absolute inset-y-0 flex items-center rounded-sm px-1.5 text-[8px] font-medium text-white",
                state === "done" ? "bg-emerald-500" : "bg-[#223173]",
              )}
              style={{
                left: `${(start / 12) * 100}%`,
                width: `${(len / 12) * 100}%`,
              }}
            >
              {state === "done" ? "Live" : "In progress"}
            </span>
          </span>
        </div>
      ))}
      {/* today marker */}
      <span
        className="absolute top-0 bottom-0 border-l border-dashed border-brand-coral"
        style={{ left: `calc(7rem + (100% - 7rem) * ${10.5 / 12})` }}
      />
    </div>
    <div className="mt-2 flex gap-4 border-t border-slate-100 pt-2">
      {[
        ["Systems live", "34 / 40"],
        ["Downtime", "0 min"],
        ["Cost vs plan", "−38%"],
      ].map(([l, v]) => (
        <div key={l}>
          <div className="text-slate-400">{l}</div>
          <div className="text-[12px] font-semibold text-slate-900 tabular-nums">
            {v}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* 3. Retail: product page */
export const StorefrontScreen = () => (
  <div className="text-[10px] text-slate-600">
    <div className="bg-brand-coral py-1 text-center text-[9px] font-medium text-white">
      Festival Sale · Up to 40% off · Free delivery
    </div>
    <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
      <span className="text-[11px] font-semibold tracking-tight text-slate-900">
        URBAN THREADS
      </span>
      <span className="flex gap-3 text-slate-400">
        <span>Men</span>
        <span>Women</span>
        <span>Bag (2)</span>
      </span>
    </div>
    <div className="flex gap-3 p-3">
      <div className="w-36 shrink-0">
        <div className="aspect-4/5 rounded bg-linear-to-br from-[#e9e2d6] via-[#ddd2c0] to-[#c9b99f]" />
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {[
            "from-[#e9e2d6] to-[#c9b99f]",
            "from-[#d9dee8] to-[#b9c2d4]",
            "from-[#dfe6e1] to-[#bccbbf]",
          ].map((g, i) => (
            <div
              key={g}
              className={cn(
                "aspect-square rounded bg-linear-to-br",
                g,
                i === 0 && "ring-1 ring-slate-900",
              )}
            />
          ))}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-slate-400">Linen collection</div>
        <div className="text-[13px] leading-tight font-semibold text-slate-900">
          Relaxed Linen Shirt
        </div>
        <div className="mt-1.5 flex items-baseline gap-1.5">
          <span className="text-[13px] font-semibold text-slate-900">
            ₹1,899
          </span>
          <span className="text-slate-400 line-through">₹2,499</span>
          <span className="font-medium text-emerald-600">24% off</span>
        </div>
        <div className="mt-2.5 text-slate-500">Size</div>
        <div className="mt-1 flex gap-1">
          {["S", "M", "L", "XL"].map((sz) => (
            <span
              key={sz}
              className={cn(
                "flex size-6 items-center justify-center rounded border",
                sz === "M"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200",
              )}
            >
              {sz}
            </span>
          ))}
        </div>
        <div className="mt-3 rounded bg-[#223173] py-1.5 text-center font-semibold text-white">
          Add to bag
        </div>
        <div className="mt-1.5 text-[9px] text-slate-400">
          Delivery by Thursday · Easy returns
        </div>
      </div>
    </div>
  </div>
);

/* 4. Financial services: UPI payment confirmation (own phone frame) */
export const UpiPaymentScreen = () => (
  <div className="w-48 overflow-hidden rounded-[24px] border-[5px] border-[#1b2236] bg-white text-[9px] text-slate-600 shadow-[0_2px_6px_rgb(0_0_0/0.15),0_40px_70px_-20px_rgb(0_0_0/0.6)]">
    <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-slate-200" />
    <div className="px-4 pt-3 pb-4 text-center">
      <div className="text-slate-400">Paying</div>
      <div className="mx-auto mt-2 flex size-10 items-center justify-center rounded-full bg-[#eef1fb] text-[12px] font-semibold text-[#223173]">
        MT
      </div>
      <div className="mt-1.5 text-[11px] font-semibold text-slate-900">
        Mehta Traders
      </div>
      <div className="text-slate-400">mehtatraders@upi</div>
      <div className="mt-3 text-[26px] leading-none font-semibold tracking-tight text-slate-900 tabular-nums">
        ₹12,450
      </div>
      <div className="mt-1 text-slate-400">Invoice #2291</div>
      <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 px-2.5 py-2 text-left">
        <div>
          <div className="text-slate-400">From</div>
          <div className="font-medium text-slate-800">Savings ••4821</div>
        </div>
        <span className="text-[#223173]">Change</span>
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-[#223173] py-2 font-semibold text-white">
        <Fingerprint className="size-3.5" />
        Confirm with fingerprint
      </div>
      <div className="mt-2 text-[8px] text-slate-400">
        Protected by device binding
      </div>
    </div>
  </div>
);

/* 5. Healthcare: document extraction */
const fields: [string, string, number][] = [
  ["Patient", "R. Patel", 99],
  ["Date of birth", "12 Mar 1966", 98],
  ["Referred to", "Cardiology", 97],
  ["Urgency", "Routine", 91],
  ["Policy no.", "HX-22841", 88],
];

export const DocumentExtractionScreen = () => (
  <div className="flex text-[10px] text-slate-600">
    <div className="w-40 shrink-0 bg-slate-100 p-2.5">
      <div className="space-y-1.5 bg-white p-2.5 shadow-sm">
        <div className="mb-2 h-1.5 w-16 rounded-full bg-slate-300" />
        <div className="rounded-sm px-0.5 ring-1 ring-brand-coral">
          <div className="h-1 w-20 rounded-full bg-slate-300" />
        </div>
        <div className="h-1 w-24 rounded-full bg-slate-200" />
        <div className="rounded-sm px-0.5 ring-1 ring-[#223173]">
          <div className="h-1 w-14 rounded-full bg-slate-300" />
        </div>
        <div className="h-1 w-28 rounded-full bg-slate-200" />
        <div className="h-1 w-22 rounded-full bg-slate-200" />
        <div className="rounded-sm px-0.5 ring-1 ring-[#223173]">
          <div className="h-1 w-18 rounded-full bg-slate-300" />
        </div>
        <div className="h-1 w-26 rounded-full bg-slate-200" />
        <div className="h-1 w-20 rounded-full bg-slate-200" />
        <div className="h-1 w-24 rounded-full bg-slate-200" />
        <div className="mt-3 h-4 w-12 rounded-sm border border-dashed border-slate-300" />
      </div>
      <div className="mt-1.5 truncate font-mono text-[8px] text-slate-400">
        Referral_0921.pdf · scan
      </div>
    </div>
    <div className="min-w-0 flex-1 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[12px] font-semibold text-slate-900">
          Extracted fields
        </span>
        <span className="text-slate-400">AI · 1.2 s</span>
      </div>
      {fields.map(([label, value, conf]) => (
        <div
          key={label}
          className="flex items-center gap-2 border-b border-slate-100 py-1.5"
        >
          <span className="w-16 shrink-0 text-slate-400">{label}</span>
          <span className="min-w-0 flex-1 truncate font-medium text-slate-800">
            {value}
          </span>
          <span
            className={cn(
              "tabular-nums",
              conf < 90 ? "text-amber-600" : "text-emerald-600",
            )}
          >
            {conf}%
          </span>
        </div>
      ))}
      <div className="mt-2.5 flex items-center justify-center gap-1 rounded bg-[#223173] py-1.5 font-semibold text-white">
        <Check className="size-3" strokeWidth={3} />
        Send to Cardiology
      </div>
    </div>
  </div>
);

/* 6. Government: access policy editor */
const code: [string, string?][][] = [
  [["policy ", "text-violet-300"], ['"records-portal"', "text-emerald-300"], [
    " {",
  ]],
  [["  allow ", "text-violet-300"], ["if {"]],
  [["    user.group   ", "text-sky-300"], ["== "], [
    '"records-team"',
    "text-emerald-300",
  ]],
  [["    device.state ", "text-sky-300"], ["== "], [
    '"managed"',
    "text-emerald-300",
  ]],
  [["    mfa.verified ", "text-sky-300"], ["== "], ["true", "text-amber-200"]],
  [["    session.age  ", "text-sky-300"], ["< "], ["8h", "text-amber-200"]],
  [["  }"]],
  [["  deny ", "text-violet-300"], ["all"]],
  [["}"]],
];

export const PolicyEditorScreen = () => (
  <div className="bg-[#0f172a] text-[10px]">
    <div className="flex border-b border-white/10 px-2 text-slate-500">
      <span className="border-b-2 border-brand-coral px-2.5 py-1.5 text-slate-100">
        records-portal.policy
      </span>
      <span className="px-2.5 py-1.5">finance.policy</span>
      <span className="px-2.5 py-1.5">admin.policy</span>
    </div>
    <pre className="py-2 font-mono leading-[1.6] text-slate-300">
      {code.map((line, i) => (
        <div key={i} className="flex">
          <span className="w-7 shrink-0 pr-2.5 text-right text-slate-600 select-none">{i + 1}</span>
          <span className="whitespace-pre">
            {line.map(([t, c], j) => (
              <span key={j} className={c}>
                {t}
              </span>
            ))}
          </span>
        </div>
      ))}
    </pre>
    <div className="flex items-center gap-2 border-t border-white/10 bg-white/5 px-3 py-2 text-slate-300">
      <span className="flex size-3.5 items-center justify-center rounded-full bg-emerald-500 text-white">
        <Check className="size-2.5" strokeWidth={3} />
      </span>
      Evaluated 18,442 requests today
      <span className="ml-auto text-red-300">71 denied</span>
    </div>
  </div>
);

/* 7. Logistics: live fleet map */
export const FleetMapScreen = () => (
  <div className="relative h-60 overflow-hidden bg-[#eef1f4] text-[10px] text-slate-600">
    <svg
      viewBox="0 0 400 240"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
    >
      <path d="M0 170 C60 160 90 200 150 210 L150 240 L0 240Z" fill="#d6e6f2" />
      <rect x="250" y="20" width="70" height="44" rx="6" fill="#e2ebdf" />
      <rect x="40" y="40" width="54" height="36" rx="6" fill="#e2ebdf" />
      <g fill="none" stroke="#fff" strokeLinecap="round">
        <path
          d="M-10 120 C80 110 160 140 240 120 S360 70 410 80"
          strokeWidth="9"
        />
        <path d="M120 -10 C130 60 150 120 140 250" strokeWidth="7" />
        <path d="M260 250 C270 180 300 130 360 -10" strokeWidth="7" />
        <path d="M0 60 L410 40" strokeWidth="4" />
        <path d="M0 200 L410 190" strokeWidth="4" />
      </g>
      <path
        d="M40 126 C110 112 170 140 240 120 S330 82 372 76"
        fill="none"
        stroke="#223173"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M240 120 C270 112 300 98 330 88"
        fill="none"
        stroke="#f25d3a"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      {[
        [96, 116],
        [172, 134],
        [300, 98],
      ].map(([x, y]) => (
        <g key={x}>
          <circle
            cx={x}
            cy={y}
            r="7"
            fill="#223173"
            stroke="#fff"
            strokeWidth="2.5"
          />
        </g>
      ))}
      <circle
        cx="240"
        cy="120"
        r="8"
        fill="#f25d3a"
        stroke="#fff"
        strokeWidth="2.5"
      />
      <circle
        cx="40"
        cy="126"
        r="4"
        fill="#fff"
        stroke="#223173"
        strokeWidth="2"
      />
      <circle
        cx="372"
        cy="76"
        r="4"
        fill="#fff"
        stroke="#223173"
        strokeWidth="2"
      />
    </svg>

    <div className="absolute top-3 left-3 w-44 rounded-md bg-white p-2.5 shadow-[0_8px_20px_-8px_rgb(15_23_42/0.35)]">
      <div className="flex items-center justify-between">
        <span className="font-mono font-semibold text-slate-900">TRK-2041</span>
        <span className="flex items-center gap-1 rounded bg-red-50 px-1.5 py-0.5 font-medium text-red-700">
          <TriangleAlert className="size-2.5" />
          Delay risk
        </span>
      </div>
      <div className="mt-1 text-slate-500">Pune → Mumbai port</div>
      <div className="mt-2 flex justify-between border-t border-slate-100 pt-1.5">
        <span>ETA</span>
        <span className="font-semibold text-slate-900">18:40 → 20:15</span>
      </div>
      <div className="mt-1 text-[9px] text-[#223173]">
        Reroute suggested via NH48
      </div>
    </div>

    <div className="absolute right-3 bottom-3 rounded bg-white/90 px-2 py-1.5 text-[9px] shadow-sm">
      <span className="font-semibold text-slate-900">1,284</span> trucks live ·
      {" "}
      <span className="text-red-600">49 at risk</span>
    </div>
  </div>
);

/* 8. Manufacturing: production kanban */
const board: [string, [string, string, string?][]][] = [
  ["Planned", [["JOB-3321", "Brake disc ×400"], ["JOB-3324", "Hub ×250"]]],
  ["In production", [["JOB-3318", "Caliper ×600", "64%"], [
    "JOB-3319",
    "Rotor ×300",
    "28%",
  ]]],
  ["Quality check", [["JOB-3312", "Bracket ×800"]]],
  ["Dispatched", [["JOB-3305", "Disc ×500"], ["JOB-3307", "Pad set ×1k"]]],
];

export const ProductionBoardScreen = () => (
  <div className="p-3 text-[9px] text-slate-600">
    <div className="mb-2.5 flex items-center justify-between">
      <span className="text-[12px] font-semibold text-slate-900">
        Production board
      </span>
      <span className="text-slate-400">Plant 2 · Chakan · Shift A</span>
    </div>
    <div className="grid grid-cols-4 gap-1.5">
      {board.map(([column, cards]) => (
        <div key={column} className="rounded bg-slate-50 p-1.5">
          <div className="mb-1.5 flex items-center justify-between px-0.5">
            <span className="font-semibold text-slate-700">{column}</span>
            <span className="text-slate-400">{cards.length}</span>
          </div>
          <div className="space-y-1.5">
            {cards.map(([id, item, progress]) => (
              <div
                key={id}
                className="rounded border border-slate-200 bg-white p-1.5 shadow-[0_1px_1px_rgb(15_23_42/0.04)]"
              >
                <div className="font-mono text-[8px] text-slate-400">{id}</div>
                <div className="mt-0.5 truncate font-medium text-slate-800">
                  {item}
                </div>
                {progress && (
                  <div className="mt-1.5 h-1 rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#223173]"
                      style={{ width: progress }}
                    />
                  </div>
                )}
                {column === "Quality check" && (
                  <div className="mt-1 text-amber-600">Sample 3/5</div>
                )}
                {column === "Dispatched" && (
                  <div className="mt-1 text-emerald-600">On time</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
