"use client"
import { Link } from "react-aria-components";
import StaText from "@/components/sta-text";

export default function ContactInfo() {
  return (
    <StaText>
          We&apos;re always happy to answer any questions you have or provide more information about our services! The
          easiest way to contact us is to email us at <Link
          href="mailto:committee@bristolsta.com">committee@bristolsta.com</Link> or use the form below.
        </StaText>
  )
}