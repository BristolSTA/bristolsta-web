import type {Metadata, Viewport} from "next";
import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
import SiteNav from "../components/site-nav";
import EmblaCarousel from "../components/embla-carousel";
import SiteFooter from "../components/site-footer";

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bristol STA",
    default: "Bristol STA",
  },
  description: "Bristol Stage Technicians' Association – a Bristol SU society",
  icons: {
    icon: '/sta-logo.png',
  }
};
export const viewport: Viewport = {
  themeColor: '#b57eff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.variable} ${sourceSans3.className} antialiased font-medium bg-neutral-900 min-h-screen flex flex-col text-neutral-50`}
      >
        <SiteNav />
        <div className="flex-grow mb-4">{children}</div>
        <EmblaCarousel />
        <SiteFooter />
      </body>
    </html>
  );
}
