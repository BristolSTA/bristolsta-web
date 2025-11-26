"use client"
import StaTextContainer from "./sta-text-container";
import Image from "next/image";
import {Link} from "react-aria-components";

function SocialLi({href, iconFile, alt}: { href: string; iconFile: string; alt: string }) {
  return (
    <li
      className={"size-6 opacity-75 hover:opacity-100 transition-opacity duration-100 flex items-center justify-center"}>
      <Link href={href} className="focus:outline-2 focus:outline-neutral-900 focus:ring-4 focus:ring-purple-400">
        <Image src={`/images/icons/${iconFile}`} width={100} height={100} alt={alt}/>
      </Link>
    </li>
  );
}

export default function SiteFooter() {
  return (
    <footer className={`bg-neutral-950 p-4 hide-on-nav-open`}>
      <StaTextContainer className="flex flex-col md:flex-row md:gap-8 justify-center items-center">
        {/*<Image src="/images/sta-logo-full.svg" alt="sta" width={500} height={500} className={"h-16 w-auto"}/>*/}
        <Image src="/images/bristolsu-logo.png" width={2183} height={503} alt="Bristol SU: Supporting Student Groups logo" className={"h-12 w-auto"}/>
        <Image src={"/images/theatre-green-book-preliminary.png"} width={1299} height={427} alt="Theatre Green Book: making theatre sustainable (Preliminary 2025) logo"
               className={"h-16 w-auto"}/>
      </StaTextContainer>
      <StaTextContainer className="flex flex-col justify-center items-center">
        <ul className={"flex flex-row gap-6 justify-center items-center"}>
          <SocialLi href="https://www.instagram.com/stabristol/" iconFile="instagram.svg" alt="Instagram"/>
          <SocialLi href="https://www.tiktok.com/@bristolsta?lang=en" iconFile="tiktok.svg" alt="TikTok"/>
          <SocialLi href="https://discord.gg/t2D7TCcSU5" iconFile="discord.svg" alt="Discord"/>
          <SocialLi href="https://www.youtube.com/user/BristolSTA" iconFile="youtube.svg" alt="YouTube"/>
          <SocialLi href="https://uk.linkedin.com/company/bristol-sta" iconFile="linkedin.svg" alt="LinkedIn"/>
          <SocialLi href="https://www.facebook.com/bristolsta" iconFile="facebook.svg" alt="Facebook"/>
          <SocialLi href="https://www.bristolsu.org.uk/groups/sta-stage-technicians-association-3e02" iconFile="su.png" alt="Bristol SU"/>
        </ul>
        <span className="mb-4">&copy; Bristol STA 2025</span>
      </StaTextContainer>
    </footer>
  );
}