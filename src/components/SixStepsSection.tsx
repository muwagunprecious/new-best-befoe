"use client";

import { motion } from "framer-motion";
import {
  Store,
  UploadCloud,
  Tag,
  Search,
  ShoppingCart,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function SixStepsSection() {
  const steps = [
    {
      num: 1,
      icon: Store,
      title: "Register Your Business",
      description: "Create your free merchant account in under 2 minutes. Supermarkets, distributors, and corner stores welcome.",
    },
    {
      num: 2,
      icon: UploadCloud,
      title: "Upload Near Due-Date Products",
      description: "Snap a photo, enter item quantity, and list products approaching their best-before date in under 30 seconds.",
    },
    {
      num: 3,
      icon: Tag,
      title: "Set Clearance Discounts",
      description: "Choose discount rates up to 75% off regular retail price to quickly clear stock and recover tied-up capital.",
    },
    {
      num: 4,
      icon: Search,
      title: "Shoppers Discover Local Deals",
      description: "Shoppers across Lagos, Abuja, and major cities browse deals near them on the BestBefore marketplace app.",
    },
    {
      num: 5,
      icon: ShoppingCart,
      title: "Reserve & Checkout Online",
      description: "Customers reserve your items instantly with secure online payment — guaranteed zero hidden fees.",
    },
    {
      num: 6,
      icon: Truck,
      title: "Fast Pickup or Delivery",
      description: "Shoppers collect items directly at your store counter or get rapid express doorstep delivery.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #4F3FFF 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 z-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ background: "rgba(79,63,255,0.25)", color: "#A5B4FC", border: "1px solid rgba(165,180,252,0.2)" }}
          >
            Simple & Transparent
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How it works in <span style={{ color: "#A5B4FC" }}>6 easy steps</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From listing near due-date inventory to collecting cash — seamless for stores and shoppers alike.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-indigo-500/50 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div>
                  {/* Top bar with Step badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-white/10 text-indigo-300 border border-white/10">
                      Step 0{step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1 text-[11px] font-bold text-indigo-400">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
