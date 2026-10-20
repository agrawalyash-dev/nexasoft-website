import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `target` (ease-out) the first time the element is mostly visible. */
export function useCountUp<T extends HTMLElement>(
  target: number,
  duration = 1400,
) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setValue(target);
          return;
        }
        const t0 = performance.now();
        const step = (t: number) => {
          const k = Math.min((t - t0) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return [ref, value] as const;
}
