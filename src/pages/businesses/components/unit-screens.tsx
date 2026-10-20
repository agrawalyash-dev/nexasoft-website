import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Window = (
  { title, children }: { title: string; children: ReactNode },
) => (
  <div className="overflow-hidden rounded-md bg-white text-[10px] text-slate-600 shadow-[0_2px_6px_rgb(0_0_0/0.15),0_30px_60px_-20px_rgb(0_0_0/0.6)]">
    <div className="flex items-center gap-2.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
      <span className="flex gap-1">
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="size-1.5 rounded-full bg-slate-300" />
      </span>
      <span className="text-slate-500">{title}</span>
    </div>
    {children}
  </div>
);

const Head = (
  { title, sub, chip }: { title: string; sub: string; chip: string },
) => (
  <div className="flex items-start justify-between px-4 pt-3.5">
    <div>
      <div className="text-[12px] font-semibold text-slate-900">{title}</div>
      <div className="text-slate-400">{sub}</div>
    </div>
    <span className="rounded bg-slate-100 px-1.5 py-0.5 font-medium text-slate-600">
      {chip}
    </span>
  </div>
);

const Kpis = ({ items }: { items: [string, string, string?][] }) => (
  <div className="mx-4 mt-3 grid grid-cols-3 border border-slate-200">
    {items.map(([label, value, tone]) => (
      <div
        key={label}
        className="border-r border-slate-200 px-2.5 py-2 last:border-r-0"
      >
        <div className="text-slate-400">{label}</div>
        <div
          className={cn(
            "mt-0.5 text-[14px] font-semibold tabular-nums",
            tone ?? "text-[#223173]",
          )}
        >
          {value}
        </div>
      </div>
    ))}
  </div>
);

const tones = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
  blue: "bg-[#eef1fb] text-[#223173]",
};
type Tone = keyof typeof tones;

const Rows = ({ rows }: { rows: [string, string, Tone, string][] }) => (
  <div className="mt-3 border-t border-slate-100">
    {rows.map(([title, sub, tone, status]) => (
      <div
        key={title}
        className="flex items-center gap-3 border-b border-slate-100 px-4 py-2"
      >
        <div className="min-w-0 flex-1">
          <div className="truncate font-medium text-slate-800">{title}</div>
          <div className="truncate text-slate-400">{sub}</div>
        </div>
        <span
          className={cn(
            "rounded px-1.5 py-0.5 font-medium whitespace-nowrap",
            tones[tone],
          )}
        >
          {status}
        </span>
      </div>
    ))}
  </div>
);

/* Digital: release dashboard */
export const DigitalScreen = () => (
  <Window title="Release dashboard">
    <Head
      title="Mobile banking app"
      sub="Sprint 24 · release train"
      chip="v3.8"
    />
    <Kpis
      items={[["Crash-free", "99.8%", "text-emerald-600"], [
        "Store rating",
        "4.8★",
      ], ["Sprint done", "86%"]]}
    />
    <div className="mx-4 mt-3">
      <div className="mb-1 flex justify-between text-slate-400">
        <span>Sprint 24 progress</span>
        <span className="tabular-nums">31 / 36 stories</span>
      </div>
      <div className="flex h-1.5 gap-0.5">
        <span className="block w-[70%] rounded-l-full bg-[#223173]" />
        <span className="block w-[16%] bg-brand-coral" />
        <span className="block flex-1 rounded-r-full bg-slate-200" />
      </div>
    </div>
    <Rows
      rows={[
        ["iOS 3.8.0", "Build 412 · App Store review", "blue", "In review"],
        ["Android 3.8.0", "Build 409 · 20% rollout", "green", "Rolling out"],
        ["Web portal", "Deployed 10:42 today", "green", "Live"],
      ]}
    />
  </Window>
);

/* Enterprise: integration hub */
export const EnterpriseScreen = () => (
  <Window title="Integration hub">
    <Head title="Connected systems" sub="Plant 2 · all modules" chip="Live" />
    <div className="mx-4 mt-3 flex items-center justify-between gap-2">
      {["SAP S/4HANA", "Salesforce", "ServiceNow"].map((sys, i) => (
        <div key={sys} className="contents">
          {i > 0 && (
            <span className="h-px flex-1 border-t border-dashed border-[#223173]/40" />
          )}
          <span className="rounded border border-slate-200 px-2 py-1.5 font-medium whitespace-nowrap text-slate-800">
            {sys}
          </span>
        </div>
      ))}
    </div>
    <Kpis
      items={[["Records synced", "48,210"], [
        "Sync errors",
        "0",
        "text-emerald-600",
      ], ["Avg. latency", "1.4 s"]]}
    />
    <Rows
      rows={[
        [
          "Sales order → Production plan",
          "Salesforce → SAP · every 5 min",
          "green",
          "Healthy",
        ],
        [
          "Goods receipt → Invoice",
          "SAP MM → FI · real time",
          "green",
          "Healthy",
        ],
        [
          "Asset ticket → Maintenance",
          "ServiceNow → SAP PM",
          "amber",
          "Retrying",
        ],
      ]}
    />
  </Window>
);

/* Cloud: infrastructure overview */
const cost = [88, 84, 86, 72, 64, 61, 58, 55];
export const CloudScreen = () => (
  <Window title="Infrastructure overview">
    <Head
      title="Production estate"
      sub="3 regions · 214 services"
      chip="ap-south-1"
    />
    <Kpis
      items={[["Uptime (30d)", "99.99%", "text-emerald-600"], [
        "Monthly cost",
        "−38%",
      ], ["Deploys / week", "146"]]}
    />
    <div className="mx-4 mt-3">
      <div className="mb-1 flex justify-between text-slate-400">
        <span>Monthly cloud cost</span>
        <span>Migration completed in month 4</span>
      </div>
      <div className="flex h-12 items-end gap-1 border-b border-slate-200">
        {cost.map((h, i) => (
          <span
            key={i}
            className={cn(
              "block flex-1 rounded-t-sm",
              i < 3 ? "bg-slate-300" : "bg-[#223173]",
            )}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
    <Rows
      rows={[
        ["payments-api", "Kubernetes · 12 pods · CPU 41%", "green", "Healthy"],
        ["orders-db", "PostgreSQL · primary + 2 replicas", "green", "Healthy"],
      ]}
    />
  </Window>
);

/* AI & Data: model monitor */
export const AiScreen = () => (
  <Window title="Model monitor">
    <Head
      title="Document classifier"
      sub="Claims and referrals · v12"
      chip="Production"
    />
    <Kpis
      items={[["Accuracy", "96.4%", "text-emerald-600"], [
        "Predictions today",
        "1,206",
      ], ["Drift", "Low"]]}
    />
    <div className="mx-4 mt-3">
      <div className="mb-1 flex justify-between text-slate-400">
        <span>Accuracy, last 12 weeks</span>
        <span className="flex items-center gap-1">
          <span className="block h-px w-3 border-t border-dashed border-brand-coral" />
          {" "}
          Target 95%
        </span>
      </div>
      <svg
        viewBox="0 0 300 60"
        preserveAspectRatio="none"
        className="block h-12 w-full"
      >
        <path
          d="M0 22H300"
          stroke="#f25d3a"
          strokeDasharray="3 3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 44 L27 40 L54 36 L82 30 L109 26 L136 22 L163 20 L191 18 L218 17 L245 16 L272 15 L300 14 L300 60 L0 60Z"
          fill="#223173"
          fillOpacity="0.08"
        />
        <path
          d="M0 44 L27 40 L54 36 L82 30 L109 26 L136 22 L163 20 L191 18 L218 17 L245 16 L272 15 L300 14"
          fill="none"
          stroke="#223173"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
    <Rows
      rows={[
        [
          "Nightly retraining",
          "Databricks · finished 02:14",
          "green",
          "Passed",
        ],
        [
          "Low-confidence queue",
          "11 documents for human review",
          "amber",
          "Review",
        ],
      ]}
    />
  </Window>
);

/* Secure: security posture */
const controls: [string, number][] = [
  ["ISO 27001 controls", 96],
  ["SOC 2 readiness", 88],
  ["RBI cyber framework", 92],
];
export const SecureScreen = () => (
  <Window title="Security posture">
    <Head
      title="Organisation posture"
      sub="Updated 5 min ago"
      chip="24×7 SOC"
    />
    <div className="mx-4 mt-3 flex items-center gap-4 border border-slate-200 p-3">
      <svg viewBox="0 0 64 64" className="size-16 shrink-0 -rotate-90">
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="7"
        />
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          stroke="#223173"
          strokeWidth="7"
          strokeDasharray={`${0.92 * 163.4} 163.4`}
          strokeLinecap="round"
        />
      </svg>
      <div className="min-w-0 flex-1">
        <div className="text-[18px] leading-none font-semibold text-slate-900 tabular-nums">
          92<span className="text-[11px] text-slate-400">/ 100</span>
        </div>
        <div className="mt-1 text-slate-400">
          Posture score · up 14 this quarter
        </div>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded bg-red-50 px-1.5 py-0.5 font-medium text-red-700">
            0 critical
          </span>
          <span className="rounded bg-amber-50 px-1.5 py-0.5 font-medium text-amber-700">
            3 medium
          </span>
        </div>
      </div>
    </div>
    <div className="mx-4 mt-3 space-y-2">
      {controls.map(([name, pct]) => (
        <div key={name} className="flex items-center gap-2">
          <Check className="size-3 shrink-0 text-emerald-600" strokeWidth={3} />
          <span className="w-28 shrink-0 text-slate-700">{name}</span>
          <span className="h-1 flex-1 rounded-full bg-slate-100">
            <span
              className="block h-full rounded-full bg-[#223173]"
              style={{ width: `${pct}%` }}
            />
          </span>
          <span className="w-7 text-right tabular-nums">{pct}%</span>
        </div>
      ))}
    </div>
    <div className="h-4" />
  </Window>
);

/* Teams: team overview */
const people: [string, string, string][] = [
  ["PS", "Priya S.", "Tech lead"],
  ["RK", "Rahul K.", "Backend"],
  ["AM", "Aisha M.", "Frontend"],
  ["VN", "Vikram N.", "QA"],
  ["DJ", "Diya J.", "Mobile"],
];
export const TeamsScreen = () => (
  <Window title="Team overview">
    <Head
      title="Payments squad"
      sub="Dedicated team · client in London"
      chip="12 people"
    />
    <div className="mx-4 mt-3 grid grid-cols-5 gap-1.5">
      {people.map(([initials, name, role], i) => (
        <div
          key={name}
          className="flex flex-col items-center rounded border border-slate-200 px-1 py-2 text-center"
        >
          <span
            className={cn(
              "flex size-7 items-center justify-center rounded-full text-[10px] font-semibold",
              i === 0
                ? "bg-[#223173] text-white"
                : "bg-[#eef1fb] text-[#223173]",
            )}
          >
            {initials}
          </span>
          <span className="mt-1 block truncate font-medium text-slate-800">
            {name}
          </span>
          <span className="block truncate text-[9px] text-slate-400">
            {role}
          </span>
        </div>
      ))}
    </div>
    <div className="mx-4 mt-3">
      <div className="mb-1 flex justify-between text-slate-400">
        <span>Working-hours overlap (IST / London)</span>
        <span>4 hrs daily</span>
      </div>
      <div className="relative h-4 rounded bg-slate-100">
        <span className="absolute inset-y-0 left-[12%] w-[50%] rounded bg-[#223173]/20" />
        <span className="absolute inset-y-0 left-[45%] w-[45%] rounded bg-[#223173]/20" />
        <span className="absolute inset-y-0 left-[45%] w-[17%] rounded bg-brand-coral/80" />
      </div>
      <div className="mt-1 flex justify-between text-[9px] text-slate-400">
        <span>Vadodara 9:30–18:30</span>
        <span>London 9:00–17:30</span>
      </div>
    </div>
    <Kpis
      items={[
        ["Velocity", "42 pts"],
        ["Retention", "95%", "text-emerald-600"],
        ["Onboarded in", "16 days"],
      ]}
    />
    <div className="h-4" />
  </Window>
);
