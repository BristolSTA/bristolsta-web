import StaTitle from "../../components/sta-title";
import StaTextContainer from "../../components/sta-text-container";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactUs() {

  return (
    <main>
      <StaTitle title="Contact Us" bgImage="9to5-sound.jpg"/>
      <StaTextContainer>
        <ContactInfo />
        <ContactForm/>
      </StaTextContainer>
    </main>
  );
}