"use client";
import StaTitle from "../../components/sta-title";
import StaTextContainer from "../../components/sta-text-container";
import StaText from "../../components/sta-text";
import {Link} from "react-aria-components";
import Image from "next/image";

export default function Hires() {
  return (
    <main>
      <StaTitle title="Hires" bgImage="ladder.jpeg"/>
      <StaTextContainer>
        <StaText>
          We&apos;re happy to hire out our equipment for you to use for your own events or productions. We can offer a
          wide range of equipment including:
        </StaText>
        <ul>
          <li>Speakers, amplifiers, and stands</li>
          <li>Wired and wireless microphones</li>
          <li>Sound mixing and lighting control desks</li>
          <li>Lighting equipment with stands and accessories</li>
          <li>Drapes and staging</li>
          <li>Theatrical flats</li>
          <li>Effects machines</li>
          <li>Set furniture and decoration</li>
          <li>Power distribution equipment</li>
          <li>A variety of data and power cables</li>
        </ul>
        <StaText>
          If you are interested in hiring any of our equipment, please get in touch with our Hires and Externals
          managers by emailing <Link href="mailto:hires@bristolsta.com">hires@bristolsta.com</Link> or using the <Link
          href="/contact-us">contact form</Link> with a list of equipment you would like to hire and the dates you
          require them for and we will get back to you with more information.
        </StaText>
      </StaTextContainer>
      <StaTextContainer>
        <div className="hires__image_grid">
          <Image src="/images/hires/s4-fresnel.png" alt="Fresnel light" width={423} height={480}/>
          <Image src="/images/hires/chair.png" alt="Wooden chair" width={1642} height={2757}/>
          <Image src="/images/hires/m32.png" alt="Sound mixer" width={1347} height={700}/>
          <Image src="/images/hires/sm58.png" alt="Microphone" width={1000} height={1000}/>
          <Image src="/images/hires/spiider.png" alt="Moving LED light" width={1500} height={1500}/>
          <Image src="/images/hires/deck.png" alt="Stage deck" width={1024} height={768}/>
        </div>
      </StaTextContainer>
    </main>
  );
}