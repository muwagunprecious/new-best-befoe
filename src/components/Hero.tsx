"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import IPhoneMockup from "./IPhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden">

      {/* ── Grocery Background Image ── */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <img
          src="/grocery_hero_bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Deep gradient overlay for clean contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,12,100,0.92) 0%, rgba(37,22,165,0.88) 50%, rgba(15,10,65,0.94) 100%)",
          }}
        />
      </div>

      {/* ── Main Two-Column Container (Text Left, Phone Right) ── */}
      <div className="relative flex-1 mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 pt-28 pb-16 z-10 flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">

          {/* ── LEFT COLUMN: Left-Aligned Text & CTA ── */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/90"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                border: "1.5px solid rgba(255,255,255,0.18)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Waitlist now open · Coming soon across Nigeria</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-white font-extrabold tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
            >
              Earn from your near due-date groceries.{" "}
              <span
                className="block mt-1"
                style={{
                  background: "linear-gradient(90deg, #A5F3FC, #34D399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Don't throw away profit.
              </span>
            </motion.h1>

            {/* Subline requested by user */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-emerald-300 font-bold max-w-xl leading-relaxed tracking-wide"
            >
              Nigeria's First Near-Due date Marketplace
            </motion.p>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="pt-2"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2.5 bg-white text-[#3525E6] font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl"
                style={{ boxShadow: "0 12px 36px rgba(0,0,0,0.3)" }}
              >
                Join our Waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-white/60 text-left mt-2.5 tracking-wide">
                No spam. Unsubscribe at any time.
              </p>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: Phone Mockup ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative animate-float"
            >
              <IPhoneMockup width={285} height={570} />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Wave transition at bottom */}
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
