"use client";

import { motion } from "framer-motion";
import { TRUST_BRANDS } from "@/lib/constants";
import { Store, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200/80 font-sans overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl">
        <p className="text-center text-xs font-extrabold text-gray-500 uppercase tracking-widest mb-6">
          Trusted by Nigeria's Top Retailers & Supermarkets
        </p>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 sm:gap-12 items-center flex-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...TRUST_BRANDS, ...TRUST_BRANDS].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center gap-2.5 text-gray-700 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm shrink-0"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {brand.count}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
