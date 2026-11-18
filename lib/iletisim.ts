// Sitedeki tüm iletişim bilgileri. Değiştirmek için sadece burayı düzenle.
export const WHATSAPP = "905300779300";
export const TELEFON = `+${WHATSAPP}`;
export const TELEFON_GORUNEN = "0530 077 93 00";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;
export const EPOSTA = "info@temizgelsin.tr";

export const FOTOGRAF_MESAJI = "Merhaba! Ayakkabımın fotoğrafını atıyorum, fiyat alabilir miyim?";
export const WHATSAPP_FOTOGRAF_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(FOTOGRAF_MESAJI)}`;

export const AKTIF_BOLGELER = [
  { slug: "kadikoy", ad: "Kadıköy" },
  { slug: "uskudar", ad: "Üsküdar" },
  { slug: "atasehir", ad: "Ataşehir" },
  { slug: "umraniye", ad: "Ümraniye" },
] as const;
