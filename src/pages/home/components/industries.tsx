import { useState } from "react";
import {
  Check,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/section-heading";

const industries = [
  {
    short: "Banking & Finance",
    title: "Banking & Financial Services",
    description:
      "Secure, compliant platforms for payments, lending and risk, from core modernization to real-time fraud detection.",
    focus: "Payments, core banking, risk and compliance",
    art: "bg-art-1",
    icon: Landmark,
    stats: [
      ["60%", "Faster loan approvals"],
      ["99.99%", "Platform uptime"],
      ["<200 ms", "Fraud scoring"],
    ],
    capabilities: [
      "Core banking modernization",
      "Digital lending and onboarding",
      "Payments and UPI integration",
      "Fraud and risk analytics",
      "Regulatory reporting",
    ],
    project:
      "Rebuilt the digital lending journey for a mid-size NBFC, taking approvals from five days to under six hours.",
  },
  {
    short: "Healthcare",
    title: "Healthcare & Life Sciences",
    description:
      "Digital solutions that improve patient care and speed up research while meeting strict data standards.",
    focus: "Patient platforms, clinical data, interoperability",
    art: "bg-art-4",
    icon: HeartPulse,
    stats: [
      ["35%", "Fewer missed appointments"],
      ["2M+", "Records migrated"],
      ["14", "Clinics on one system"],
    ],
    capabilities: [
      "Patient portals and telehealth",
      "EHR integration (HL7, FHIR)",
      "Clinical data platforms",
      "Lab and pharmacy systems",
      "Data privacy and compliance",
    ],
    project:
      "Connected fourteen clinics of a regional hospital network to a single patient record and appointment system.",
  },
  {
    short: "Retail",
    title: "Retail & E-commerce",
    description:
      "Seamless experiences across web, app and store, backed by recommendations and inventory intelligence.",
    focus: "Commerce platforms, personalization, supply chain",
    art: "bg-art-2",
    icon: ShoppingBag,
    stats: [
      ["3×", "Faster page loads"],
      ["22%", "More repeat orders"],
      ["180", "Stores synced live"],
    ],
    capabilities: [
      "Headless commerce",
      "Personalization and search",
      "Order and inventory management",
      "POS and store systems",
      "Loyalty programs",
    ],
    project:
      "Unified online and in-store inventory for a fashion retailer across 180 stores.",
  },
  {
    short: "Manufacturing",
    title: "Manufacturing & Logistics",
    description:
      "Connected factories and real-time visibility across plants, fleets and warehouses.",
    focus: "Industry 4.0, IoT, tracking and optimization",
    art: "bg-art-5",
    icon: Factory,
    stats: [
      ["18%", "Less unplanned downtime"],
      ["4,000+", "Vehicles tracked"],
      ["30%", "Faster dispatch"],
    ],
    capabilities: [
      "IoT and machine monitoring",
      "MES and ERP integration",
      "Warehouse management",
      "Fleet and shipment tracking",
      "Predictive maintenance",
    ],
    project:
      "Put three plants of an auto-components maker on live production dashboards, with alerts before machines fail.",
  },
];

const Industries = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="pt-6 pb-16 lg:pb-22">
      <div className="global-padding-x">
        <SectionHeading
          title={
            <>
              Deep Domain
              <br />
              Expertise
            </>
          }
          description="We understand your industry, not just the technology behind it."
          action={{ label: "View All Domains", href: "/industries" }}
        />

        <div className="flex h-160 flex-col gap-1 sm:h-170 lg:h-110 lg:flex-row">
          {industries.map(({ icon: Icon, ...item }, i) => {
            const open = i === active;
            return (
              <button
                key={item.title}
                type="button"
                aria-expanded={open}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative isolate min-h-14 flex-1 overflow-hidden border border-border text-left text-white outline-none transition-[flex-grow] duration-700 ease-out focus-visible:ring-3 focus-visible:ring-brand-orange/60 motion-reduce:transition-none lg:min-h-0 lg:min-w-16",
                  open && "flex-6",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn("absolute inset-0 -z-20", item.art)}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-0 -z-10 bg-linear-to-b transition-colors duration-500",
                    open
                      ? "from-[#0b1430]/40 to-[#0b1430]/90"
                      : "from-transparent from-30% to-[#0b1430]/85",
                  )}
                />

                {/* Collapsed state: icon + label (horizontal on mobile, icon on top + vertical label from lg) */}
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "absolute top-4.5 left-5 size-5 stroke-[1.6] transition-opacity duration-300 lg:top-6 lg:left-1/2 lg:size-6 lg:-translate-x-1/2",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-4 left-13 text-base font-semibold whitespace-nowrap transition-opacity duration-300 lg:top-auto lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 lg:rotate-180 lg:[writing-mode:vertical-rl]",
                    open && "opacity-0",
                  )}
                >
                  {item.short}
                </span>

                {/* Expanded content */}
                <span
                  aria-hidden={!open}
                  className={cn(
                    "absolute inset-5 flex translate-y-3 gap-10 opacity-0 transition duration-500 motion-reduce:transition-none sm:inset-7 lg:right-auto lg:w-136 xl:w-184",
                    open && "translate-y-0 opacity-100 delay-200",
                  )}
                >
                  {/* Main column */}
                  <span className="flex min-w-0 flex-1 flex-col">
                    <Icon
                      aria-hidden="true"
                      className="mb-3 size-7 stroke-[1.6]"
                    />
                    <span className="block text-2xl font-semibold tracking-tight lg:text-3xl">
                      {item.title}
                    </span>
                    <span className="mt-2 block max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                      {item.description}
                    </span>

                    <span className="mt-auto block pt-6">
                      <span className="grid grid-cols-3 border-y border-white/15">
                        {item.stats.map(([value, label]) => (
                          <span
                            key={label}
                            className="block border-r border-white/15 px-3 py-4 first:pl-0 last:border-r-0 sm:px-5"
                          >
                            <span className="block text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
                              {value}
                            </span>
                            <span className="mt-1 block text-xs leading-snug text-white/65 sm:text-sm">
                              {label}
                            </span>
                          </span>
                        ))}
                      </span>

                      <span className="mt-4 hidden max-w-lg text-sm leading-relaxed text-white/75 sm:block">
                        <span className="font-semibold text-white">
                          Recent work.
                        </span>
                        {item.project}
                      </span>
                    </span>
                  </span>

                  {/* Side column (xl only, where the open panel is wide enough) */}
                  <span className="hidden w-60 shrink-0 flex-col border-l border-white/15 pl-8 xl:flex">
                    <span className="mb-4 block text-sm font-semibold">
                      What we deliver
                    </span>
                    <span className="block space-y-3">
                      {item.capabilities.map((c) => (
                        <span
                          key={c}
                          className="flex items-start gap-2.5 text-sm text-white/85"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 size-4 shrink-0 text-brand-orange"
                            strokeWidth={2.5}
                          />
                          {c}
                        </span>
                      ))}
                    </span>
                    <span className="mt-auto block text-xs leading-relaxed text-white/55">
                      {item.focus}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
