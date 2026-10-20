import FaqSection from "@/components/faq-section";
import ContactMain from "./components/contact-main";
import OtherWays from "./components/other-ways";
import { faqs } from "./data";

const Contact = () => {
  return (
    <div>
      <ContactMain />
      <OtherWays />
      <FaqSection
        title="Before you get in touch"
        description="Replies, NDAs and time zones."
        items={faqs}
        className="pb-16 lg:pb-22"
        showContactCard={false}
      />
    </div>
  );
};

export default Contact;
