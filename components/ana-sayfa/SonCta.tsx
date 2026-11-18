import Buton from "@/components/ui/Buton";
import WaIcon from "@/components/ui/WaIcon";
import { WHATSAPP_FOTOGRAF_URL } from "@/lib/iletisim";

export default function SonCta() {
  return (
    <section aria-labelledby="son-baslik" className="bg-volt text-white border-b-[1.5px] border-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
        <h2 id="son-baslik" className="font-bold uppercase tracking-[-0.05em] leading-[0.85] text-[clamp(3.2rem,11vw,10rem)] mb-12">
          Kirli gönder.
          <br />
          <span className="text-ink">Temiz gelsin.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Buton href={WHATSAPP_FOTOGRAF_URL} harici varyant="acik">
            <WaIcon size={18} />
            Fotoğraf at, fiyat al
          </Buton>
          <Buton href="/siparis">Hemen sipariş ver →</Buton>
        </div>
      </div>
    </section>
  );
}
