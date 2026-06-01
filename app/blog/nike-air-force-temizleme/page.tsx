import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nike Air Force 1 Nasıl Temizlenir? Tam Rehber 2025",
  description: "Nike Air Force 1 temizlemek için adım adım rehber. Sole yellowing çözümü, deri temizliği, bağcık beyazlatma. AF1 bakımında yapılan hatalar ve profesyonel sonuç.",
  alternates: { canonical: "https://temizgelsin.com.tr/blog/nike-air-force-temizleme" },
  openGraph: {
    title: "Nike Air Force 1 Temizleme Rehberi | Temiz Gelsin",
    description: "AF1 temizliğinde sole yellowing, deri bakımı ve bağcık yenileme. Profesyonel ipuçları.",
    url: "https://temizgelsin.com.tr/blog/nike-air-force-temizleme",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nike Air Force 1 Nasıl Temizlenir? Tam Rehber 2025",
  author: { "@type": "Organization", name: "Temiz Gelsin" },
  publisher: { "@type": "Organization", name: "Temiz Gelsin" },
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://temizgelsin.com.tr/blog/nike-air-force-temizleme" },
};

const PRI = "#5B2D6E"; const MUV = "#BFA5B8"; const STN = "#D4C5B0"; const BG = "#F5F0E8"; const DRK = "#2D1A2E";

export default function NikeAF1Page() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DRK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-2xl mx-auto px-6 py-24 pt-32">
        <Link href="/blog" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity mb-8 inline-block" style={{ color: MUV }}>← Blog</Link>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ background: `rgba(91,45,110,0.08)`, color: PRI }}>Nike</span>
          <span className="text-[11px]" style={{ color: `rgba(45,26,46,0.35)` }}>6 dk okuma</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight" style={{ color: DRK }}>
          Nike Air Force 1 Nasıl Temizlenir? Tam Rehber
        </h1>
        <p className="text-lg leading-relaxed mb-8" style={{ color: `rgba(45,26,46,0.65)` }}>
          Nike Air Force 1, ayakkabı dünyasının tartışmasız en ikonik modellerinden biri. Beyaz rengiyle her kombine yakışan AF1'i tertemiz tutmak istiyorsanız doğru yerdesiniz. Bu rehberde AF1'in temizlenmesinde dikkat edilmesi gereken her detayı bulacaksınız.
        </p>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>AF1 Temizliğinde Kullanılması Gereken Malzemeler</h2>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            ["Yumuşak kıllı fırça", "Deri yüzeye zarar vermez"],
            ["Hafif sabunlu su", "Deterjan veya özel sneaker temizleyici"],
            ["Mikrofiber bez", "Çizik bırakmaz, su emer"],
            ["Yeni bağcık", "Sararmış bağcık tüm etkiyi öldürür"],
          ].map(([malzeme, aciklama]) => (
            <div key={malzeme} className="p-4 rounded-xl" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <p className="text-sm font-bold mb-0.5" style={{ color: DRK }}>{malzeme}</p>
              <p className="text-xs" style={{ color: `rgba(45,26,46,0.5)` }}>{aciklama}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Adım Adım AF1 Temizleme</h2>
        <div className="space-y-3 mb-8">
          {[
            ["Bağcıkları çıkarın", "Bağcıkları ayrıca sıcak suda sabunla yıkayın. Çok sararmışlarsa yeni bağcık almayı düşünün — ₺20-30'a bulunur."],
            ["Kuru fırçayla başlayın", "Taban ve yan yüzlerdeki gevşek kiri kuru fırçayla temizleyin. Bu adım atlanırsa ıslak temizlikte kir yayılır."],
            ["Üst deri yüzeyi temizleyin", "Sabunlu suya batırılmış yumuşak fırçayla AF1'in deri kısmını nazikçe silin. Dairesel hareketler kullanın."],
            ["Taban (sole) temizliği", "AF1'in en sorunlu kısmı tabandır. Sert fırça ve biraz daha konsantre sabunla ovun. Sole yellowing varsa bu adım yeterli olmayabilir."],
            ["Durulayın ve kurulayın", "Temiz nemli bezle sabun kalıntısını silin. Ardından kağıt tıkayarak gölgede kurutun."],
          ].map(([adim, aciklama], i) => (
            <div key={adim} className="flex gap-4 p-4 rounded-xl" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <span className="text-sm font-black shrink-0 w-6 pt-0.5" style={{ color: PRI }}>{i + 1}.</span>
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: DRK }}>{adim}</p>
                <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>AF1 Sole Yellowing: Evde Çözüm Var mı?</h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: `rgba(45,26,46,0.65)` }}>
          AF1'in ikonik beyaz tabancının zamanla sarıya dönmesi, sneaker sahiplerinin en büyük şikayetidir. Piyasada "Sole Sauce" gibi ürünler satılmaktadır; bunlar UV ışığı altında bekletme yöntemiyle kısmen etkili olabilir.
        </p>
        <p className="text-base leading-relaxed mb-8" style={{ color: `rgba(45,26,46,0.65)` }}>
          Ancak gerçek şu ki: sole yellowing için en kalıcı çözüm profesyonel buhar temizliği ve ozon uygulamasıdır. Temiz Gelsin atölyesinde AF1 tabanları %85-90 oranında beyazlatılabilmektedir.
        </p>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>AF1 Bakımında Yapılan 3 Büyük Hata</h2>
        <div className="space-y-3 mb-10">
          {[
            ["Çamaşır makinesi", "AF1 çamaşır makinesine konmamalıdır. Deri yüzey ve yapıştırıcılar zarar görür, sarımı hızlanır."],
            ["Çamaşır suyu", "Seyreltilmeden kullanılan çamaşır suyu beyaz deriyi sarıya çevirir. Kullanacaksanız 1:10 oranında seyreltin ve sadece tabana uygulayın."],
            ["Güneşte kurutma", "Doğrudan güneşte kurutmak sole yellowing'i dramatik biçimde hızlandırır."],
          ].map(([hata, aciklama]) => (
            <div key={hata} className="flex gap-3 p-4 rounded-xl" style={{ background: `rgba(107,39,55,0.04)`, border: `1px solid rgba(107,39,55,0.15)` }}>
              <span className="text-base shrink-0">✕</span>
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: `rgba(107,39,55,0.9)` }}>{hata}</p>
                <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl text-center" style={{ background: PRI }}>
          <p className="font-serif text-xl font-black text-white mb-2">AF1'leriniz için profesyonel bakım</p>
          <p className="text-sm mb-5" style={{ color: `rgba(191,165,184,0.8)` }}>Kapıdan alıyoruz, tertemiz teslim ediyoruz. İstanbul Anadolu yakası.</p>
          <Link href="/siparis" className="inline-block px-7 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all" style={{ background: MUV, color: DRK }}>
            Sipariş Ver →
          </Link>
        </div>
      </article>
    </div>
  );
}
