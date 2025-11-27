import StaTitle from "../../components/sta-title";
import GetInvolvedInfo from "@/app/get-involved/get-involved-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
};

export default function GetInvolved() {
  return (
    <main>
      <StaTitle title="Get Involved" bgImage="eos.jpg" />
      <GetInvolvedInfo />
    </main>
  );
}
