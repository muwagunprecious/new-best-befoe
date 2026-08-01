"use client";

import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProductShowcase() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-soft-gray">
      <div className="mx-auto px-4 sm:px-8" style={{ maxWidth: "1440px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
            Product Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight mb-4">
            Everything Your Store Sells
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            From groceries to medicine — if it has a best-before date, it belongs on BestBefore.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-xl border border-gray-100 p-5 sm:p-6 cursor-pointer transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${category.color}10` }}
              >
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold text-charcoal">{category.name}</h3>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
