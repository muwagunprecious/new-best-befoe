"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Plus,
  Package,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle2,
  RotateCcw,
  Play,
  AlertTriangle,
  Clock,
  Tag,
  BarChart2,
  ShoppingBag,
  Bell,
  ChevronRight,
  ArrowUpRight,
  Store,
} from "lucide-react";

/* ────────────────────────────────────────────
   Mock data for dashboard
──────────────────────────────────────────── */
const ACTIVE_LISTINGS = [
  { id: 1, name: "Organic Whole Milk ×6", category: "Dairy", price: 1600, was: 4600, off: 65, units: 12, days: 3, status: "live" },
  { id: 2, name: "Cold-Pressed OJ 1L", category: "Beverages", price: 950, was: 3200, off: 70, units: 30, days: 2, status: "live" },
  { id: 3, name: "Whole Wheat Sourdough", category: "Bakery", price: 600, was: 2500, off: 76, units: 8, days: 1, status: "near due-date" },
];

const STAT_CARDS = [
  { label: "Total Revenue", value: "₦284,500", change: "+18%", icon: DollarSign, positive: true },
  { label: "Active Listings", value: "14", change: "+3 today", icon: Package, positive: true },
  { label: "Items Sold", value: "312", change: "+22% this week", icon: ShoppingBag, positive: true },
  { label: "Waste Saved", value: "48 kg", change: "vs last month", icon: TrendingUp, positive: true },
];

const RECENT_ORDERS = [
  { id: "#ORD-1021", item: "Whole Milk ×6", buyer: "Adewale J.", time: "2 min ago", amount: "₦1,600", units: 2 },
  { id: "#ORD-1020", item: "Cold-Pressed OJ", buyer: "Chioma A.", time: "14 min ago", amount: "₦950", units: 4 },
  { id: "#ORD-1019", item: "Sourdough Loaf", buyer: "Emmanuel O.", time: "31 min ago", amount: "₦600", units: 1 },
];

/* ────────────────────────────────────────────
   Add Listing Panel
──────────────────────────────────────────── */
function AddListingPanel({ onDone }: { onDone: () => void }) {
  const [productName, setProductName] = useState("Whole Wheat Cereal 500g");
  const [originalPrice, setOriginalPrice] = useState(3500);
  const [daysLeft, setDaysLeft] = useState(5);
  const [quantity, setQuantity] = useState(50);
  const [published, setPublished] = useState(false);

  const discountPercent = daysLeft <= 2 ? 75 : daysLeft <= 5 ? 60 : 45;
  const clearancePrice = Math.round((originalPrice * (100 - discountPercent)) / 100);
  const recoveredValue = clearancePrice * quantity;

  const inputCls =
    "w-full text-sm text-slate-800 rounded-lg px-3.5 py-2.5 border border-slate-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition bg-white placeholder-slate-400";

  return (
    <div className="space-y-5">
      {!published ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Item name / scan barcode</label>
              <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Original retail price (₦)</label>
              <input type="number" value={originalPrice} onChange={(e) => setOriginalPrice(Number(e.target.value))} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Units available</label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className={inputCls} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-xs font-medium text-slate-500">Days to best-before date</label>
              <span className="text-xs font-bold text-green-600">{daysLeft} days</span>
            </div>
            <input type="range" min="1" max="15" value={daysLeft} onChange={(e) => setDaysLeft(Number(e.target.value))} className="w-full cursor-pointer" />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>1 day (−75%)</span><span>5 days (−60%)</span><span>15 days (−45%)</span>
            </div>
          </div>

          {/* Auto-pricing preview */}
          <div className="rounded-xl bg-green-50 border border-green-200 p-4 space-y-2">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wider">Auto-calculated pricing</p>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-green-700">₦{clearancePrice.toLocaleString()}</span>
              <span className="text-sm text-slate-400 line-through">₦{originalPrice.toLocaleString()}</span>
              <span className="text-sm font-bold text-white bg-green-500 px-2 py-0.5 rounded-lg">−{discountPercent}%</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <DollarSign className="w-3.5 h-3.5 text-green-500" />
              Estimated recovery from {quantity} units:{" "}
              <span className="font-semibold text-slate-700">₦{recoveredValue.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={() => setPublished(true)}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors shadow-green-sm"
          >
            <Play className="w-4 h-4" />
            Publish listing — live in 30 seconds
          </button>
        </>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-green-700">Listing is live!</p>
              <p className="text-xs text-slate-500 mt-0.5">
                <span className="font-medium text-slate-700">{productName}</span> is now visible to nearby shoppers at ₦{clearancePrice.toLocaleString()} ({discountPercent}% off).
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-slate-50 border border-slate-100 p-3 text-center">
              <div className="text-[10px] text-slate-400 mb-0.5">Clearance price</div>
              <div className="text-lg font-bold text-slate-900">₦{clearancePrice.toLocaleString()}</div>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-100 p-3 text-center">
              <div className="text-[10px] text-slate-400 mb-0.5">Est. recovery</div>
              <div className="text-lg font-bold text-green-600">₦{recoveredValue.toLocaleString()}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setPublished(false)} className="flex-1 flex items-center justify-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 border border-slate-200 rounded-xl py-2.5 transition">
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
            <button onClick={onDone} className="flex-1 flex items-center justify-center gap-1.5 text-sm text-white bg-green-500 hover:bg-green-600 rounded-xl py-2.5 transition">
              View dashboard <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────
   Main VendorSimulator
──────────────────────────────────────────── */
export default function VendorSimulator() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "add">("dashboard");

  const tabs = [
    { id: "dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
    { id: "add" as const, label: "Add Listing", icon: Plus },
  ];

  return (
    <section id="vendor-demo" className="py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "#EEF2FF", color: "#4F3FFF" }}
            >
              For Retailers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              List near due-date inventory{" "}
              <span style={{ color: "#4F3FFF" }}>in under 30 seconds.</span>
            </h2>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              A full seller dashboard built for store managers — track revenue, manage active listings, and publish new deals in seconds. No training required.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white border border-slate-200 shadow-sm self-start">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === id
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                style={activeTab === id ? { background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" } : {}}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard panel */}
        {activeTab === "dashboard" && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STAT_CARDS.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <s.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100 flex items-center gap-1">
                      <ArrowUpRight className="w-2.5 h-2.5" /> {s.change}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-slate-900">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              {/* Active listings */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-green-500" />
                    <h3 className="text-sm font-semibold text-slate-800">Active Listings</h3>
                  </div>
                  <button
                    onClick={() => setActiveTab("add")}
                    className="flex items-center gap-1 text-xs font-semibold text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add new
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {ACTIVE_LISTINGS.map((item) => (
                    <div key={item.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-slate-50/60 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-base shrink-0">
                          {item.category === "Dairy" ? "🥛" : item.category === "Beverages" ? "🥤" : "🍞"}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-slate-800 truncate">{item.name}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-slate-400">{item.units} units</span>
                            <span className="text-[10px] text-slate-300">·</span>
                            <span className={`text-[10px] font-semibold flex items-center gap-0.5 ${item.status === "near due-date" ? "text-red-500" : "text-slate-400"}`}>
                              {item.status === "near due-date" && <AlertTriangle className="w-2.5 h-2.5" />}
                              <Clock className="w-2.5 h-2.5" />
                              {item.days}d left
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">₦{item.price.toLocaleString()}</div>
                          <div className="text-[10px] text-slate-400 line-through">₦{item.was.toLocaleString()}</div>
                        </div>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-md">
                          −{item.off}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-3 border-t border-slate-100">
                  <button className="text-xs text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1">
                    View all 14 listings <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Recent orders */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
                  <Bell className="w-4 h-4 text-green-500" />
                  <h3 className="text-sm font-semibold text-slate-800">Recent Orders</h3>
                  <span className="ml-auto text-[10px] font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">3 new</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {RECENT_ORDERS.map((order) => (
                    <div key={order.id} className="px-5 py-3.5 hover:bg-slate-50/60 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold text-slate-400">{order.id}</span>
                        <span className="text-[10px] text-slate-400">{order.time}</span>
                      </div>
                      <div className="mt-1">
                        <p className="text-xs font-semibold text-slate-800">{order.item}</p>
                        <div className="flex items-center justify-between mt-0.5">
                          <span className="text-[10px] text-slate-400">{order.buyer} · ×{order.units}</span>
                          <span className="text-xs font-bold text-green-600">{order.amount}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-100">
                  <button className="text-xs text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1">
                    View all orders <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Revenue chart placeholder */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-5">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-green-500" />
                  <h3 className="text-sm font-semibold text-slate-800">Revenue — Last 7 Days</h3>
                </div>
                <span className="text-xs text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">Jul 25 – Aug 1</span>
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-2 h-24">
                {[40, 65, 55, 80, 70, 90, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md transition-all"
                      style={{
                        height: `${h}%`,
                        background: i === 6 ? "#22C55E" : "#DCFCE7",
                        borderTop: i === 6 ? "2px solid #16A34A" : "2px solid #86EFAC",
                      }}
                    />
                    <span className="text-[9px] text-slate-400">
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Total this week</span>
                <span className="text-sm font-bold text-slate-900">₦284,500 <span className="text-xs font-normal text-green-600">↑ 18%</span></span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Add listing panel */}
        {activeTab === "add" && (
          <motion.div
            key="add"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-slate-800">New listing</h3>
                <span className="text-xs text-white font-semibold bg-green-500 px-2.5 py-1 rounded-lg">Interactive demo</span>
              </div>
              <AddListingPanel onDone={() => setActiveTab("dashboard")} />
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: "⚡", title: "Live in under 30 seconds", body: "Scan a barcode or type the item name. The platform auto-fills price and calculates the optimal discount based on days remaining." },
                { icon: "📊", title: "Smart dynamic pricing", body: "Our algorithm adjusts the clearance price based on time-to-expiry and local demand — maximising your recovery rate." },
                { icon: "🔔", title: "Instant shopper alerts", body: "Nearby shoppers who follow your store are notified the moment your listing goes live." },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl border border-slate-100 p-5 shadow-card flex gap-4">
                  <span className="text-2xl shrink-0">{card.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">{card.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
