import type { FaqItem } from "@/components/faq-section";

export const contact = {
  email: "hello@nexasoft.com",
  location: "Vadodara, Gujarat, India",
  hours: "Monday to Friday, 9:30 am – 6:30 pm IST",
};

export const topics = [
  "Digital Engineering",
  "Enterprise Applications",
  "AI & Data Analytics",
  "Cloud & Infrastructure",
  "Application Modernization",
  "Cybersecurity",
  "Dedicated team",
  "Something else",
];

export const budgets = [
  "Not sure yet",
  "Under ₹10 lakh",
  "₹10–50 lakh",
  "₹50 lakh – ₹1 crore",
  "Over ₹1 crore",
];

export const steps = [
  {
    title: "We reply within one working day",
    text:
      "A real person reads every message and replies with any questions, or a time to talk.",
  },
  {
    title: "A 30-minute discovery call",
    text:
      "We listen to your goals, constraints and timeline, and tell you honestly whether we're the right fit.",
  },
  {
    title: "A clear proposal",
    text:
      "If it makes sense to go ahead, you get a written scope, timeline and estimate, with no obligation.",
  },
];

export const otherWays = [
  {
    title: "Careers",
    text: "Want to build with us? See open roles and how we hire.",
    label: "View careers",
    href: "/careers",
  },
  {
    title: "Partnerships",
    text: "Technology vendors and agencies interested in working together.",
    label: "Email us about partnerships",
    href: "mailto:hello@nexasoft.com?subject=Partnership%20enquiry",
  },
  {
    title: "Existing clients",
    text:
      "For support on a live project, contact your engagement lead directly, or email us.",
    label: "Email support",
    href: "mailto:hello@nexasoft.com?subject=Client%20support",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "How quickly will you reply?",
    a: "Within one working day. If your enquiry is urgent, say so in your message and we'll prioritise it.",
  },
  {
    q: "Can we sign an NDA before sharing details?",
    a: "Yes. Mention it in your message and we'll send our standard mutual NDA, or review yours, before the discovery call.",
  },
  {
    q: "Do I need a detailed brief before contacting you?",
    a: "No. A few lines about what you want to achieve is enough. Shaping the details is part of the discovery call.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work with clients across time zones and schedule calls and stand-ups in your working hours.",
  },
];
