import { Quote } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { quotes } from "../data";

const ClientQuotes = () => {
  return (
    <section className="pt-16 lg:pt-22">
      <div className="global-padding-x">
        <SectionHeading
          title="In their words"
          description="Leaders from each industry we serve."
        />
        <ul className="grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((q) => (
            <li
              key={q.industry}
              className="flex flex-col border-r border-b border-border p-6 sm:p-7"
            >
              <Quote aria-hidden="true" className="size-6 text-brand-coral" />
              <blockquote className="mt-4 mb-8 text-lg leading-snug font-medium">
                “{q.text}”
              </blockquote>
              <p className="mt-auto border-t border-border pt-4 text-sm">
                <span className="block font-semibold text-brand-navy">
                  {q.industry}
                </span>
                <span className="text-muted-foreground">{q.by}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientQuotes;
