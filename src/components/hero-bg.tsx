import * as React from "react";
import { cn } from "@/lib/utils";

type Particle = { x: number; y: number; vx: number; vy: number };

export interface HeroBgProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  count?: number;
  linkDistance?: number;
  speed?: number;
  dotSize?: number;
  fade?: boolean;
}

function HeroBg({
  color = "#4a63d8",
  count,
  linkDistance = 150,
  speed = 0.35,
  dotSize = 2,
  fade = true,
  className,
  ...props
}: HeroBgProps) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let dpr = 1;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let ps: Particle[] = [];

    const spawn = (): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * speed * dpr,
      vy: (Math.random() - 0.5) * speed * dpr,
    });

    const target = () =>
      count ??
        Math.round(Math.min(90, Math.max(20, (w * h) / (dpr * dpr) / 19000)));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = dpr;
      const L = linkDistance * dpr;

      for (let i = 0; i < ps.length; i++) {
        const a = ps[i];
        if (!reduce) {
          a.x += a.vx;
          a.y += a.vy;
        }
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(a.x, a.y, dotSize * dpr, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < ps.length; j++) {
          const b = ps[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < L) {
            ctx.globalAlpha = (1 - d / L) * 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      draw();
      raf = visible && !reduce ? requestAnimationFrame(loop) : 0;
    };

    const start = () => {
      if (!raf && visible && !reduce) raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = wrap.getBoundingClientRect();
      const nw = Math.max(1, Math.round(r.width * dpr));
      const nh = Math.max(1, Math.round(r.height * dpr));

      if (ps.length && w && h) {
        for (const p of ps) {
          p.x *= nw / w;
          p.y *= nh / h;
        }
      }
      w = canvas.width = nw;
      h = canvas.height = nh;

      const n = target();
      while (ps.length < n) ps.push(spawn());
      ps.length = Math.min(ps.length, n);

      draw();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(wrap);

    resize();
    start();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [color, count, linkDistance, speed, dotSize]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 size-full opacity-35 -z-50",
        fade &&
          "[-webkit-mask-image:linear-gradient(#000_40%,transparent)] mask-[linear-gradient(#000_40%,transparent)]",
        className,
      )}
      {...props}
    >
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  );
}

export default HeroBg;
