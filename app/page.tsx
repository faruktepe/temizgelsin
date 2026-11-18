import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WaIcon from "@/components/ui/WaIcon";
import Hero from "@/components/ana-sayfa/Hero";
import Surec from "@/components/ana-sayfa/Surec";
import HizmetListesi from "@/components/ana-sayfa/HizmetListesi";
import FiyatHesapla from "@/components/ana-sayfa/FiyatHesapla";
import GaleriOnizleme from "@/components/ana-sayfa/GaleriOnizleme";
import BolgeKontrol from "@/components/ana-sayfa/BolgeKontrol";
import Iletisim from "@/components/ana-sayfa/Iletisim";
import SonCta from "@/components/ana-sayfa/SonCta";
import { WHATSAPP_FOTOGRAF_URL } from "@/lib/iletisim";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Nav active="/" />
      <main>
        <Hero />
        <Surec />
        <HizmetListesi />
        <FiyatHesapla />
        <GaleriOnizleme />
        <BolgeKontrol />
        <Iletisim />
        <SonCta />
      </main>
      <Footer />

      <a
        href={WHATSAPP_FOTOGRAF_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yaz"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 grid place-items-center bg-ink text-paper border-[1.5px] border-ink shadow-[4px_4px_0_var(--color-volt)] motion-safe:hover:-translate-y-0.5 transition-transform"
      >
        <WaIcon size={24} />
      </a>
    </div>
  );
}
