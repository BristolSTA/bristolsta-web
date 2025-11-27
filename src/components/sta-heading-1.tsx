export default function StaHeading1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h1 className={`mx-3 ${className}`}>{children}</h1>;
}
