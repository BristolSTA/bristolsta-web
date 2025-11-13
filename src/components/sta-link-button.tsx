import {Link} from "react-aria-components";

export default function StaLinkButton({children, href, className}: {
  children: React.ReactNode,
  href: string,
  className?: string
}) {
  return <Link href={href}
               className={`sta-btn ${className}`}>
    <span className={"text-neutral-950 inline-flex items-center justify-between gap-2"}>
      {children}
    </span>
  </Link>;
}