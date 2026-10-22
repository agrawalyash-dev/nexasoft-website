import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import HeroBg from "@/components/hero-bg";
import PageHeroBackdrop from "@/components/page-hero-backdrop";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const lineAnimation =
  "block animate-in fade-in slide-in-from-bottom-7 duration-900 ease-out fill-mode-both motion-reduce:animate-none";

const destinations = [
  { to: "/services", label: "Services", text: "What we build" },
  { to: "/businesses", label: "Businesses", text: "How we're organised" },
  { to: "/industries", label: "Industries", text: "Who we work with" },
  { to: "/technology", label: "Technology", text: "Our stack" },
  {
    to: "/case-studies",
    label: "Case studies",
    text: "Results we've delivered",
  },
  { to: "/contact", label: "Contact", text: "Talk to our team" },
];

/*
 * 404 page in the site's hero language: dotted globe, two-line headline with
 * a coral second line, and the navy/grey tiles as ways back into the site.
 */
const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-18 lg:pb-22">
      <title>Page not found · Nexasoft</title>
      <meta name="robots" content="noindex" />
      <PageHeroBackdrop />
      <HeroBg />

      <div className="global-padding-x">
        <p className="flex items-center gap-2 text-sm font-medium text-brand-navy">
          <span aria-hidden="true" className="size-1.5 bg-brand-coral" />
          Error 404
        </p>

        <h1 className="mt-6 text-5xl leading-none font-semibold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
          <span className={lineAnimation}>This page doesn't exist</span>
          <span className={cn(lineAnimation, "text-brand-coral delay-150")}>
            or has moved.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-pretty">
          We couldn't find{" "}
          <code className="bg-[#f5f7fb] px-1.5 py-0.5 font-mono text-base break-all text-brand-navy">
            {pathname}
          </code>
          . The link may be out of date, or the page may have been removed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" nativeButton={false} render={<Link to="/" />}>
            Back to home
            <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link to="/contact" />}
          >
            Contact us
          </Button>
        </div>

        <nav aria-label="Popular pages" className="mt-14 lg:mt-16">
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Or pick up from here
          </p>
          <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 xl:grid-cols-6">
            {destinations.map(({ to, label, text }, i) => {
              const navy = i % 2 === 0;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={cn(
                      "group relative isolate flex h-full min-h-32 flex-col justify-end overflow-hidden p-4 pr-11 transition-transform duration-300 outline-none hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-brand-orange/60 sm:min-h-36 sm:p-5 motion-reduce:transition-none",
                      navy
                        ? "bg-brand-navy text-white"
                        : "bg-brand-gray text-foreground",
                    )}
                  >
                    {navy
                      ? (
                        <>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 bg-radial-[at_88%_12%] from-brand-coral/50 to-transparent to-45%"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[28px_28px]"
                          />
                        </>
                      )
                      : (
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 bg-radial-[at_12%_90%] from-brand-navy/15 to-transparent to-45%"
                        />
                      )}
                    <span className="text-base leading-tight font-semibold sm:text-lg">
                      {label}
                    </span>
                    <span
                      className={cn(
                        "mt-1 text-xs",
                        navy ? "text-white/70" : "text-muted-foreground",
                      )}
                    >
                      {text}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="absolute top-4 right-4 size-5 stroke-[1.6] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NotFound;
