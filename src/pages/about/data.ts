import {
  BadgeCheck,
  CalendarCheck,
  Eye,
  FolderLock,
  LayoutDashboard,
  type LucideIcon,
  Search,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  DiscoveryArt,
  OwnershipArt,
  QualityArt,
  ReportingArt,
  SecurityArt,
  SprintArt,
} from "./components/about-illustrations";

export const heroStats = [
  { value: 2024, suffix: "", label: "Year incorporated" },
  { value: 6, suffix: "", label: "Principles behind our approach" },
  { value: 2, suffix: " weeks", label: "Between working demos" },
];

export const heroHighlights: { icon: LucideIcon; label: string }[] = [
  { icon: Target, label: "Clear understanding of business needs" },
  { icon: Wrench, label: "Disciplined engineering" },
  { icon: Users, label: "Transparent collaboration" },
];

export const approach: {
  title: string;
  text: string;
  icon: LucideIcon;
  art: ComponentType;
}[] = [
  {
    title: "Discovery Before Code",
    text:
      "We begin every engagement by understanding requirements, defining scope, identifying risks, and agreeing on success measures before development starts.",
    icon: Search,
    art: DiscoveryArt,
  },
  {
    title: "Working Software Every Two Weeks",
    text:
      "We use short development sprints with demonstrations every two weeks, making progress visible and enabling timely feedback throughout the project.",
    icon: CalendarCheck,
    art: SprintArt,
  },
  {
    title: "Quality Gates in Every Release",
    text:
      "Code reviews, automated testing, and performance checks help maintain quality and reliability before software reaches production.",
    icon: BadgeCheck,
    art: QualityArt,
  },
  {
    title: "Security by Default",
    text:
      "We incorporate secure coding practices, dependency scanning, and access reviews into our development process to help protect applications and systems.",
    icon: ShieldCheck,
    art: SecurityArt,
  },
  {
    title: "Clear Reporting",
    text:
      "Weekly status updates and shared dashboards provide visibility into progress, risks, milestones, and budget considerations.",
    icon: LayoutDashboard,
    art: ReportingArt,
  },
  {
    title: "You Own Everything",
    text:
      "We prioritize client ownership and transparency, with project code, designs, documentation, and infrastructure maintained in client-owned accounts, alongside a structured handover.",
    icon: FolderLock,
    art: OwnershipArt,
  },
];

export const commitments: { title: string; icon: LucideIcon }[] = [
  { title: "Transparency in every interaction", icon: Eye },
  { title: "Quality in every release", icon: BadgeCheck },
  { title: "Ownership at every stage", icon: FolderLock },
];

export const companyInfo = [
  { label: "Legal Name", value: "Nexasoft Technologies Private Limited" },
  { label: "Company Type", value: "Private Limited Company" },
  {
    label: "Registration Status",
    value: "Active, according to the supplied company information",
  },
  { label: "Date of Incorporation", value: "April 11, 2024" },
  {
    label: "Corporate Identification Number (CIN)",
    value: "U26205GJ2024PTC150544",
  },
  { label: "Registrar of Companies", value: "RoC Ahmedabad" },
  {
    label: "Registered Office",
    value:
      "TF Office No. 21, Shree Siddheshwar Plaza, Ajwa Road, Vadodara, Gujarat – 390019, India",
  },
];
