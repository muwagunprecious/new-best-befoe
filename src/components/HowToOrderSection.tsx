"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import IPhoneMockup from "./IPhoneMockup";

export default function HowToOrderSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1,
      title: "Search and discover deals",
      description: "Find nearby supermarkets and retailers listing fresh, quality groceries approaching their best-before date at up to 75% off.",
    },
    {
      num: 2,
      title: "Add to cart and checkout",
      description: "Pick your items, reserve online in seconds. The price you see is the price you pay — zero hidden fees.",
    },
    {
      num: 3,
      title: "Instant pickup or express delivery",
      description: "Collect directly from verified local stores in your area or get fast express delivery straight to your doorstep.",
    },
  ];

  return (
    <section className="relative bg-[#0F0B2E] text-white pt-20 pb-28 overflow-hidden">
      {/* Sawtooth / Zigzag Top Border — identical to Swoop reference image #5 */}
      <div className="absolute top-0 inset-x-0 overflow-hidden leading-none z-20 -translate-y-[98%]">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full h-8 text-[#0F0B2E] fill-current"
        >
          <path d="M0 40 L30 0 L60 40 L90 0 L120 40 L150 0 L180 40 L210 0 L240 40 L270 0 L300 40 L330 0 L360 40 L390 0 L420 40 L450 0 L480 40 L510 0 L540 40 L570 0 L600 40 L630 0 L660 40 L690 0 L720 40 L750 0 L780 40 L810 0 L840 40 L870 0 L900 40 L930 0 L960 40 L990 0 L1020 40 L1050 0 L1080 40 L1110 0 L1140 40 L1170 0 L1200 40 Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white"
          >
            How to order on BestBefore
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-base text-slate-300 max-w-xl mx-auto"
          >
            Three simple steps to save on groceries and eliminate food waste across Nigeria.
          </motion.p>
        </div>

        {/* Interactive Step Display with iPhone Mockup */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Realistic iPhone Mockup */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <IPhoneMockup step={activeStep} width={285} height={570} />
            </motion.div>
          </div>

          {/* Right: Step Cards List matching Swoop reference layout */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            {steps.map((s) => {
              const isSelected = activeStep === s.num;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveStep(s.num)}
                  className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer border flex items-start gap-5 ${
                    isSelected
                      ? "bg-white/10 border-indigo-500/50 backdrop-blur-md shadow-2xl scale-[1.02]"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                  }`}
                >
                  {/* Step Number Box — exact match to Swoop reference image #4 */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 transition-colors shadow-lg ${
                      isSelected
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {s.num}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
