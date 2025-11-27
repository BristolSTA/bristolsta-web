import StaTitle from "../../components/sta-title";
import { Metadata } from "next";
import UOBTheatreProductions from "@/app/whats-on/productions";

export const metadata: Metadata = {
  title: 'What\'s On',
};


export default function Page() {
  return (
    <main>
      <StaTitle title="What&apos;s On" bgImage="panto-narnia.jpeg" />
      <UOBTheatreProductions />
    </main>
  )
}