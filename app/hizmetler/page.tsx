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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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
    etiket: "En Popüler",
    kisa: "Yıllarca biriken kir, sararmış kauçuk, solmuş renkler — buhar temizlikle sıfırlanır.",
    fiyat: "₺800+",
    sure: "1–2 gün",
    img: "/generated/servis-temizlik.webp",
    accent: PRI,
    items: ["Buhar ile derin temizlik", "Profesyonel cila", "Bağcık değişimi", "UV sterilizasyon"],
    buyuk: true,
  },
  {
    slug: "boya-restorasyon",
    no: "02",
    ad: "Boya & Restorasyon",
    etiket: null,
    kisa: "Renk solması, çizik, deri hasarı. Orijinal renge birebir uyum sağlanır.",
    fiyat: "₺1.200+",
    sure: "2–3 gün",
    img: "/generated/servis-boya.webp",
    accent: MUV,
    items: ["Orijinal renk eşleştirme", "Deri yüzey onarımı", "Profesyonel boya", "Koruyucu vernik"],
    buyuk: false,
  },
  {
    slug: "taban-degisimi",
    no: "03",
    ad: "Taban Değişimi",
    etiket: null,
    kisa: "Yıpranmış veya ayrılmış dış taban — her tür ve marka için komple değişim.",
    fiyat: "₺950+",
    sure: "2–3 gün",
    img: "/generated/servis-taban.webp",
    accent: PRI,
    items: ["Dış taban değişimi", "İç taban yenileme", "Topuk tamiri", "Her marka"],
    buyuk: false,
  },
  {
    slug: "dikis-onarim",
    no: "04",
    ad: "Dikiş & Onarım",
    etiket: null,
    kisa: "Sökük dikişler, yırtık çoraplık, fort hasarı — hepsi tek seferde.",
    fiyat: "₺250+",
    sure: "1–2 gün",
    img: "/generated/servis-dikis.webp",
    accent: MUV,
    items: ["Dikiş tamiri", "Çoraplık onarım", "Fort tamiri", "Fermuar"],
    buyuk: false,
  },
  {
    slug: "file-tamiri",
    no: "05",
    ad: "File Tamiri",
    etiket: null,
    kisa: "Hasarlı örgü ve file dokular renk uyumuyla onarılır, dayanıklılık artar.",
    fiyat: "₺750+",
    sure: "1–2 gün",
    img: "/generated/servis-file.webp",
    accent: STN,
    items: ["File onarımı", "Yırtık tamiri", "Renk uyumu", "Dayanıklılık kaplaması"],
    buyuk: false,
  },
];

const ISTATISTIKLER = [
  { sayi: "5", birim: "hizmet", aciklama: "Her ihtiyaç için" },
  { sayi: "150+", birim: "müşteri", aciklama: "Memnun bıraktık" },
  { sayi: "24s", birim: "express", aciklama: "Hızlı teslimat" },
  { sayi: "4", birim: "ilçe", aciklama: "Kapıda servis" },
];

export default function HizmetlerPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const buyuk = HIZMETLER[0];
  const kucukler = HIZMETLER.slice(1);

  return (
    <main style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-sans)" }}>
      <Nav active="/hizmetler" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: DRK, minHeight: "420px" }}>
        {/* Dekoratif arka plan daireler */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${PRI}, transparent)` }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-8"
          style={{ background: `radial-gradient(circle, ${MUV}, transparent)` }} />

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-36 pb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5"
                  style={{ background: `rgba(191,165,184,0.12)`, color: MUV }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: MUV }} />
                  5 Uzman Hizmet
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-5"
                  style={{ color: "#fff", fontFamily: "var(--font-serif)" }}>
                  Ayakkabılar<br />
                  <span style={{ color: MUV }}>Yeniden Doğar.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-base max-w-md leading-relaxed" style={{ color: `rgba(191,165,184,0.6)` }}>
                  Temizlik, boya, taban, dikiş — Temiz Gelsin her hizmetle kapına geliyor. Sen evinde bekle.
                </p>
              </Reveal>
            </div>

            {/* İstatistikler */}
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 shrink-0">
                {ISTATISTIKLER.map((ist) => (
                  <div key={ist.birim} className="px-4 py-3 rounded-2xl text-center"
                    style={{ background: `rgba(255,255,255,0.05)`, border: `1px solid rgba(191,165,184,0.12)` }}>
                    <p className="text-2xl font-black leading-tight" style={{ color: "#fff" }}>{ist.sayi}</p>
                    <p className="text-xs font-bold" style={{ color: MUV }}>{ist.birim}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: `rgba(191,165,184,0.4)` }}>{ist.aciklama}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HİZMETLER ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">

        {/* Büyük kart — Temizlik & Bakım */}
        <Reveal className="mb-5">
          <Link href={`/hizmetler/${buyuk.slug}`}
            className="group block relative overflow-hidden rounded-3xl"
            style={{ background: DRK, minHeight: "360px" }}
            onMouseEnter={() => setHoveredIdx(0)}
            onMouseLeave={() => setHoveredIdx(null)}>

            {/* Görsel */}
            <div className="absolute inset-0">
              <img
                src={buyuk.img}
                alt={buyuk.ad}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ transform: hoveredIdx === 0 ? "scale(1.04)" : "scale(1.0)", opacity: 0.35 }}
              />
              <div className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${DRK} 35%, rgba(91,45,110,0.6) 100%)` }} />
            </div>

            {/* İçerik */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between h-full" style={{ minHeight: "360px" }}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono tracking-widest" style={{ color: `rgba(191,165,184,0.4)` }}>{buyuk.no}</span>
                  {buyuk.etiket && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                      style={{ background: MUV, color: DRK }}>{buyuk.etiket}</span>
                  )}
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-3 leading-tight"
                  style={{ color: "#fff", fontFamily: "var(--font-serif)" }}>
                  {buyuk.ad}
                </h2>
                <p className="text-base max-w-md leading-relaxed mb-6" style={{ color: `rgba(191,165,184,0.65)` }}>
                  {buyuk.kisa}
                </p>
                <div className="flex flex-wrap gap-2">
                  {buyuk.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: `rgba(191,165,184,0.12)`, color: MUV, border: `1px solid rgba(191,165,184,0.2)` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col items-center md:items-end gap-4 mt-8 md:mt-0 md:ml-8 shrink-0">
                <div className="text-center md:text-right">
                  <p className="text-3xl font-black" style={{ color: "#fff" }}>{buyuk.fiyat}</p>
                  <p className="text-xs mt-0.5" style={{ color: `rgba(191,165,184,0.5)` }}>{buyuk.sure}</p>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all group-hover:scale-105"
                  style={{ background: PRI, color: "#fff", boxShadow: `0 4px 20px rgba(91,45,110,0.4)` }}>
                  Sipariş Ver
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Küçük kartlar — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {kucukler.map((h, i) => (
            <Reveal key={h.slug} delay={i * 80}>
              <Link href={`/hizmetler/${h.slug}`}
                className="group block relative overflow-hidden rounded-2xl"
                style={{ background: "#fff", border: `1px solid rgba(212,197,176,0.5)` }}
                onMouseEnter={() => setHoveredIdx(i + 1)}
                onMouseLeave={() => setHoveredIdx(null)}>

                {/* Görsel üst bant */}
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={h.img}
                    alt={h.ad}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: hoveredIdx === i + 1 ? "scale(1.06)" : "scale(1.0)" }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, rgba(45,26,46,0.55) 0%, transparent 60%)` }} />
                  {/* No + fiyat üstte */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold"
                    style={{ background: `rgba(45,26,46,0.55)`, color: `rgba(255,255,255,0.6)`, backdropFilter: "blur(6px)" }}>
                    {h.no}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-black"
                    style={{ background: h.accent === STN ? `rgba(212,197,176,0.85)` : `rgba(91,45,110,0.85)`, color: "#fff", backdropFilter: "blur(6px)" }}>
                    {h.fiyat}
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-lg font-black leading-tight" style={{ color: DRK }}>{h.ad}</h2>
                    <span className="text-xs shrink-0 ml-2 mt-0.5 px-2 py-0.5 rounded-full"
                      style={{ background: `rgba(45,26,46,0.06)`, color: `rgba(45,26,46,0.4)` }}>
                      {h.sure}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: `rgba(45,26,46,0.5)` }}>{h.kisa}</p>

                  <div className="grid grid-cols-2 gap-1.5 mb-5">
                    {h.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: h.accent === STN ? MUV : h.accent }} />
                        <span className="text-xs" style={{ color: `rgba(45,26,46,0.55)` }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3.5"
                    style={{ borderTop: `1px solid rgba(212,197,176,0.5)` }}>
                    <span className="text-xs font-semibold" style={{ color: `rgba(45,26,46,0.35)` }}>
                      Detayları gör
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ background: h.accent === STN ? `rgba(212,197,176,0.3)` : `rgba(91,45,110,0.1)`, color: h.accent === STN ? DRK : PRI }}>
                      →
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 3+ HİZMET İNDİRİMİ ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl px-8 md:px-12 py-10"
            style={{ background: PRI, boxShadow: `0 20px 60px rgba(91,45,110,0.3)` }}>
            {/* Dekoratif daire */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-20"
              style={{ background: MUV }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <p className="text-2xl md:text-3xl font-black mb-1.5" style={{ color: "#fff", fontFamily: "var(--font-serif)" }}>
                  3+ hizmet seç — <span style={{ color: MUV }}>%20 indirim</span>
                </p>
                <p className="text-sm" style={{ color: `rgba(191,165,184,0.7)` }}>
                  Temizlik + boya + taban gibi kombinasyonlarda indirim otomatik uygulanır.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link href="/siparis"
                  className="px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-105 hover:opacity-95"
                  style={{ background: "#fff", color: PRI }}>
                  Sipariş Ver →
                </Link>
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba! Hizmetler hakkında bilgi almak istiyorum.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full text-sm font-bold border-2 transition-all hover:opacity-90"
                  style={{ borderColor: `rgba(191,165,184,0.35)`, color: "#fff" }}>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── NASIL ÇALIŞIR ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-black text-center mb-10"
            style={{ color: DRK, fontFamily: "var(--font-serif)" }}>
            Nasıl çalışır?
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { no: "1", baslik: "Sipariş ver", aciklama: "Online forma doldur, slot seç. 2 dakika.", ikon: "📱" },
            { no: "2", baslik: "Kurye gelir",  aciklama: "Belirttiğin saatte kapına gelen kurye ayakkabını teslim alır.", ikon: "🚗" },
            { no: "3", baslik: "Teslim edilir", aciklama: "Hizmet tamamlanınca kapına bırakılır. Takip hattı dahil.", ikon: "✨" },
          ].map((adim, i) => (
            <Reveal key={adim.no} delay={i * 100}>
              <div className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: "#fff", border: `1px solid rgba(212,197,176,0.5)`, boxShadow: "0 2px 16px rgba(45,26,46,0.05)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-base"
                  style={{ background: `rgba(91,45,110,0.08)` }}>
                  {adim.ikon}
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest mb-0.5" style={{ color: `rgba(45,26,46,0.25)` }}>ADIM {adim.no}</p>
                  <p className="text-base font-black mb-1" style={{ color: DRK }}>{adim.baslik}</p>
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
