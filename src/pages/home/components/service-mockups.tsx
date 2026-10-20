import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const panel =
  "overflow-hidden rounded-md border border-slate-200 bg-white text-[11px] text-slate-700 shadow-[0_1px_2px_rgb(0_0_0/0.2),0_20px_40px_-16px_rgb(0_0_0/0.5)]";

const PanelHeader = ({ title, meta }: { title: string; meta?: string }) => (
  <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
    <span className="font-semibold text-slate-900">{title}</span>
    {meta && (
      <span className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] text-slate-500">
        {meta}
      </span>
    )}
  </div>
);

const Pill = ({
  tone,
  children,
}: {
  tone: "green" | "amber" | "red" | "slate";
  children: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap",
      {
        green: "bg-emerald-50 text-emerald-700",
        amber: "bg-amber-50 text-amber-700",
        red: "bg-red-50 text-red-700",
        slate: "bg-slate-100 text-slate-600",
      }[tone],
    )}
  >
    {children}
  </span>
);

/* ---------------------------------------------------------------- Digital */

type Token = [string, string?];
const k = "text-violet-300";
const f = "text-sky-300";
const s = "text-emerald-300";
const t = "text-amber-200";

const code: Token[][] = [
  [["export async function ", k], ["placeOrder", f], ["(cart: "], ["Cart", t], [
    ") {",
  ]],
  [["  const ", k], ["total = cart.items."], ["reduce", f], ["(sumLine, 0);"]],
  [["  const ", k], ["order = "], ["await ", k], ["api."], ["post", f], ["("], [
    '"/orders"',
    s,
  ], [", {"]],
  [["    items: cart.items,"]],
  [["    total,"]],
  [["  });"]],
  [["  return ", k], ["order.id;"]],
  [["}"]],
];

export const DigitalEngineeringMock = () => (
  <div className="flex items-start gap-3">
    <div className="min-w-0 flex-1 overflow-hidden rounded-md bg-[#0f172a] shadow-[0_16px_32px_-16px_rgb(0_0_0/0.6)] ring-1 ring-white/15">
      <div className="flex border-b border-white/10 px-2 text-[11px]">
        <span className="border-b-2 border-brand-orange px-2.5 py-2 text-slate-100">
          checkout.tsx
        </span>
        <span className="px-2.5 py-2 text-slate-500">cart.ts</span>
        <span className="px-2.5 py-2 text-slate-500">api.ts</span>
      </div>
      <pre className="overflow-hidden py-2.5 font-mono text-[11px] leading-5 text-slate-300">
        {code.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-8 shrink-0 pr-3 text-right text-slate-600 select-none">
              {i + 1}
            </span>
            <span className="whitespace-pre">
              {line.map(([text, color], j) => (
                <span key={j} className={color}>
                  {text}
                </span>
              ))}
            </span>
          </div>
        ))}
      </pre>
    </div>

    <div className="mt-8 hidden w-36 shrink-0 rounded-xl border border-slate-200 bg-white p-2.5 text-[10px] text-slate-600 shadow-[0_16px_32px_-16px_rgb(15_23_42/0.3)] sm:block">
      <div className="mx-auto mb-2.5 h-1 w-8 rounded-full bg-slate-200" />
      <p className="mb-2 text-[11px] font-semibold text-slate-900">
        Order summary
      </p>
      <div className="flex justify-between py-1">
        <span>2 items</span>
        <span className="tabular-nums">₹4,598</span>
      </div>
      <div className="flex justify-between py-1">
        <span>Delivery</span>
        <span>Free</span>
      </div>
      <div className="mt-1 flex justify-between border-t border-slate-100 pt-1.5 font-semibold text-slate-900">
        <span>Total</span>
        <span className="tabular-nums">₹4,598</span>
      </div>
      <div className="mt-2.5 rounded bg-[#1f2d6b] py-1.5 text-center font-medium text-white">
        Place order
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------- Enterprise */

const orders: [string, string, string, "green" | "amber" | "slate", string][] =
  [
    ["PO-10482", "Shree Metals", "₹3,42,000", "green", "Approved"],
    ["PO-10481", "Apex Logistics", "₹86,500", "amber", "Pending"],
    ["PO-10479", "Kiran Packaging", "₹1,12,300", "green", "Approved"],
    ["PO-10476", "Vertex Components", "₹58,900", "slate", "In review"],
    ["PO-10474", "Nova Chemicals", "₹2,07,450", "green", "Approved"],
    ["PO-10471", "Orbit Freight", "₹44,200", "amber", "Pending"],
  ];

export const EnterpriseAppsMock = () => (
  <div className={panel}>
    <PanelHeader title="Purchase orders" meta="October" />
    <div className="grid grid-cols-3 border-b border-slate-100">
      {[
        ["Open", "128"],
        ["Approved", "342"],
        ["Spend", "₹1.8 Cr"],
      ].map(([label, value]) => (
        <div
          key={label}
          className="border-r border-slate-100 px-3 py-2 last:border-r-0"
        >
          <p className="text-[10px] text-slate-500">{label}</p>
          <p className="text-sm font-semibold text-slate-900 tabular-nums">
            {value}
          </p>
        </div>
      ))}
    </div>
    <table className="w-full">
      <thead>
        <tr className="text-left text-[10px] text-slate-500">
          <th className="px-3 py-1.5 font-medium">Order</th>
          <th className="py-1.5 font-medium">Vendor</th>
          <th className="py-1.5 pr-3 text-right font-medium">Amount</th>
          <th className="py-1.5 pr-3 font-medium">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(([id, vendor, amount, tone, status]) => (
          <tr key={id} className="border-t border-slate-100">
            <td className="px-3 py-2 font-mono text-[10px] text-slate-500">
              {id}
            </td>
            <td className="py-2 whitespace-nowrap text-slate-800">{vendor}</td>
            <td className="py-2 pr-3 text-right tabular-nums">{amount}</td>
            <td className="py-2 pr-3">
              <Pill tone={tone}>{status}</Pill>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ------------------------------------------------------------------- AI */

const drivers: [string, number][] = [
  ["Seasonality", 42],
  ["Promotions", 27],
  ["Price changes", 18],
];

export const AiDataMock = () => (
  <div className={panel}>
    <PanelHeader title="Demand forecast" meta="SKU group A" />
    <div className="px-3 pt-2.5">
      <div className="mb-2 flex gap-3 text-[10px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-3 bg-[#1f2d6b]" /> Actual
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-3 border-t-2 border-dashed border-brand-orange" />
          {" "}
          Forecast
        </span>
      </div>
      <svg
        viewBox="0 0 300 120"
        preserveAspectRatio="none"
        className="h-28 w-full"
      >
        {[20, 60, 100].map((y) => (
          <line
            key={y}
            x1="0"
            x2="300"
            y1={y}
            y2={y}
            className="stroke-slate-100"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path
          d="M200 62 L233 48 L267 38 L300 28 L300 60 L267 62 L233 64 Z"
          className="fill-brand-orange/12"
        />
        <path
          d="M0 100 L33 92 L67 96 L100 80 L133 84 L167 70 L200 62"
          fill="none"
          stroke="#1f2d6b"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M200 62 L233 56 L267 50 L300 44"
          fill="none"
          strokeWidth="2"
          strokeDasharray="4 3"
          className="stroke-brand-orange"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="mt-1 flex justify-between text-[10px] text-slate-400">
        {["Jan", "Mar", "May", "Jul", "Sep"].map((m) => <span key={m}>{m}
        </span>)}
      </div>
    </div>

    <div className="mt-3 grid grid-cols-3 border-y border-slate-100">
      {[
        ["Accuracy", "94.2%"],
        ["MAPE", "5.8%"],
        ["Next 30d", "+12%"],
      ].map(([label, value]) => (
        <div
          key={label}
          className="border-r border-slate-100 px-3 py-2 last:border-r-0"
        >
          <p className="text-[10px] text-slate-500">{label}</p>
          <p className="text-sm font-semibold text-slate-900 tabular-nums">
            {value}
          </p>
        </div>
      ))}
    </div>

    <div className="space-y-2 px-3 py-3">
      <p className="text-[10px] font-medium text-slate-500">Top drivers</p>
      {drivers.map(([name, pct]) => (
        <div key={name} className="flex items-center gap-2">
          <span className="w-20 shrink-0">{name}</span>
          <span className="h-1.5 flex-1 rounded-full bg-slate-100">
            <span
              className="block h-full rounded-full bg-[#1f2d6b]"
              style={{ width: `${pct * 2}%` }}
            />
          </span>
          <span className="w-7 text-right tabular-nums text-slate-500">
            {pct}%
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ---------------------------------------------------------------- Cloud */

const resources: [string, string, number, boolean][] = [
  ["api-gateway", "3/3", 34, true],
  ["orders-service", "6/6", 41, true],
  ["postgres-primary", "1/1", 58, true],
  ["worker-queue", "4→6", 82, false],
];

export const CloudMock = () => (
  <div className={panel}>
    <PanelHeader title="Production" meta="ap-south-1" />
    {resources.map(([name, count, cpu, healthy]) => (
      <div
        key={name}
        className="flex items-center gap-2.5 border-t border-slate-100 px-3 py-2 first:border-t-0"
      >
        <span
          className={cn(
            "size-1.5 shrink-0 rounded-full",
            healthy ? "bg-emerald-500" : "bg-amber-500",
          )}
        />
        <span className="min-w-0 flex-1 truncate font-mono text-[10px] text-slate-800">
          {name}
        </span>
        <span className="w-8 text-right tabular-nums text-slate-500">
          {count}
        </span>
        <span className="h-1.5 w-12 rounded-full bg-slate-100">
          <span
            className={cn(
              "block h-full rounded-full",
              healthy ? "bg-slate-400" : "bg-amber-500",
            )}
            style={{ width: `${cpu}%` }}
          />
        </span>
      </div>
    ))}
  </div>
);

/* --------------------------------------------------------- Modernization */

export const ModernizationMock = () => (
  <div className={panel}>
    <PanelHeader title="Billing system migration" />
    <ol className="px-3 py-1">
      {[
        ["Assess legacy modules", "Done"],
        ["Extract payments service", "Done"],
      ].map(([step, meta]) => (
        <li key={step} className="flex items-center gap-2 py-1.5">
          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="size-2.5" strokeWidth={3} />
          </span>
          <span className="flex-1 text-slate-500 line-through decoration-slate-300">
            {step}
          </span>
          <span className="text-[10px] text-slate-400">{meta}</span>
        </li>
      ))}
      <li className="py-1.5">
        <div className="flex items-center gap-2">
          <span className="flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-[#1f2d6b]">
            <span className="size-1.5 rounded-full bg-[#1f2d6b]" />
          </span>
          <span className="flex-1 font-medium text-slate-900">
            Sync customer data
          </span>
          <span className="tabular-nums text-[10px] text-slate-500">78%</span>
        </div>
        <span className="mt-1.5 ml-6 block h-1 rounded-full bg-slate-100">
          <span className="block h-full w-[78%] rounded-full bg-[#1f2d6b]" />
        </span>
      </li>
      <li className="flex items-center gap-2 py-1.5">
        <span className="size-4 shrink-0 rounded-full border border-slate-300" />
        <span className="flex-1">Production cutover</span>
        <span className="flex items-center gap-1 text-[10px] text-slate-400">
          <Clock className="size-3" /> Sat 02:00
        </span>
      </li>
    </ol>
  </div>
);

/* --------------------------------------------------------- Cybersecurity */

const events: ["red" | "amber" | "slate", string, string, string][] = [
  ["red", "High", "Brute-force login", "Blocked"],
  ["amber", "Medium", "SQL injection attempt", "Blocked"],
  ["slate", "Low", "MFA disabled on 2 users", "Review"],
];

export const CybersecurityMock = () => (
  <div className={panel}>
    <PanelHeader title="Security events" meta="Last 24h" />
    <div className="flex gap-5 border-b border-slate-100 px-3 py-2">
      <div>
        <p className="text-[10px] text-slate-500">Threats blocked</p>
        <p className="text-sm font-semibold text-slate-900 tabular-nums">
          1,284
        </p>
      </div>
      <div>
        <p className="text-[10px] text-slate-500">Incidents</p>
        <p className="text-sm font-semibold text-slate-900 tabular-nums">0</p>
      </div>
    </div>
    {events.map(([tone, level, name, action]) => (
      <div
        key={name}
        className="flex items-center gap-2 border-t border-slate-100 px-3 py-2 first:border-t-0"
      >
        <Pill tone={tone}>{level}</Pill>
        <span className="min-w-0 flex-1 truncate text-slate-800">{name}</span>
        <span className="text-[10px] text-slate-400">{action}</span>
      </div>
    ))}
  </div>
);
