import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ayakkabı Bakım & Temizlik Rehberi — Blog",
  description: "Sneaker temizleme, deri bot bakımı, beyaz ayakkabı sararmış ne yapmalı? Profesyonel ayakkabı bakım ipuçları ve rehberler.",
  alternates: { canonical: "https://temizgelsin.com.tr/blog" },
  openGraph: {
    title: "Ayakkabı Bakım Rehberi | Temiz Gelsin Blog",
    description: "Sneaker temizleme, deri bot bakımı ve ayakkabı onarım rehberleri.",
    url: "https://temizgelsin.com.tr/blog",
  },
};

const YAZILAR = [
  {
    slug: "beyaz-sneaker-temizleme-rehberi",
    baslik: "Beyaz Sneaker Temizleme Rehberi: Sararmadan Kurtulmanın Yolları",
    ozet: "Beyaz sneaker'lar neden sararır? Evde yapılabilecekler ve profesyonel temizliğin farkı nedir? Adım adım rehber.",
    tarih: "2025-06-01",
    sure: "5 dk",
    etiket: "Sneaker Bakım",
  },
  {
    slug: "nike-air-force-temizleme",
    baslik: "Nike Air Force 1 Nasıl Temizlenir? Tam Rehber",
    ozet: "Nike Air Force 1 temizlemek için en etkili yöntemler. Sole yellowing sorunu ve çözümleri. Evde vs profesyonel bakım.",
    tarih: "2025-06-01",
    sure: "6 dk",
    etiket: "Nike",
  },
  {
    slug: "deri-bot-bakim-rehberi",
    baslik: "Deri Bot Bakımı: Ömrünü 3 Katına Çıkar",
    ozet: "Deri ayakkabı ve bot bakımında yapılan 5 kritik hata. Doğru cila, şeffaf krema ve profesyonel bakımın önemi.",
    tarih: "2025-06-01",
    sure: "7 dk",
    etiket: "Deri Bakım",
  },
  {
    slug: "sneaker-bakimi-ne-siklikla-yapilmali",
    baslik: "Sneaker Bakımı Ne Sıklıkla Yapılmalı?",
    ozet: "Hangi ayakkabı ne sıklıkla temizlenmeli? Günlük kullanım vs özel günler. Bakım takvimi oluşturma rehberi.",
    tarih: "2025-06-01",
    sure: "4 dk",
    etiket: "Bakım Rehberi",
  },
  {
    slug: "ayakkabi-taban-degisimi-ne-zaman-gerekir",
    baslik: "Ayakkabı Taban Değişimi Ne Zaman Gerekir? 7 İşaret",
    ozet: "Tabanınızın değişmesi gerektiğini gösteren 7 net işaret. Taban değişimi mi, yeni ayakkabı mı? Maliyet analizi.",
    tarih: "2025-06-01",
    sure: "5 dk",
    etiket: "Taban & Onarım",
  },
];

const PRI = "#5B2D6E";
const MUV = "#BFA5B8";
const STN = "#D4C5B0";
const BG  = "#F5F0E8";
const DRK = "#2D1A2E";

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DRK }}>
      <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: `rgba(45,26,46,0.4)` }}>Bilgi Merkezi</p>
          <h1 className="font-serif text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: DRK }}>
            Ayakkabı Bakım <span style={{ color: PRI }}>Rehberleri</span>
          </h1>
          <p className="text-base" style={{ color: `rgba(45,26,46,0.55)` }}>
            Uzman ipuçları, bakım rehberleri ve sık sorulan sorular.
          </p>
        </div>

        <div className="space-y-5">
          {YAZILAR.map((y) => (
            <Link key={y.slug} href={`/blog/${y.slug}`} className="group block">
              <article className="p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#fff", borderColor: STN, boxShadow: "0 2px 8px rgba(45,26,46,0.05)" }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                        style={{ background: `rgba(91,45,110,0.08)`, color: PRI }}>
                        {y.etiket}
                      </span>
                      <span className="text-[11px]" style={{ color: `rgba(45,26,46,0.35)` }}>{y.sure} okuma</span>
                    </div>
                    <h2 className="font-serif text-lg font-bold mb-2 group-hover:text-purple-700 transition-colors" style={{ color: DRK }}>
                      {y.baslik}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: `rgba(45,26,46,0.55)` }}>{y.ozet}</p>
                  </div>
                  <span className="text-lg shrink-0 group-hover:translate-x-1 transition-transform mt-1" style={{ color: MUV }}>→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: PRI }}>
          <p className="font-serif text-2xl font-black text-white mb-2">Okumak yerine biz halledelim mi?</p>
          <p className="text-sm mb-6" style={{ color: `rgba(191,165,184,0.8)` }}>Kapıdan kapıya profesyonel bakım — Kadıköy, Üsküdar, Ataşehir, Ümraniye.</p>
          <Link href="/siparis" className="inline-block px-8 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90"
            style={{ background: MUV, color: DRK }}>
            Sipariş Ver →
          </Link>
        </div>
      </div>
    </div>
  );
}
