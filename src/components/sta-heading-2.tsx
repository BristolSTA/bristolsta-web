export default function StaHeading2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`mx-3 ${className}`}>{children}</h2>;
}
