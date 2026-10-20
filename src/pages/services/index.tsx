import { RefreshCw, ShieldCheck, Users } from "lucide-react";
import Cta from "@/components/cta";
import FaqSection from "@/components/faq-section";
import PageHero from "@/components/page-hero";
import DeliveryStandards from "./components/delivery-standards";
import IndustriesTechnology from "./components/industries-technology";
import ServiceDetails from "./components/service-details";
import { faqs, heroStats, services } from "./data";

const Services = () => {
  return (
    <div>
      <PageHero
        title={["Technology services,", "built to deliver."]}
        intro="From the first prototype to systems that run 24×7, Nexasoft designs, builds, modernises and protects the technology your business depends on. Every service is delivered end to end, by specialists, under one lead."
        stats={heroStats}
        tilesLabel="Our services"
        tiles={services.map((s) => ({ href: `#${s.slug}`, label: s.name }))}
        highlights={[
          { icon: Users, label: "Discovery to support, one team" },
          { icon: ShieldCheck, label: "Security built into every service" },
          { icon: RefreshCw, label: "Two-week delivery cycles" },
        ]}
      />
      <ServiceDetails />
      <DeliveryStandards />
      <IndustriesTechnology />
      <FaqSection
        title="Questions about our services"
        description="Pricing, ownership and how we work."
        items={faqs}
        className="pb-16 lg:pb-22"
      />
      <Cta />
    </div>
  );
};

export default Services;
