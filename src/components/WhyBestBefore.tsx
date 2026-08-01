"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "💰",
    title: "Save Up To 85% On Groceries",
    description: "Access premium brand items nearing their best-before date at a fraction of their retail price. Quality guaranteed.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: "🌱",
    title: "Zero Food Waste Movement",
    description: "Prevent tons of perfectly safe, high-quality groceries from ending up in landfills every month across Nigeria.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: "📈",
    title: "Turn Loss Into Revenue",
    description: "Supermarkets and distributors liquidate near due-date stock to recover cash flow and reduce write-offs immediately.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: "🛡️",
    title: "100% Quality & Safety Guarantee",
    description: "All products are strictly inspected and compliant with NAFDAC best-before safety guidelines. Zero compromise.",
    gradient: "from-orange-500 to-amber-600",
  },
];

export default function WhyBestBefore() {
  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #3730D9 0%, #4F3FFF 50%, #6B5EFF 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(107,94,255,0.5) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)" }}
          >
            Why Best Before
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto"
          >
            Good for shoppers.{" "}
            <span style={{ color: "#A5F3FC" }}>Better for businesses.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="mt-4 text-base max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Best for the planet. Nigeria's first marketplace built to turn unsold inventory into profit.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl p-6 text-center"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1.5px solid rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-sm font-medium mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
            Trusted by leading Nigerian retailers
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-3">
            {["Shoprite", "SPAR Nigeria", "Hubmart", "Ebeano", "Justrite", "Market Square"].map((brand) => (
              <span key={brand} className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
