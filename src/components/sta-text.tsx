export default function StaText({children, className}: { children: React.ReactNode, className?: string }) {
  return <p className={`mx-3 ${className}`}>{children}</p>;
}