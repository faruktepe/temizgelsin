import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kadıköy Ayakkabı Temizleme & Bakım Servisi | Temiz Gelsin",
  description: "Kadıköy'de kapıdan kapıya profesyonel ayakkabı temizleme ve bakım servisi. Sneaker temizleme, deri bot bakımı, taban değişimi. Aynı gün kurye.",
  alternates: { canonical: "https://temizgelsin.com.tr/hizmet-bolgesi/kadikoy" },
  openGraph: {
    title: "Kadıköy Ayakkabı Temizleme Servisi | Temiz Gelsin",
    description: "Kadıköy kapıdan kapıya ayakkabı bakım servisi. Sneaker, deri, süet — her çeşit.",
    url: "https://temizgelsin.com.tr/hizmet-bolgesi/kadikoy",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Temiz Gelsin — Kadıköy Ayakkabı Bakım Servisi",
  description: "Kadıköy'de kapıdan kapıya profesyonel ayakkabı temizleme ve bakım servisi.",
  url: "https://temizgelsin.com.tr/hizmet-bolgesi/kadikoy",
  telephone: "+905319623790",
  areaServed: { "@type": "City", name: "Kadıköy" },
  address: { "@type": "PostalAddress", addressLocality: "Kadıköy", addressRegion: "İstanbul", addressCountry: "TR" },
};

const PRI = "#5B2D6E"; const MUV = "#BFA5B8"; const STN = "#D4C5B0"; const BG = "#F5F0E8"; const DRK = "#2D1A2E";

export default function KadikoyPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DRK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="max-w-3xl mx-auto px-6 py-24 pt-32">
        <Link href="/" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity mb-8 inline-block" style={{ color: MUV }}>← Ana Sayfa</Link>

        <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: `rgba(45,26,46,0.4)` }}>Hizmet Bölgesi</p>
        <h1 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-4 leading-tight" style={{ color: DRK }}>
          Kadıköy Ayakkabı <span style={{ color: PRI }}>Temizleme Servisi</span>
        </h1>
        <p className="text-lg leading-relaxed mb-10" style={{ color: `rgba(45,26,46,0.6)` }}>
          Kadıköy'de yaşıyor veya çalışıyorsanız, ayakkabı bakımı için artık hiçbir yere gitmenize gerek yok. Temiz Gelsin kuryesi kapınıza geliyor, ayakkabılarınızı teslim alıyor ve profesyonel bakımdan sonra adresinize teslim ediyor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { hizmet: "Temizlik & Bakım", fiyat: "₺800+", sure: "1-2 gün" },
            { hizmet: "Boya & Restorasyon", fiyat: "₺1.200+", sure: "2-3 gün" },
            { hizmet: "Taban Değişimi", fiyat: "₺950+", sure: "2-3 gün" },
            { hizmet: "Dikiş & Onarım", fiyat: "₺250+", sure: "1-2 gün" },
            { hizmet: "File Tamiri", fiyat: "₺750+", sure: "1-2 gün" },
            { hizmet: "İç Taban Değişimi", fiyat: "₺750+", sure: "1-2 gün" },
          ].map((h) => (
            <div key={h.hizmet} className="p-5 rounded-2xl flex items-center justify-between" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <div>
                <p className="text-sm font-bold" style={{ color: DRK }}>{h.hizmet}</p>
                <p className="text-xs" style={{ color: `rgba(45,26,46,0.4)` }}>{h.sure}</p>
              </div>
              <p className="text-base font-black" style={{ color: PRI }}>{h.fiyat}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl mb-10" style={{ background: `rgba(91,45,110,0.06)`, border: `1px solid rgba(91,45,110,0.15)` }}>
          <h2 className="font-serif text-xl font-black mb-3" style={{ color: DRK }}>Kadıköy'de Nasıl Çalışıyoruz?</h2>
          <div className="space-y-3">
            {[
              ["Sipariş ver", "Web sitesinden veya WhatsApp'tan sipariş oluşturun."],
              ["Kurye kapınıza gelir", "Belirlediğiniz saatte kuryemiz Kadıköy adresinize gelir."],
              ["Profesyonel bakım", "Uzman ekibimiz ayakkabılarınızı özenle temizler ve onarır."],
              ["Kapınıza teslim", "Temizlenmiş ayakkabılarınız ambalajlı olarak teslim edilir."],
            ].map(([adim, aciklama], i) => (
              <div key={adim} className="flex gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 text-white" style={{ background: PRI }}>{i + 1}</span>
                <div>
                  <p className="text-sm font-bold" style={{ color: DRK }}>{adim}</p>
                  <p className="text-xs" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/siparis" className="flex-1 py-4 text-center rounded-2xl text-sm font-bold hover:opacity-90 transition-all" style={{ background: PRI, color: "#fff" }}>
            Kadıköy Sipariş Ver →
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
