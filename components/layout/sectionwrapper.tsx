export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative bg-background py-20 overflow-hidden isolate">
      {/* Shared ambient glow */}
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-primary/10 blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-accent/10 blur-[120px] opacity-70 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
