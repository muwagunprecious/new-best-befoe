"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DanfoBusSvg from "./DanfoBusSvg";
import IPhoneMockup from "./IPhoneMockup";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden"
      style={{ background: "#3525E6" }}
    >
      {/* Background Danfo Bus Illustration */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[1200px] h-[600px] opacity-[0.10] text-white transform -rotate-2 translate-y-16">
          <DanfoBusSvg />
        </div>
      </div>

      {/* Hero Header & CTA */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-5 sm:px-8 pt-28 pb-10 text-center z-10">

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-xs font-semibold text-white/90"
          style={{
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Waitlist now open · Coming soon across Nigeria
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-white font-extrabold tracking-tight leading-[1.08] max-w-3xl"
          style={{ fontSize: "clamp(2.5rem, 5.8vw, 4.5rem)" }}
        >
          Earn from your near due-date groceries.
          <br className="hidden sm:inline" />
          <span className="text-white"> Don't throw away profit.</span>
        </motion.h1>

        {/* Single CTA Button — scrolls to waitlist form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-10"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2.5 bg-white text-[#3525E6] font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}
          >
            Join our Waitlist
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-[11px] text-white/55 text-center mt-3.5 tracking-wide">
            No spam. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>

      {/* iPhone 15 Pro Mockup peeking from bottom */}
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

      {/* Wave transition at bottom */}
      <div className="relative h-14 overflow-hidden mt-[-2px] z-10">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 64L1440 64L1440 32C1200 0 960 0 720 32C480 64 240 64 0 32L0 64Z" fill="#0F0B2E" />
        </svg>
      </div>
    </section>
  );
}
