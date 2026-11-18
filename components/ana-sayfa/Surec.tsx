import Etiket from "@/components/ui/Etiket";

const ADIMLAR = [
  { no: "01", baslik: "Fotoğraf at", metin: "WhatsApp'tan ayakkabının fotoğrafını gönder. Karar tamamen sende.", sure: "~10 dk'da fiyat" },
  { no: "02", baslik: "Kurye gelir", metin: "Uygun saati seç, kurye kapından alsın. Sen hiçbir yere gitme.", sure: "Aynı gün / ertesi gün" },
  { no: "03", baslik: "Atölyede bakım", metin: "Ayakkabının türüne göre elde temizlik, boya ya da onarım.", sure: "1-3 gün" },
  { no: "04", baslik: "Kapında", metin: "Paketlenmiş halde kapına gelir. Siparişini her an takip edebilirsin.", sure: "Ort. 2 gün toplam" },
];

const BANT = ["Kirli gönder", "Temiz gelsin", "Sneaker", "Deri bot", "Süet", "Boya", "Taban", "Dikiş"];

export default function Surec() {
  return (
    <>
      <div className="bg-volt text-white border-b-[1.5px] border-ink overflow-hidden py-3" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map(k => (
            <div key={k} className="flex shrink-0">
              {BANT.concat(BANT).map((s, i) => (
                <span key={`${k}-${i}`} className="text-xl md:text-2xl font-bold uppercase tracking-tight px-5">
                  {s} <span className="text-white/50 pl-5">✕</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section aria-labelledby="surec-baslik" className="bg-paper text-ink border-b-[1.5px] border-ink">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Etiket className="mb-4">01 · Nasıl çalışır</Etiket>
            <h2 id="surec-baslik" className="font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.2rem,5vw,4rem)] max-w-[14ch]">
              Dört adım. Sen evden çıkmıyorsun.
            </h2>
          </div>
        </div>

        <ol className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 border-t-[1.5px] border-ink">
          {ADIMLAR.map((a, i) => (
            <li
              key={a.no}
              className={`group relative px-5 md:px-8 py-8 md:py-10 border-ink border-b-[1.5px] lg:border-b-0 ${i < 3 ? "lg:border-r-[1.5px]" : ""} ${i % 2 === 0 ? "sm:border-r-[1.5px]" : ""} ${i === 3 ? "bg-ink text-paper" : "hover:bg-white transition-colors"}`}
            >
              <span className={`font-mono text-sm font-semibold ${i === 3 ? "text-volt" : "text-ink/40"}`}>{a.no}</span>
              <h3 className="text-2xl font-bold tracking-tight mt-8 mb-3">{a.baslik}</h3>
              <p className={`text-[15px] leading-snug mb-8 ${i === 3 ? "text-paper/70" : "text-ink/65"}`}>{a.metin}</p>
              <span className={`font-mono text-[11px] font-semibold uppercase tracking-[0.1em] px-2 py-1 border-[1.5px] ${i === 3 ? "border-paper/40" : "border-ink"}`}>
                {a.sure}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
