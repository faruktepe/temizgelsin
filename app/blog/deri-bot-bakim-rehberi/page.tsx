import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Deri Bot Bakımı: Ömrünü 3 Katına Çıkar",
  description: "Deri ayakkabı ve bot bakımında yapılan 5 kritik hata. Doğru cila, krem ve koruyucu seçimi. Profesyonel deri bakımı ile evde bakımın farkı. İstanbul deri bot temizleme.",
  alternates: { canonical: "https://temizgelsin.com.tr/blog/deri-bot-bakim-rehberi" },
  openGraph: {
    title: "Deri Bot Bakım Rehberi | Temiz Gelsin",
    description: "Deri ayakkabı ömrünü uzatacak bakım ipuçları ve profesyonel çözümler.",
    url: "https://temizgelsin.com.tr/blog/deri-bot-bakim-rehberi",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Deri Bot Bakımı: Ömrünü 3 Katına Çıkar",
  author: { "@type": "Organization", name: "Temiz Gelsin" },
  publisher: { "@type": "Organization", name: "Temiz Gelsin" },
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
};

const PRI = "#5B2D6E"; const MUV = "#BFA5B8"; const STN = "#D4C5B0"; const BG = "#F5F0E8"; const DRK = "#2D1A2E";

export default function DeriBotPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DRK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-2xl mx-auto px-6 py-24 pt-32">
        <Link href="/blog" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity mb-8 inline-block" style={{ color: MUV }}>← Blog</Link>

        <div className="rounded-2xl overflow-hidden mb-8 h-56 md:h-72">
          <img src="/generated/blog-deri-bot.webp" alt="Deri bot bakımı" className="w-full h-full object-cover" />
        </div>

        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ background: `rgba(91,45,110,0.08)`, color: PRI }}>Deri Bakım</span>
          <span className="text-[11px]" style={{ color: `rgba(45,26,46,0.35)` }}>7 dk okuma</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight" style={{ color: DRK }}>
          Deri Bot Bakımı: Ömrünü 3 Katına Çıkar
        </h1>
        <p className="text-lg leading-relaxed mb-8" style={{ color: `rgba(45,26,46,0.65)` }}>
          Kaliteli bir deri bot yatırımınızın karşılığını almak istiyorsanız düzenli bakım zorunludur. Doğru bakımla 5 yılda eskiyen deri bot, 15 yıl kullanılabilir. Yanlış bakımla ise 2 yılda mahvolabilir.
        </p>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Deri Bot Bakımının 4 Temel Adımı</h2>
        <div className="space-y_3 mb-8 space-y-3">
          {[
            ["Temizlik", "Kuru fırçayla toz ve gevşek kiri alın. Ardından deri için özel temizleyici veya nemli bezle silin. Asla su doymuş bez kullanmayın."],
            ["Koşullandırma", "Deri krem veya kondisyoner uygulayın. Deri kurur ve çatlarsa bu adımı atlıyorsunuz demektir. Ayda bir yeterli."],
            ["Parlatma/cila", "Renk eşleştirili cila ile deriye renk ve parlaklık verin. Şeffaf cila evrensel kullanıma uygundur."],
            ["Koruma", "Su ve kir itici sprey uygulayın. Özellikle yağmurlu havalarda botunuzu bu korur."],
          ].map(([adim, aciklama]) => (
            <div key={adim} className="flex gap-4 p-4 rounded-xl" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-black" style={{ background: `rgba(91,45,110,0.1)`, color: PRI }}>✓</div>
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: DRK }}>{adim}</p>
                <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Deri Bakımında Yapılan 5 Kritik Hata</h2>
        <div className="space-y-3 mb-8">
          {[
            ["Su ile doğrudan temas", "Deri suya dayanıklı değildir. Islak bezle silmek yerine hafif nemli bezle temizleyin."],
            ["Renksiz cila kullanımı", "Her deri rengi için uygun cila olmaz. Yanlış renk cila kalıcı ton değişikliğine yol açabilir."],
            ["Kalorifer yanına koymak", "Islanan deri botu ısı kaynağının yanına koymak derinin çatlamasına neden olur. Oda sıcaklığında, hava alacak şekilde kurutun."],
            ["Plastik torbada saklamak", "Nem biriktirir, mantar ve küf oluşumuna zemin hazırlar. Bez torba veya açık kutuda saklayın."],
            ["Yıllarca bakımsız bırakmak", "Deri canlı bir malzemedir, kuruduğunda çatlar. En az 2-3 ayda bir kondisyoner uygulayın."],
          ].map(([hata, aciklama]) => (
            <div key={hata} className="flex gap-3 p-4 rounded-xl" style={{ background: `rgba(107,39,55,0.04)`, border: `1px solid rgba(107,39,55,0.15)` }}>
              <span className="shrink-0 text-base">✕</span>
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: `rgba(107,39,55,0.9)` }}>{hata}</p>
                <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Ne Zaman Profesyonel Bakım Gerekir?</h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: `rgba(45,26,46,0.65)` }}>Aşağıdaki durumlardan biri varsa profesyonel bakım şarttır:</p>
        <ul className="space-y-2 mb-8">
          {[
            "Derinin rengi solmuş veya büyük lekeleri var",
            "Deri yüzeyde çatlaklar oluşmaya başlamış",
            "Taban ayrılmaya veya çözülmeye başlamış",
            "Dikiş ipliği kopmuş ya da sökülmüş",
            "Boyama veya renk restorasyon gerekiyor",
          ].map((madde) => (
            <li key={madde} className="flex items-center gap-2 text-sm" style={{ color: `rgba(45,26,46,0.65)` }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-[10px]" style={{ background: PRI }}>→</span>
              {madde}
            </li>
          ))}
        </ul>

        <div className="p-8 rounded-2xl text-center" style={{ background: PRI }}>
          <p className="font-serif text-xl font-black text-white mb-2">Deri botlarınız için profesyonel bakım</p>
          <p className="text-sm mb-5" style={{ color: `rgba(191,165,184,0.8)` }}>Temizlik, boyama ve onarım. Kapıdan kapıya, İstanbul Anadolu yakası.</p>
          <Link href="/siparis" className="inline-block px-7 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all" style={{ background: MUV, color: DRK }}>
            Sipariş Ver →
          </Link>
        </div>
      </article>
    </div>
  );
}
