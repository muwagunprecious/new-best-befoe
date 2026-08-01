"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, suffix = "", decimals = 0 }: { end: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export default function DashboardMockup() {
  return (
    <section className="py-20 sm:py-28 bg-soft-gray overflow-hidden">
      <div className="mx-auto px-4 sm:px-8" style={{ maxWidth: "1440px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
            Live Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight mb-4">
            See the Impact in Real Time
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Track revenue recovered, products saved, and waste reduced — all from one dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative mx-auto"
          style={{ maxWidth: "900px" }}
        >
          {/* Browser chrome */}
          <div className="bg-gray-100 rounded-t-xl border border-gray-200 border-b-0 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="ml-4 flex-1 max-w-md bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
              app.bestbefore.ng/dashboard
            </div>
          </div>

          {/* Dashboard content */}
          <div className="bg-white rounded-b-xl border border-gray-200 shadow-xl shadow-black/5 p-5 sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-sm font-semibold text-charcoal">Dashboard</h3>
                <p className="text-xs text-gray-400">Your store performance</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-500">SB</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Revenue Recovered", value: 2450000, prefix: "₦", color: "bg-primary/10 text-primary" },
                { label: "Products Saved", value: 3420, suffix: "", color: "bg-blue-500/10 text-blue-500" },
                { label: "Stores Onboarded", value: 128, suffix: "", color: "bg-gold/10 text-gold-dark" },
                { label: "CO₂ Waste Reduced", value: 8450, suffix: "kg", color: "bg-emerald-500/10 text-emerald-500" },
              ].map((stat) => (
                <div key={stat.label} className="bg-soft-gray rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                  <p className={`text-xl sm:text-2xl font-bold ${stat.color.split(" ")[1]}`}>
                    {stat.prefix}
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {/* Revenue chart */}
              <div className="bg-soft-gray rounded-xl p-4 sm:p-6">
                <p className="text-xs font-medium text-gray-500 mb-4">Revenue Trend</p>
                <div className="h-32 flex items-end gap-2">
                  {[35, 50, 42, 68, 55, 80, 72, 95, 85, 100, 90, 110].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="flex-1 bg-primary rounded-t-sm min-h-[4px]"
                      style={{ opacity: 0.5 + (h / 110) * 0.5 }}
                    />
                  ))}
                </div>
              </div>

              {/* Products chart */}
              <div className="bg-soft-gray rounded-xl p-4 sm:p-6">
                <p className="text-xs font-medium text-gray-500 mb-4">Products by Category</p>
                <div className="space-y-2">
                  {[
                    { label: "Groceries", value: 45, color: "bg-primary" },
                    { label: "Drinks", value: 25, color: "bg-blue-500" },
                    { label: "Snacks", value: 18, color: "bg-gold" },
                    { label: "Other", value: 12, color: "bg-gray-300" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-16">{item.label}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className={`h-full rounded-full ${item.color}`}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-8 text-right">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent orders */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-gray-500">Recent Orders</p>
                <button className="text-xs text-primary font-medium hover:underline">View all</button>
              </div>
              <div className="space-y-2">
                {[
                  { product: "Golden Penny Pasta", store: "MegaMart Lagos", amount: "₦12,000", status: "Completed" },
                  { product: "Peak Milk 6-Pack", store: "ShopRite Abuja", amount: "₦8,500", status: "Pending" },
                  { product: "Indomie Carton", store: "Everyday Supermarket", amount: "₦6,200", status: "Processing" },
                ].map((order, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-charcoal">{order.product}</p>
                      <p className="text-xs text-gray-400">{order.store}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-charcoal">{order.amount}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        order.status === "Completed" ? "bg-primary/10 text-primary" :
                        order.status === "Pending" ? "bg-gold/10 text-gold-dark" :
                        "bg-blue-500/10 text-blue-500"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
