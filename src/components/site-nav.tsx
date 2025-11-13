"use client";
import {SpotlightIcon} from "lucide-react";
import {Link} from "react-aria-components";
import Image from "next/image";

function NavLi({href, className, children}: { href: string; className: string, children: string }) {
  return (
    <li className={`group m-2 p-2 text-bold ${className}`}>
      <div className="relative" aria-hidden="true">
        <SpotlightIcon className="size-5 hidden group-hover:block absolute -inset-y-3 -inset-x-7 swing"/>
      </div>
      <Link href={href} className={`inline-flex text-nowrap duration-250 ease-in-out`}>{children}</Link>
    </li>
  );
}

export default function SiteNav() {
  return (
    <nav className={"bg-neutral-950 py-2 px-4 flex items-center justify-between"}>
      <div className="flex items-center justify-between max-w-screen-lg w-full mx-auto">
        <Link href="/">
          <Image src="/images/sta-logo-full.svg" width={1000} height={100} alt="logo" className={"w-min h-14"}/>
        </Link>
        <ul className={"flex items-center space-between gap-3"}>
          <NavLi href={"/"} className={"hover:text-purple-400"}>Home</NavLi>
          <NavLi href={"/about-us"} className={"hover:text-amber-400"}>About</NavLi>
          <NavLi href={"/get-involved"} className={"hover:text-teal-400"}>Get Involved</NavLi>
          <NavLi href={"/hires"} className={"hover:text-amber-400"}>Hires</NavLi>
          <NavLi href={"/whats-on"} className={"hover:text-purple-400"}>What&apos;s On</NavLi>
          <NavLi href={"/committee"} className={"hover:text-teal-400"}>Committee</NavLi>
          <NavLi href={"/contact-us"} className={"hover:text-purple-400"}>Contact Us</NavLi>


        </ul>
      </div>

    </nav>
  );
}