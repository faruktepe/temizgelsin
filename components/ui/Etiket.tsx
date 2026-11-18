import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

/** Bölüm üstü küçük mono etiket: [ 02 · HİZMETLER ] */
export default function Etiket({ children, className = "" }: Props) {
  return (
    <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/60 ${className}`}>
      [ {children} ]
    </p>
  );
}
