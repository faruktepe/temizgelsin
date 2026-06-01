import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ataşehir Ayakkabı Temizleme & Bakım Servisi | Temiz Gelsin",
  description: "Ataşehir'de kapıdan kapıya profesyonel ayakkabı temizleme ve bakım servisi. Sneaker temizleme, deri bot bakımı, taban değişimi.",
  alternates: { canonical: "https://temizgelsin.com.tr/hizmet-bolgesi/atasehir" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Temiz Gelsin — Ataşehir Ayakkabı Bakım Servisi",
  url: "https://temizgelsin.com.tr/hizmet-bolgesi/atasehir",
  telephone: "+905319623790",
  areaServed: { "@type": "City", name: "Ataşehir" },
  address: { "@type": "PostalAddress", addressLocality: "Ataşehir", addressRegion: "İstanbul", addressCountry: "TR" },
};

const PRI = "#5B2D6E"; const MUV = "#BFA5B8"; const STN = "#D4C5B0"; const BG = "#F5F0E8"; const DRK = "#2D1A2E";

export default function AtasehirAtaşehirPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DRK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="max-w-3xl mx-auto px-6 py-24 pt-32">
        <Link href="/" className="text-xs uppercase tracking-widest hover:opacity-70 mb-8 inline-block" style={{ color: MUV }}>← Ana Sayfa</Link>
        <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: `rgba(45,26,46,0.4)` }}>Hizmet Bölgesi</p>
        <h1 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ color: DRK }}>
          Ataşehir Ayakkabı <span style={{ color: PRI }}>Temizleme Servisi</span>
        </h1>
        <p className="text-lg leading-relaxed mb-10" style={{ color: `rgba(45,26,46,0.6)` }}>
          Ataşehir'de kapıdan kapıya profesyonel ayakkabı bakım servisi. Kuryemiz adresinize geliyor, ayakkabılarınızı teslim alıyor ve bakımdan sonra tekrar kapınıza teslim ediyor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[["Temizlik & Bakım","₺800+","1-2 gün"],["Boya & Restorasyon","₺1.200+","2-3 gün"],["Taban Değişimi","₺950+","2-3 gün"],["Dikiş & Onarım","₺250+","1-2 gün"]].map(([h,f,s]) => (
            <div key={h} className="p-5 rounded-2xl flex items-center justify-between" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <div><p className="text-sm font-bold" style={{ color: DRK }}>{h}</p><p className="text-xs" style={{ color: `rgba(45,26,46,0.4)` }}>{s}</p></div>
              <p className="text-base font-black" style={{ color: PRI }}>{f}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/siparis" className="flex-1 py-4 text-center rounded-2xl text-sm font-bold hover:opacity-90 transition-all" style={{ background: PRI, color: "#fff" }}>
            Ataşehir Sipariş Ver →
          </Link>
          <a href="https://wa.me/905319623790" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-4 text-center rounded-2xl text-sm font-bold border-2 hover:opacity-80 transition-all"
            style={{ borderColor: PRI, color: PRI }}>
            WhatsApp'tan Sor
          </a>
        </div>
      </div>
    </div>
  );
}
