import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface SectionHeadingProps {
  title: ReactNode;
  description: ReactNode;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
  size?: "default" | "compact";
  className?: string;
}

const SectionHeading = ({
  title,
  description,
  action,
  tone = "light",
  size = "default",
  className,
}: SectionHeadingProps) => {
  const dark = tone === "dark";
  const compact = size === "compact";

  return (
    <div
      className={cn(
        "mb-10 flex flex-wrap items-stretch gap-y-5 lg:mb-12",
        className,
      )}
    >
      <h2
        className={cn(
          "mr-7 leading-tight font-medium tracking-tight",
          compact ? "text-4xl lg:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl",
        )}
      >
        {title}
      </h2>

      <p
        className={cn(
          "flex items-end border-l-3 pb-1 text-base",
          compact ? "max-w-3xs pl-5" : "max-w-xs pl-6",
          dark
            ? "border-brand-coral text-white/85"
            : "border-brand-navy text-foreground",
        )}
      >
        {description}
      </p>

      {action && (
        <div className="basis-full lg:ml-auto lg:basis-auto lg:self-center">
          <Button
            variant={"outline"}
            nativeButton={false}
            render={<Link to={action.href} />}
          >
            {action.label}
            <ArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
