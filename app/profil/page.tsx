"use client";
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PRI = "#5B2D6E";
const MUV = "#BFA5B8";
const STN = "#D4C5B0";
const BG  = "#F5F0E8";
const DRK = "#2D1A2E";

const DURUM_RENK: Record<string, string> = {
  "Onaylandı": "#1E8449",
  "Teklif Bekleniyor": "#D4AC0D",
  "Hazırlanıyor": "#2471A3",
  "Teslim Edildi": PRI,
  "İptal": "#C0392B",
};

export default function ProfilPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [ad, setAd] = useState("");
  const [telefon, setTelefon] = useState("");
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      if (!data.session) { router.replace("/auth?redirect=/profil"); return; }
      const uid = data.session.user.id;
      setUser(data.session.user);

      const [{ data: prof }, { data: ords }] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", uid).single(),
        supabase.from("orders").select("*").eq("user_id", uid).order("created_at", { ascending: false }),
      ]);
      if (prof) { setAd(prof.full_name || ""); setTelefon(prof.phone || ""); }
      setOrders(ords || []);
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true); setSuccess("");
    await supabase.from("profiles").upsert({ id: user.id, full_name: ad, phone: telefon });
    setSaving(false); setSuccess("Bilgileriniz kaydedildi!");
    setTimeout(() => setSuccess(""), 3000);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };

  const totalPairs = orders.reduce((s, o) => s + (Number(o.shoes_count) || 0), 0);
  const completedOrders = orders.filter(o => o.status === "Teslim Edildi");
  const lastOrder = orders[0];
  const daysSinceLast = lastOrder
    ? Math.floor((Date.now() - new Date(lastOrder.created_at).getTime()) / 86400000)
    : null;
  const showRenewal = daysSinceLast !== null && daysSinceLast >= 60;

  if (loading) return (
    <main className="min-h-screen flex items-center justify-center" style={{ background: BG }}>
      <div className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
        style={{ borderColor: `${PRI}40`, borderTopColor: PRI }} />
    </main>
  );

  return (
    <main className="min-h-screen" style={{ background: BG }}>
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 h-16 border-b backdrop-blur-md"
        style={{ borderColor: STN, background: `rgba(245,240,232,0.97)` }}>
        <Link href="/"><img src="/temizgelsin-logo.png?v=1" alt="Temiz Gelsin" style={{ height: "44px", width: "auto" }} /></Link>
        <button onClick={handleLogout} className="text-sm font-medium px-4 py-2 rounded-full border-2"
          style={{ borderColor: STN, color: `rgba(45,26,46,0.5)` }}>Çıkış Yap</button>
      </header>

      <div className="max-w-lg mx-auto px-6 py-10 space-y-4">

        {/* ── BAŞLIK ── */}
        <div className="mb-2">
          <h1 className="text-3xl font-black tracking-tight" style={{ color: DRK }}>Hesabım</h1>
          <p className="text-sm mt-1" style={{ color: `rgba(45,26,46,0.45)` }}>{user?.email}</p>
        </div>

        {/* ── YENILEME UYARISI ── */}
        {showRenewal && (
          <div className="rounded-2xl p-5 flex items-start gap-4"
            style={{ background: `rgba(91,45,110,0.08)`, border: `1.5px solid rgba(91,45,110,0.15)` }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base"
              style={{ background: PRI }}>
              <span className="text-white">↻</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm mb-0.5" style={{ color: DRK }}>Yenileme zamanı!</p>
              <p className="text-xs leading-relaxed" style={{ color: `rgba(45,26,46,0.55)` }}>
                Son bakımınızın üzerinden {daysSinceLast} gün geçti. Ayakkabılarınız sizi bekliyor.
              </p>
              <Link href="/siparis"
                className="inline-block mt-3 px-4 py-2 rounded-full text-xs font-bold transition-all hover:opacity-90"
                style={{ background: PRI, color: MUV }}>
                Sipariş Ver →
              </Link>
            </div>
          </div>
        )}

        {/* ── İSTATİSTİK ŞERİDİ ── */}
        {orders.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: totalPairs, label: "çift bakıldı" },
              { val: completedOrders.length, label: "tamamlandı" },
              { val: daysSinceLast !== null ? daysSinceLast : "—", label: "gün önce" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-4 text-center"
                style={{ background: "#fff", border: `1.5px solid ${STN}` }}>
                <p className="text-2xl font-black" style={{ color: PRI }}>{s.val}</p>
                <p className="text-[11px] mt-0.5" style={{ color: `rgba(45,26,46,0.45)` }}>{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── KİŞİSEL BİLGİLER ── */}
        <div className="rounded-2xl p-6" style={{ background: "#fff", border: `1.5px solid ${STN}` }}>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: `rgba(45,26,46,0.4)` }}>Kişisel Bilgiler</h2>
          <div className="space-y-4">
            <div>
              <label className="text-[11px] uppercase tracking-widest mb-2 block font-bold" style={{ color: DRK }}>Ad Soyad</label>
              <input value={ad} onChange={e => setAd(e.target.value)}
                className="w-full border-2 bg-white px-4 py-3.5 text-sm focus:outline-none rounded-xl"
                placeholder="Ad Soyad" style={{ borderColor: STN, color: DRK }} />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-widest mb-2 block font-bold" style={{ color: DRK }}>Telefon</label>
              <input value={telefon} onChange={e => setTelefon(e.target.value)}
                className="w-full border-2 bg-white px-4 py-3.5 text-sm focus:outline-none rounded-xl"
                placeholder="05XX XXX XX XX" style={{ borderColor: STN, color: DRK }} />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-widest mb-2 block font-bold" style={{ color: DRK }}>E-posta</label>
              <input value={user?.email || ""} disabled
                className="w-full border-2 px-4 py-3.5 text-sm rounded-xl"
                style={{ borderColor: STN, color: `rgba(45,26,46,0.4)`, background: `rgba(212,197,176,0.15)` }} />
            </div>
          </div>
          {success && <p className="text-sm mt-4 font-semibold" style={{ color: PRI }}>✓ {success}</p>}
          <button onClick={handleSave} disabled={saving}
            className="w-full mt-5 py-4 text-sm font-bold rounded-full hover:opacity-90 transition-all disabled:opacity-50"
            style={{ background: PRI, color: MUV, boxShadow: `0 8px 24px rgba(91,45,110,0.25)` }}>
            {saving ? "Kaydediliyor..." : "Bilgileri Kaydet"}
          </button>
        </div>

        {/* ── SON SİPARİŞLER ── */}
        {orders.length > 0 && (
          <div className="rounded-2xl overflow-hidden" style={{ background: "#fff", border: `1.5px solid ${STN}` }}>
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: `rgba(45,26,46,0.4)` }}>Son Siparişler</h2>
              <Link href="/siparislerim" className="text-xs font-bold" style={{ color: PRI }}>Tümünü Gör →</Link>
            </div>
            <div className="divide-y" style={{ borderColor: STN }}>
              {orders.slice(0, 3).map(order => (
                <div key={order.id} className="px-5 py-4 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-mono font-black text-xs" style={{ color: PRI }}>{order.order_number}</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${DURUM_RENK[order.status] || PRI}15`, color: DURUM_RENK[order.status] || PRI }}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs truncate" style={{ color: `rgba(45,26,46,0.5)` }}>
                      {order.brand} — {order.shoes_count} çift · {order.price}
                    </p>
                  </div>
                  <Link
                    href={`/siparis?brand=${encodeURIComponent(order.brand || "")}&count=${order.shoes_count || 1}&services=${encodeURIComponent(order.services || "")}&address=${encodeURIComponent(order.address || "")}`}
                    className="text-[11px] font-bold px-3 py-2 rounded-full border-2 shrink-0 transition-all hover:opacity-80"
                    style={{ borderColor: `rgba(91,45,110,0.2)`, color: PRI }}>
                    Tekrarla
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── HENÜZ SİPARİŞ YOK ── */}
        {orders.length === 0 && (
          <Link href="/siparislerim"
            className="flex items-center justify-between w-full p-5 rounded-2xl"
            style={{ background: "#fff", border: `1.5px solid ${STN}` }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `rgba(91,45,110,0.08)` }}>📦</div>
              <div>
                <p className="font-bold text-sm" style={{ color: DRK }}>Siparişlerim</p>
                <p className="text-xs" style={{ color: `rgba(45,26,46,0.45)` }}>Henüz sipariş bulunmuyor</p>
              </div>
            </div>
            <span style={{ color: `rgba(45,26,46,0.3)` }}>→</span>
          </Link>
        )}

      </div>
    </main>
  );
}
