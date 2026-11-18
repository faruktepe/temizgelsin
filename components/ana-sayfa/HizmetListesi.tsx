import Link from "next/link";
import Etiket from "@/components/ui/Etiket";

type Hizmet = { no: string; ad: string; aciklama: string; fiyat: string; sure: string; href: string };

// Sadece kendi detay sayfası olan hizmetler o sayfaya gider, diğerleri hizmetler listesine.
const HIZMETLER: Hizmet[] = [
  { no: "01", ad: "Temizlik & Bakım", aciklama: "Derin temizlik, cila, bağcık, UV sterilizasyon.", fiyat: "₺800+", sure: "1-2 gün", href: "/hizmetler/temizlik-bakim" },
  { no: "02", ad: "Boya & Restorasyon", aciklama: "Orijinal renk eşleştirme, deri yüzey onarımı, koruyucu vernik.", fiyat: "₺1.200+", sure: "2-3 gün", href: "/hizmetler/boya-restorasyon" },
  { no: "03", ad: "Taban Değişimi", aciklama: "Dış taban, iç taban, topuk tamiri. Her marka.", fiyat: "₺950+", sure: "2-3 gün", href: "/hizmetler/taban-degisimi" },
  { no: "04", ad: "Dikiş & Onarım", aciklama: "Yırtık dikiş, çoraplık, fort ve fermuar tamiri.", fiyat: "₺250+", sure: "1-2 gün", href: "/hizmetler/dikis-onarim" },
  { no: "05", ad: "File Tamiri", aciklama: "Hasarlı file kısımların onarımı ve renk uyumu.", fiyat: "₺750+", sure: "1-2 gün", href: "/hizmetler" },
  { no: "06", ad: "İç Taban Değişimi", aciklama: "Komple iç taban, koku giderme, anti-bakteriyel.", fiyat: "₺750+", sure: "1-2 gün", href: "/hizmetler" },
];

export default function HizmetListesi() {
  return (
    <section aria-labelledby="hizmet-baslik" className="bg-paper text-ink border-b-[1.5px] border-ink">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Etiket className="mb-4">02 · Hizmetler</Etiket>
          <h2 id="hizmet-baslik" className="font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.2rem,5vw,4rem)]">
            Fiyat listesi.
          </h2>
        </div>
        <p className="font-mono text-xs text-ink/60 max-w-[38ch]">
          Fiyatlar başlangıç fiyatıdır. Kesin fiyatı fotoğrafa bakıp veriyoruz. 3+ hizmette %20 indirim.
        </p>
      </div>

      <ul className="max-w-7xl mx-auto border-t-[1.5px] border-ink">
        {HIZMETLER.map(h => (
          <li key={h.no} className="border-b-[1.5px] border-ink last:border-b-0">
            <Link
              href={h.href}
              className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1.2fr_1.6fr_7rem_7rem_2rem] items-center gap-x-4 px-5 md:px-10 py-5 md:py-6 transition-colors hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper outline-none"
            >
              <span className="font-mono text-sm text-ink/40 group-hover:text-volt">{h.no}</span>
              <span className="text-xl md:text-2xl font-bold tracking-tight">{h.ad}</span>
              <span className="hidden md:block text-[15px] text-ink/60 group-hover:text-paper/70">{h.aciklama}</span>
              <span className="hidden md:block font-mono text-xs uppercase text-ink/50 group-hover:text-paper/60">{h.sure}</span>
              <span className="font-mono text-base md:text-lg font-semibold text-right">{h.fiyat}</span>
              <span className="hidden md:block text-right motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
