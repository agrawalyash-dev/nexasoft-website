import { Mail, MapPin, UserRound } from "lucide-react";
import HeroBg from "@/components/hero-bg";
import { cn } from "@/lib/utils";
import { contact } from "@/pages/contact/data";
import { careers } from "../data";
import CareersForm from "./careers-form";

const lineAnimation =
  "block animate-in fade-in slide-in-from-bottom-7 duration-900 ease-out fill-mode-both motion-reduce:animate-none";

const CareersMain = () => {
  return (
    <section className="relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 lg:pt-18 lg:pb-22">
      <HeroBg />

      <div className="global-padding-x">
        <h1 className="text-5xl leading-none font-semibold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
          <span className={lineAnimation}>Want to build</span>
          <span className={cn(lineAnimation, "text-brand-coral delay-150")}>
            with Nexasoft?
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-pretty">
          We don't have any open roles listed right now. Share your details and
          we'll get in touch if a role matches your profile.
        </p>

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start lg:gap-10">
          <CareersForm />

          <div className="grid gap-4 lg:sticky lg:top-28">
            <div className="relative isolate overflow-hidden bg-brand-navy p-7 text-white sm:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-radial-[at_90%_8%] from-brand-coral/45 to-transparent to-50%"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[28px_28px]"
              />
              <UserRound aria-hidden="true" className="size-9 stroke-[1.3]" />
              <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                No open roles right now
              </h2>
              <p className="mt-2 text-base leading-relaxed text-white/80">
                Send us your details anyway. We'll reach out if a role that
                suits you opens up.
              </p>
            </div>

            <ul className="divide-y divide-border border border-border bg-white">
              <li className="flex items-start gap-4 p-5">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 stroke-[1.6] text-brand-navy"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${careers.email}`}
                    className="text-base font-semibold text-brand-navy hover:text-brand-blue"
                  >
                    {careers.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 p-5">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 stroke-[1.6] text-brand-navy"
                />
                <div>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                  <p className="text-base font-semibold">{contact.location}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersMain;
