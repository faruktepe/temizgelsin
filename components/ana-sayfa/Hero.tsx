"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { AKTIF_BOLGELER, WHATSAPP_FOTOGRAF_URL } from "@/lib/iletisim";
import Buton from "@/components/ui/Buton";
import WaIcon from "@/components/ui/WaIcon";
import ServisFisi from "./ServisFisi";

type Foto = { before_url: string | null; after_url: string | null };

const VAATLER = ["Ort. 2 günde teslim", "10 dakikada fiyat", "Kapıdan kapıya", "Memnuniyet garantisi"];

export default function Hero() {
  const [foto, setFoto] = useState<Foto | null>(null);

  useEffect(() => {
    supabase
      .from("gallery")
      .select("before_url,after_url")
      .eq("active", true)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) return; // Fotoğraf yoksa fiş fotoğrafsız gösterilir, kullanıcıya hata göstermeye gerek yok.
        if (data) setFoto(data);
      });
  }, []);

  return (
    <section aria-labelledby="hero-baslik" className="bg-paper text-ink border-b-[1.5px] border-ink pt-[106px]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_1fr]">
        <div className="px-5 md:px-10 py-12 md:py-20 lg:border-r-[1.5px] border-ink">
          <p className="font-mono text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-ink/60 mb-8 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-live" aria-hidden="true" />
              Anadolu yakası
            </span>
            <span aria-hidden="true">/</span>
            {AKTIF_BOLGELER.map(b => b.ad).join(" · ")}
          </p>

          <h1 id="hero-baslik" className="font-bold tracking-[-0.045em] leading-[1.02] text-[clamp(2.9rem,7.4vw,6.4rem)] mb-7">
            Kapından al,
            <br />
            <span className="bg-volt text-white px-[0.12em] box-decoration-clone leading-[0.95]">yeni gibi</span>
            <br />
            geri getir.
          </h1>

          <p className="text-lg md:text-xl leading-snug text-ink/70 max-w-[30ch] mb-10">
            Sneaker, deri bot, süet. Fotoğrafını at, fiyatını öğren. Kurye alır, atölyede elde bakılır, kapına geri gelir.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Buton href={WHATSAPP_FOTOGRAF_URL} harici>
              <WaIcon size={18} />
              Fotoğraf at, fiyat al
            </Buton>
            <Buton href="/siparis" varyant="cizgi">Sipariş oluştur →</Buton>
          </div>
        </div>

        <div className="px-5 md:px-10 pt-4 pb-16 lg:py-20 bg-[linear-gradient(var(--color-fog)_1px,transparent_1px),linear-gradient(90deg,var(--color-fog)_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="max-w-md mx-auto lg:mx-0 motion-safe:lg:rotate-[1.5deg]">
            <ServisFisi foto={foto} />
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 border-t-[1.5px] border-ink font-mono text-[11px] md:text-xs font-semibold uppercase tracking-[0.1em]">
        {VAATLER.map((v, i) => (
          <li
            key={v}
            className={`px-5 md:px-8 py-4 flex items-center gap-2 border-ink ${i % 2 === 0 ? "border-r-[1.5px]" : "md:border-r-[1.5px]"} ${i < 2 ? "border-b-[1.5px] md:border-b-0" : ""} last:border-r-0`}
          >
            <span className="text-volt" aria-hidden="true">✓</span>
            {v}
          </li>
        ))}
      </ul>
    </section>
  );
}
