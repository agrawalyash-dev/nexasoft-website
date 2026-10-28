import { Link } from "react-router";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
};

const LegalPage = ({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) => {
  return (
    <div className="pt-12 pb-16 sm:pt-16 lg:pt-18 lg:pb-22">
      <div className="global-padding-x">
        <header className="border-b border-border pb-10 lg:pb-12">
          <h1 className="text-5xl leading-none font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 bg-brand-coral" />
            Last updated {updated}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
            {intro}
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] lg:gap-16">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-sm font-semibold">On this page</p>
              <ol className="space-y-2.5 border-l border-border">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent pl-4 text-sm text-muted-foreground transition-colors hover:border-brand-navy hover:text-brand-navy"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="max-w-3xl">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28 border-b border-border py-8 first:pt-0 last:border-b-0"
              >
                <h2 className="flex gap-3 text-2xl font-semibold tracking-tight">
                  <span className="text-brand-coral tabular-nums">
                    {i + 1}.
                  </span>
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/85">
                  {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                  {s.list && (
                    <ul className="space-y-2 pl-5 marker:text-brand-navy [list-style:square]">
                      {s.list.map((item) => (
                        <li key={item} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.after?.map((p) => <p key={p}>{p}</p>)}
                </div>
              </section>
            ))}

            <p className="mt-10 border-l-3 border-brand-navy bg-[#f5f7fb] px-5 py-4 text-sm leading-relaxed">
              Questions about this page? Email{" "}
              <a
                href="mailto:hello@nexasofttechnologies.com"
                className="font-semibold text-brand-navy underline underline-offset-4"
              >
                hello@nexasofttechnologies.com
              </a>{" "}
              or use our{" "}
              <Link
                to="/contact"
                className="font-semibold text-brand-navy underline underline-offset-4"
              >
                contact page
              </Link>
              .
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
