"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const PRI = "#5B2D6E";
const MUV = "#BFA5B8";
const STN = "#D4C5B0";
const BG  = "#F5F0E8";
const DRK = "#2D1A2E";

const NAV_LINKS = [
  { href: "/",              label: "Ana Sayfa"  },
  { href: "/hizmetler",     label: "Hizmetler"  },
  { href: "/paketler",      label: "Paketler"   },
  { href: "/galeri",        label: "Galeri"     },
  { href: "/blog",          label: "Blog"       },
  { href: "/sss",           label: "SSS"        },
];

function PromoBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium relative"
      style={{ background: DRK, color: MUV }}>
      <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ background: "#22c55e" }} />
      <span>
        İlk siparişinde{" "}
        <strong className="font-black" style={{ color: "#fff" }}>%20 indirim</strong>
        {" "}— Kod:{" "}
        <strong className="font-black tracking-wider" style={{ color: "#fff" }}>TEMİZ20</strong>
      </span>
      <button onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full hover:opacity-70 transition-opacity"
        style={{ color: MUV }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen]         = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser]         = useState<{ email?: string; full_name?: string } | null>(null);
  const pathname = usePathname();
  const router   = useRouter();

  // Scroll dinle — nav gölgesi için
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Auth
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) setUser({ email: data.session.user.email, full_name: data.session.user.user_metadata?.full_name });
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ? { email: session.user.email, full_name: session.user.user_metadata?.full_name } : null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleCikis = async () => {
    await supabase.auth.signOut();
    setUser(null); setDropOpen(false);
    router.replace("/");
  };

  const initials = user?.full_name
    ? user.full_name.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()
    : user?.email?.slice(0, 2).toUpperCase() ?? "?";

  const isActive = (href: string) => (active ?? pathname) === href;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <PromoBar />

      {/* ── ANA NAV ── */}
      <nav
        className="relative px-6 md:px-10 lg:px-16 transition-shadow duration-300"
        style={{
          background: "rgba(248,244,255,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${scrolled ? "rgba(91,45,110,0.1)" : "transparent"}`,
          boxShadow: scrolled ? "0 4px 24px rgba(45,26,46,0.07)" : "none",
        }}>
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">

          {/* ── LOGO (sol) ── */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/temizgelsin-logo.png?v=1"
              alt="Temiz Gelsin"
              style={{ height: "38px", width: "auto", objectFit: "contain", maxWidth: "148px" }}
            />
          </Link>

          {/* ── LİNKLER (orta — sadece desktop) ── */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href}
                className="relative px-4 py-2 text-sm rounded-xl transition-all duration-200"
                style={isActive(link.href)
                  ? { color: PRI, fontWeight: 700, background: `rgba(91,45,110,0.07)` }
                  : { color: `rgba(45,26,46,0.6)`, fontWeight: 500 }}>
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: PRI }} />
                )}
              </Link>
            ))}
          </div>

          {/* ── SAĞ — CTA + kullanıcı ── */}
          <div className="flex items-center gap-2.5">

            {/* Desktop CTA */}
            {!user && (
              <Link href="/siparis"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: PRI, color: "#fff", boxShadow: `0 4px 16px rgba(91,45,110,0.3)` }}>
                Sipariş Ver →
              </Link>
            )}

            {/* Desktop kullanıcı menüsü */}
            {user && (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setDropOpen(!dropOpen)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-full border transition-all hover:opacity-80"
                  style={{ borderColor: STN, background: "transparent" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black"
                    style={{ background: PRI, color: "#fff" }}>
                    {initials}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: DRK }}>
                    {user.full_name?.split(" ")[0] ?? user.email?.split("@")[0]}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}>
                    <path d="M2 4l4 4 4-4" stroke={`rgba(45,26,46,0.4)`} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {dropOpen && (
                  <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-40" onClick={() => setDropOpen(false)} />
                    {/* Dropdown */}
                    <div className="absolute right-0 top-full mt-2 w-60 rounded-2xl z-50 overflow-hidden"
                      style={{ background: "#fff", border: `1px solid ${STN}`, boxShadow: "0 12px 40px rgba(45,26,46,0.14)" }}>
                      <div className="px-4 py-3.5" style={{ background: `rgba(91,45,110,0.04)`, borderBottom: `1px solid ${STN}` }}>
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black shrink-0"
                            style={{ background: PRI, color: "#fff" }}>{initials}</div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold truncate" style={{ color: DRK }}>{user.full_name ?? "Kullanıcı"}</p>
                            <p className="text-[11px] truncate" style={{ color: `rgba(45,26,46,0.4)` }}>{user.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        {[
                          { href: "/profil",      label: "Hesabım",     sub: "Profil ve ayarlar" },
                          { href: "/siparislerim",label: "Siparişlerim", sub: "Geçmiş siparişler" },
                        ].map(item => (
                          <Link key={item.href} href={item.href} onClick={() => setDropOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all hover:opacity-80"
                            style={{ color: DRK }}>
                            <div className="flex-1">
                              <p className="font-semibold text-sm" style={{ color: DRK }}>{item.label}</p>
                              <p className="text-[11px]" style={{ color: `rgba(45,26,46,0.4)` }}>{item.sub}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="p-2 pt-0" style={{ borderTop: `1px solid ${STN}` }}>
                        <button onClick={handleCikis}
                          className="flex items-center gap-2 w-full px-3 py-2.5 mt-1 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                          style={{ background: `rgba(107,39,55,0.05)`, color: `rgba(107,39,55,0.85)` }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                            <polyline points="16 17 21 12 16 7"/>
                            <line x1="21" y1="12" x2="9" y2="12"/>
                          </svg>
                          Çıkış Yap
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Hamburger (sadece mobile) */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menüyü aç"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors"
              style={{ background: open ? `rgba(91,45,110,0.09)` : "transparent" }}>
              <span className={`block w-[18px] h-[1.5px] rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
                style={{ background: DRK }} />
              <span className={`block w-[18px] h-[1.5px] rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`}
                style={{ background: DRK }} />
              <span className={`block w-[18px] h-[1.5px] rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
                style={{ background: DRK }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBİL MENÜ ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: BG, borderBottom: open ? `1px solid ${STN}` : "none", boxShadow: open ? "0 12px 32px rgba(45,26,46,0.12)" : "none" }}>
        <div className="px-6 py-5 space-y-1">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl text-sm transition-all"
              style={isActive(link.href)
                ? { color: PRI, background: `rgba(91,45,110,0.08)`, fontWeight: 700 }
                : { color: `rgba(45,26,46,0.65)`, fontWeight: 500 }}>
              {link.label}
              {isActive(link.href) && <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: PRI }} />}
            </Link>
          ))}

          <div className="pt-3 space-y-2" style={{ borderTop: `1px solid ${STN}` }}>
            {user ? (
              <>
                <Link href="/profil" onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all"
                  style={{ background: `rgba(91,45,110,0.06)`, color: DRK }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
                    style={{ background: PRI, color: "#fff" }}>{initials}</div>
                  {user.full_name?.split(" ")[0] ?? user.email?.split("@")[0]}
                </Link>
                <button onClick={() => { handleCikis(); setOpen(false); }}
                  className="w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all"
                  style={{ background: `rgba(107,39,55,0.06)`, color: `rgba(107,39,55,0.85)` }}>
                  Çıkış Yap
                </button>
              </>
            ) : (
              <>
                <Link href="/auth" onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-3 text-sm font-semibold rounded-xl border-2 transition-all"
                  style={{ borderColor: STN, color: DRK }}>
                  Giriş Yap
                </Link>
                <Link href="/siparis" onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 text-sm font-bold rounded-xl hover:opacity-90 transition-all"
                  style={{ background: PRI, color: "#fff", boxShadow: `0 4px 16px rgba(91,45,110,0.3)` }}>
                  Sipariş Ver →
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
