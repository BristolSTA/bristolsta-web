export default function StaHeading3({children, className}: { children: React.ReactNode, className?: string }) {
  return <h3 className={`m-3 text-2xl font-bold ${className}`}>{children}</h3>;
}