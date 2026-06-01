"use client";
import React from "react";

interface Mesaj {
  isim: string;
  ilce: string;
  mesaj: string;
  saat: string;
  hizmet?: string;
}

const MESAJLAR: Mesaj[] = [
  {
    isim: "A. Koç",
    ilce: "Kadıköy",
    mesaj: "ya gerçekten inanılmaz olmuş abi. Nike'larımı mahvetmiştim sandım. tertemiz geldi teşekkürler 🙏",
    saat: "14:32",
    hizmet: "Temizlik & Bakım",
  },
  {
    isim: "S. Tekin",
    ilce: "Ataşehir",
    mesaj: "kurye tam vaktinde geldi, çok profesyonel. fiyat performans mükemmeldi. kesinlikle tekrar kullanacağım",
    saat: "19:07",
    hizmet: "Taban Değişimi",
  },
  {
    isim: "M. Doğan",
    ilce: "Üsküdar",
    mesaj: "beyaz sneaker'lar sararmıştı, bembeyaz döndüler! nasıl yaptıysanız elinize sağlık",
    saat: "11:54",
    hizmet: "Temizlik & Bakım",
  },
  {
    isim: "E. Yılmaz",
    ilce: "Ümraniye",
    mesaj: "3 hizmet seçtim %20 indirim geldi. sistemi çok mantıklı. herkese öneririm 👍",
    saat: "16:21",
    hizmet: "Boya & Restorasyon",
  },
];

function WaTick() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="inline-block ml-1 opacity-70">
      <path d="M11.071.653a.75.75 0 0 1 .024 1.06L5.51 7.74 4.03 6.258a.75.75 0 0 0-1.06 1.06l2.02 2.02a.75.75 0 0 0 1.083-.022l6.06-6.51A.75.75 0 0 0 11.07.653z" fill="#53BDEB"/>
      <path d="M15.071.653a.75.75 0 0 1 .024 1.06L9.51 7.74 8.97 7.2l5.04-5.485a.75.75 0 0 1 1.06-.062z" fill="#53BDEB"/>
    </svg>
  );
}

function WaBubble({ mesaj }: { mesaj: Mesaj }) {
  return (
    <div className="flex items-end gap-2 max-w-[280px]">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 mb-1"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", color: "#fff" }}>
        {mesaj.isim.charAt(0)}
      </div>
      <div>
        {/* İsim */}
        <p className="text-[10px] font-bold mb-0.5 px-1" style={{ color: "#075E54" }}>{mesaj.isim} · {mesaj.ilce}</p>
        {/* Baloncuk */}
        <div className="relative px-3 py-2 rounded-[12px] rounded-tl-[3px]"
          style={{ background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.13)" }}>
          {mesaj.hizmet && (
            <p className="text-[9px] font-bold mb-1 px-1.5 py-0.5 rounded-full inline-block"
              style={{ background: "rgba(37,211,102,0.12)", color: "#128C7E" }}>
              {mesaj.hizmet}
            </p>
          )}
          <p className="text-[13px] leading-snug pr-10" style={{ color: "#111", fontFamily: "system-ui, sans-serif" }}>
            {mesaj.mesaj}
          </p>
          <div className="flex items-center justify-end gap-0.5 mt-0.5 -mb-0.5">
            <span className="text-[10px]" style={{ color: "#999" }}>{mesaj.saat}</span>
            <WaTick />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhatsappProof() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {MESAJLAR.map((m, i) => (
        <div key={i} className="p-4 rounded-2xl"
          style={{ background: "#ECE5DD", backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8bdb5' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
          {/* WA header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/10">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#25D366" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="text-[10px] font-bold" style={{ color: "#075E54" }}>WhatsApp</span>
            <span className="text-[9px] ml-auto" style={{ color: "#999" }}>Müşteri mesajı</span>
          </div>
          <WaBubble mesaj={m} />
        </div>
      ))}
    </div>
  );
}
