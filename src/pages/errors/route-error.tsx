import { useEffect } from "react";
import { ArrowRight, RotateCw } from "lucide-react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import HeroBg from "@/components/hero-bg";
import PageHeroBackdrop from "@/components/page-hero-backdrop";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NotFound from "./not-found";

const lineAnimation =
  "block animate-in fade-in slide-in-from-bottom-7 duration-900 ease-out fill-mode-both motion-reduce:animate-none";

/* After a new deploy, old tabs can fail to load code chunks; a reload fixes it. */
const isChunkLoadError = (error: unknown) =>
  error instanceof Error &&
  /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|ChunkLoadError/i
    .test(
      error.message,
    );

/** Minimal frame used when the main layout itself failed (no header/footer). */
const Standalone = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <header className="global-padding-x flex h-20 w-full items-center">
      <a href="/" aria-label="Nexasoft home">
        <img src="/logo.png" alt="Nexasoft" className="h-9 w-auto" />
      </a>
    </header>
    <main className="flex-1">{children}</main>
  </div>
);

/*
 * Error boundary for routes (errorElement). Thrown 404 responses show the
 * Not Found page; a stale-deploy chunk error offers a reload; anything else
 * shows a friendly error with retry. Technical details appear in development
 * only.
 */
const RouteError = ({ standalone = false }: { standalone?: boolean }) => {
  const error = useRouteError();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const wrap = (
    node: React.ReactNode,
  ) => (standalone ? <Standalone>{node}</Standalone> : node);

  if (isRouteErrorResponse(error) && error.status === 404) {
    return wrap(<NotFound />);
  }

  const stale = isChunkLoadError(error);
  const status = isRouteErrorResponse(error) ? error.status : null;
  const details = error instanceof Error
    ? `${error.message}\n\n${error.stack ?? ""}`
    : isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : String(error);

  return wrap(
    <section className="relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-18 lg:pb-22">
      <title>
        {stale
          ? "Update available · Nexasoft"
          : "Something went wrong · Nexasoft"}
      </title>
      <meta name="robots" content="noindex" />
      <PageHeroBackdrop />
      <HeroBg />

      <div className="global-padding-x">
        <p className="flex items-center gap-2 text-sm font-medium text-brand-navy">
          <span aria-hidden="true" className="size-1.5 bg-brand-coral" />
          {stale
            ? "Update available"
            : status
            ? `Error ${status}`
            : "Unexpected error"}
        </p>

        <h1 className="mt-6 text-5xl leading-none font-semibold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
          {stale
            ? (
              <>
                <span className={lineAnimation}>We've just updated</span>
                <span
                  className={cn(lineAnimation, "text-brand-coral delay-150")}
                >
                  the website.
                </span>
              </>
            )
            : (
              <>
                <span className={lineAnimation}>Something went wrong.</span>
                <span
                  className={cn(lineAnimation, "text-brand-coral delay-150")}
                >
                  It's not you, it's us.
                </span>
              </>
            )}
        </h1>

        <p className="mt-8 max-w-xl text-lg text-pretty">
          {stale
            ? "Reload the page to get the latest version. It only takes a second."
            : "This page ran into a problem. Please try again, and if it keeps happening, let us know and we'll fix it."}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={() => window.location.reload()}>
            {stale ? "Reload page" : "Try again"}
            <RotateCw />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link to="/" />}
          >
            Back to home
            <ArrowRight />
          </Button>
        </div>

        {!stale && (
          <p className="mt-10 border-l-3 border-brand-navy bg-[#f5f7fb] px-5 py-4 text-sm">
            Need help now? Email{" "}
            <a
              href="mailto:hello@nexasofttechnologies.com"
              className="font-semibold text-brand-navy underline underline-offset-4"
            >
              hello@nexasofttechnologies.com
            </a>
            .
          </p>
        )}

        {import.meta.env.DEV && (
          <details className="mt-8 border border-border">
            <summary className="cursor-pointer px-5 py-3 text-sm font-semibold">
              Error details (development only)
            </summary>
            <pre className="overflow-x-auto border-t border-border bg-[#0f172a] p-5 text-xs leading-relaxed text-slate-200">
              {details}
            </pre>
          </details>
        )}
      </div>
    </section>,
  );
};

export default RouteError;
