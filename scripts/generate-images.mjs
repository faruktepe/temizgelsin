/**
 * Temiz Gelsin — Replicate Görsel Üretici
 * Model: black-forest-labs/flux-schnell
 *
 * Strateji (konsey kararı):
 * - Sahte before/after YOK — güven öldürür
 * - Sahte insan/kurye sahnesi YOK — özgün hissetmez
 * - SADECE: close-up doku, malzeme, süreç detayları
 *   Bunlar "temsili" olsa bile güven sarsmaz, atmosfer kurar
 *
 * Kullanım:
 *   REPLICATE_API_TOKEN=r8_xxx node scripts/generate-images.mjs
 *   node scripts/generate-images.mjs hero-sole  ← tek görsel
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "../public/generated");

function loadEnv() {
  const envPath = path.join(__dirname, "../.env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const eq = line.indexOf("=");
    if (eq < 1) continue;
    const k = line.slice(0, eq).trim();
    const v = line.slice(eq + 1).trim();
    if (k && !process.env[k]) process.env[k] = v;
  }
}
loadEnv();

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("❌  REPLICATE_API_TOKEN bulunamadı — .env.local dosyasına ekle: REPLICATE_API_TOKEN=r8_...");
  process.exit(1);
}

/* ─── GÖRSEL LİSTESİ ─────────────────────────────────────────────────────── */
const IMAGES = [

  // ── HERO / ANA SAYFA ──────────────────────────────────────────────────────
  {
    filename: "hero-sole-closeup.webp",
    kullanim: "Ana sayfa hero arka plan veya yarı saydam overlay",
    prompt:
      "Extreme close-up macro photograph of a pristine white rubber sneaker sole, " +
      "dramatic side lighting from the left, deep dark purple background (#2D1A2E), " +
      "ultra sharp focus on the sole texture and tread pattern, " +
      "tiny dust particles floating in the light beam, " +
      "hyper realistic, luxury product photography, editorial magazine quality, " +
      "no text, no people, aspect ratio wide",
    width: 1200,
    height: 630,
  },
  {
    filename: "hero-sneaker-dark.webp",
    kullanim: "Ana sayfa hero — koyu arka plan, tek ayakkabı, güçlü ışık",
    prompt:
      "Studio product photography of a clean white Nike Air Force 1 sneaker, " +
      "floating at a 45-degree angle, deep dark background almost black with purple tones, " +
      "single dramatic spotlight from above-right creating sharp shadows, " +
      "sneaker is absolutely pristine and clean, professional retouching quality, " +
      "no reflections on floor, minimal composition, high contrast, " +
      "commercial photography for luxury brand",
    width: 1200,
    height: 630,
  },

  // ── HİZMET DETAY CLOSE-UP'LAR ─────────────────────────────────────────────
  {
    filename: "closeup-fırça.webp",
    kullanim: "Temizlik & Bakım hizmet sayfası",
    prompt:
      "Extreme macro close-up of a professional horsehair cleaning brush touching " +
      "a white leather sneaker surface, " +
      "white foam forming at the contact point, soft foam bubbles, " +
      "warm focused lighting, shallow depth of field, " +
      "clean and satisfying composition, craft and care aesthetic, " +
      "no face visible, no people, only hands and brush if needed",
    width: 800,
    height: 800,
  },
  {
    filename: "closeup-boya.webp",
    kullanim: "Boya & Restorasyon hizmet sayfası",
    prompt:
      "Macro close-up photograph of a small fine artist brush applying deep burgundy " +
      "leather paint onto a worn shoe surface, " +
      "paint blending into cracked leather texture, " +
      "transformation in progress, craft workshop aesthetic, " +
      "warm golden side lighting, very shallow depth of field, " +
      "artisan craftsmanship feel, no people visible",
    width: 800,
    height: 800,
  },
  {
    filename: "closeup-taban.webp",
    kullanim: "Taban Değişimi hizmet sayfası",
    prompt:
      "Close-up macro photograph of fresh black rubber sole being pressed onto " +
      "the bottom of a shoe in a professional repair workshop, " +
      "shoe cobbler tools visible in soft background blur, " +
      "dramatic workshop lighting, satisfying craft detail, " +
      "dark aesthetic, no faces",
    width: 800,
    height: 800,
  },
  {
    filename: "closeup-dikiş.webp",
    kullanim: "Dikiş & Onarım hizmet sayfası",
    prompt:
      "Macro close-up of skilled hands stitching white thread along the welt " +
      "of a leather sneaker using a curved needle, " +
      "workshop bench background blurred, warm focused light, " +
      "intricate stitch detail sharp and clear, " +
      "craft and precision aesthetic, artisan quality",
    width: 800,
    height: 800,
  },

  // ── SÜREÇ ADIM GÖRSELLERİ ─────────────────────────────────────────────────
  {
    filename: "step-order.webp",
    kullanim: "Nasıl çalışır — Adım 1: Sipariş ver",
    prompt:
      "Top-down flat lay of a modern smartphone on a cream linen surface (#F5F0E8), " +
      "screen shows a simple order confirmation with purple accent (#5B2D6E), " +
      "one white sneaker partially visible at the corner, " +
      "minimal composition, warm neutral tones, " +
      "editorial lifestyle photography, no text readable on screen",
    width: 600,
    height: 600,
  },
  {
    filename: "step-pickup.webp",
    kullanim: "Nasıl çalışır — Adım 2: Kurye gelir",
    prompt:
      "Close-up of a canvas tote bag being handed over at an apartment door, " +
      "white sneakers visible inside the bag, " +
      "warm natural light from doorway, shallow depth of field, " +
      "urban lifestyle photography, Istanbul apartment door aesthetic, " +
      "no faces visible, focus on the bag and sneakers",
    width: 600,
    height: 600,
  },
  {
    filename: "step-clean.webp",
    kullanim: "Nasıl çalışır — Adım 3: Teslim edilir",
    prompt:
      "Pristine white sneakers wrapped in clean tissue paper inside a simple box, " +
      "soft studio lighting, minimal composition on cream background, " +
      "packaging aesthetic, premium delivery unboxing feel, " +
      "warm tones, high end product photography",
    width: 600,
    height: 600,
  },

  // ── TEKSTÜRELxATMOSFER ────────────────────────────────────────────────────
  {
    filename: "texture-deri.webp",
    kullanim: "Deri bakım yazıları / blog için",
    prompt:
      "Extreme close-up macro of fine grain leather texture, " +
      "light catching the natural grain pattern, subtle cracks visible, " +
      "warm amber side lighting, abstract leather background, " +
      "luxury material photography, no color overlays",
    width: 800,
    height: 500,
  },
  {
    filename: "texture-sole.webp",
    kullanim: "Taban değişimi blog / SSS için",
    prompt:
      "Close-up macro of a well-worn rubber sneaker outsole tread pattern, " +
      "geometric grip texture filling the frame, " +
      "side lighting creating strong shadows in the tread grooves, " +
      "black and dark gray tones, abstract pattern photography",
    width: 800,
    height: 500,
  },

];

/* ─── REPLICATE API ──────────────────────────────────────────────────────── */
async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function create(prompt, width, height) {
  const res = await fetch(
    "https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
        Prefer: "wait",
      },
      body: JSON.stringify({
        input: { prompt, width, height, num_outputs: 1, output_format: "webp", output_quality: 92, go_fast: true },
      }),
    }
  );
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  return res.json();
}

async function poll(id) {
  for (let i = 0; i < 30; i++) {
    await sleep(2500);
    const r = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const d = await r.json();
    if (d.status === "succeeded") return d.output?.[0];
    if (d.status === "failed") throw new Error(`Başarısız: ${d.error}`);
    process.stdout.write(".");
  }
  throw new Error("Zaman aşımı");
}

async function generate(img) {
  const out = path.join(OUTPUT_DIR, img.filename);
  console.log(`\n🎨  ${img.filename}`);
  console.log(`    ${img.kullanim}`);

  try {
    const pred = await create(img.prompt, img.width, img.height);
    let url = pred.status === "succeeded" ? pred.output?.[0] : null;
    if (!url) { process.stdout.write("    bekle"); url = await poll(pred.id); console.log(); }

    if (!url) throw new Error("URL gelmedi");
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    fs.writeFileSync(out, buf);
    console.log(`    ✅ kaydedildi`);
  } catch (e) {
    console.error(`    ❌ ${e.message}`);
    if (fs.existsSync(out)) console.log(`    ⚠️  mevcut dosya korundu`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const list = args.length
    ? IMAGES.filter(img => args.some(a => img.filename.includes(a)))
    : IMAGES;

  if (!list.length) {
    console.log("Mevcut görseller:");
    IMAGES.forEach(img => console.log(`  ${img.filename.padEnd(28)} — ${img.kullanim}`));
    process.exit(1);
  }

  console.log(`\n🚀  Temiz Gelsin Görsel Üretici`);
  console.log(`    ${list.length} görsel · model: flux-schnell`);
  console.log(`    Strateji: close-up doku / süreç / atmosfer\n`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const img of list) await generate(img);

  console.log("\n✅  Tamamlandı");
  console.log(`   Görseller: ${OUTPUT_DIR}`);
}

main().catch(e => { console.error(e); process.exit(1); });
