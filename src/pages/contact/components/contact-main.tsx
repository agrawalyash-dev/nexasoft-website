import { Clock, Mail, MapPin } from "lucide-react";
import HeroBg from "@/components/hero-bg";
import { cn } from "@/lib/utils";
import { contact, steps } from "../data";
import ContactForm from "./contact-form";

const lineAnimation =
  "block animate-in fade-in slide-in-from-bottom-7 duration-900 ease-out fill-mode-both motion-reduce:animate-none";

const ContactMain = () => {
  return (
    <section className="relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-18 lg:pb-22">
      <HeroBg />

      <div className="global-padding-x">
        <h1 className="text-5xl leading-none font-semibold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
          <span className={lineAnimation}>Let's talk about</span>
          <span className={cn(lineAnimation, "text-brand-coral delay-150")}>
            what you're building.
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-pretty">
          Whether you have a detailed brief or just an idea, tell us where you
          are. You'll hear back from a real person within one working day.
        </p>

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start lg:gap-10">
          <ContactForm />

          <div className="grid gap-4 lg:sticky lg:top-28">
            {/* What happens next */}
            <div className="relative isolate overflow-hidden bg-brand-navy p-7 text-white sm:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-radial-[at_90%_8%] from-brand-coral/45 to-transparent to-50%"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[28px_28px]"
              />
              <h2 className="text-2xl font-semibold tracking-tight">
                What happens next
              </h2>

              <ol className="relative mt-7">
                <span
                  aria-hidden="true"
                  className="absolute top-2 bottom-2 left-3.5 w-px bg-white/25"
                />
                {steps.map((step, i) => {
                  const last = i === steps.length - 1;
                  return (
                    <li
                      key={step.title}
                      className="relative flex gap-4 pb-6 last:pb-0"
                    >
                      <span
                        className={cn(
                          "relative flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold tabular-nums",
                          last
                            ? "bg-brand-coral text-white"
                            : "border border-white/60 bg-brand-navy text-white",
                        )}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/75">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Direct details */}
            <ul className="divide-y divide-border border border-border bg-white">
              <li className="flex items-start gap-4 p-5">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 stroke-[1.6] text-brand-navy"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-base font-semibold text-brand-navy hover:text-brand-blue"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 p-5">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 stroke-[1.6] text-brand-navy"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                  <p className="text-base font-semibold">{contact.location}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-5">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 stroke-[1.6] text-brand-navy"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Office hours</p>
                  <p className="text-base font-semibold">{contact.hours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
