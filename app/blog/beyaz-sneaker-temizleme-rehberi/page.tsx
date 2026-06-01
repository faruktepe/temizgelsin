import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beyaz Sneaker Temizleme Rehberi: Sararmadan Kurtulmanın Yolları",
  description: "Beyaz sneaker'lar neden sararır? Evde yapılabilecekler ve profesyonel temizliğin farkı. Nike, Adidas, New Balance için adım adım beyaz sneaker temizleme rehberi.",
  alternates: { canonical: "https://temizgelsin.com.tr/blog/beyaz-sneaker-temizleme-rehberi" },
  openGraph: {
    title: "Beyaz Sneaker Temizleme Rehberi | Temiz Gelsin",
    description: "Beyaz sneaker sarardı ne yapmalı? Adım adım rehber ve profesyonel çözümler.",
    url: "https://temizgelsin.com.tr/blog/beyaz-sneaker-temizleme-rehberi",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beyaz Sneaker Temizleme Rehberi: Sararmadan Kurtulmanın Yolları",
  description: "Beyaz sneaker temizleme ve sararmayı önleme rehberi.",
  author: { "@type": "Organization", name: "Temiz Gelsin" },
  publisher: { "@type": "Organization", name: "Temiz Gelsin", logo: { "@type": "ImageObject", url: "https://temizgelsin.com.tr/temizgelsin-logo.png" } },
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://temizgelsin.com.tr/blog/beyaz-sneaker-temizleme-rehberi" },
};

const PRI = "#5B2D6E"; const MUV = "#BFA5B8"; const STN = "#D4C5B0"; const BG = "#F5F0E8"; const DRK = "#2D1A2E";

export default function BeyazSneakerPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DRK }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-2xl mx-auto px-6 py-24 pt-32">
        <Link href="/blog" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity mb-8 inline-block" style={{ color: MUV }}>← Blog</Link>

        <div className="rounded-2xl overflow-hidden mb-8 h-56 md:h-72">
          <img src="/generated/blog-beyaz-sneaker.webp" alt="Beyaz sneaker temizleme" className="w-full h-full object-cover" />
        </div>

        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ background: `rgba(91,45,110,0.08)`, color: PRI }}>Sneaker Bakım</span>
          <span className="text-[11px]" style={{ color: `rgba(45,26,46,0.35)` }}>5 dk okuma</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight" style={{ color: DRK }}>
          Beyaz Sneaker Temizleme Rehberi: Sararmadan Kurtulmanın Yolları
        </h1>

        <p className="text-lg leading-relaxed mb-8" style={{ color: `rgba(45,26,46,0.65)` }}>
          Beyaz sneaker'lar, her kombine uyan kral parçalardır — ta ki sararmaya başlayana kadar. Peki sararmayı önlemek ve sararmış beyaz ayakkabıları kurtarmak mümkün mü? Mümkün, ama doğru yöntemi bilmek gerekiyor.
        </p>

        <div className="p-5 rounded-2xl mb-8 border-l-4" style={{ background: `rgba(91,45,110,0.05)`, borderColor: PRI }}>
          <p className="text-sm font-semibold" style={{ color: DRK }}>Bu yazıda öğrenecekleriniz:</p>
          <ul className="mt-2 space-y-1 text-sm" style={{ color: `rgba(45,26,46,0.65)` }}>
            <li>• Beyaz sneaker neden sararır?</li>
            <li>• Evde temizlik için doğru malzemeler</li>
            <li>• Sole yellowing (taban sararması) çözümü</li>
            <li>• Profesyonel temizliğin evden farkı</li>
            <li>• Sararmayı önleme ipuçları</li>
          </ul>
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Beyaz Sneaker Neden Sararır?</h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: `rgba(45,26,46,0.65)` }}>
          Beyaz sneaker sararmasının birden fazla nedeni vardır. Bunların büyük çoğunluğu önlenebilirken, bir kısmı zamanın kaçınılmaz bir sonucudur.
        </p>
        <ul className="space-y-3 mb-8">
          {[
            ["UV ışığı oksidasyonu", "Güneş ışığı, özellikle kauçuk tabanları ve bazı kumaşları oksitleyerek sararır. Bu en sık karşılaşılan nedendir."],
            ["Yanlış temizlik ürünleri", "Agresif kimyasallar veya çamaşır suyu, beyazı sarıya çevirir. Sulandırılmadan kullanılan çamaşır suyu en büyük düşmandır."],
            ["Yanlış kurutma", "Doğrudan güneş ışığında kurutulan sneaker'lar hızla sararır. Gölgede, hava akımlı ortamda kurutmak şarttır."],
            ["Birikmiş kir ve ter", "Uzun süre temizlenmeyen ayakkabılarda kir katmanları zamanla kimyasal reaksiyona girerek sarıya dönüşür."],
          ].map(([baslik, aciklama]) => (
            <li key={baslik} className="flex gap-3 p-4 rounded-xl" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ background: PRI }} />
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: DRK }}>{baslik}</p>
                <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Evde Beyaz Sneaker Temizleme: Adım Adım</h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: `rgba(45,26,46,0.65)` }}>Hafif kirlenmeler için evde şu yöntemi uygulayabilirsiniz:</p>
        <div className="space-y-3 mb-8">
          {[
            ["1. Kuru fırçalama", "Önce kuru bir ayakkabı fırçasıyla gevşek toprak ve kiri temizleyin. Islak temizliğe geçmeden önce bu adım çok önemlidir."],
            ["2. Sabun solüsyonu hazırlayın", "Ilık su ve birkaç damla bulaşık deterjanı karıştırın. Çamaşır suyu veya aseton kesinlikle kullanmayın."],
            ["3. Yumuşak fırçayla ovun", "Solüsyona batırılmış yumuşak bir diş fırçasıyla dairesel hareketlerle ayakkabıyı temizleyin. Bağcıkları çıkarıp ayrı yıkayın."],
            ["4. Temiz bezle silin", "Sabun kalıntısı bırakmadan nemli bir bezle silin. Birkaç kez tekrarlayın."],
            ["5. Gölgede kurutun", "Doğrudan güneş ışığından uzak, hava akımlı bir yerde kurutun. İçine kağıt tıkayın, şeklini korur."],
          ].map(([adim, aciklama]) => (
            <div key={adim} className="flex gap-4 p-4 rounded-xl" style={{ background: "#fff", border: `1px solid ${STN}` }}>
              <span className="text-sm font-black shrink-0 w-6" style={{ color: PRI }}>{adim.split(".")[0]}.</span>
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: DRK }}>{adim.split(". ")[1]}</p>
                <p className="text-sm" style={{ color: `rgba(45,26,46,0.55)` }}>{aciklama}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Sole Yellowing (Taban Sararması) Nasıl Giderilir?</h2>
        <p className="text-base leading-relaxed mb-6" style={{ color: `rgba(45,26,46,0.65)` }}>
          Taban sararması, sneaker dünyasının en can sıkıcı sorunlarından biridir. Özellikle Nike Air Force 1, Adidas Stan Smith ve Converse gibi ikoniklerde çok görülür. Taban sararmasının evde çözümü oldukça zordur; piyasadaki "sole sauce" ürünleri kısmen yardımcı olsa da kalıcı çözüm profesyonel temizlikte yatmaktadır.
        </p>
        <div className="p-5 rounded-2xl mb-8" style={{ background: `rgba(91,45,110,0.06)`, border: `1px solid rgba(91,45,110,0.15)` }}>
          <p className="text-sm font-bold mb-2" style={{ color: DRK }}>Profesyonel buhar temizliği ile fark:</p>
          <p className="text-sm" style={{ color: `rgba(45,26,46,0.65)` }}>
            Temiz Gelsin atölyesinde uygulanan buhar temizliği, ev yöntemlerinin ulaşamayacağı derinliklere nüfuz eder. Taban sararması dahil derin kir tabakalarını %90 oranında gidermek mümkündür.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: DRK }}>Sararmayı Önleme İpuçları</h2>
        <ul className="space-y-2 mb-8">
          {[
            "Her kullanım sonrası kuru fırçayla temizleyin",
            "Doğrudan güneş ışığında bırakmayın, kutusunda ya da gölgede saklayın",
            "Mümkünse ayakkabı koruyucu sprey kullanın (su ve kir itici)",
            "2-3 haftada bir hafif temizlik yapın, birikime izin vermeyin",
            "Islak günlerde beyaz sneaker giymekten kaçının",
          ].map((ipucu) => (
            <li key={ipucu} className="flex items-center gap-2 text-sm" style={{ color: `rgba(45,26,46,0.65)` }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-[10px]" style={{ background: PRI }}>✓</span>
              {ipucu}
            </li>
          ))}
        </ul>

        <div className="p-8 rounded-2xl text-center" style={{ background: PRI }}>
          <p className="font-serif text-xl font-black text-white mb-2">Sararmış sneaker'larınız mı var?</p>
          <p className="text-sm mb-5" style={{ color: `rgba(191,165,184,0.8)` }}>Kapıdan teslim alıyoruz, profesyonel buhar temizliğiyle yeniliyoruz. İstanbul Anadolu yakası.</p>
          <Link href="/siparis" className="inline-block px-7 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all" style={{ background: MUV, color: DRK }}>
            Sipariş Ver →
          </Link>
        </div>
      </article>
    </div>
  );
}
