import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudyItem } from "../data";

/*
 * Renders a case study's product screen. Screens with a URL get a browser
 * frame; panel and phone mockups already carry their own chrome.
 */
const CaseScreen = (
  { item, className }: { item: CaseStudyItem; className?: string },
) => {
  const Screen = item.ScreenComponent;
  if (!item.url) {
    return (
      <div className={cn("[&>span]:mx-auto", className)}>
        <Screen />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md bg-white shadow-[0_2px_6px_rgb(0_0_0/0.15),0_30px_60px_-20px_rgb(0_0_0/0.6)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-100 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
        </span>
        <span className="flex flex-1 items-center gap-1.5 truncate rounded bg-white px-2 py-1 text-[9px] text-slate-500">
          <Lock className="size-2.5 shrink-0" />
          {item.url}
        </span>
      </div>
      <Screen />
    </div>
  );
};

export default CaseScreen;
