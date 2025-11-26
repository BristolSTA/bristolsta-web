"use client"
import {Link} from "react-aria-components";
import StaTextContainer from "../../components/sta-text-container";
import StaText from "../../components/sta-text";
import Image from "next/image";
import StaLinkButton from "../../components/sta-link-button";
import StaHeading3 from "../../components/sta-heading-3";
import {ChevronRightIcon} from "lucide-react";
import HomeCard from "./home-card";

export default function Home() {
  return (
    <main className="-mb-4">
      <div className="bg-neutral-600 bg-cover bg-center max-h-screen"
           style={{backgroundImage: 'url(/images/front.png)'}}>
        <div className="bg-neutral-950/75 w-full h-full pt-48 p-3">
          <h1 className="font-bold text-5xl text-center">Welcome to Bristol STA</h1>
          <h2 className="font-semibold text-2xl text-center text-neutral-300 py-3">The backstage technical society for
            students in Bristol</h2>
        </div>
        <div className="bg-neutral-950/75 w-full h-full pb-48 p-3 flex items-center justify-center">
          <Link href="/get-involved" className="sta-btn">Get involved</Link>
          <Link href="/contact-us" className="sta-btn yellow-btn">Contact us</Link>
        </div>
      </div>
      <StaTextContainer className="grid md:grid-cols-2 my-6 w-full text-center md:text-left">
        <div>
          <StaHeading3 className="my-2">About Us</StaHeading3>
          <StaText className="my-auto">Bristol Stage Technicians’ Association is a Bristol SU Society that provides
            technical event support to student and community groups across Bristol.</StaText>
          <Link href="/about-us" className="m-3 sta-btn">More About the STA</Link>
        </div>
        <div className="my-3 md:my-auto mx-8">
          <Image className="w-full" src="/images/bristolsu-logo.png" alt="SU Sup" width={2183} height={503}/>
        </div>
      </StaTextContainer>
      <div className="bg-neutral-950 p-4">
        <StaTextContainer className="grid md:grid-cols-3 my-6 wide">
          <HomeCard bgImageUrl="/images/pit.jpeg">
            <StaHeading3>Get Involved</StaHeading3>
            <StaText>We offer opportunities for Bristol students to get behind the scenes. Come along and get involved
              with the shows we put on.</StaText>
            <span className="flex-grow min-h-6"></span>
            <StaLinkButton href={"/get-involved"} className="yellow-btn">
              <span>Get Involved</span>
              <ChevronRightIcon className="size-6" aria-hidden="true"/>
            </StaLinkButton>
          </HomeCard>
          <HomeCard bgImageUrl="/images/gld.jpeg">
            <StaHeading3>Hire Equipment</StaHeading3>
            <StaText>If you don’t need a full STA crew we are able to hire out some of our equipment for you to use for
              your own events.</StaText>
            <span className="flex-grow min-h-6"></span>
            <StaLinkButton href={"/hires"} className="sta-btn teal-btn">
              <span>Hire Equipment</span>
              <ChevronRightIcon className="size-6" aria-hidden="true"/>
            </StaLinkButton>
          </HomeCard>
          <HomeCard bgImageUrl={"/images/bar.jpg"}>
            <StaHeading3>Put on a Show</StaHeading3>
            <StaText>
              We’d love to help out with anything from intimate studio work to epic musicals. If you’ve got an idea, get
              in touch.
            </StaText>
            <span className="flex-grow min-h-6"></span>
            <StaLinkButton href={"/contact-us"} className="sta-btn">
              <span>Collaborate with Us</span>
              <ChevronRightIcon className="size-6" aria-hidden="true"/>
            </StaLinkButton>
          </HomeCard>
        </StaTextContainer>
      </div>
    </main>
  );
}
