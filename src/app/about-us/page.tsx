import StaTitle from "../../components/sta-title";
import StaText from "../../components/sta-text";
import StaTextContainer from "../../components/sta-text-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutUs() {
  return (
    <main>
      <StaTitle title="About the STA" bgImage="beams.jpg"/>
      <StaTextContainer>
        <StaText>Bristol Stage Technicians&apos; Association has provided technical services to performing arts
          societies at the
          University of Bristol for over 50 years. We are a group of about 50 core members, all of whom love putting on
          events, shows, and gigs throughout Bristol. Although some of our members join with prior knowledge of
          technical theatre or events, most of our members join with no experience at all. Membership is free and open
          to any member of Bristol SU.</StaText>
        <StaText>We provide the technical expertise needed to design, construct, and run most shows put on by
          performing arts
          societies at Bristol SU, from musicals and dramas to pantomimes and improv. We put on around 30 shows a year
          between our two main theatres — the Winston and Pegg theatres — with a few at other venues, such as the Loco
          Klub and Anson Rooms.</StaText>
      </StaTextContainer>
      <StaTextContainer>
        <StaText>Bristol has a thriving performing arts scene, and the STA offers support to all student
          societies putting on
          shows by providing technical support, training, and resources. The strong relationships we have with other
          societies allows us to not only continue providing training for our members, but to be part of one of the best
          student theatre community in the country. We run regular training sessions for all members, as well as socials
          including theatre visits, pub trips, christmas dinner, and summer barbecues.</StaText>
        <StaText>The STA is led by a committee of about 20 members, responsible for organising activities
          and making sure we
          keep on top of important theatre-related tasks.</StaText>
      </StaTextContainer>
    </main>

  );
}