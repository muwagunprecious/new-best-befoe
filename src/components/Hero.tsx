"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import IPhoneMockup from "./IPhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden">

      {/* ── Grocery Background Image ── */}
      <div className="absolute inset-0">
        <img
          src="/grocery_hero_bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark purple overlay so text remains crisp */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(37,18,180,0.88) 0%, rgba(53,37,230,0.82) 45%, rgba(20,10,80,0.90) 100%)",
          }}
        />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-5 sm:px-8 pt-28 pb-10 text-center z-10">

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-xs font-semibold text-white/90"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Waitlist now open · Coming soon across Nigeria
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-white font-extrabold tracking-tight leading-[1.08] max-w-3xl"
          style={{ fontSize: "clamp(2.5rem, 5.8vw, 4.5rem)" }}
        >
          Earn from your near due-date groceries.{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #A5F3FC, #34D399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Don't throw away profit.
          </span>
        </motion.h1>

        {/* Single CTA — scrolls to waitlist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-10"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2.5 bg-white text-[#3525E6] font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.35)" }}
          >
            Join our Waitlist
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-[11px] text-white/50 text-center mt-3.5 tracking-wide">
            No spam. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>

      {/* ── Phone Mockup ── */}
      <div className="relative flex justify-center pb-0 px-5 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative animate-float"
        >
          <IPhoneMockup width={290} height={580} />
        </motion.div>
      </div>

      {/* Wave transition */}
      <div className="relative h-14 overflow-hidden mt-[-2px] z-10">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 64L1440 64L1440 32C1200 0 960 0 720 32C480 64 240 64 0 32L0 64Z"
            fill="#0F0B2E"
          />
        </svg>
      </div>
    </section>
  );
}
