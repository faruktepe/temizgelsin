"use client";
export const dynamic = "force-dynamic";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

const PRI = "#5B2D6E";
const MUV = "#BFA5B8";
const STN = "#D4C5B0";
const BG  = "#F5F0E8";
const DRK = "#2D1A2E";
const WHATSAPP = "905319623790";

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const HIZMETLER = [
  {
    slug: "temizlik-bakim",
    no: "01",
    ad: "Temizlik & Bakım",
    kisa: "Yıllarca biriken kir, sararmış kauçuk, solmuş renkler — buhar temizlikle sıfırlanır.",
    fiyat: "₺800+",
    sure: "1–2 gün",
    bg: PRI,
    fg: MUV,
    items: ["Buhar ile derin temizlik", "Profesyonel cila", "Bağcık değişimi", "UV sterilizasyon"],
    popular: true,
  },
  {
    slug: "boya-restorasyon",
    no: "02",
    ad: "Boya & Restorasyon",
    kisa: "Renk solması, çizik, deri hasarı. Orijinal renge birebir uyum sağlanır.",
    fiyat: "₺1.200+",
    sure: "2–3 gün",
    bg: DRK,
    fg: STN,
    items: ["Orijinal renk eşleştirme", "Deri yüzey onarımı", "Profesyonel boya", "Koruyucu vernik"],
    popular: false,
  },
  {
    slug: "taban-degisimi",
    no: "03",
    ad: "Taban Değişimi",
    kisa: "Yıpranmış veya ayrılmış dış taban — komple değişim, her tür ve marka.",
    fiyat: "₺950+",
    sure: "2–3 gün",
    bg: STN,
    fg: DRK,
    items: ["Dış taban değişimi", "İç taban yenileme", "Topuk tamiri", "Her marka"],
    popular: false,
  },
  {
    slug: "dikis-onarim",
    no: "04",
    ad: "Dikiş & Onarım",
    kisa: "Sökük dikişler, yırtık çoraplık, fort hasarı — hepsi tek seferde.",
    fiyat: "₺250+",
    sure: "1–2 gün",
    bg: MUV,
    fg: DRK,
    items: ["Dikiş tamiri", "Çoraplık onarım", "Fort tamiri", "Fermuar"],
    popular: false,
  },
  {
    slug: "file-tamiri",
    no: "05",
    ad: "File Tamiri",
    kisa: "Hasarlı örgü ve file dokular renk uyumuyla onarılır, dayanıklılık artar.",
    fiyat: "₺750+",
    sure: "1–2 gün",
    bg: BG,
    fg: PRI,
    items: ["File onarımı", "Yırtık tamiri", "Renk uyumu", "Dayanıklılık kaplaması"],
    popular: false,
  },
];

export default function HizmetlerPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-sans)" }}>
      <Nav active="/hizmetler" />

      {/* ── HERO ── */}
      <section style={{ background: DRK }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-36 pb-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
              style={{ background: `rgba(191,165,184,0.12)`, color: MUV }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: MUV }} />
              Temiz Gelsin · 5 Uzman Hizmet
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.92] mb-6"
              style={{ color: "#fff", fontFamily: "var(--font-serif)" }}>
              Ayakkabıların<br />
              <span style={{ color: MUV }}>yeniden doğar.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base max-w-md leading-relaxed"
              style={{ color: `rgba(191,165,184,0.55)` }}>
              Kapıdan kapıya — sen evinde bekle, biz halledelim.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── HİZMET LİSTESİ ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">

        {/* Büyük ilk kart */}
        <Reveal className="mb-4">
          <Link href={`/hizmetler/${HIZMETLER[0].slug}`}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            className="group relative block overflow-hidden rounded-3xl transition-all duration-300"
            style={{
              background: HIZMETLER[0].bg,
              boxShadow: hovered === 0 ? `0 24px 60px rgba(91,45,110,0.35)` : `0 4px 24px rgba(45,26,46,0.1)`,
            }}>
            <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Sol */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-mono tracking-[0.3em]"
                    style={{ color: `rgba(191,165,184,0.35)` }}>
                    {HIZMETLER[0].no}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                    style={{ background: MUV, color: DRK }}>
                    En Popüler
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight"
                  style={{ color: "#fff", fontFamily: "var(--font-serif)" }}>
                  {HIZMETLER[0].ad}
                </h2>
                <p className="text-base leading-relaxed mb-6 max-w-sm"
                  style={{ color: `rgba(191,165,184,0.6)` }}>
                  {HIZMETLER[0].kisa}
                </p>
                <div className="flex flex-wrap gap-2">
                  {HIZMETLER[0].items.map(item => (
                    <span key={item} className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: `rgba(191,165,184,0.12)`, color: MUV, border: `1px solid rgba(191,165,184,0.18)` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {/* Sağ */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4 shrink-0">
                <div className="md:text-right">
                  <p className="text-4xl font-black" style={{ color: "#fff" }}>{HIZMETLER[0].fiyat}</p>
                  <p className="text-sm mt-1" style={{ color: `rgba(191,165,184,0.45)` }}>{HIZMETLER[0].sure}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-200 group-hover:scale-105"
                  style={{ background: `rgba(255,255,255,0.12)`, color: "#fff" }}>
                  Sipariş Ver
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* 4 küçük kart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HIZMETLER.slice(1).map((h, i) => {
            const idx = i + 1;
            const isLight = h.bg === STN || h.bg === MUV || h.bg === BG;
            return (
              <Reveal key={h.slug} delay={i * 70}>
                <Link href={`/hizmetler/${h.slug}`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
                  style={{
                    background: h.bg,
                    border: h.bg === BG ? `1.5px solid ${STN}` : "none",
                    boxShadow: hovered === idx
                      ? isLight ? `0 12px 40px rgba(45,26,46,0.14)` : `0 12px 40px rgba(45,26,46,0.22)`
                      : `0 2px 12px rgba(45,26,46,0.07)`,
                    minHeight: "240px",
                  }}>
                  <div className="flex-1 p-7">
                    {/* Numara + süre */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-mono tracking-[0.3em]"
                        style={{ color: isLight ? `rgba(45,26,46,0.3)` : `rgba(255,255,255,0.3)` }}>
                        {h.no}
                      </span>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: isLight ? `rgba(45,26,46,0.07)` : `rgba(255,255,255,0.1)`,
                          color: isLight ? `rgba(45,26,46,0.45)` : `rgba(255,255,255,0.45)`,
                        }}>
                        {h.sure}
                      </span>
                    </div>

                    {/* Başlık */}
                    <h2 className="text-2xl font-black mb-2 leading-tight"
                      style={{ color: h.fg, fontFamily: "var(--font-serif)" }}>
                      {h.ad}
                    </h2>
                    <p className="text-sm leading-relaxed mb-5"
                      style={{ color: isLight ? `rgba(45,26,46,0.5)` : `rgba(255,255,255,0.5)` }}>
                      {h.kisa}
                    </p>

                    {/* Items */}
                    <div className="grid grid-cols-2 gap-1.5">
                      {h.items.map(item => (
                        <div key={item} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: isLight ? `rgba(45,26,46,0.3)` : `rgba(255,255,255,0.35)` }} />
                          <span className="text-xs"
                            style={{ color: isLight ? `rgba(45,26,46,0.5)` : `rgba(255,255,255,0.5)` }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alt şerit — fiyat + ok */}
                  <div className="px-7 py-4 flex items-center justify-between"
                    style={{ borderTop: isLight ? `1px solid rgba(45,26,46,0.08)` : `1px solid rgba(255,255,255,0.08)` }}>
                    <span className="text-xl font-black"
                      style={{ color: h.fg }}>
                      {h.fiyat}
                    </span>
                    <span className="text-sm font-medium transition-transform group-hover:translate-x-1"
                      style={{ color: isLight ? `rgba(45,26,46,0.35)` : `rgba(255,255,255,0.35)` }}>
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── İNDİRİM BANDI ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <Reveal>
          <div className="rounded-3xl px-8 md:px-12 py-10 flex flex-col md:flex-row items-center gap-6"
            style={{
              background: DRK,
              boxShadow: `0 16px 48px rgba(45,26,46,0.18)`,
            }}>
            <div className="flex-1 text-center md:text-left">
              <p className="text-2xl md:text-3xl font-black mb-1.5"
                style={{ color: "#fff", fontFamily: "var(--font-serif)" }}>
                3+ hizmet seç —{" "}
                <span style={{ color: MUV }}>%20 indirim</span>
              </p>
              <p className="text-sm" style={{ color: `rgba(191,165,184,0.5)` }}>
                Temizlik + boya + taban gibi kombinasyonlarda otomatik uygulanır.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/siparis"
                className="px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                style={{ background: MUV, color: DRK }}>
                Sipariş Ver →
              </Link>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba! Hizmetler hakkında bilgi almak istiyorum.")}`}
                target="_blank" rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-sm font-bold border transition-all hover:opacity-80"
                style={{ borderColor: `rgba(191,165,184,0.2)`, color: `rgba(191,165,184,0.7)` }}>
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── NASIL ÇALIŞIR ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">
        <Reveal>
          <h2 className="text-2xl font-black text-center mb-10"
            style={{ color: DRK, fontFamily: "var(--font-serif)" }}>
            Nasıl çalışır?
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { no: "1", baslik: "Sipariş ver", aciklama: "Online formu doldur, slot seç. 2 dakika." },
            { no: "2", baslik: "Kurye gelir",  aciklama: "Belirttiğin saatte kapına gelen kurye ayakkabını teslim alır." },
            { no: "3", baslik: "Teslim edilir", aciklama: "Hizmet tamamlanınca kapına bırakılır. Takip hattı dahil." },
          ].map((adim, i) => (
            <Reveal key={adim.no} delay={i * 80}>
              <div className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: "#fff", border: `1px solid ${STN}` }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-black"
                  style={{ background: `rgba(91,45,110,0.08)`, color: PRI }}>
                  {adim.no}
                </div>
                <div>
                  <p className="font-black mb-1" style={{ color: DRK }}>{adim.baslik}</p>
                  <p className="text-sm leading-relaxed" style={{ color: `rgba(45,26,46,0.5)` }}>{adim.aciklama}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
