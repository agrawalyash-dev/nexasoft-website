import SectionHeading from "@/components/section-heading";
import { companyInfo } from "../data";
import { RegistrationArt } from "./about-illustrations";

const CompanyInformation = () => {
  return (
    <section
      id="company-information"
      className="scroll-mt-24 pb-16 lg:scroll-mt-28 lg:pb-22"
    >
      <div className="global-padding-x">
        <SectionHeading
          title="Company information"
          description="Registration details at a glance."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-16">
          <div aria-hidden="true">
            <RegistrationArt />
          </div>

          <dl className="border-t border-border">
            {companyInfo.map(({ label, value }) => (
              <div
                key={label}
                className="grid gap-1 border-b border-border py-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6 sm:py-5"
              >
                <dt className="text-sm text-muted-foreground sm:pt-0.5">
                  {label}
                </dt>
                <dd className="text-base leading-snug font-semibold text-brand-navy">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default CompanyInformation;
