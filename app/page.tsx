"use client";
import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import ScratchReveal from "@/components/ScratchReveal";
import WhatsappProof from "@/components/WhatsappProof";
import { supabase } from "@/lib/supabase";
import { useEffect, useRef, useState } from "react";

export const dynamic = "force-dynamic";

const PRI = "#5B2D6E";
const MUV = "#BFA5B8";
const STN = "#D4C5B0";
const BG  = "#F5F0E8";
const DRK = "#2D1A2E";
const WHATSAPP = "905319623790";

/* ─────────────── HOOKS ─────────────── */
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

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─────────────── DATA ─────────────── */
const HIZMETLER = [
  { slug: "temizlik-bakim",  no: "01", ad: "Temizlik & Bakım",   fiyat: "₺800+",   sure: "1-2 gün", accent: PRI,
    img: "/generated/servis-temizlik.webp",
    aciklama: "Buhar temizlik, derin cila, bağcık değişimi dahil.",
    detaylar: ["Buhar ile derin temizlik","Profesyonel cila","Bağcık değişimi","UV sterilizasyon"] },
  { slug: "boya-restorasyon",no: "02", ad: "Boya & Restorasyon", fiyat: "₺1.200+", sure: "2-3 gün", accent: MUV,
    img: "/generated/servis-boya.webp",
    aciklama: "Profesyonel boya ve renk yenileme. Yıpranmışı sıfırlar.",
    detaylar: ["Orijinal renk eşleştirme","Deri yüzey onarımı","Profesyonel boya","Koruyucu vernik"] },
  { slug: "taban-degisimi",  no: "03", ad: "Taban Değişimi",     fiyat: "₺950+",   sure: "2-3 gün", accent: PRI,
    img: "/generated/servis-taban.webp",
    aciklama: "Dış taban komple değişimi. Her tür ayakkabı.",
    detaylar: ["Dış taban değişimi","İç taban yenileme","Topuk tamiri","Her marka"] },
  { slug: "dikis-onarim",    no: "04", ad: "Dikiş & Onarım",     fiyat: "₺250+",   sure: "1-2 gün", accent: MUV,
    img: "/generated/servis-dikis.webp",
    aciklama: "Yırtık dikişler, çoraplık ve fort tamiri.",
    detaylar: ["Dikiş tamiri","Çoraplık onarım","Fort tamiri","Fermuar"] },
  { slug: "file-tamiri",     no: "05", ad: "File Tamiri",         fiyat: "₺750+",   sure: "1-2 gün", accent: STN,
    img: "/generated/servis-file.webp",
    aciklama: "Hasarlı file kısımların onarımı ve yenilenmesi.",
    detaylar: ["File onarımı","Yırtık tamiri","Renk uyumu","Kaplama"] },
  { slug: "ic-taban",        no: "06", ad: "İç Taban Değişimi",  fiyat: "₺750+",   sure: "1-2 gün", accent: PRI,
    img: "/generated/servis-ictaban.webp",
    aciklama: "İç taban tamamen yenilenir, konfor ve hijyen geri gelir.",
    detaylar: ["Komple iç taban","Koku giderme","Anti-bakteriyel","Tüm modeller"] },
];

const GARANTILER = [
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    label: "Memnuniyet Garantisi",
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "Kapıdan Kapıya",
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "24 Saatte Teslim",
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
      </svg>
    ),
    label: "Uzman Ekip",
  },
];

/* ─────────────── COMPONENTS ─────────────── */
function BolgeKontrol() {
  const ILCELER = [
    { id: "kadikoy",     label: "Kadıköy",     aktif: true },
    { id: "uskudar",     label: "Üsküdar",     aktif: true },
    { id: "atasehir",    label: "Ataşehir",    aktif: true },
    { id: "umraniye",    label: "Ümraniye",    aktif: true },
    { id: "maltepe",     label: "Maltepe",     aktif: false },
    { id: "kartal",      label: "Kartal",      aktif: false },
    { id: "pendik",      label: "Pendik",      aktif: false },
    { id: "cekmekoy",    label: "Çekmeköy",    aktif: false },
    { id: "tuzla",       label: "Tuzla",       aktif: false },
    { id: "beykoz",      label: "Beykoz",      aktif: false },
    { id: "sancaktepe",  label: "Sancaktepe",  aktif: false },
    { id: "sultanbeyli", label: "Sultanbeyli", aktif: false },
    { id: "sile",        label: "Şile",        aktif: false },
    { id: "adalar",      label: "Adalar",      aktif: false },
  ];
  const [secili, setSecili] = React.useState<string | null>(null);
  const seciliIlce = ILCELER.find(i => i.id === secili);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-8">
        {ILCELER.map(ilce => (
          <button key={ilce.id} onClick={() => setSecili(ilce.id)}
            className="px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-200"
            style={secili === ilce.id
              ? { background: PRI, borderColor: PRI, color: "#fff" }
              : { borderColor: STN, color: `rgba(45,26,46,0.55)`, background: "#fff" }}>
            {ilce.label}
            {ilce.aktif && <span className="ml-1.5 w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#22c55e", verticalAlign: "middle" }} />}
          </button>
        ))}
      </div>
      {!secili && (
        <div className="p-6 rounded-2xl text-center" style={{ background: `rgba(212,197,176,0.2)`, border: `1px solid ${STN}` }}>
          <p className="text-sm" style={{ color: `rgba(45,26,46,0.4)` }}>İlçenizi seçin, hizmet verip vermediğimizi öğrenin</p>
        </div>
      )}
      {secili && seciliIlce?.aktif && (
        <div className="p-6 rounded-2xl border-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderColor: "#22c55e", background: `rgba(34,197,94,0.05)` }}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
              <p className="font-bold text-base" style={{ color: DRK }}>{seciliIlce.label}&apos;e hizmet veriyoruz!</p>
            </div>
            <p className="text-sm" style={{ color: `rgba(45,26,46,0.5)` }}>Kapıdan kapıya, profesyonel bakım. Kirli gönder, temiz gelsin.</p>
          </div>
          <Link href="/siparis" className="shrink-0 px-7 py-3.5 text-sm font-bold rounded-full hover:opacity-90 transition-all whitespace-nowrap" style={{ background: PRI, color: "#fff" }}>
            Sipariş Ver →
          </Link>
        </div>
      )}
      {secili && !seciliIlce?.aktif && (
        <div className="p-6 rounded-2xl border-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderColor: STN, background: `rgba(212,197,176,0.15)` }}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: MUV }} />
              <p className="font-bold text-base" style={{ color: DRK }}>{seciliIlce?.label} yakında ekleniyor</p>
            </div>
            <p className="text-sm" style={{ color: `rgba(45,26,46,0.5)` }}>Şu an bu bölgede hizmet vermiyoruz ama WhatsApp&apos;tan yazabilirsiniz.</p>
          </div>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 text-sm font-bold rounded-full hover:opacity-90 transition-all whitespace-nowrap"
            style={{ background: DRK, color: MUV }}>
            WhatsApp&apos;tan Sor →
          </a>
        </div>
      )}
    </div>
  );
}

function FiyatHesapla() {
  const HIZMET_FIYATLARI: Record<string, Record<string, number>> = {
    "Temizlik & Bakım":  { sneaker: 800,  deri: 900,  suet: 1000, spor: 750,  klasik: 900 },
    "Boya & Restorasyon":{ sneaker: 1200, deri: 1400, suet: 1500, spor: 1100, klasik: 1300 },
    "Taban Değişimi":    { sneaker: 950,  deri: 1050, suet: 1050, spor: 950,  klasik: 1050 },
    "Dikiş & Onarım":   { sneaker: 250,  deri: 300,  suet: 300,  spor: 250,  klasik: 300 },
  };
  const TIPLER = [
    { id: "sneaker", label: "Sneaker" }, { id: "deri", label: "Deri Bot" },
    { id: "suet", label: "Süet" }, { id: "spor", label: "Spor" }, { id: "klasik", label: "Klasik" },
  ];
  const [tip, setTip] = React.useState("sneaker");
  const [premium, setPremium] = React.useState(false);
  const [secili, setSecili] = React.useState<string[]>([]);
  const toggle = (h: string) => setSecili(p => p.includes(h) ? p.filter(x => x !== h) : [...p, h]);
  const toplamBase = secili.reduce((s, h) => s + (HIZMET_FIYATLARI[h]?.[tip] ?? 0), 0);
  const toplam = premium ? Math.round(toplamBase * 1.2) : toplamBase;
  const indirimli = secili.length >= 3 ? Math.round(toplam * 0.8) : toplam;
  const indirimVar = secili.length >= 3;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: `rgba(45,26,46,0.35)` }}>Ayakkabı türü</p>
        <div className="flex flex-wrap gap-2">
          {TIPLER.map(t => (
            <button key={t.id} onClick={() => setTip(t.id)}
              className="px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all"
              style={tip === t.id ? { background: PRI, borderColor: PRI, color: "#fff" } : { borderColor: STN, color: `rgba(45,26,46,0.5)`, background: "#fff" }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between p-4 rounded-2xl border-2 transition-all"
        style={{ borderColor: premium ? PRI : STN, background: premium ? `rgba(91,45,110,0.05)` : "#fff" }}>
        <div>
          <p className="text-sm font-bold" style={{ color: DRK }}>Premium Bakım</p>
          <p className="text-xs" style={{ color: `rgba(45,26,46,0.45)` }}>Louboutin, Balenciaga, Gucci vb. — +%20</p>
        </div>
        <button onClick={() => setPremium(p => !p)}
          className="w-12 h-6 rounded-full transition-all relative shrink-0"
          style={{ background: premium ? PRI : STN }}>
          <span className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300"
            style={{ left: premium ? "calc(100% - 20px)" : "4px" }} />
        </button>
      </div>

      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: `rgba(45,26,46,0.35)` }}>Hizmet seçin</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(HIZMET_FIYATLARI).map(([hizmet, fiyatlar], idx) => {
            const acc = idx % 2 === 0 ? PRI : MUV;
            const sel = secili.includes(hizmet);
            return (
              <button key={hizmet} onClick={() => toggle(hizmet)}
                className="flex items-center justify-between p-4 rounded-2xl border-2 text-left transition-all"
                style={sel ? { borderColor: acc, background: `rgba(${idx % 2 === 0 ? "91,45,110" : "191,165,184"},0.07)` } : { borderColor: STN, background: "#fff" }}>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                    style={sel ? { borderColor: acc, background: acc } : { borderColor: STN }}>
                    {sel && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: DRK }}>{hizmet}</span>
                </div>
                <span className="text-sm font-bold" style={{ color: sel ? acc : `rgba(45,26,46,0.4)` }}>
                  ₺{premium ? Math.round(fiyatlar[tip as keyof typeof fiyatlar] * 1.2).toLocaleString() : fiyatlar[tip as keyof typeof fiyatlar].toLocaleString()}+
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-6 rounded-2xl border-2 transition-all"
        style={{ borderColor: secili.length > 0 ? PRI : STN, background: secili.length > 0 ? `rgba(91,45,110,0.05)` : `rgba(212,197,176,0.15)` }}>
        {secili.length === 0 ? (
          <p className="text-sm text-center py-2" style={{ color: `rgba(45,26,46,0.35)` }}>Hizmet seçerek tahmini fiyatı görün</p>
        ) : (
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: `rgba(45,26,46,0.4)` }}>Tahmini tutar</p>
              <div className="flex items-baseline gap-3">
                {indirimVar && <span className="text-lg line-through" style={{ color: `rgba(45,26,46,0.3)` }}>₺{toplam.toLocaleString()}</span>}
                <span className="text-3xl font-black" style={{ color: PRI }}>₺{indirimli.toLocaleString()}+</span>
              </div>
              {indirimVar && <p className="text-xs mt-1 font-semibold" style={{ color: "#22c55e" }}>3+ hizmet — %20 indirim uygulandı!</p>}
              {!indirimVar && secili.length > 0 && <p className="text-xs mt-1" style={{ color: `rgba(45,26,46,0.35)` }}>3+ hizmet seçin, %20 indirim kazanın</p>}
            </div>
            <Link href="/siparis" className="px-7 py-3.5 text-sm font-bold rounded-full hover:opacity-90 transition-all whitespace-nowrap" style={{ background: PRI, color: "#fff" }}>
              Sipariş Ver →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function GaleriOnizleme() {
  const [items, setItems] = React.useState<{ id: string; title: string; service: string; before_url: string | null; after_url: string | null }[]>([]);
  const [hover, setHover] = React.useState<string | null>(null);
  React.useEffect(() => {
    import("@/lib/supabase").then(({ supabase }) => {
      supabase.from("gallery").select("id,title,service,before_url,after_url").eq("active", true).limit(3).order("created_at", { ascending: false }).then(({ data }) => setItems(data ?? []));
    });
  }, []);

  const placeholder = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {["Beyaz Sneaker", "Deri Bot", "Spor Ayakkabı"].map(label => (
        <div key={label} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${STN}`, boxShadow: "0 2px 12px rgba(45,26,46,0.06)" }}>
          <div className="h-56 flex flex-col items-center justify-center" style={{ background: `rgba(212,197,176,0.15)` }}>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: `rgba(45,26,46,0.25)` }}>Yakında</p>
          </div>
          <div className="p-5 bg-white">
            <p className="text-sm font-semibold" style={{ color: DRK }}>{label}</p>
            <p className="text-[11px] mt-1 uppercase tracking-wider" style={{ color: `rgba(45,26,46,0.35)` }}>Lostra & Bakım</p>
          </div>
        </div>
      ))}
    </div>
  );

  if (items.length === 0) return placeholder;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map(item => (
        <div key={item.id} className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
          style={{ border: `1px solid ${STN}`, boxShadow: "0 2px 12px rgba(45,26,46,0.06)" }}
          onMouseEnter={e => { setHover(item.id); (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(91,45,110,0.15)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
          onMouseLeave={e => { setHover(null); (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(45,26,46,0.06)"; (e.currentTarget as HTMLElement).style.transform = ""; }}>
          <div className="relative h-56 overflow-hidden">
            {item.before_url && <img src={item.before_url} alt="önce" loading="lazy" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hover === item.id ? "opacity-0" : "opacity-100"}`} />}
            {item.after_url && <img src={item.after_url} alt="sonra" loading="lazy" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hover === item.id ? "opacity-100" : "opacity-0"}`} />}
            {!item.before_url && !item.after_url && <div className="w-full h-full" style={{ background: `rgba(212,197,176,0.2)` }} />}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <span className="absolute top-3 left-3 text-[9px] font-bold px-2.5 py-1 rounded-full transition-all duration-300"
              style={hover === item.id ? { background: PRI, color: "#fff" } : { background: `rgba(0,0,0,0.55)`, color: "rgba(255,255,255,0.9)" }}>
              {hover === item.id ? "Sonra ✓" : "Önce"}
            </span>
          </div>
          <div className="p-5 bg-white">
            <p className="text-sm font-semibold" style={{ color: DRK }}>{item.title}</p>
            <p className="text-[11px] mt-1 uppercase tracking-wider" style={{ color: `rgba(45,26,46,0.35)` }}>{item.service}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────── MAIN ─────────────── */
export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [heroGallery, setHeroGallery] = useState<{ before_url: string | null; after_url: string | null } | null>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 50); }, []);
  useEffect(() => {
    supabase.from("gallery").select("before_url,after_url").eq("active", true).order("created_at", { ascending: false }).limit(1).single()
      .then(({ data }) => { if (data) setHeroGallery(data); });
  }, []);

  return (
    <ScratchReveal>
    <div className="min-h-screen overflow-x-hidden" style={{ background: BG, color: DRK }}>
      <Nav active="/" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="min-h-dvh flex items-center px-5 md:px-12 pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[900px] h-[900px] opacity-[0.1] rounded-full"
            style={{ background: `radial-gradient(circle at 60% 40%, ${PRI} 0%, ${MUV} 50%, transparent 70%)`, transform: "translate(20%,-15%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.07] rounded-full"
            style={{ background: `radial-gradient(circle, ${MUV} 0%, transparent 70%)`, transform: "translate(-20%,20%)" }} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: `radial-gradient(circle, ${DRK} 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Sol — metin */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border"
                style={{ borderColor: STN, background: `rgba(212,197,176,0.25)` }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: `rgba(45,26,46,0.55)` }}>
                  Kadıköy · Üsküdar · Ataşehir · Ümraniye
                </span>
              </div>
            </Reveal>

            <div className={`transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h1 className="font-serif font-black tracking-tight mb-5 leading-[0.9]"
                style={{ fontSize: "clamp(2.4rem, 8vw, 6.5rem)", color: DRK }}>
                <span className="block">Kirli gönder,</span>
                <span className="block" style={{ color: PRI }}>temiz gelsin.</span>
              </h1>
            </div>

            <Reveal delay={100}>
              <p className="text-base md:text-lg leading-relaxed mb-8 max-w-lg" style={{ color: `rgba(45,26,46,0.6)` }}>
                Sneaker, deri, süet ya da klasik — ayakkabını kapından alıyoruz, profesyonel bakımdan geçiriyoruz ve sana tertemiz teslim ediyoruz.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold rounded-2xl hover:opacity-90 transition-all"
                  style={{ background: PRI, color: "#fff", boxShadow: `0 8px 28px rgba(91,45,110,0.35)` }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Fotoğraf Gönder, Fiyat Al
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <Link href="/siparis"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-4 rounded-2xl border-2 transition-all"
                  style={{ borderColor: PRI, color: PRI }}>
                  Sipariş Oluştur
                </Link>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { val: 150, suf: "+",     label: "Mutlu müşteri" },
                  { val: 7,   suf: " gün",  label: "Ort. teslim"  },
                  { val: 100, suf: "%",     label: "Memnuniyet"   },
                ].map(s => (
                  <div key={s.label} className="py-3 px-2 sm:px-5 rounded-2xl text-center"
                    style={{ background: `rgba(91,45,110,0.07)`, border: `1px solid rgba(91,45,110,0.12)` }}>
                    <p className="text-xl sm:text-2xl md:text-3xl font-black tabular-nums" style={{ color: PRI }}>
                      <Counter target={s.val} suffix={s.suf} />
                    </p>
                    <p className="text-[9px] sm:text-[10px] mt-0.5 uppercase tracking-wider" style={{ color: `rgba(45,26,46,0.4)` }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sağ — görsel */}
          <Reveal delay={150} className="lg:pl-4">
            <div className="relative">
              {/* Ana kart */}
              <div className="rounded-[28px] overflow-hidden border shadow-[0_24px_64px_rgba(45,26,46,0.12)]"
                style={{ background: "#fff", borderColor: STN }}>
                <div className="grid grid-cols-2">
                  {/* Önce */}
                  <div className="relative h-[180px] sm:h-[240px] md:h-[360px]" style={{ background: `rgba(212,197,176,0.15)` }}>
                    <img src={heroGallery?.before_url || "/generated/hero-before.webp"}
                      alt="Bakım öncesi kirli sneaker"
                      className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black"
                      style={{ background: `rgba(0,0,0,0.6)`, color: "#fff" }}>Önce</span>
                  </div>
                  {/* Sonra */}
                  <div className="relative h-[180px] sm:h-[240px] md:h-[360px]" style={{ background: `rgba(91,45,110,0.06)` }}>
                    <img src={heroGallery?.after_url || "/generated/hero-after.webp"}
                      alt="Bakım sonrası tertemiz sneaker"
                      className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black"
                      style={{ background: PRI, color: "#fff" }}>Sonra ✓</span>
                  </div>
                </div>
                {/* Alt panel */}
                <div className="p-5" style={{ background: `rgba(245,240,232,0.9)` }}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: `rgba(45,26,46,0.4)` }}>Hızlı başlangıç</p>
                      <p className="text-base font-black" style={{ color: DRK }}>Fotoğraf gönder, fiyatı anında öğren.</p>
                    </div>
                    <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:opacity-90"
                      style={{ background: PRI, color: "#fff" }}>
                      WhatsApp&apos;tan Başla
                    </a>
                  </div>
                  <div className="hidden sm:grid mt-4 grid-cols-3 gap-2">
                    {["Derin temizlik", "Renk canlandırma", "Güvenli paketleme"].map(item => (
                      <div key={item} className="rounded-xl px-2 py-2 text-center text-[10px] font-medium"
                        style={{ background: "#fff", color: `rgba(45,26,46,0.6)`, border: `1px solid ${STN}` }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge — mobilde gizle */}
              <div className="hidden sm:block absolute -bottom-4 -right-2 md:-right-6 px-4 py-3 rounded-2xl shadow-xl"
                style={{ background: `linear-gradient(135deg, ${PRI}, #7c3aad)` }}>
                <p className="text-[9px] uppercase tracking-wider" style={{ color: `rgba(255,255,255,0.65)` }}>Kampanya</p>
                <p className="text-sm font-black text-white mt-0.5">3+ hizmette %20 indirim</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GARANTİ ŞERIDI
      ══════════════════════════════════════════ */}
      <div style={{ background: DRK }}>
        {/* Trust şeridi */}
        <div className="px-5 md:px-12 py-4 border-b" style={{ borderColor: "rgba(191,165,184,0.1)" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            {GARANTILER.map(g => (
              <div key={g.label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: `rgba(91,45,110,0.4)`, color: MUV }}>
                  {g.icon}
                </div>
                <span className="text-xs font-semibold" style={{ color: `rgba(191,165,184,0.8)` }}>{g.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Marquee */}
        <div className="overflow-hidden py-3 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: `linear-gradient(90deg, ${DRK} 0%, transparent 100%)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: `linear-gradient(270deg, ${DRK} 0%, transparent 100%)` }} />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, x) => (
              ["Kirli Gönder, Temiz Gelsin", "Kapıdan Kapıya", "Ücretsiz Fiyat Al", "Profesyonel Temizlik", "Boya & Restorasyon", "Taban Değişimi", "Dikiş Tamiri", "Memnuniyet Garantisi"].map((item, i) => (
                <span key={`${x}-${i}`} className="text-[10px] uppercase tracking-[0.3em] mx-8 font-medium" style={{ color: `rgba(191,165,184,0.5)` }}>
                  {item} <span className="mx-3 opacity-30">✦</span>
                </span>
              ))
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HİZMETLER — Bento Grid
      ══════════════════════════════════════════ */}
      <section className="px-5 md:px-12 py-14 md:py-24" style={{ background: BG }}>
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: `rgba(45,26,46,0.3)` }}>Hizmetler</p>
              <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: DRK }}>
                Ne <span style={{ color: PRI }}>yapıyoruz?</span>
              </h2>
            </div>
            <Link href="/hizmetler" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: MUV }}>
              Tüm hizmetler →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HIZMETLER.map((h, i) => (
            <Reveal key={h.no} delay={i * 50}>
              <Link href={`/hizmetler/${h.slug}`} className="group block h-full">
                <div className="h-full rounded-2xl border overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: "#fff",
                    borderColor: STN,
                    boxShadow: "0 2px 10px rgba(45,26,46,0.05)",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(91,45,110,0.12)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(45,26,46,0.05)"}>
                  {/* Servis fotoğrafı */}
                  <div className="h-40 relative overflow-hidden">
                    <img src={h.img} alt={h.ad} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-white text-xs font-black">{h.ad}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(4px)" }}>{h.sure}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-mono tracking-widest" style={{ color: `rgba(45,26,46,0.2)` }}>{h.no}</span>
                      <p className="text-base font-black" style={{ color: h.accent }}>{h.fiyat}</p>
                    </div>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: `rgba(45,26,46,0.5)` }}>{h.aciklama}</p>
                    <div className="grid grid-cols-2 gap-1 mb-4">
                      {h.detaylar.map(d => (
                        <div key={d} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full shrink-0" style={{ background: h.accent }} />
                          <span className="text-xs" style={{ color: `rgba(45,26,46,0.45)` }}>{d}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: `1px solid ${STN}` }}>
                      <span className="text-[10px] uppercase tracking-wider" style={{ color: `rgba(45,26,46,0.25)` }}>Detay ve fiyat</span>
                      <span className="text-sm group-hover:translate-x-1 transition-transform" style={{ color: h.accent }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-5 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-4"
            style={{ background: `rgba(91,45,110,0.06)`, border: `1px solid rgba(91,45,110,0.15)` }}>
            <div className="flex-1">
              <p className="font-black text-base" style={{ color: DRK }}>
                3+ hizmet seç — <span style={{ color: PRI }}>%20 indirim kazan</span>
              </p>
              <p className="text-xs mt-0.5" style={{ color: `rgba(45,26,46,0.45)` }}>Temizlik, boya, taban — hepsini bir seferde halledelim.</p>
            </div>
            <Link href="/siparis" className="shrink-0 px-6 py-3 font-bold text-sm rounded-full hover:opacity-90 transition-all whitespace-nowrap" style={{ background: PRI, color: "#fff" }}>
              Sipariş Ver →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════
          NASIL ÇALIŞIR — Yeni akış tasarımı
      ══════════════════════════════════════════ */}
      <section className="px-6 md:px-12 py-24 relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, rgba(191,165,184,0.12) 0%, ${BG} 60%)` }}>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: `rgba(45,26,46,0.35)` }}>Süreç</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: DRK }}>
              Bu kadar <span style={{ color: PRI }}>basit.</span>
            </h2>
            <p className="text-base max-w-md mx-auto" style={{ color: `rgba(45,26,46,0.5)` }}>
              Kapından alıyoruz, bakımını yapıyoruz, tertemiz getiriyoruz.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { n: "01", img: "/generated/step-1-photo.webp", alt: "Fotoğraf gönder", t: "Fotoğraf Gönder", a: "WhatsApp'tan ayakkabının fotoğrafını gönder. Anında fiyat verelim, karar senin.", href: `https://wa.me/${WHATSAPP}`, cta: "Fiyat Al →", ext: true },
              { n: "02", img: "/generated/step-2-courier.webp", alt: "Kurye kapıya gelir", t: "Kapıda Teslim Et", a: "Kuryemiz kapına geliyor, kirli ayakkabıyı teslim alıyor. Sen hiçbir yere gitme.", href: "/siparis", cta: "Sipariş Ver →", ext: false },
              { n: "03", img: "/generated/step-3-clean.webp", alt: "Tertemiz teslim", t: "Temiz Geri Al", a: "Profesyonel bakımdan sonra paketlenmiş ve tertemiz olarak kapına teslim ediyoruz.", href: "/siparis-takip", cta: "Takip Et →", ext: false },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="rounded-3xl overflow-hidden border transition-all duration-300"
                  style={{ background: "#fff", borderColor: STN, boxShadow: "0 4px 20px rgba(45,26,46,0.07)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 56px rgba(91,45,110,0.13)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(45,26,46,0.07)"; (e.currentTarget as HTMLElement).style.transform = ""; }}>
                  {/* Fotoğraf */}
                  <div className="h-44 relative overflow-hidden">
                    <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: PRI, color: "#fff", boxShadow: "0 4px 12px rgba(91,45,110,0.5)" }}>
                      {s.n}
                    </div>
                  </div>
                  {/* İçerik */}
                  <div className="p-6">
                    <h3 className="text-base font-black mb-2" style={{ color: DRK }}>{s.t}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: `rgba(45,26,46,0.55)` }}>{s.a}</p>
                    {s.ext
                      ? <a href={s.href} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full border-2 hover:opacity-80 transition-all"
                          style={{ borderColor: PRI, color: PRI }}>
                          {s.cta}
                        </a>
                      : <Link href={s.href}
                          className="inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full border-2 hover:opacity-80 transition-all"
                          style={{ borderColor: PRI, color: PRI }}>
                          {s.cta}
                        </Link>
                    }
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="flex items-center gap-4 p-6 rounded-2xl max-w-xl mx-auto"
              style={{ background: `rgba(91,45,110,0.07)`, border: `1px solid rgba(91,45,110,0.15)` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: PRI, color: "#fff" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </div>
              <div className="flex-1">
                <p className="font-black text-sm" style={{ color: DRK }}>Hazırsan hemen başla</p>
                <p className="text-xs" style={{ color: `rgba(45,26,46,0.5)` }}>WhatsApp&apos;tan fotoğraf gönder, fiyatı öğren.</p>
              </div>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all"
                style={{ background: PRI, color: "#fff", boxShadow: `0 4px 16px rgba(91,45,110,0.3)` }}>
                Başla →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BÖLGE KONTROLÜ
      ══════════════════════════════════════════ */}
      <section className="px-5 md:px-12 py-12 md:py-20" style={{ background: BG }}>
        <Reveal>
          <div className="mb-10 pb-6" style={{ borderBottom: `1px solid ${STN}` }}>
            <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: `rgba(45,26,46,0.3)` }}>Hizmet bölgesi</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tight" style={{ color: DRK }}>
              Mahallenize <span style={{ color: PRI }}>geliyoruz.</span>
            </h2>
            <p className="text-sm mt-2" style={{ color: `rgba(45,26,46,0.45)` }}>Kadıköy, Üsküdar, Ataşehir ve Ümraniye&apos;ye kapıdan kapıya hizmet.</p>
          </div>
        </Reveal>
        <BolgeKontrol />
      </section>

      {/* ══════════════════════════════════════════
          FİYAT HESAPLA
      ══════════════════════════════════════════ */}
      <section className="px-5 md:px-12 py-12 md:py-20" style={{ background: `rgba(191,165,184,0.08)` }}>
        <Reveal>
          <div className="flex items-start justify-between mb-10 pb-6" style={{ borderBottom: `1px solid ${STN}` }}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: `rgba(45,26,46,0.3)` }}>Anlık fiyat</p>
              <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tight" style={{ color: DRK }}>
                Ne kadar <span style={{ color: PRI }}>tutar?</span>
              </h2>
              <p className="text-sm mt-2" style={{ color: `rgba(45,26,46,0.45)` }}>Hizmet ve ayakkabı türünü seçin, anlık fiyat görün.</p>
            </div>
            <div className="hidden md:flex flex-col items-center px-5 py-3 rounded-2xl ml-8"
              style={{ background: `rgba(91,45,110,0.08)`, border: `1px solid rgba(91,45,110,0.15)` }}>
              <p className="text-3xl font-black" style={{ color: PRI }}>%20</p>
              <p className="text-[9px] uppercase tracking-wider" style={{ color: `rgba(45,26,46,0.4)` }}>3+ hizmet indirimi</p>
            </div>
          </div>
        </Reveal>
        <FiyatHesapla />
      </section>

      {/* ══════════════════════════════════════════
          GALERİ
      ══════════════════════════════════════════ */}
      <section className="px-5 md:px-12 py-12 md:py-20" style={{ background: BG }}>
        <Reveal>
          <div className="flex items-end justify-between mb-10 pb-6" style={{ borderBottom: `1px solid ${STN}` }}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: `rgba(45,26,46,0.3)` }}>Sonuçlar</p>
              <h2 className="font-serif text-3xl md:text-5xl font-black tracking-tight" style={{ color: DRK }}>
                Fark <span style={{ color: PRI }}>gözle görülür.</span>
              </h2>
            </div>
            <Link href="/galeri" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: MUV }}>
              Tümünü gör →
            </Link>
          </div>
        </Reveal>
        <GaleriOnizleme />
        <div className="mt-5 flex justify-center md:hidden">
          <Link href="/galeri" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: MUV }}>Tümünü gör →</Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHATSAPP SOSYAL KANIT
      ══════════════════════════════════════════ */}
      <section className="px-5 md:px-12 py-12 md:py-20 relative overflow-hidden" style={{ background: DRK }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.07] rounded-full"
            style={{ background: `radial-gradient(circle, ${PRI} 0%, transparent 70%)`, transform: "translate(30%,-30%)" }} />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] opacity-[0.05] rounded-full"
            style={{ background: `radial-gradient(circle, ${MUV} 0%, transparent 70%)`, transform: "translate(-30%,30%)" }} />
        </div>

        <Reveal>
          <div className="mb-10 pb-6 relative" style={{ borderBottom: `1px solid rgba(191,165,184,0.15)` }}>
            <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: `rgba(191,165,184,0.4)` }}>Gerçek müşteriler</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tight" style={{ color: "#fff" }}>
              Müşteriler <span style={{ color: MUV }}>konuşuyor.</span>
            </h2>
            <p className="text-sm mt-2" style={{ color: `rgba(191,165,184,0.5)` }}>WhatsApp'tan gelen gerçek mesajlar — düzenlenmemiş, aynen aktarılmış.</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <WhatsappProof />
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-5 rounded-2xl"
            style={{ background: `rgba(255,255,255,0.04)`, border: `1px solid rgba(191,165,184,0.15)` }}>
            <div>
              <p className="font-serif text-xl font-black text-white mb-1">Siz de deneyimleyin</p>
              <p className="text-sm" style={{ color: `rgba(191,165,184,0.6)` }}>150+ mutlu müşteri ile birleşin. İlk sipariş özel fiyat.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
              <Link href="/siparis"
                className="flex-1 md:flex-none text-center px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
                style={{ background: PRI, color: "#fff" }}>
                Sipariş Ver →
              </Link>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="flex-1 md:flex-none text-center px-6 py-3 rounded-xl text-sm font-medium border hover:opacity-80 transition-all"
                style={{ borderColor: `rgba(191,165,184,0.25)`, color: `rgba(191,165,184,0.7)` }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="inline mr-1.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════
          SON CTA
      ══════════════════════════════════════════ */}
      <section className="px-5 md:px-12 py-16 md:py-28 relative overflow-hidden" style={{ background: DRK }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-[0.12] rounded-full"
            style={{ background: `radial-gradient(circle, ${PRI} 0%, transparent 65%)` }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-[0.08] rounded-full"
            style={{ background: `radial-gradient(circle, ${MUV} 0%, transparent 65%)` }} />
        </div>
        <Reveal>
          <div className="max-w-3xl relative">
            <p className="text-[10px] uppercase tracking-[0.4em] mb-6" style={{ color: `rgba(191,165,184,0.35)` }}>Ne bekliyorsun?</p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-8 md:mb-10" style={{ color: "#fff" }}>
              Kirli gönder,<br />
              <span style={{ color: MUV }}>temiz gelsin.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/siparis"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold rounded-2xl hover:opacity-90 transition-all"
                style={{ background: PRI, color: "#fff", boxShadow: `0 8px 28px rgba(91,45,110,0.4)` }}>
                Hemen Sipariş Ver
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-medium rounded-2xl border transition-all hover:opacity-80"
                style={{ borderColor: `rgba(191,165,184,0.25)`, color: `rgba(191,165,184,0.7)` }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="px-5 md:px-12 py-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
        style={{ background: `rgba(45,26,46,0.97)`, borderTop: `1px solid rgba(191,165,184,0.1)` }}>
        <div className="flex items-center gap-3">
          <img src="/temizgelsin-logo.png?v=1" alt="Temiz Gelsin"
            style={{ height: "38px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.8 }} />
          <span className="text-[9px] uppercase tracking-widest" style={{ color: `rgba(191,165,184,0.3)` }}>© 2025</span>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2.5 text-[11px] uppercase tracking-widest" style={{ color: `rgba(191,165,184,0.45)` }}>
          <Link href="/hizmetler" className="hover:opacity-80 transition-opacity">Hizmetler</Link>
          <Link href="/galeri" className="hover:opacity-80 transition-opacity">Galeri</Link>
          <Link href="/blog" className="hover:opacity-80 transition-opacity">Blog</Link>
          <Link href="/siparis-takip" className="hover:opacity-80 transition-opacity">Takip</Link>
          <Link href="/sss" className="hover:opacity-80 transition-opacity">SSS</Link>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">WhatsApp</a>
        </nav>
      </footer>

      {/* WhatsApp FAB */}
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-5 right-5 z-50 w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-transform"
        style={{ background: PRI, color: "#fff", boxShadow: `0 4px 24px rgba(91,45,110,0.45)` }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
    </ScratchReveal>
  );
}
