import Cta from "@/components/cta";
import PageHero from "@/components/page-hero";
import Approach from "./components/approach";
import Commitment from "./components/commitment";
import CompanyInformation from "./components/company-information";
import MissionVision from "./components/mission-vision";
import WhoWeAre from "./components/who-we-are";
import { heroHighlights, heroStats } from "./data";

const About = () => {
  return (
    <div>
      <PageHero
        title={["Built in Vadodara,", "trusted worldwide."]}
        intro="Nexasoft Technologies Private Limited is a technology company incorporated in Gujarat, India, focused on delivering structured, quality-driven digital solutions. We believe successful technology is built on a clear understanding of business needs, disciplined engineering, and transparent collaboration."
        stats={heroStats}
        tilesLabel="On this page"
        tiles={[
          { href: "#who-we-are", label: "Who we are" },
          { href: "#approach", label: "What defines our approach" },
          { href: "#mission-vision", label: "Mission and vision" },
          { href: "#company-information", label: "Company information" },
        ]}
        highlights={heroHighlights}
      />
      <WhoWeAre />
      <Approach />
      <MissionVision />
      <Commitment />
      <CompanyInformation />
      <Cta />
    </div>
  );
};

export default About;
