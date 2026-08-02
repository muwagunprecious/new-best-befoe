"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Recycle,
  ShoppingBag,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function BuiltForNigerianBusinesses() {
  const pillars = [
    {
      title: "Recover Revenue",
      description: "Turn near due-date, defective packaging, and oversupply inventory into real profit instead of writing off store losses.",
      icon: TrendingUp,
      badge: "Financial Recovery",
    },
    {
      title: "Reduce Waste",
      description: "Eliminate stock disposal costs and minimize food waste, contributing directly to a sustainable food system in Nigeria.",
      icon: Recycle,
      badge: "Sustainability",
    },
    {
      title: "Increase Sales",
      description: "Attract budget-conscious shoppers who purchase regular-priced grocery staples alongside clearance items.",
      icon: ShoppingBag,
      badge: "Cross-Selling",
    },
    {
      title: "Protect Brand",
      description: "Clear excess stock quietly and ethically on our dedicated marketplace without degrading your main store pricing.",
      icon: ShieldCheck,
      badge: "Brand Safety",
    },
    {
      title: "Reach More Customers",
      description: "Gain instant visibility with thousands of active, verified buyers looking for clearance deals across your city.",
      icon: Users,
      badge: "Customer Growth",
    },
  ];

  return (
    <section id="built-for-businesses" className="py-24 bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full"
            style={{ background: "#EEF2FF", color: "#4F3FFF" }}
          >
            Empowering Retailers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for <span style={{ color: "#4F3FFF" }}>Nigerian Businesses</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Every feature is designed to help supermarkets, distributors, and store managers recover value from near due-date inventory.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
                      style={{ background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Merchant Benefit</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
