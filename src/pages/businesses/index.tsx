import { BadgeCheck, MapPin, UserRound } from "lucide-react";
import Cta from "@/components/cta";
import FaqSection from "@/components/faq-section";
import PageHero from "@/components/page-hero";
import BusinessUnits from "./components/business-units";
import EngagementModels from "./components/engagement-models";
import Journey from "./components/journey";
import Overview from "./components/overview";
import { faqs, groupStats, units } from "./data";

const Businesses = () => {
  return (
    <div>
      <PageHero
        title={["Six businesses,", "one partner."]}
        intro="Nexasoft is a technology group headquartered in Vadodara. Our six businesses share one engineering culture, one talent pipeline and one standard for delivery, so you get specialist depth without juggling vendors."
        stats={groupStats.slice(0, 3)}
        tilesLabel="Our businesses"
        tiles={units.map((u) => ({
          href: `#${u.slug}`,
          label: (
            <>
              Nexasoft
              <br />
              {u.short}
            </>
          ),
        }))}
        highlights={[
          { icon: MapPin, label: "Headquartered in Vadodara" },
          { icon: UserRound, label: "One engagement lead" },
          { icon: BadgeCheck, label: "One delivery standard" },
        ]}
      />
      <Overview />
      <BusinessUnits />
      <Journey />
      <EngagementModels />
      <FaqSection
        description="About working with our businesses."
        items={faqs}
        className="pb-16 lg:pb-22"
      />
      <Cta />
    </div>
  );
};

export default Businesses;
