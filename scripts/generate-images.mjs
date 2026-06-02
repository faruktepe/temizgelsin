/**
 * Replicate ile temizgelsin.com.tr için görsel üretim scripti
 * Kullanım: REPLICATE_API_TOKEN=r8_xxx node scripts/generate-images.mjs
 *
 * Veya .env.local'daki token otomatik okunur:
 * node scripts/generate-images.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "../public/generated");

// .env.local'dan token oku (eğer process.env'de yoksa)
function loadEnv() {
  const envPath = path.join(__dirname, "../.env.local");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf8").split("\n");
    for (const line of lines) {
      const [key, ...rest] = line.split("=");
      if (key && rest.length && !process.env[key.trim()]) {
        process.env[key.trim()] = rest.join("=").trim();
      }
    }
  }
}

loadEnv();

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("❌ REPLICATE_API_TOKEN bulunamadı. .env.local dosyasına ekle.");
  process.exit(1);
}

// Üretilecek görseller
const IMAGES = [
  {
    filename: "hero-main.webp",
    prompt:
      "Professional sneaker cleaning service, split before and after composition, white Nike Air Force 1, left side dirty and worn, right side pristine white, dark purple accent lighting, luxury studio photography, clean minimal background, high end commercial photography",
    width: 1200,
    height: 630,
  },
  {
    filename: "hero-courier.webp",
    prompt:
      "Young professional courier in casual dark clothing holding a luxury sneaker bag at a modern apartment door in Istanbul, warm purple toned lighting, shallow depth of field, professional photography, clean composition",
    width: 800,
    height: 600,
  },
  {
    filename: "paket-bakim.webp",
    prompt:
      "Single white luxury sneaker being cleaned with professional brush and cleaning foam, dark elegant background with soft purple tones, studio product photography, minimalist composition, high end fashion editorial style",
    width: 600,
    height: 600,
  },
  {
    filename: "paket-mevsimlik.webp",
    prompt:
      "Four luxury sneakers arranged in a seasonal composition representing spring summer autumn winter, clean white background, top down flat lay photography, different colorways, minimalist editorial fashion photography",
    width: 600,
    height: 600,
  },
  {
    filename: "paket-vip.webp",
    prompt:
      "Premium luxury shoe care kit on dark marble surface, professional cleaning tools, brush set and polish bottles, golden accents, ultra premium product photography, dark elegant background with purple undertones",
    width: 600,
    height: 600,
  },
  {
    filename: "blog-sneaker-bakim.webp",
    prompt:
      "Minimalist blog header image showing sneaker care products on clean white surface, soft purple shadows, flat lay composition, editorial photography style, clean and modern aesthetic",
    width: 1200,
    height: 480,
  },
  {
    filename: "nasil-calisir-1.webp",
    prompt:
      "Person taking a photo of their dirty sneakers on their phone, modern apartment interior, warm natural lighting, candid lifestyle photography, clean and minimal composition",
    width: 600,
    height: 600,
  },
  {
    filename: "nasil-calisir-2.webp",
    prompt:
      "Friendly courier at apartment door receiving a shoe bag from customer, urban Istanbul neighborhood, daytime, warm natural light, lifestyle photography, genuine interaction",
    width: 600,
    height: 600,
  },
  {
    filename: "nasil-calisir-3.webp",
    prompt:
      "Professional sneaker cleaning workshop interior, technician carefully cleaning white sneakers, professional tools and equipment, clean modern workspace, documentary photography style",
    width: 600,
    height: 600,
  },
];

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function createPrediction(prompt, width, height) {
  const res = await fetch("https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      Prefer: "wait",
    },
    body: JSON.stringify({
      input: {
        prompt,
        width,
        height,
        num_outputs: 1,
        output_format: "webp",
        output_quality: 90,
        go_fast: true,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API hatası (${res.status}): ${err}`);
  }

  return res.json();
}

async function pollPrediction(predictionId) {
  const maxAttempts = 30;
  for (let i = 0; i < maxAttempts; i++) {
    await sleep(2000);
    const res = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const data = await res.json();

    if (data.status === "succeeded") return data.output?.[0];
    if (data.status === "failed") throw new Error(`Üretim başarısız: ${data.error}`);

    process.stdout.write(".");
  }
  throw new Error("Zaman aşımı");
}

async function downloadImage(url, outputPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`İndirme hatası: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
}

async function generateImage(image) {
  const outputPath = path.join(OUTPUT_DIR, image.filename);

  console.log(`\n🎨 Üretiliyor: ${image.filename}`);
  console.log(`   Prompt: ${image.prompt.slice(0, 80)}...`);

  try {
    const prediction = await createPrediction(image.prompt, image.width, image.height);

    let imageUrl;
    if (prediction.status === "succeeded") {
      imageUrl = prediction.output?.[0];
    } else {
      process.stdout.write("   Bekleniyor");
      imageUrl = await pollPrediction(prediction.id);
      console.log();
    }

    if (!imageUrl) throw new Error("Görsel URL'si alınamadı");

    await downloadImage(imageUrl, outputPath);
    console.log(`   ✅ Kaydedildi: ${outputPath}`);
  } catch (err) {
    console.error(`   ❌ Hata: ${err.message}`);
    if (!fs.existsSync(outputPath)) {
      console.log(`   ⚠️  Mevcut görsel korunuyor (dosya yoksa atlanıyor)`);
    } else {
      console.log(`   ⚠️  Mevcut görsel korunuyor`);
    }
  }
}

// Belirli görselleri seçerek üretmek için: node scripts/generate-images.mjs hero-main paket-bakim
async function main() {
  const args = process.argv.slice(2);
  const toGenerate = args.length
    ? IMAGES.filter((img) => args.some((a) => img.filename.includes(a)))
    : IMAGES;

  if (!toGenerate.length) {
    console.error("❌ Eşleşen görsel bulunamadı. Mevcut dosyalar:");
    IMAGES.forEach((img) => console.log(`   - ${img.filename}`));
    process.exit(1);
  }

  console.log(`\n🚀 Temizgelsin Görsel Üretici`);
  console.log(`   ${toGenerate.length} görsel üretilecek`);
  console.log(`   Çıktı: ${OUTPUT_DIR}\n`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const image of toGenerate) {
    await generateImage(image);
  }

  console.log("\n🎉 Tamamlandı!");
}

main().catch((err) => {
  console.error("Kritik hata:", err);
  process.exit(1);
});
