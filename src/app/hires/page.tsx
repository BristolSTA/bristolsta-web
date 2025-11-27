import StaTitle from "../../components/sta-title";
import StaTextContainer from "../../components/sta-text-container";
import Image from "next/image";
import HiresInfo from "@/app/hires/hires-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hires',
};

export default function Hires() {
  return (
    <main>
      <StaTitle title="Hires" bgImage="ladder.jpeg"/>
      <HiresInfo />
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