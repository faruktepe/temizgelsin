import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ayakkabı Taban Değişimi Ne Zaman Gerekir? 7 İşaret",
  description: "Ayakkabı tabanınızın değişmesi gerektiğini gösteren 7 net işaret. Taban değişimi mi yeni ayakkabı mı? Maliyet analizi ve İstanbul ayakkabı taban değişimi.",
  alternates: { canonical: "https://temizgelsin.com.tr/blog/ayakkabi-taban-degisimi-ne-zaman-gerekir" },
  openGraph: {
    title: "Ayakkabı Taban Değişimi Rehberi | Temiz Gelsin",
    description: "Taban değişimi ne zaman gerekir? 7 işaret ve maliyet analizi.",
    url: "https://temizgelsin.com.tr/blog/ayakkabi-taban-degisimi-ne-zaman-gerekir",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ayakkabı Taban Değişimi Ne Zaman Gerekir? 7 İşaret",
  author: { "@type": "Organization", name: "Temiz Gelsin" },
  publisher: { "@type": "Organization", name: "Temiz Gelsin" },
  datePublished: "2025-06-01",
};

const PRI = "#5B2D6E"; const MUV = "#BFA5B8"; const STN = "#D4C5B0"; const BG = "#F5F0E8"; const DRK = "#2D1A2E";

export default function TabanDegisimiPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DRK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-2xl mx-auto px-6 py-24 pt-32">
        <Link href="/blog" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity mb-8 inline-block" style={{ color: MUV }}>← Blog</Link>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ background: `rgba(91,45,110,0.08)`, color: PRI }}>Taban & Onarım</span>
          <span className="text-[11px]" style={{ color: `rgba(45,26,46,0.35)` }}>5 dk okuma</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight" style={{ color: DRK }}>
          Ayakkabı Taban Değişimi Ne Zaman Gerekir? 7 İşaret
        </h1>
        <p className="text-lg leading-relaxed mb-8" style={{ color: `rgba(45,26,46,0.65)` }}>
          Sevdiğiniz bir ayakkabıyı sadece taban yüzünden çöpe atmak zorunda değilsiniz. Taban değişimi, premium bir ayakkabıyı sıfıra döndürmenin en ekonomik yoludur. Ama ne zaman değişim şart, ne zaman beklenebilir?
        </p>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Taban Değişimi Gerektiren 7 İşaret</h2>
        <div className="space-y-3 mb-8">
          {[
            ["Topuk aşınması", "Topuk 3-4mm'den fazla aşındıysa hem konfor hem sağlık riski var. Diz ve bel ağrısına yol açabilir."],
            ["Taban ayrılması", "Taban uç veya yan kısımdan ayrılmaya başladıysa yapıştırma değil, komple değişim gerekir."],
            ["Sert ve çatlak taban", "Kauçuk ve PU tabanlar yaşlanınca sertleşir ve çatlar. Kayma riski artar."],
            ["Su geçiriyor", "Sağlam görünen ama su geçiren taban, içten ayrılmış demektir. Değişim kaçınılmaz."],
            ["Gürültülü adım", "Her adımda çıt çıt sesi: taban ayrılıyor. Erken müdahale yeni taban yerine yapıştırmayla da çözülebilir."],
            ["Yalnız düzleşmesi", "Sadece iç taban düzleştiyse iç taban değişimi yeterlidir. Dış taban sağlamsa daha az maliyet."],
            ["Dış tabanın tamamen aşınması", "Dış tabanda profil kalmadıysa (pürüzsüz düz yüzey) kayma tehlikesi var, acil değişim."],
          ].map(([isaret, aciklama], i) => (
            <div key={isaret} className="flex gap-4 p-4 rounded-xl" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <span className="text-sm font-black shrink-0 w-6" style={{ color: PRI }}>{i + 1}.</span>
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: DRK }}>{isaret}</p>
                <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Taban Değişimi mi, Yeni Ayakkabı mı?</h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: `rgba(45,26,46,0.65)` }}>
          Bu sorunun cevabı ayakkabının değerine ve üst kısmının durumuna bağlıdır.
        </p>
        <div className="grid grid-cols-1 gap-3 mb-8">
          {[
            { durum: "Taban değişimini tercih edin eğer:", maddeler: ["Ayakkabı premium veya özel bir modelise", "Üst kısım hâlâ sağlamlığını koruyorsa", "Taban değişim maliyeti ayakkabı değerinin %40'ından azsa"] },
            { durum: "Yeni ayakkabı almayı düşünün eğer:", maddeler: ["Üst deri/kumaş da yıpranmışsa", "Taban değişim maliyeti benzer yeni ayakkabıya yakınsa", "Model artık satılmıyorsa ve duygusal bağ yoksa"] },
          ].map(({ durum, maddeler }) => (
            <div key={durum} className="p-5 rounded-xl" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <p className="text-sm font-bold mb-2" style={{ color: DRK }}>{durum}</p>
              <ul className="space-y-1">
                {maddeler.map((m) => (
                  <li key={m} className="text-sm flex items-start gap-2" style={{ color: `rgba(45,26,46,0.6)` }}>
                    <span style={{ color: PRI }}>→</span> {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-2xl mb-10 border-l-4" style={{ background: `rgba(91,45,110,0.05)`, borderColor: PRI }}>
          <p className="text-sm font-bold mb-1" style={{ color: DRK }}>Temiz Gelsin taban değişimi fiyatları:</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[["Dış Taban Değişimi", "₺950+"], ["İç Taban Değişimi", "₺750+"], ["Topuk Tamiri", "₺600+"], ["Yapıştırma", "₺250+"]].map(([hizmet, fiyat]) => (
              <div key={hizmet} className="flex justify-between text-xs p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.8)" }}>
                <span style={{ color: `rgba(45,26,46,0.6)` }}>{hizmet}</span>
                <span className="font-bold" style={{ color: PRI }}>{fiyat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl text-center" style={{ background: PRI }}>
          <p className="font-serif text-xl font-black text-white mb-2">Tabanınızı yenileme zamanı</p>
          <p className="text-sm mb-5" style={{ color: `rgba(191,165,184,0.8)` }}>Kapıdan kapıya taban değişimi. İstanbul Anadolu yakası.</p>
          <Link href="/siparis" className="inline-block px-7 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all" style={{ background: MUV, color: DRK }}>
            Sipariş Ver →
          </Link>
        </div>
      </article>
    </div>
  );
}
