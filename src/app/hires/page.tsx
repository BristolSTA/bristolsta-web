import StaTitle from "../../components/sta-title";
import StaTextContainer from "../../components/sta-text-container";
import Image from "next/image";
import HiresInfo from "@/app/hires/hires-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hires",
};

export default function Hires() {
  return (
    <main>
      <StaTitle title="Hires" bgImage="ladder.jpeg" />
      <HiresInfo />
      <StaTextContainer>
        <div className="hires__image_grid">
          <Image
            src="/images/hires/fresnel-v.png"
            alt="LED fresnel light"
            width={300}
            height={288}
          />
          <Image
            src="/images/hires/chair.png"
            alt="Wooden chair"
            width={300}
            height={300}
          />
          <Image
            src="/images/hires/sm58.png"
            alt="Microphone"
            width={300}
            height={300}
          />
          <Image
            src="/images/hires/flow8.png"
            alt="Flow8 mixer"
            width={300}
            height={300}
          />
          <Image
            src="/images/hires/deck.png"
            alt="Stage deck"
            width={300}
            height={300}
          />
        </div>
      </StaTextContainer>
    </main>
  );
}
