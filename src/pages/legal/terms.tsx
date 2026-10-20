import LegalPage, { type LegalSection } from "@/components/legal-page";

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    paragraphs: [
      "These terms apply to your use of this website, operated by Nexasoft Technologies Pvt Ltd (“Nexasoft”, “we”, “us”), Vadodara, Gujarat, India. By using the website you agree to them. If you don't agree, please don't use the website.",
    ],
  },
  {
    id: "using",
    title: "Using the website",
    paragraphs: [
      "You may use this website for lawful purposes only. You must not:",
    ],
    list: [
      "Attempt to gain unauthorised access to the website or the systems it runs on",
      "Introduce malware or interfere with the website's operation or security",
      "Use automated tools to copy content in a way that harms the website or its users",
      "Submit false information or impersonate anyone through our forms",
    ],
  },
  {
    id: "information",
    title: "Information on this website",
    paragraphs: [
      "Content on this website is for general information about our company and services. It is not professional advice or a binding offer. Project outcomes described are examples from past work; results for your project will depend on its scope and circumstances.",
      "We work to keep information accurate and current, but we may change or remove content at any time without notice.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    paragraphs: [
      "The Nexasoft name, logo, website design, text and graphics are owned by us or used with permission. You may view and share pages for personal or internal business purposes, but you may not copy, modify or republish our content for commercial use without our written permission.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party names and links",
    paragraphs: [
      "Product and company names mentioned on this website, such as cloud and software platforms, are trademarks of their respective owners. Mentioning a technology means we work with it; it does not imply a partnership or endorsement unless we state one.",
      "Links to other websites are provided for convenience. We are not responsible for their content or privacy practices.",
    ],
  },
  {
    id: "enquiries",
    title: "Enquiries and proposals",
    paragraphs: [
      "Sending us an enquiry does not create a contract or an obligation for either party. Any services we provide are governed by a separate written agreement signed by both parties, which takes precedence over these terms.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    paragraphs: [
      "The website is provided “as is”. To the extent permitted by law, we make no warranties that it will be uninterrupted, error-free or free of harmful components.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, Nexasoft is not liable for any indirect or consequential loss, or for loss of profit, data or business, arising from your use of this website or reliance on its content. Nothing in these terms limits liability that cannot be limited under applicable law.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    paragraphs: [
      "How we handle personal data you share with us is explained in our Privacy Policy.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The date at the top shows when they last changed, and continued use of the website means you accept the updated terms.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India. Any dispute relating to them is subject to the exclusive jurisdiction of the courts at Vadodara, Gujarat.",
    ],
  },
];

const Terms = () => (
  <>
    <title>Terms of Use · Nexasoft</title>
    <meta
      name="description"
      content="The terms that apply to using the Nexasoft website."
    />
    <LegalPage
      title="Terms of Use"
      updated="20 October 2026"
      intro="These terms set out the rules for using this website. They're written to be read, not skimmed past, so we've kept them short and plain."
      sections={sections}
    />
  </>
);

export default Terms;
