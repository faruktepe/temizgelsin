import Link from "next/link";
import Etiket from "@/components/ui/Etiket";
import WaIcon from "@/components/ui/WaIcon";
import { AKTIF_BOLGELER, EPOSTA, TELEFON, TELEFON_GORUNEN, WHATSAPP_FOTOGRAF_URL } from "@/lib/iletisim";

const KANALLAR = [
  { etiket: "WhatsApp", deger: TELEFON_GORUNEN, alt: "Fotoğraf at, fiyat al", href: WHATSAPP_FOTOGRAF_URL, harici: true, vurgulu: true },
  { etiket: "Telefon", deger: TELEFON_GORUNEN, alt: "Ara, konuşalım", href: `tel:${TELEFON}`, harici: false, vurgulu: false },
  { etiket: "E-posta", deger: EPOSTA, alt: "Kurumsal ve diğer talepler", href: `mailto:${EPOSTA}`, harici: false, vurgulu: false },
];

export default function Iletisim() {
  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="bg-white text-ink border-b-[1.5px] border-ink scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10">
        <Etiket className="mb-4">05 · İletişim</Etiket>
        <h2 id="iletisim-baslik" className="font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.2rem,5vw,4rem)]">
          Bize ulaş.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 border-t-[1.5px] border-ink">
        {KANALLAR.map((k, i) => (
          <a
            key={k.etiket}
            href={k.href}
            {...(k.harici ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`group px-5 md:px-8 py-8 md:py-10 border-ink border-b-[1.5px] md:border-b-0 ${i < 2 ? "md:border-r-[1.5px]" : ""} transition-colors ${
              k.vurgulu ? "bg-volt text-white hover:bg-ink" : "hover:bg-ink hover:text-paper"
            }`}
          >
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] opacity-70 flex items-center gap-2">
              {k.vurgulu && <WaIcon size={14} />}
              {k.etiket}
            </span>
            <span className="block text-2xl md:text-[1.7rem] font-bold tracking-tight mt-6 mb-2 break-all">{k.deger}</span>
            <span className="text-[15px] opacity-70 group-hover:opacity-100">{k.alt} →</span>
          </a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 border-t-[1.5px] border-ink font-mono text-xs flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-semibold uppercase tracking-[0.12em] text-ink/50">Hizmet bölgesi</span>
        {AKTIF_BOLGELER.map(b => (
          <Link key={b.slug} href={`/hizmet-bolgesi/${b.slug}`} className="inline-flex items-center gap-1.5 hover:text-volt">
            <span className="w-1.5 h-1.5 bg-live" aria-hidden="true" />
            {b.ad}
          </Link>
        ))}
        <Link href="/siparis-takip" className="sm:ml-auto font-semibold border-b-[1.5px] border-ink hover:text-volt hover:border-volt">
          Siparişini takip et →
        </Link>
      </div>
    </section>
  );
}
