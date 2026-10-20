import { cn } from "@/lib/utils";

const technologies = [
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
  "SAP",
  "Salesforce",
  "ServiceNow",
  "Snowflake",
  "Databricks",
  "Kubernetes",
];

const TechMarquee = ({
  className,
  label = "Technologies we work with",
  items = technologies,
}: {
  className?: string;
  label?: string;
  items?: string[];
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:gap-7",
        className,
      )}
    >
      <span className="whitespace-nowrap">{label}</span>

      <div className="w-full flex-1 overflow-hidden mask-x-from-90%">
        {/* The list is rendered twice so the loop is seamless at -50%. */}
        <div className="flex w-max animate-marquee hover:paused motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className="flex shrink-0"
            >
              {items.map((tech) => (
                <li
                  key={tech}
                  className="mr-13 text-lg font-bold whitespace-nowrap text-brand-navy/70"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
