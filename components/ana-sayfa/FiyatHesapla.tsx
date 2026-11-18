"use client";
import { useState } from "react";
import Etiket from "@/components/ui/Etiket";
import Buton from "@/components/ui/Buton";

type Tip = "sneaker" | "deri" | "suet" | "spor" | "klasik";

const FIYATLAR: Record<string, Record<Tip, number>> = {
  "Temizlik & Bakım": { sneaker: 800, deri: 900, suet: 1000, spor: 750, klasik: 900 },
  "Boya & Restorasyon": { sneaker: 1200, deri: 1400, suet: 1500, spor: 1100, klasik: 1300 },
  "Taban Değişimi": { sneaker: 950, deri: 1050, suet: 1050, spor: 950, klasik: 1050 },
  "Dikiş & Onarım": { sneaker: 250, deri: 300, suet: 300, spor: 250, klasik: 300 },
};

const TIPLER: { id: Tip; ad: string }[] = [
  { id: "sneaker", ad: "Sneaker" },
  { id: "deri", ad: "Deri bot" },
  { id: "suet", ad: "Süet" },
  { id: "spor", ad: "Spor" },
  { id: "klasik", ad: "Klasik" },
];

const PREMIUM_CARPAN = 1.2;
const INDIRIM_ESIGI = 3;
const INDIRIM_CARPAN = 0.8;

const tl = (n: number) => `₺${n.toLocaleString("tr-TR")}`;

const SECIM =
  "px-4 py-2.5 text-sm font-bold border-[1.5px] border-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt";

export default function FiyatHesapla() {
  const [tip, setTip] = useState<Tip>("sneaker");
  const [premium, setPremium] = useState(false);
  const [secili, setSecili] = useState<string[]>([]);

  const toggle = (h: string) => setSecili(p => (p.includes(h) ? p.filter(x => x !== h) : [...p, h]));
  const fiyat = (h: string) => Math.round(FIYATLAR[h][tip] * (premium ? PREMIUM_CARPAN : 1));
  const araToplam = secili.reduce((s, h) => s + fiyat(h), 0);
  const indirimVar = secili.length >= INDIRIM_ESIGI;
  const toplam = indirimVar ? Math.round(araToplam * INDIRIM_CARPAN) : araToplam;

  return (
    <section aria-labelledby="fiyat-baslik" className="bg-white text-ink border-b-[1.5px] border-ink">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_1fr]">
        <div className="px-5 md:px-10 py-16 md:py-24 lg:border-r-[1.5px] border-ink">
          <Etiket className="mb-4">03 · Anlık fiyat</Etiket>
          <h2 id="fiyat-baslik" className="font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.2rem,5vw,4rem)] mb-12">
            Ne kadar tutar?
          </h2>

          <fieldset className="mb-8">
            <legend className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/50 mb-3">Ayakkabı türü</legend>
            <div className="flex flex-wrap gap-2">
              {TIPLER.map(t => (
                <button key={t.id} type="button" aria-pressed={tip === t.id} onClick={() => setTip(t.id)}
                  className={`${SECIM} ${tip === t.id ? "bg-ink text-paper" : "bg-paper hover:bg-fog"}`}>
                  {t.ad}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mb-8">
            <legend className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/50 mb-3">Hizmetler</legend>
            <div className="grid sm:grid-cols-2 gap-2">
              {Object.keys(FIYATLAR).map(h => {
                const sec = secili.includes(h);
                return (
                  <button key={h} type="button" aria-pressed={sec} onClick={() => toggle(h)}
                    className={`${SECIM} flex items-center justify-between gap-3 text-left py-4 ${sec ? "bg-volt text-white" : "bg-paper hover:bg-fog"}`}>
                    <span className="flex items-center gap-3">
                      <span className={`w-4 h-4 grid place-items-center border-[1.5px] text-[10px] ${sec ? "border-white bg-white text-volt" : "border-ink"}`} aria-hidden="true">{sec ? "✓" : ""}</span>
                      {h}
                    </span>
                    <span className="font-mono">{tl(fiyat(h))}+</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="flex items-center justify-between gap-4 p-4 border-[1.5px] border-ink bg-paper cursor-pointer">
            <span>
              <span className="block font-bold">Premium bakım</span>
              <span className="block text-sm text-ink/55">Louboutin, Balenciaga, Gucci vb. için +%20</span>
            </span>
            <input type="checkbox" checked={premium} onChange={e => setPremium(e.target.checked)} className="w-5 h-5 accent-[var(--color-volt)]" />
          </label>
        </div>

        <div className="px-5 md:px-10 py-12 lg:py-24">
          <div className="lg:sticky lg:top-32 bg-white border-[1.5px] border-ink shadow-[6px_6px_0_var(--color-ink)] font-mono text-sm" aria-live="polite">
            <div className="px-5 py-3 bg-ink text-paper font-semibold tracking-wider flex justify-between">
              <span>TAHMİNİ FİŞ</span>
              <span className="text-paper/60">{TIPLER.find(t => t.id === tip)?.ad.toUpperCase()}</span>
            </div>
            <div className="px-5 py-5 min-h-[140px] space-y-2 border-b-[1.5px] border-dashed border-ink/30">
              {secili.length === 0 && <p className="text-ink/45">Soldan hizmet seç, fiyat burada belirsin.</p>}
              {secili.map(h => (
                <div key={h} className="flex justify-between gap-4">
                  <span>{h}</span>
                  <span>{tl(fiyat(h))}</span>
                </div>
              ))}
              {premium && secili.length > 0 && <p className="text-ink/50">Premium +%20 dahil</p>}
              {indirimVar && (
                <div className="flex justify-between gap-4 text-live font-semibold">
                  <span>3+ hizmet indirimi</span>
                  <span>-{tl(araToplam - toplam)}</span>
                </div>
              )}
              {!indirimVar && secili.length > 0 && (
                <p className="text-ink/50">{INDIRIM_ESIGI - secili.length} hizmet daha ekle, %20 indirim kazan.</p>
              )}
            </div>
            <div className="px-5 py-5 flex items-end justify-between">
              <span className="text-ink/50">TOPLAM</span>
              <span className="font-sans text-4xl font-bold tracking-tight">{tl(toplam)}{secili.length > 0 && "+"}</span>
            </div>
            <div className="px-5 pb-5">
              <Buton href="/siparis" varyant="volt" className="w-full">Bu fiyatla sipariş ver →</Buton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
