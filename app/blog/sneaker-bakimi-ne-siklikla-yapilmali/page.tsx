import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sneaker Bakımı Ne Sıklıkla Yapılmalı? Bakım Takvimi",
  description: "Hangi ayakkabı ne sıklıkla temizlenmeli? Günlük kullanım sneaker vs özel gün ayakkabısı. Sneaker bakım takvimi oluşturma rehberi. Temiz Gelsin İstanbul.",
  alternates: { canonical: "https://temizgelsin.com.tr/blog/sneaker-bakimi-ne-siklikla-yapilmali" },
  openGraph: {
    title: "Sneaker Bakım Sıklığı Rehberi | Temiz Gelsin",
    description: "Sneaker bakım takvimi: ne zaman, nasıl temizlenmeli?",
    url: "https://temizgelsin.com.tr/blog/sneaker-bakimi-ne-siklikla-yapilmali",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sneaker Bakımı Ne Sıklıkla Yapılmalı?",
  author: { "@type": "Organization", name: "Temiz Gelsin" },
  publisher: { "@type": "Organization", name: "Temiz Gelsin" },
  datePublished: "2025-06-01",
};

const PRI = "#5B2D6E"; const MUV = "#BFA5B8"; const STN = "#D4C5B0"; const BG = "#F5F0E8"; const DRK = "#2D1A2E";

export default function BakimSikligi() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DRK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-2xl mx-auto px-6 py-24 pt-32">
        <Link href="/blog" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity mb-8 inline-block" style={{ color: MUV }}>← Blog</Link>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ background: `rgba(91,45,110,0.08)`, color: PRI }}>Bakım Rehberi</span>
          <span className="text-[11px]" style={{ color: `rgba(45,26,46,0.35)` }}>4 dk okuma</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight" style={{ color: DRK }}>
          Sneaker Bakımı Ne Sıklıkla Yapılmalı?
        </h1>
        <p className="text-lg leading-relaxed mb-8" style={{ color: `rgba(45,26,46,0.65)` }}>
          "Ayakkabıma bakım yaptırmalıyım ama ne zaman?" sorusu düşündüğünüzden daha basit bir cevaba sahip. Kullanım sıklığınıza ve ayakkabı tipine göre bakım takvimini belirlemek mümkün.
        </p>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Kullanıma Göre Bakım Sıklığı</h2>
        <div className="space-y-4 mb-8">
          {[
            { tip: "Günlük kullanım sneaker", siklik: "Her 2 haftada bir", aciklama: "Günlük giydikleriniz en hızlı kirlenir. Hafif fırçalama + ayda bir profesyonel bakım idealdir." },
            { tip: "Hafta sonu / ara sıra", siklik: "Ayda bir", aciklama: "Daha az kirlenirler ama nem ve tozdan korunmak için düzenli bakım gerekir." },
            { tip: "Özel gün / premium", siklik: "2-3 ayda bir", aciklama: "Az kullanılan ama değeri yüksek ayakkabılar için yılda 3-4 profesyonel bakım yeterlidir." },
            { tip: "Spor / outdoor", siklik: "Her kullanım sonrası", aciklama: "Spor sonrası ter ve nem hızla hasar yapar. Her kullanım sonrası kuru fırçalama ve havalandırma şart." },
          ].map(({ tip, siklik, aciklama }) => (
            <div key={tip} className="p-5 rounded-xl flex gap-4" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <div className="shrink-0">
                <p className="text-xs font-black uppercase tracking-wider mb-0.5" style={{ color: PRI }}>{siklik}</p>
                <p className="text-xs" style={{ color: `rgba(45,26,46,0.4)` }}>tavsiye edilen</p>
              </div>
              <div className="border-l pl-4" style={{ borderColor: STN }}>
                <p className="text-sm font-bold mb-1" style={{ color: DRK }}>{tip}</p>
                <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Bakım Zamanı Geldi mi? 5 İşaret</h2>
        <ul className="space-y-2 mb-8">
          {[
            "Beyaz sole/taban griye ya da sarıya dönmeye başladı",
            "Ayakkabı koku yapmaya başladı",
            "Dikiş veya yapıştırma çözülüyor",
            "Deri yüzeyde mat ve kuru görünüm var",
            "Kir kuru fırçayla çıkmıyor, derin kirlenme var",
          ].map((isaret, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-xl text-sm" style={{ background: `rgba(91,45,110,0.04)`, color: `rgba(45,26,46,0.7)` }}>
              <span className="font-black shrink-0" style={{ color: PRI }}>{i + 1}.</span>
              {isaret}
            </li>
          ))}
        </ul>

        <div className="p-8 rounded-2xl text-center" style={{ background: PRI }}>
          <p className="font-serif text-xl font-black text-white mb-2">Bakım zamanı geldi mi?</p>
          <p className="text-sm mb-5" style={{ color: `rgba(191,165,184,0.8)` }}>Kapıdan teslim alıyoruz, profesyonel temizlikten sonra kapınıza getiriyoruz.</p>
          <Link href="/siparis" className="inline-block px-7 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all" style={{ background: MUV, color: DRK }}>
            Hemen Sipariş Ver →
          </Link>
        </div>
      </article>
    </div>
  );
}
