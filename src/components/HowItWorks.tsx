"use client";

import { motion } from "framer-motion";
import { Store, Search, ShoppingBag, DollarSign, Leaf, TrendingUp } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Store,
    title: "Store Lists Near Due-Date Stock",
    description: "Supermarkets and retailers list products approaching their best-before date in 30 seconds — no training required.",
    color: "#4F3FFF",
    bg: "#EEF2FF",
  },
  {
    step: 2,
    icon: DollarSign,
    title: "Price Auto-Calculated",
    description: "Our algorithm sets optimal 50–85% discounts based on days remaining, maximising recovery for the store.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    step: 3,
    icon: Search,
    title: "Shoppers Discover Deals",
    description: "Budget-conscious shoppers find local clearance deals on fresh milk, juices, cereals, and groceries near them.",
    color: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    step: 4,
    icon: ShoppingBag,
    title: "Reserve & Pay Instantly",
    description: "Shoppers reserve items online for fast local pickup or express delivery across Lagos and Abuja.",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    step: 5,
    icon: TrendingUp,
    title: "Stores Recover Revenue",
    description: "Convert write-off losses into immediate liquid revenue before items hit their best-before date.",
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    step: 6,
    icon: Leaf,
    title: "Zero Food Waste",
    description: "Tons of perfectly safe, high-quality groceries stay out of landfills — protecting both profit and the planet.",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{ background: "#EEF2FF", color: "#4F3FFF" }}
          >
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto"
          >
            Built for Nigerian Businesses.{" "}
            <span style={{ color: "#4F3FFF" }}>Every feature.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed"
          >
            Every feature is designed to help you recover value from near due-date, defective packaging, and oversupply inventory.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group relative rounded-2xl p-6 border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {/* Step number */}
                <div
                  className="absolute top-5 right-5 text-4xl font-black tabular-nums"
                  style={{ color: "rgba(0,0,0,0.05)" }}
                >
                  {String(item.step).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: item.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: item.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
