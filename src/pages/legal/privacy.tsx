import LegalPage, { type LegalSection } from "@/components/legal-page";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    paragraphs: [
      "This website is operated by Nexasoft Technologies Pvt Ltd (“Nexasoft”, “we”, “us”), headquartered in Vadodara, Gujarat, India. For the personal data described in this policy, we are the data fiduciary under the Digital Personal Data Protection Act, 2023.",
    ],
  },
  {
    id: "what-we-collect",
    title: "What information we collect",
    paragraphs: [
      "When you contact us through our form or by email, we collect the information you choose to give us:",
    ],
    list: [
      "Your name and work email address",
      "Your company name and phone number, if you provide them",
      "The services you're interested in, your estimated budget and your message",
    ],
    after: [
      "Like most websites, our hosting provider automatically records basic technical information when you visit, such as your IP address, browser type and the pages requested. This is used to keep the website secure and running, not to identify or profile you.",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    list: [
      "To reply to your enquiry and arrange a discovery call",
      "To prepare a proposal if you ask us to",
      "To keep a record of our correspondence with you",
      "To protect the website against misuse and attacks",
      "To meet our legal obligations",
    ],
    after: [
      "We do not sell your personal data, and we do not use it for advertising.",
    ],
  },
  {
    id: "legal-basis",
    title: "Why we're allowed to use it",
    paragraphs: [
      "We process the details you send us on the basis of your consent, which you give when you submit the contact form, and for legitimate uses permitted by law, such as responding to a request you have made. You can withdraw your consent at any time by emailing us; this won't affect anything we did before you withdrew it.",
    ],
  },
  {
    id: "sharing",
    title: "Who we share it with",
    paragraphs: ["We share personal data only where necessary, with:"],
    list: [
      "Service providers who help us run the website and our communications, such as hosting, email and form-handling services",
      "Professional advisers, such as lawyers and accountants, where needed",
      "Authorities, where the law requires it",
    ],
    after: [
      "Service providers may only use your data to provide their services to us and must keep it secure.",
    ],
  },
  {
    id: "transfers",
    title: "Transfers outside India",
    paragraphs: [
      "Some of our service providers may store or process data outside India. Where this happens, we transfer data only as permitted under Indian law and choose providers that protect it to a standard comparable to ours.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    paragraphs: [
      "We keep enquiry details for as long as needed to respond and follow up, and for up to 24 months after our last contact if we don't go on to work together. If you become a client, we keep records for as long as our contract and the law require. After that, we delete or anonymise the data.",
    ],
  },
  {
    id: "security",
    title: "How we protect it",
    paragraphs: [
      "We use reasonable technical and organisational safeguards, including encrypted connections, access controls and limiting access to people who need it. No system is perfectly secure, but we work to protect your data and will notify you and the authorities of a breach where the law requires.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    paragraphs: [
      "Under the Digital Personal Data Protection Act, 2023, you have the right to:",
    ],
    list: [
      "Ask what personal data we hold about you and how we use it",
      "Ask us to correct, complete or update it",
      "Ask us to erase it, where we no longer need it",
      "Withdraw your consent",
      "Nominate another person to exercise your rights if you are unable to",
      "Have your concerns addressed by our Grievance Officer",
    ],
    after: [
      "To use any of these rights, email hello@nexasofttechnologies.com with the subject “Privacy request”. If you're not satisfied with our response, you may complain to the Data Protection Board of India.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "This website does not currently use advertising, analytics or tracking cookies. If that changes, we will update this policy and, where required, ask for your consent first.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      "Our website and services are intended for businesses and are not directed at anyone under 18. We do not knowingly collect personal data from children.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. The date at the top shows when it last changed. Significant changes will be highlighted on this page.",
    ],
  },
  {
    id: "contact",
    title: "Contact and Grievance Officer",
    paragraphs: [
      "For any privacy question, request or complaint, contact our Grievance Officer at hello@nexasofttechnologies.com, or write to Grievance Officer, Nexasoft Technologies Pvt Ltd, Vadodara, Gujarat, India. We aim to respond within the time required by law.",
    ],
  },
];

const Privacy = () => (
  <>
    <title>Privacy Policy · Nexasoft</title>
    <meta
      name="description"
      content="How Nexasoft collects, uses and protects your personal data."
    />
    <LegalPage
      title="Privacy Policy"
      updated="20 October 2026"
      intro="This policy explains what personal data we collect through this website, why we collect it, and the choices and rights you have. We collect as little as we need."
      sections={sections}
    />
  </>
);

export default Privacy;
