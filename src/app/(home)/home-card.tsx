import { ReactNode } from "react";

export default function HomeCard({
  bgImageUrl,
  children,
}: {
  bgImageUrl: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`bg-cover bg-center rounded-md overflow-clip`}
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="flex items-center justify-center flex-col p-3 pb-6 bg-neutral-950/65 w-full h-full text-center text-base/5">
        {children}
      </div>
    </div>
  );
}
