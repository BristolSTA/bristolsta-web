"use client"
import StaTitle from "../../components/sta-title";
import StaTextContainer from "../../components/sta-text-container";
import StaText from "../../components/sta-text";
import {Link} from "react-aria-components";
import StaLinkButton from "../../components/sta-link-button";
import Image from "next/image";
import {CalendarRangeIcon} from "lucide-react";

export default function GetInvolved() {
  return (
    <main>
      <StaTitle title="Get Involved" bgImageUrl="/images/mic-world.jpeg"/>
      <StaTextContainer>
        <StaText>The best way to get involved in the STA is to come and join us in the Winston and Pegg theatres during
          a show run – there&apos;s always something to get hands-on with, from carpentry and stage management to
          lighting and sound. While most of our members join during the September and January fresher events, we have
          people join throughout the year so don&apos;t be afraid to come and give it a go!</StaText>
        <StaLinkButton href="https://discord.com/invite/t2D7TCcSU5">
          <Image src="/images/icons/discord.svg" width={100} height={100} alt={""} className={"size-6 fill-current"} aria-hidden="true"/>
          Join the Discord
        </StaLinkButton>
        <StaText>You might not be able to see many channels at first as we need to limit access to people who we know,
          so let someone know when you come help out and we will give you access.</StaText>
      </StaTextContainer>
      <StaTextContainer>
        <StaText>It also helps us if you join the STA on the Bristol SU website, as this entitles you to vote at
          meetings and elections, and helps the SU get feedback from you on societies. It&apos;s completely free for any
          member of the SU and only takes a few seconds.</StaText>
        <StaLinkButton href="https://www.bristolsu.org.uk/groups/sta-stage-technicians-association-3e02" className={"teal-btn"}>
          <Image src="/images/icons/su.png" width={100} height={100} alt={""} className={"size-6 fill-current"} aria-hidden="true"/>
          SU Membership Page
        </StaLinkButton>
      </StaTextContainer>
      <StaTextContainer>
        <StaText>If you want to know what we&apos;re currently working on, see the <Link href={"/what's-on"}>What&apos;s
          On</Link> page, or for a more comprehensive day-by-day view, have a look at the STA Calendar.</StaText>
        <StaLinkButton href="https://calendar.google.com/calendar/u/1?cid=Y18zYzMwNzY0ZDBmN2MxMWZkNjI4ODA2YjYwMjEwMWQzNDRhNDUxNThmY2YzYWJiYzg1MzYxZmM5YjUyODY2OTc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" className={"yellow-btn"}>
          <CalendarRangeIcon className={"size-5"} aria-hidden="true"/>
          <span>STA Calendar</span>
        </StaLinkButton>
      </StaTextContainer>
      <StaTextContainer>
        <StaText>If you have any questions about joining or getting involved, please reach out to us by joining our
          Discord server or emailing our New Members&apos; Rep at <Link
            href="mailto:nmr@bristolsta.com">nmr@bristolsta.com</Link>.</StaText>
      </StaTextContainer>
    </main>
  );
}