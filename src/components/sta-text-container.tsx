export default function StaTextContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 max-w-screen-md mx-auto mb-4 ${className}`}
    >
      {children}
    </div>
  );
}
