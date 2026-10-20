import { FolderLock, ShieldCheck, Sparkles } from "lucide-react";
import Cta from "@/components/cta";
import FaqSection from "@/components/faq-section";
import PageHero from "@/components/page-hero";
import ArchitecturePatterns from "./components/architecture-patterns";
import EngineeringPractices from "./components/engineering-practices";
import HowWeChoose from "./components/how-we-choose";
import ResponsibleAi from "./components/responsible-ai";
import TechStack from "./components/tech-stack";
import { faqs, heroStats, layers } from "./data";

const tileLayers = [
  "web",
  "mobile",
  "backend",
  "data-ai",
  "cloud-devops",
  "enterprise",
];

const Technology = () => {
  return (
    <div>
      <PageHero
        title={["The right technology,", "for your problem."]}
        intro="We don't sell a favourite framework. We choose proven, well-supported technology that fits your goals, your team and the systems you already run, and we explain every choice in plain language."
        stats={heroStats}
        tilesLabel="Technology layers"
        tiles={layers
          .filter((l) => tileLayers.includes(l.slug))
          .map((l) => ({ href: `#${l.slug}`, label: l.name }))}
        highlights={[
          { icon: Sparkles, label: "Proven, well-supported technology" },
          { icon: FolderLock, label: "Everything in your accounts" },
          { icon: ShieldCheck, label: "Security and testing in every release" },
        ]}
      />
      <HowWeChoose />
      <TechStack />
      <ArchitecturePatterns />
      <EngineeringPractices />
      <ResponsibleAi />
      <FaqSection
        title="Technical questions"
        description="Stack, lock-in and architecture."
        items={faqs}
      />
      <Cta />
    </div>
  );
};

export default Technology;
