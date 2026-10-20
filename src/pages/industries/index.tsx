import { ShieldCheck, Users, Workflow } from "lucide-react";
import Cta from "@/components/cta";
import FaqSection from "@/components/faq-section";
import PageHero from "@/components/page-hero";
import DomainExpertise from "./components/domain-expertise";
import IndustryDetails from "./components/industry-details";
import { faqs, heroStats, industries } from "./data";

const Industries = () => {
  return (
    <div>
      <PageHero
        title={["Built for your industry,", "not just your stack."]}
        intro="Banks, hospitals, retailers and manufacturers each run on different systems, rules and customer expectations. Our teams specialise by sector, so they arrive knowing your regulations, your core platforms and what good looks like in your market."
        stats={heroStats}
        tilesLabel="Industries we serve"
        tiles={industries.map((i) => ({ href: `#${i.slug}`, label: i.name }))}
        highlights={[
          { icon: Users, label: "Sector-specialist teams" },
          { icon: ShieldCheck, label: "Compliance built in from day one" },
          { icon: Workflow, label: "Proven on core industry platforms" },
        ]}
      />
      <IndustryDetails />
      <DomainExpertise />
      <FaqSection
        title="Questions about industry work"
        description="Regulations, systems and confidentiality."
        items={faqs}
      />
      <Cta />
    </div>
  );
};

export default Industries;
