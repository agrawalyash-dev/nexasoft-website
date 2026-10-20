import Cta from "@/components/cta";
import PageHero from "@/components/page-hero";
import { CaseShowcase } from "./components/case-showcase";
import { heroHighlights, heroStats } from "./data";

const CaseStudiesPage = () => {
  return (
    <div>
      <title>Case Studies · Nexasoft</title>
      <meta
        name="description"
        content="How Nexasoft has helped banks, hospitals, retailers, manufacturers and logistics companies build and modernise critical systems."
      />
      <PageHero
        title={["Proven results,", "engineered with precision."]}
        intro="From zero-downtime hospital cloud migrations and automated lending engines to shop-floor ERPs and real-time fleet analytics, Nexasoft builds mission-critical technology. Explore our production case studies, system architectures, and verified outcomes."
        stats={heroStats}
        tilesLabel="On this page"
        tiles={[]}
        highlights={heroHighlights}
      />
      <CaseShowcase />
      <Cta />
    </div>
  );
};

export default CaseStudiesPage;
