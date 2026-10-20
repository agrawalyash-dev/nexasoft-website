const rings = [
  { r: 70, o: 0.28 },
  { r: 130, o: 0.22 },
  { r: 190, o: 0.17 },
  { r: 250, o: 0.12 },
  { r: 310, o: 0.08 },
];

const orbit = "origin-[320px_320px] transform-view motion-reduce:animate-none";

const HeroArt = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-40 hidden overflow-hidden lg:block"
  >
    {/* soft coral glow */}
    <span className="absolute -top-24 -right-24 size-176 rounded-full bg-radial from-brand-coral/15 to-transparent to-65%" />

    {/* fine grid fading out from the right edge */}
    <span className="absolute inset-y-0 right-0 w-3/5 bg-[linear-gradient(to_right,rgb(34_49_115/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(34_49_115/0.06)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_at_100%_30%,black_10%,transparent_70%)]" />

    {/* rings + orbiting dots */}
    <svg
      viewBox="0 0 640 640"
      fill="none"
      stroke="#223173"
      className="absolute top-2 -right-40 size-160 xl:size-176"
    >
      {rings.map(({ r, o }) => (
        <circle key={r} cx={320} cy={320} r={r} strokeOpacity={o} />
      ))}
      <circle
        cx={320}
        cy={320}
        r={5}
        stroke="none"
        className="fill-brand-coral"
      />
      <g stroke="none">
        <g className={`${orbit} animate-orbit`}>
          <circle cx={320} cy={190} r={6} className="fill-brand-coral" />
        </g>
        <g className={`${orbit} animate-orbit-reverse`}>
          <circle cx={320} cy={70} r={5} className="fill-brand-navy" />
        </g>
        <g className={`${orbit} animate-orbit-slow`}>
          <circle cx={570} cy={320} r={4} className="fill-brand-blue" />
        </g>
      </g>
    </svg>
  </div>
);

export default HeroArt;
