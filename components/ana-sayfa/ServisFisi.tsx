type Foto = { before_url: string | null; after_url: string | null };

const ADIMLAR = [
  { ad: "Fotoğraf geldi, fiyat verildi", saat: "10 dk", durum: "tamam" },
  { ad: "Kurye kapıdan teslim aldı", saat: "aynı gün", durum: "tamam" },
  { ad: "Atölyede: derin temizlik + cila", saat: "şu an", durum: "aktif" },
  { ad: "Paketlenip kapına geliyor", saat: "~2 gün", durum: "bekliyor" },
] as const;

function Isaret({ durum }: { durum: (typeof ADIMLAR)[number]["durum"] }) {
  if (durum === "tamam") return <span className="w-4 h-4 grid place-items-center bg-ink text-paper text-[10px] leading-none">✓</span>;
  if (durum === "aktif") return <span className="w-4 h-4 grid place-items-center"><span className="w-2.5 h-2.5 bg-volt motion-safe:animate-pulse" /></span>;
  return <span className="w-4 h-4 border-[1.5px] border-ink/40" />;
}

/** Hero'daki sipariş fişi: süreci müşteriye bir takip ekranı gibi gösterir. */
export default function ServisFisi({ foto }: { foto: Foto | null }) {
  const fotoVar = Boolean(foto?.before_url && foto?.after_url);

  return (
    <div className="relative bg-white border-[1.5px] border-ink shadow-[8px_8px_0_var(--color-ink)] font-mono text-[13px]">
      <div className="flex items-center justify-between px-5 py-3 border-b-[1.5px] border-ink bg-ink text-paper">
        <span className="font-semibold tracking-wider">SERVİS FİŞİ</span>
        <span className="text-paper/60 text-[11px]">ÖRNEK SİPARİŞ</span>
      </div>

      {fotoVar && (
        <div className="grid grid-cols-2 border-b-[1.5px] border-ink">
          {[{ src: foto!.before_url!, etiket: "ÖNCE" }, { src: foto!.after_url!, etiket: "SONRA" }].map((f, i) => (
            <div key={f.etiket} className={`relative aspect-[4/3] bg-fog ${i === 0 ? "border-r-[1.5px] border-ink" : ""}`}>
              <img src={f.src} alt={`Bakım ${f.etiket.toLowerCase()}`} width={400} height={300} className="absolute inset-0 w-full h-full object-cover" />
              <span className={`absolute top-2 left-2 px-1.5 py-0.5 text-[10px] font-semibold ${i === 0 ? "bg-white text-ink" : "bg-volt text-white"}`}>{f.etiket}</span>
            </div>
          ))}
        </div>
      )}

      <dl className="px-5 py-4 space-y-1.5 border-b-[1.5px] border-dashed border-ink/30">
        {[["SİPARİŞ", "#TG-0412"], ["AYAKKABI", "Air Jordan 1 · Beyaz"], ["HİZMET", "Temizlik & Bakım"], ["ADRES", "Kadıköy"]].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4">
            <dt className="text-ink/50">{k}</dt>
            <dd className="text-ink font-semibold text-right">{v}</dd>
          </div>
        ))}
      </dl>

      <ol className="px-5 py-4 space-y-3">
        {ADIMLAR.map(a => (
          <li key={a.ad} className="flex items-center gap-3">
            <Isaret durum={a.durum} />
            <span className={`flex-1 ${a.durum === "bekliyor" ? "text-ink/40" : a.durum === "aktif" ? "text-volt font-semibold" : "text-ink"}`}>{a.ad}</span>
            <span className="text-[11px] text-ink/45">{a.saat}</span>
          </li>
        ))}
      </ol>

      <div className="px-5 pb-5">
        <div className="h-2 bg-fog overflow-hidden">
          <div className="h-full w-[72%] bg-volt tg-dolum" />
        </div>
        <div className="flex justify-between mt-2 text-[11px] text-ink/50">
          <span>İLERLEME</span>
          <span>%72</span>
        </div>
      </div>

      <div className="tg-perfore h-[9px] absolute -bottom-[9px] left-0 right-0" aria-hidden="true" />
    </div>
  );
}
