"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Etiket from "@/components/ui/Etiket";

type Is = { id: string; title: string; service: string; before_url: string | null; after_url: string | null };

/** Supabase galerisinde gerçek iş yoksa bölüm hiç görünmez (boş "Yakında" kutuları yok). */
export default function GaleriOnizleme() {
  const [isler, setIsler] = useState<Is[]>([]);

  useEffect(() => {
    supabase
      .from("gallery")
      .select("id,title,service,before_url,after_url")
      .eq("active", true)
      .order("created_at", { ascending: false })
      .limit(3)
      .then(({ data, error }) => {
        if (!error) setIsler((data ?? []).filter(i => i.before_url && i.after_url));
      });
  }, []);

  if (isler.length === 0) return null;

  return (
    <section aria-labelledby="galeri-baslik" className="bg-paper text-ink border-b-[1.5px] border-ink">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10 flex items-end justify-between gap-6">
        <div>
          <Etiket className="mb-4">Sonuçlar</Etiket>
          <h2 id="galeri-baslik" className="font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.2rem,5vw,4rem)]">Önce / sonra.</h2>
        </div>
        <Link href="/galeri" className="font-mono text-xs font-semibold uppercase tracking-[0.12em] border-b-[1.5px] border-ink pb-0.5 hover:text-volt hover:border-volt">
          Tüm galeri →
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-16 md:pb-24 grid md:grid-cols-3 gap-5">
        {isler.map(i => (
          <figure key={i.id} className="group bg-white border-[1.5px] border-ink">
            <div className="relative aspect-[4/3] overflow-hidden border-b-[1.5px] border-ink bg-fog">
              <img src={i.before_url!} alt={`${i.title} bakım öncesi`} loading="lazy" width={600} height={450} className="absolute inset-0 w-full h-full object-cover" />
              <img src={i.after_url!} alt={`${i.title} bakım sonrası`} loading="lazy" width={600} height={450}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute top-3 left-3 font-mono text-[10px] font-semibold px-1.5 py-0.5 bg-white group-hover:bg-volt group-hover:text-white">
                <span className="group-hover:hidden">ÖNCE · üstüne gel</span>
                <span className="hidden group-hover:inline">SONRA</span>
              </span>
            </div>
            <figcaption className="px-4 py-3 flex justify-between gap-3">
              <span className="font-bold">{i.title}</span>
              <span className="font-mono text-[11px] uppercase text-ink/50">{i.service}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
