import { NextRequest, NextResponse } from "next/server";

const MESAJLAR: Record<string, string> = {
  "Teklif Bekleniyor": "Merhaba {ad} 👋 Temiz Gelsin'e hoş geldiniz! Siparişinizi aldık ({no}). En kısa sürede fiyat teklifimizi ileteceğiz.",
  "Onaylandı":         "Merhaba {ad} ✅ Sipariş {no} onaylandı! Kurye kararlaştırılan saatte kapınıza gelecek.",
  "Kuryede":           "Merhaba {ad} 🚴 Kuryemiz az önce ayakkabılarınızı teslim aldı. Bakım süreciniz başlıyor!",
  "İşlemde":           "Merhaba {ad} 🧴 Ayakkabılarınız şu an uzman ellerinde. İşlem tamamlandığında sizi haberdar edeceğiz.",
  "Tamamlandı":        "Merhaba {ad} ✨ Ayakkabılarınızın bakımı tamamlandı! Yakında kapınıza teslim edilecek.",
  "Teslim Edildi":     "Merhaba {ad} 📦 Ayakkabılarınız teslim edildi. Umarız memnun kalmışsınızdır! Tekrar görüşmek üzere 🙌",
};

export async function POST(req: NextRequest) {
  const { orderId, status, customerName, customerPhone, orderNumber } = await req.json();

  if (!customerPhone || !status) {
    return NextResponse.json({ error: "Telefon veya durum eksik" }, { status: 400 });
  }

  const template = MESAJLAR[status] ?? `Merhaba ${customerName}, siparişiniz (${orderNumber}) güncellendi: ${status}`;
  const message = template
    .replace("{ad}", customerName || "")
    .replace("{no}", orderNumber || orderId || "");

  const digits = customerPhone.replace(/\D/g, "");
  const phone = digits.startsWith("0") ? "90" + digits.slice(1) : digits.startsWith("90") ? digits : "90" + digits;
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return NextResponse.json({ waUrl, message });
}
