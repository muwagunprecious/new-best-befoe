"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Retailers", href: "#vendor-demo" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQs", href: "#waitlist" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-[72px]">
          {/* Logo with Shopping Cart Icon & Byline */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105 shrink-0"
              style={{ background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" }}
            >
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg font-extrabold tracking-tight leading-none transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                BestBefore
              </span>
              <span
                className={`text-[10px] font-semibold tracking-tight transition-colors mt-0.5 ${
                  scrolled ? "text-indigo-600" : "text-emerald-300"
                }`}
              >
                Nigeria's First Near-Due date Marketplace
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
              style={{
                background: scrolled
                  ? "linear-gradient(135deg, #4F3FFF, #6B5EFF)"
                  : "rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
                border: scrolled ? "none" : "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              Reserve Your Spot
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-slate-700 hover:text-slate-900 border-b border-slate-50 last:border-0 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-3 text-center text-sm font-semibold text-white rounded-xl"
                  style={{ background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" }}
                >
                  Reserve Your Spot
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
