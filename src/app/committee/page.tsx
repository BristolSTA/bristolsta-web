import StaTitle from "../../components/sta-title";
import StaText from "../../components/sta-text";
import StaTextContainer from "../../components/sta-text-container";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Committee',
};

function CommitteeLi({role, mail, people}: { role: string, mail?: string, people: string }) {
  return (
    <li>
      <Link href={`mailto:${mail ? mail : role.toLowerCase()}@bristolsta.com`}>{role}</Link> – {people}
    </li>
  )
}

export default function AboutUs() {
  return (
    <main>
      <StaTitle title="Committee" bgImage="agm-2025-group.jpeg"/>
      <StaTextContainer>
        <StaText>Our committee for the 25-26 academic year is:</StaText>
        <ul>
          <CommitteeLi role="President" people="Éabha"/>
          <CommitteeLi role="Vice President" mail="vp" people="Chloe"/>
          <CommitteeLi role="Secretary" people="Andrew"/>
          <CommitteeLi role="Equalities & Welfare Officer" mail="equalities" people="Ameerah"/>
          <CommitteeLi role="Treasurer" people="Miles"/>
          <CommitteeLi role="Training Managers" mail="training" people="Bryn & Jonathan"/>
          <CommitteeLi role="Workshop and Equipment Managers" mail="workshop" people="Archie & Phoebe"/>
          <CommitteeLi role="Hires and Externals Managers" mail="hires" people="Tiago & Okan"/>
          <CommitteeLi role="Publicity Officers" mail="publicity" people="Pola & Yara"/>
          <CommitteeLi role="Social Secretaries" mail="social" people="Harriet & Veronica"/>
          <CommitteeLi role="Webmaster" people="Clara"/>
          <CommitteeLi role="New Members' Rep" mail="nmr" people="Cathy & Li"/>
          <CommitteeLi role="Alumni Rep" mail="alumni" people="Dan"/>
          <CommitteeLi role="Signator" people="Archie"/>
          <CommitteeLi role="Confectionary Managers" mail="confectionary" people="Elanor & Freddie"/>
        </ul>
      </StaTextContainer>
    </main>

  );
}