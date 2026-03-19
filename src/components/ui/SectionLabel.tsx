interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] text-[#6B6B6B] tracking-[0.14em] uppercase mb-12 ${className}`}
    >
      {children}
    </p>
  );
}
