"use client";

import { Mail, MapPin, ShoppingCart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #1e1b4b 0%, #1a1740 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top gradient border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, #4F3FFF, #00D4AA, #4F3FFF)" }} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>

          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md"
                style={{ background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" }}
              >
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">BestBefore</span>
                <span className="text-[10px] text-emerald-300 font-semibold tracking-tight mt-0.5">
                  Nigeria's First Near-Due date Marketplace
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              Nigeria's First Near-Due date Marketplace helping businesses recover value from products approaching their best-before date.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "#6B5EFF" }} />
                Lagos, Nigeria
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#6B5EFF" }} />
                Partner@BestBefore.ng
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "For Retailers", href: "#vendor-demo" },
                { label: "Why Us", href: "#why-us" },
                { label: "Reserve Your Spot", href: "#waitlist" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
            BestBefore © 2026 | Lagos, Nigeria | Partner@BestBefore.ng
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
