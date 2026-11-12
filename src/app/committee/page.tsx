import StaTitle from "@/components/sta-title";
import StaText from "@/components/sta-text";
import StaTextContainer from "@/components/sta-text-container";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committee",
};

function CommitteeLi({
  role,
  mail,
  people,
}: {
  role: string;
  mail?: string;
  people: string;
}) {
  return (
    <li>
      <Link href={`mailto:${mail ? mail : role.toLowerCase()}@bristolsta.com`}>
        {role}
      </Link>{" "}
      – {people}
    </li>
  );
}

export default function AboutUs() {
  return (
    <main>
      <StaTitle title="Committee" bgImage="agm-2025-group.jpeg" />
      <StaTextContainer>
        <StaText>Our committee for the 26-27 academic year is:</StaText>
        <ul>
          <CommitteeLi role="President" people="Andrew" />
          <CommitteeLi role="Vice President" mail="vp" people="Alina" />
          <CommitteeLi role="Secretary" people="Lily" />
          <CommitteeLi
            role="Equalities & Welfare Officers"
            mail="equalities"
            people="Ameerah & Li"
          />
          <CommitteeLi role="Treasurer" people="Tai" />
          <CommitteeLi role="Training Manager" mail="training" people="Alex" />
          <CommitteeLi
            role="Workshop and Equipment Managers"
            mail="workshop"
            people="Audrey & Archie"
          />
          <CommitteeLi
            role="Hires and Externals Managers"
            mail="hires"
            people="Bryn & Pat"
          />
          <CommitteeLi
            role="Publicity Officers"
            mail="publicity"
            people="Babs & Millie"
          />
          <CommitteeLi
            role="Social Secretaries"
            mail="social"
            people="Eleanor & Ethan"
          />
          <CommitteeLi role="Webmaster" people="Clara" />
          <CommitteeLi role="New Members' Rep" mail="nmr" people="Cathy & Li" />
          <CommitteeLi role="Alumni Rep" mail="alumni" people="Archie" />
          <CommitteeLi role="Signator" people="Archie" />
          <CommitteeLi
            role="Confectionary Store Managers"
            mail="confectionary"
            people="Elanor & Freddie"
          />
        </ul>
      </StaTextContainer>
    </main>
  );
}
