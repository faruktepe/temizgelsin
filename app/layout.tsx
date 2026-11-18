import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TELEFON } from "@/lib/iletisim";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-serif",
});

const BASE_URL = "https://temizgelsin.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Temiz Gelsin — Kapıdan Kapıya Ayakkabı Bakım & Temizlik | İstanbul",
    template: "%s | Temiz Gelsin",
  },
  description: "İstanbul Anadolu yakasında kapıdan kapıya profesyonel ayakkabı temizleme, bakım ve onarım servisi. Sneaker, deri, süet her çeşit ayakkabı. Kadıköy, Üsküdar, Ataşehir, Ümraniye.",
  keywords: [
    "ayakkabı temizleme servisi istanbul",
    "sneaker temizleme istanbul",
    "ayakkabı bakım servisi",
    "kapıdan kapıya ayakkabı temizleme",
    "ayakkabı yıkama kadıköy",
    "sneaker bakım üsküdar",
    "ayakkabı onarım istanbul",
    "deri bot temizleme",
    "beyaz sneaker temizleme",
    "ayakkabı boyama istanbul",
  ],
  authors: [{ name: "Temiz Gelsin" }],
  creator: "Temiz Gelsin",
  publisher: "Temiz Gelsin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "Temiz Gelsin",
    title: "Temiz Gelsin — Kapıdan Kapıya Ayakkabı Bakım | İstanbul",
    description: "İstanbul Anadolu yakasında kapıdan kapıya profesyonel ayakkabı temizleme ve bakım servisi. Kirli gönder, temiz gelsin.",
    images: [
      {
        url: "/generated/og-image.webp",
        width: 1280,
        height: 960,
        alt: "Temiz Gelsin — Kapıdan Kapıya Ayakkabı Bakım Servisi İstanbul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temiz Gelsin — Kapıdan Kapıya Ayakkabı Bakım | İstanbul",
    description: "İstanbul Anadolu yakasında kapıdan kapıya profesyonel ayakkabı temizleme ve bakım servisi.",
    images: ["/generated/og-image.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Temiz Gelsin",
  description: "İstanbul Anadolu yakasında kapıdan kapıya profesyonel ayakkabı temizleme, bakım ve onarım servisi.",
  url: BASE_URL,
  telephone: TELEFON,
  priceRange: "₺₺",
  image: `${BASE_URL}/temizgelsin-logo.png`,
  logo: `${BASE_URL}/temizgelsin-logo.png`,
  areaServed: [
    { "@type": "City", name: "Kadıköy" },
    { "@type": "City", name: "Üsküdar" },
    { "@type": "City", name: "Ataşehir" },
    { "@type": "City", name: "Ümraniye" },
  ],
  serviceType: [
    "Ayakkabı Temizleme",
    "Sneaker Bakım",
    "Ayakkabı Boyama",
    "Taban Değişimi",
    "Dikiş Onarım",
    "File Tamiri",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kadıköy",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Temiz Gelsin",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} ${dmSans.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
