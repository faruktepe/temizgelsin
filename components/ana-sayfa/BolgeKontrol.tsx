"use client";
import { useState } from "react";
import Etiket from "@/components/ui/Etiket";
import Buton from "@/components/ui/Buton";
import WaIcon from "@/components/ui/WaIcon";
import { AKTIF_BOLGELER, WHATSAPP_URL } from "@/lib/iletisim";

const YAKINDA = ["Maltepe", "Kartal", "Pendik", "Çekmeköy", "Tuzla", "Beykoz", "Sancaktepe", "Sultanbeyli", "Şile", "Adalar"];

const ILCELER = [
  ...AKTIF_BOLGELER.map(b => ({ ad: b.ad, aktif: true })),
  ...YAKINDA.map(ad => ({ ad, aktif: false })),
];

export default function BolgeKontrol() {
  const [secili, setSecili] = useState<string | null>(null);
  const ilce = ILCELER.find(i => i.ad === secili);

  return (
    <section aria-labelledby="bolge-baslik" className="bg-paper text-ink border-b-[1.5px] border-ink">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
        <div>
          <Etiket className="mb-4">04 · Hizmet bölgesi</Etiket>
          <h2 id="bolge-baslik" className="font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.2rem,5vw,4rem)]">
            Mahallene geliyor muyuz?
          </h2>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {ILCELER.map(i => (
              <button key={i.ad} type="button" aria-pressed={secili === i.ad} onClick={() => setSecili(i.ad)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-sm font-bold border-[1.5px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt ${
                  secili === i.ad ? "bg-ink text-paper border-ink" : i.aktif ? "bg-white border-ink hover:bg-fog" : "bg-transparent border-ink/25 text-ink/50 hover:border-ink"
                }`}>
                {i.aktif && <span className="w-2 h-2 bg-live" aria-hidden="true" />}
                {i.ad}
              </button>
            ))}
          </div>

          <div className="min-h-[96px] border-[1.5px] border-ink bg-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4" aria-live="polite">
            {!ilce && <p className="font-mono text-sm text-ink/50">İlçeni seç. Yeşil işaretli ilçelere bugün hizmet veriyoruz.</p>}
            {ilce?.aktif && (
              <>
                <p className="text-lg font-bold"><span className="text-live">●</span> {ilce.ad}&apos;e kapıdan kapıya hizmet var.</p>
                <Buton href="/siparis" varyant="volt">Sipariş ver →</Buton>
              </>
            )}
            {ilce && !ilce.aktif && (
              <>
                <p className="text-lg font-bold">{ilce.ad} yakında. <span className="font-normal text-ink/60">Yine de yaz, bakalım.</span></p>
                <Buton href={WHATSAPP_URL} harici><WaIcon /> WhatsApp&apos;tan sor</Buton>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
