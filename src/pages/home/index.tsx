import Cta from "@/components/cta";
import Hero from "./components/hero";
import Industries from "./components/industries";
import Services from "./components/services";
import Story from "./components/story";
import CaseStudies from "./components/case-studies";
import FeaturedWork from "./components/featured-work";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Industries />
      <Story />
      <CaseStudies />
      <FeaturedWork />
      <Cta />
    </div>
  );
};

export default Home;
