"use client";

import StaTitle from "../components/sta-title";
import StaText from "../components/sta-text";
import StaTextContainer from "../components/sta-text-container";
import StaLinkButton from "../components/sta-link-button";

export default function NotFound() {
  return (
    <main>
      <StaTitle title=":(" bgImage="charles-404.jpeg"/>
      <StaTextContainer>
        <StaText>Sorry, we can&apos;t find that page.</StaText>
        <StaLinkButton href="/">
          Go to the homepage
        </StaLinkButton>
      </StaTextContainer>
    </main>
  );
}