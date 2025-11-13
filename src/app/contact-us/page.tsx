"use client";
import StaTitle from "../../components/sta-title";
import StaTextContainer from "../../components/sta-text-container";
import StaText from "../../components/sta-text";
import {Link} from "react-aria-components";
import ContactForm from "./contact-form";


export default function ContactUs() {

  return (
    <main>
      <StaTitle title="Contact Us" bgImageUrl="/images/symphonia.jpeg"/>
      <StaTextContainer>
        <StaText>
          We&apos;re always happy to answer any questions you have or provide more information about our services! The
          easiest way to contact us is to email us at <Link
          href="mailto:committee@bristolsta.com">committee@bristolsta.com</Link> or use the form below.
        </StaText>
        <ContactForm/>
      </StaTextContainer>
    </main>
  );
}