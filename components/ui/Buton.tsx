import Link from "next/link";
import type { ReactNode } from "react";

type Varyant = "dolu" | "cizgi" | "volt" | "acik";

const TEMEL =
  "inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-[15px] font-bold border-[1.5px] " +
  "transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt " +
  "motion-safe:hover:-translate-x-[2px] motion-safe:hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0";

const VARYANTLAR: Record<Varyant, string> = {
  dolu: "bg-ink text-paper border-ink shadow-[4px_4px_0_var(--color-volt)] hover:shadow-[6px_6px_0_var(--color-volt)] active:shadow-none",
  cizgi: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  volt: "bg-volt text-white border-ink shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[6px_6px_0_var(--color-ink)] active:shadow-none",
  acik: "bg-paper text-ink border-ink shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[6px_6px_0_var(--color-ink)] active:shadow-none",
};

type Props = {
  href: string;
  children: ReactNode;
  varyant?: Varyant;
  harici?: boolean;
  className?: string;
};

export default function Buton({ href, children, varyant = "dolu", harici = false, className = "" }: Props) {
  const sinif = `${TEMEL} ${VARYANTLAR[varyant]} ${className}`;
  if (harici) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={sinif}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={sinif}>
      {children}
    </Link>
  );
}
