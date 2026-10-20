import { BrainCircuit } from "lucide-react";
import { aiPractices } from "../data";

/* Split layout: the argument on a navy panel, the five practices beside it. */
const ResponsibleAi = () => {
  return (
    <section className="pt-16 lg:pt-22">
      <div className="global-padding-x grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="relative isolate overflow-hidden bg-art-6 p-7 text-white sm:p-10">
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-b from-[#0b1430]/20 to-[#0b1430]/80"
          />
          <BrainCircuit aria-hidden="true" className="size-9 stroke-[1.3]" />
          <h2 className="mt-8 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            AI that holds up in production
          </h2>
          <p className="mt-2 text-lg font-medium text-brand-coral">
            Useful, measurable and under your control.
          </p>
          <p className="mt-6 text-base leading-relaxed text-white/80">
            Most AI pilots fail not because the model is weak, but because
            nobody measured it, nobody checked its answers and nobody owned the
            data. We build those guardrails first.
          </p>
        </div>

        <ul className="grid content-center gap-x-10 gap-y-8 sm:grid-cols-2">
          {aiPractices.map((p, i) => (
            <li
              key={p.title}
              className={`relative border-t border-border pt-5 ${
                i === aiPractices.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-0.5 w-10 bg-brand-coral"
              />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ResponsibleAi;
