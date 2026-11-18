import Link from "next/link";
import { AKTIF_BOLGELER, EPOSTA, TELEFON, TELEFON_GORUNEN, WHATSAPP_URL } from "@/lib/iletisim";

const SAYFALAR = [
  { href: "/hizmetler", ad: "Hizmetler" },
  { href: "/paketler", ad: "Paketler" },
  { href: "/galeri", ad: "Galeri" },
  { href: "/blog", ad: "Blog" },
  { href: "/sss", ad: "SSS" },
  { href: "/siparis-takip", ad: "Sipariş takip" },
];

const BASLIK = "font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/45 mb-4";
const LINK = "hover:text-volt transition-colors";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
        <div className="col-span-2 md:col-span-1">
          <img src="/temizgelsin-logo.png?v=1" alt="temizgelsin" width={148} height={38} className="h-9 w-auto brightness-0 invert" />
          <p className="mt-5 text-paper/60 max-w-[28ch]">Kapıdan kapıya ayakkabı bakım servisi. İstanbul, Anadolu yakası.</p>
        </div>
        <nav aria-label="Sayfalar">
          <p className={BASLIK}>Sayfalar</p>
          <ul className="space-y-2">{SAYFALAR.map(s => <li key={s.href}><Link href={s.href} className={LINK}>{s.ad}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Hizmet bölgeleri">
          <p className={BASLIK}>Bölgeler</p>
          <ul className="space-y-2">{AKTIF_BOLGELER.map(b => <li key={b.slug}><Link href={`/hizmet-bolgesi/${b.slug}`} className={LINK}>{b.ad}</Link></li>)}</ul>
        </nav>
        <div className="col-span-2 md:col-span-1">
          <p className={BASLIK}>İletişim</p>
          <ul className="space-y-2">
            <li><a href={`tel:${TELEFON}`} className={LINK}>{TELEFON_GORUNEN}</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={LINK}>WhatsApp</a></li>
            <li><a href={`mailto:${EPOSTA}`} className={LINK}>{EPOSTA}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 font-mono text-[11px] text-paper/40 flex justify-between gap-4">
          <span>© {new Date().getFullYear()} temizgelsin</span>
          <span>Kirli gönder, temiz gelsin.</span>
        </div>
      </div>
    </footer>
  );
}
