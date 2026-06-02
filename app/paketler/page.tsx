"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

export const dynamic = "force-dynamic";

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

const PAKETLER = [
  {
    id: "tek-seferlik",
    rozet: null,
    baslik: "Tek Seferlik",
    alt: "İhtiyaç duydukça kullan",
    fiyat: "Hizmete göre",
    fiyatAlt: "₺800'den başlayan fiyatlar",
    renk: STN,
    aksan: DRK,
    ozellikler: [
      "Tüm hizmet seçenekleri",
      "Kapıdan kapıya kurye",
      "1-3 günde teslim",
      "Sipariş takip linki",
      "Memnuniyet garantisi",
    ],
    eksikler: [
      "Öncelikli slot seçimi",
      "İndirimli paket fiyatı",
      "Express teslimat",
    ],
    cta: "Sipariş Ver",
    ctaHref: "/siparis",
    ctaWa: false,
  },
  {
    id: "mevsimlik",
    rozet: "En Popüler",
    baslik: "Mevsimlik Bakım",
    alt: "Yılda 4 kez profesyonel bakım",
    fiyat: "%20 indirimli",
    fiyatAlt: "4 sipariş peşin alımda",
    renk: PRI,
    aksan: "#fff",
    ozellikler: [
      "4 bakım siparişi peşin",
      "Her siparişte %20 indirim",
      "Kapıdan kapıya kurye",
      "Öncelikli slot seçimi",
      "Express seçenek mevcut",
      "Memnuniyet garantisi",
      "7/24 WhatsApp destek",
    ],
    eksikler: [],
    cta: "WhatsApp'tan Al",
    ctaHref: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba! Mevsimlik Bakım paketi hakkında bilgi almak istiyorum.")}`,
    ctaWa: true,
  },
  {
    id: "vip",
    rozet: "Premium",
    baslik: "VIP Bakım",
    alt: "Aylık sınırsız konfor",
    fiyat: "Aylık sabit",
    fiyatAlt: "Kişiye özel fiyatlandırma",
    renk: DRK,
    aksan: MUV,
    ozellikler: [
      "Aylık 1 bakım dahil",
      "Acil & express kurye",
      "Öncelikli slot garantisi",
      "Premium marka uzmanlığı",
      "Hasar sigortası",
      "Kişisel bakım danışmanı",
      "7/24 WhatsApp hat",
      "Aylık fatura & rapor",
    ],
    eksikler: [],
    cta: "Teklif Al",
    ctaHref: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba! VIP Bakım paketi hakkında fiyat teklifi almak istiyorum.")}`,
    ctaWa: true,
  },
];

const SSS = [
  {
    s: "Mevsimlik paketi satın aldım, ne zaman kullanabilirim?",
    c: "Satın alma onayının ardından WhatsApp üzerinden kredi bilgileri gönderilir. Her sipariş oluştururken bu kredileri kullanabilirsin.",
  },
  {
    s: "Paket kredileri son kullanma tarihi var mı?",
    c: "Mevsimlik pakette krediler 1 yıl içinde kullanılmalıdır. VIP pakette her ay yenilenir.",
  },
  {
    s: "VIP pakette hangi markalar premium kapsamında?",
    c: "Louboutin, Hermès, Balenciaga, Off-White, Bottega Veneta, Dior, Gucci, Prada ve diğer lüks markalar VIP kapsamında işlenir.",
  },
  {
    s: "Birden fazla kişi için paket alabilir miyim?",
    c: "Evet! Aile ya da şirket paketleri için WhatsApp üzerinden özel fiyatlandırma yapabiliyoruz.",
  },
];

export default function PaketlerPage() {
  const [acikFaq, setAcikFaq] = useState<number | null>(null);

  return (
    <main style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-sans)" }}>
      <Nav active="/paketler" />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: `rgba(91,45,110,0.08)`, color: PRI }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PRI }} />
            Fiyatlandırma & Paketler
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight"
            style={{ color: DRK, fontFamily: "var(--font-serif)" }}>
            Ayakkabına Değer<br />
            <span style={{ color: PRI }}>Veren Paket</span>'i Seç
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: `rgba(45,26,46,0.55)` }}>
            Tek sipariş ya da düzenli bakım — hangisi sana uygunsa.
            Tüm paketlerde kapıdan kapıya kurye ve memnuniyet garantisi dahil.
          </p>
        </Reveal>
      </section>

      {/* ── PAKET KARTLARI ── */}
      <section className="pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {PAKETLER.map((paket, i) => (
            <Reveal key={paket.id} delay={i * 100}>
              <div
                className="relative flex flex-col rounded-3xl overflow-hidden h-full"
                style={{
                  background: paket.renk,
                  boxShadow: paket.id === "mevsimlik"
                    ? `0 24px 60px rgba(91,45,110,0.35)`
                    : `0 8px 32px rgba(45,26,46,0.10)`,
                  border: paket.id === "mevsimlik" ? `2px solid rgba(191,165,184,0.4)` : `1px solid rgba(45,26,46,0.06)`,
                  transform: paket.id === "mevsimlik" ? "scale(1.03)" : "scale(1)",
                }}>

                {/* Rozet */}
                {paket.rozet && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider"
                    style={{
                      background: paket.id === "mevsimlik" ? MUV : `rgba(191,165,184,0.2)`,
                      color: paket.id === "mevsimlik" ? DRK : MUV,
                    }}>
                    {paket.rozet}
                  </div>
                )}

                <div className="flex flex-col flex-1 p-7">
                  {/* Başlık */}
                  <div className="mb-6">
                    <h2 className="text-xl font-black mb-1" style={{ color: paket.aksan }}>{paket.baslik}</h2>
                    <p className="text-sm" style={{ color: paket.id === "tek-seferlik" ? `rgba(45,26,46,0.5)` : `rgba(255,255,255,0.55)` }}>
                      {paket.alt}
                    </p>
                  </div>

                  {/* Fiyat */}
                  <div className="mb-7 pb-7" style={{ borderBottom: `1px solid ${paket.id === "tek-seferlik" ? `rgba(45,26,46,0.1)` : `rgba(255,255,255,0.12)`}` }}>
                    <p className="text-2xl font-black" style={{ color: paket.aksan }}>{paket.fiyat}</p>
                    <p className="text-sm mt-0.5" style={{ color: paket.id === "tek-seferlik" ? `rgba(45,26,46,0.45)` : `rgba(255,255,255,0.5)` }}>
                      {paket.fiyatAlt}
                    </p>
                  </div>

                  {/* Özellikler */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {paket.ozellikler.map((oz) => (
                      <li key={oz} className="flex items-center gap-2.5 text-sm font-medium"
                        style={{ color: paket.id === "tek-seferlik" ? `rgba(45,26,46,0.75)` : `rgba(255,255,255,0.88)` }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                          <circle cx="8" cy="8" r="7.5" fill={paket.id === "mevsimlik" ? MUV : paket.id === "vip" ? `rgba(191,165,184,0.2)` : `rgba(91,45,110,0.1)`} />
                          <path d="M5 8l2.2 2.2L11 5.8" stroke={paket.id === "tek-seferlik" ? PRI : paket.id === "mevsimlik" ? DRK : MUV}
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {oz}
                      </li>
                    ))}
                    {paket.eksikler.map((ex) => (
                      <li key={ex} className="flex items-center gap-2.5 text-sm"
                        style={{ color: `rgba(45,26,46,0.25)` }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                          <circle cx="8" cy="8" r="7.5" fill="rgba(45,26,46,0.04)" />
                          <path d="M6 10l4-4M10 10L6 6" stroke="rgba(45,26,46,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {ex}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {paket.ctaWa ? (
                    <a href={paket.ctaHref} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
                      style={{
                        background: paket.id === "mevsimlik" ? "#fff" : MUV,
                        color: paket.id === "mevsimlik" ? PRI : DRK,
                        boxShadow: `0 4px 16px rgba(0,0,0,0.15)`,
                      }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {paket.cta}
                    </a>
                  ) : (
                    <Link href={paket.ctaHref}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
                      style={{
                        background: PRI,
                        color: "#fff",
                        boxShadow: `0 4px 16px rgba(91,45,110,0.25)`,
                      }}>
                      {paket.cta} →
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── KARŞILAŞTIRMA NOTU ── */}
      <section className="pb-16 px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
            style={{ background: `rgba(91,45,110,0.05)`, border: `1px solid rgba(91,45,110,0.1)` }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: `rgba(91,45,110,0.1)`, color: PRI }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold mb-0.5" style={{ color: DRK }}>Hangi paketi seçeceğinden emin değil misin?</p>
              <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>
                WhatsApp'tan ulaş — ayakkabı sayına ve ihtiyacına göre en uygun paketi birlikte belirleyelim.{" "}
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba! Hangi paketi seçmem gerektiği konusunda yardım alabilir miyim?")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2" style={{ color: PRI }}>
                  Hemen sor →
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── GARANTİLER ── */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-black text-center mb-10"
              style={{ color: DRK, fontFamily: "var(--font-serif)" }}>
              Tüm Paketlerde Dahil
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ikon: "🛡", baslik: "Memnuniyet Garantisi", aciklama: "Memnun kalmazsan tekrar yaparız" },
              { ikon: "🚪", baslik: "Kapıdan Kapıya", aciklama: "Evinden çıkmana gerek yok" },
              { ikon: "📍", baslik: "Sipariş Takibi", aciklama: "Anlık durum bildirimleri" },
              { ikon: "💬", baslik: "WhatsApp Destek", aciklama: "Her adımda yanındayız" },
            ].map((item, i) => (
              <Reveal key={item.baslik} delay={i * 60}>
                <div className="rounded-2xl px-4 py-5 text-center"
                  style={{ background: "#fff", border: `1px solid rgba(212,197,176,0.5)`, boxShadow: "0 2px 12px rgba(45,26,46,0.05)" }}>
                  <div className="text-2xl mb-2">{item.ikon}</div>
                  <p className="text-sm font-bold mb-1" style={{ color: DRK }}>{item.baslik}</p>
                  <p className="text-xs" style={{ color: `rgba(45,26,46,0.45)` }}>{item.aciklama}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-black text-center mb-8"
              style={{ color: DRK, fontFamily: "var(--font-serif)" }}>
              Sık Sorulan Sorular
            </h2>
          </Reveal>
          <div className="space-y-3">
            {SSS.map((item, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="rounded-2xl overflow-hidden"
                  style={{ border: `1px solid ${acikFaq === i ? `rgba(91,45,110,0.2)` : `rgba(212,197,176,0.5)`}`, background: "#fff" }}>
                  <button
                    onClick={() => setAcikFaq(acikFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    style={{ background: acikFaq === i ? `rgba(91,45,110,0.04)` : "transparent" }}>
                    <span className="text-sm font-semibold" style={{ color: DRK }}>{item.s}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={`shrink-0 ml-3 transition-transform duration-200 ${acikFaq === i ? "rotate-180" : ""}`}>
                      <path d="M4 6l4 4 4-4" stroke={PRI} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${acikFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-5 pb-4 text-sm" style={{ color: `rgba(45,26,46,0.6)` }}>{item.c}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SON CTA ── */}
      <section className="pb-24 px-6">
        <Reveal>
          <div className="max-w-xl mx-auto rounded-3xl px-8 py-10 text-center"
            style={{ background: PRI, boxShadow: `0 24px 60px rgba(91,45,110,0.3)` }}>
            <h2 className="text-2xl font-black mb-2" style={{ color: "#fff", fontFamily: "var(--font-serif)" }}>
              Hemen Başla
            </h2>
            <p className="text-sm mb-7" style={{ color: `rgba(255,255,255,0.65)` }}>
              İlk siparişinde %20 indirim — kod: TEMİZ20
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/siparis"
                className="px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "#fff", color: PRI }}>
                Sipariş Ver →
              </Link>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba! Paketler hakkında bilgi almak istiyorum.")}`}
                target="_blank" rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-sm font-bold border-2 transition-all hover:opacity-90"
                style={{ borderColor: `rgba(255,255,255,0.3)`, color: "#fff" }}>
                WhatsApp'tan Sor
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
