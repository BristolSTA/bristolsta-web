"use client";
import {MenuIcon, SpotlightIcon, XIcon} from "lucide-react";
import {Button, Link} from "react-aria-components";
import Image from "next/image";
import {useState} from "react";

function NavLi({href, children}: { href: string, children: string }) {
  return (
    <li className={`group m-2 p-2 text-bold hover:text-purple-400`}>
      <div className="relative" aria-hidden="true">
        <SpotlightIcon className="size-5 hidden group-hover:block absolute -inset-y-3 -inset-x-7 swing"/>
      </div>
      <Link href={href} className={`inline-flex text-nowrap duration-250 ease-in-out`}>{children}</Link>
    </li>
  );
}

function PageLinks({className}: { className?: string }) {
  return (
    <ul className={`flex items-center justify-between gap-3 ${className}`}>
            <NavLi href={"/"}>Home</NavLi>
            <NavLi href={"/about-us"}>About</NavLi>
            <NavLi href={"/get-involved"}>Get Involved</NavLi>
            <NavLi href={"/hires"}>Hires</NavLi>
            <NavLi href={"/whats-on"}>What&apos;s On</NavLi>
            <NavLi href={"/committee"}>Committee</NavLi>
            <NavLi href={"/contact-us"}>Contact Us</NavLi>
          </ul>
  )
}

export default function SiteNav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className={"bg-neutral-950 py-2 px-4 flex items-center justify-between sticky top-0"}>
      <div className="flex items-center justify-between max-w-screen-lg w-full mx-auto">
        <Link href="/">
          <Image src="/images/sta-logo-full.svg" width={1000} height={100} alt="Stage Technicians' Association logo"
                 className={"h-14 w-auto"}/>
        </Link>
        <div className="block lg:hidden">
          <Button onPress={() => setNavOpen(!navOpen)}
          className="sta-btn neutral-btn flex gap-3"
          aria-label="open navigation">
            Menu
            {navOpen && (
              <XIcon />
            ) || (
              <MenuIcon />
            )}
          </Button>
        </div>
        <div className="hidden lg:flex">
          <PageLinks />
        </div>
        {navOpen && (
          <div className="z-10 top-18 fixed h-full w-screen left-0 overflow-y-scroll bg-neutral-950 lg:hidden nav-open">
            <PageLinks className="flex-col pb-3" />
          </div>
        )}
      </div>
    </nav>
  );
}