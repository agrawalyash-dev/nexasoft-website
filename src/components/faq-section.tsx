import { useId, useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Plus,
} from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

const FaqSection = ({
  title = "Common questions",
  description,
  items,
  className = "py-16 lg:py-22",
  showContactCard = true,
}: {
  title?: string;
  description: string;
  items: FaqItem[];
  className?: string;
  /** Hide the contact card, e.g. on the Contact page itself. */
  showContactCard?: boolean;
}) => {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <section className={cn(className)}>
      <div className="global-padding-x">
        <SectionHeading title={title} description={description} />

        <div
          className={cn(
            "grid gap-8 lg:items-start lg:gap-12",
            showContactCard && "lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]",
          )}
        >
          {/* Contact card */}
          {showContactCard && (
            <aside className="relative isolate order-last overflow-hidden bg-brand-navy p-7 text-white sm:p-8 lg:sticky lg:top-28 lg:order-first">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-radial-[at_90%_8%] from-brand-coral/45 to-transparent to-50%"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[28px_28px]"
              />

              <MessageCircleQuestion
                aria-hidden="true"
                className="size-9 stroke-[1.3]"
              />
              <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-tight">
                Still have a question?
              </h3>
              <p className="mt-2 text-base leading-relaxed text-white/80">
                Talk to a specialist. We reply within one working day.
              </p>

              <ul className="mt-7 space-y-3 border-t border-white/15 pt-6 text-sm">
                <li className="flex items-center gap-3">
                  <Mail
                    aria-hidden="true"
                    className="size-4.5 shrink-0 text-white/70"
                  />
                  <a
                    href="mailto:hello@nexasoft.com"
                    className="underline-offset-4 hover:underline"
                  >
                    hello@nexasoft.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="size-4.5 shrink-0 text-white/70"
                  />
                  Vadodara, Gujarat, India
                </li>
              </ul>

              <Button
                className="mt-8 w-full bg-white text-brand-navy hover:bg-white/90"
                nativeButton={false}
                render={<Link to="/contact" />}
              >
                Talk to our team
                <ArrowRight />
              </Button>
            </aside>
          )}

          {/* Accordion */}
          <div className="border-t border-border">
            {items.map(({ q, a }, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={q}
                  className={cn(
                    "relative border-b border-border transition-colors duration-300",
                    isOpen && "bg-[#f5f7fb]",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-0 left-0 w-0.5 bg-brand-coral transition-opacity duration-300",
                      isOpen ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <h3>
                    <button
                      type="button"
                      id={`${id}-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`${id}-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center gap-6 px-5 py-5 text-left outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/60 focus-visible:ring-inset sm:px-7 sm:py-6"
                    >
                      <span
                        className={cn(
                          "flex-1 text-lg leading-snug font-semibold transition-colors",
                          isOpen
                            ? "text-brand-navy"
                            : "text-foreground group-hover:text-brand-navy",
                        )}
                      >
                        {q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center border transition-colors duration-300",
                          isOpen
                            ? "border-brand-navy bg-brand-navy text-white"
                            : "border-brand-navy/25 text-brand-navy group-hover:border-brand-navy",
                        )}
                      >
                        <Plus
                          className={cn(
                            "size-4.5 transition-transform duration-300 motion-reduce:transition-none",
                            isOpen && "rotate-45",
                          )}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`${id}-a-${i}`}
                    role="region"
                    aria-labelledby={`${id}-q-${i}`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden" inert={!isOpen}>
                      <p className="max-w-2xl px-5 pb-6 text-base leading-relaxed text-foreground/80 sm:px-7 sm:pb-7">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
