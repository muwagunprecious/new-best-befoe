"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PRODUCT_CATEGORIES,
  MOCK_CLEARANCE_PRODUCTS,
} from "@/lib/constants";
import {
  Clock,
  MapPin,
  ShieldCheck,
  Tag,
  ShoppingBag,
  Bell,
  X,
  CheckCircle2,
  Sparkles,
  Store,
  ChevronRight,
  Filter,
} from "lucide-react";

export default function ProductMarketplace() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<typeof MOCK_CLEARANCE_PRODUCTS[0] | null>(null);
  const [reservedEmail, setReservedEmail] = useState("");
  const [reservedSuccess, setReservedSuccess] = useState(false);

  const filteredProducts =
    activeCategory === "all"
      ? MOCK_CLEARANCE_PRODUCTS
      : MOCK_CLEARANCE_PRODUCTS.filter((p) => p.category === activeCategory);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (reservedEmail.trim()) {
      setReservedSuccess(true);
      setTimeout(() => {
        setReservedSuccess(false);
        setSelectedProduct(null);
        setReservedEmail("");
      }, 3000);
    }
  };

  return (
    <section id="marketplace" className="py-20 bg-soft-gray-light font-sans relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deal/10 text-deal text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Live Marketplace Preview
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Hot Clearance Deals Nearing Best-Before Date
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl">
              Real products listed by top Nigerian supermarkets. Save up to 85% before stock runs out!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm shrink-0">
            <Filter className="w-4 h-4 text-primary" />
            <span>Sort by: Expiry Urgency</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                activeCategory === cat.id
                  ? "bg-gray-900 text-white border-gray-900 shadow-md scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-deal/30 transition-all flex flex-col justify-between group"
            >
              {/* Product Image & Badges */}
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />

                {/* Discount Badge */}
                <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-deal to-deal-dark text-white font-black text-xs px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  -{product.discountPercent}% OFF
                </div>

                {/* Badge tag */}
                <div className="absolute top-2.5 right-2.5 bg-gray-900/80 backdrop-blur-sm text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-white/20">
                  {product.badge}
                </div>

                {/* Expiry Urgency Footer Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 flex items-center justify-between text-white text-[11px] font-semibold">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Clock className="w-3 h-3" />
                    {product.daysLeft <= 2 ? `⏰ ${product.daysLeft} DAYS LEFT` : `Best-Before: ${product.expiryDate}`}
                  </span>
                  <span className="text-white/80">{product.stockRemaining} units remaining</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  {/* Store Name & Location */}
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium mb-1">
                    <span className="flex items-center gap-1 text-emerald-700 font-bold">
                      <Store className="w-3 h-3" />
                      {product.storeName}
                    </span>
                    <span className="flex items-center gap-0.5 text-gray-400">
                      <MapPin className="w-3 h-3" />
                      {product.storeLocation}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-deal transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="text-[11px] text-gray-400 font-medium">{product.unit}</div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-2 border-t border-gray-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-lg font-black text-gray-900">
                        ₦{product.clearancePrice.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400 line-through">
                        ₦{product.originalPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full block">
                        SAVE ₦{(product.originalPrice - product.clearancePrice).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-3 bg-gray-900 hover:bg-deal text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Reserve Deal / Get Alert</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Reservation Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl space-y-5 border border-gray-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!reservedSuccess ? (
                <>
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-gray-200 shadow-sm"
                    />
                    <div>
                      <div className="text-[11px] font-extrabold text-emerald-700 uppercase">
                        {selectedProduct.storeName}
                      </div>
                      <h3 className="font-bold text-base text-gray-900 leading-tight">
                        {selectedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-base font-black text-deal">
                          ₦{selectedProduct.clearancePrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₦{selectedProduct.originalPrice.toLocaleString()}
                        </span>
                        <span className="bg-deal/10 text-deal text-[10px] font-bold px-1.5 py-0.5 rounded">
                          -{selectedProduct.discountPercent}% OFF
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs space-y-2">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-700" />
                      Expiry Guarantee & Pick-up Details
                    </div>
                    <p className="text-amber-800 leading-relaxed">
                      This clearance item reaches best-before date on <strong>{selectedProduct.expiryDate}</strong> ({selectedProduct.daysLeft} days remaining). It is 100% sealed, original, and stored under proper temperature controls at <strong>{selectedProduct.storeName}</strong> ({selectedProduct.storeLocation}).
                    </p>
                  </div>

                  <form onSubmit={handleReserve} className="space-y-3">
                    <label className="block text-xs font-bold text-gray-700">
                      Enter email to get instant launch access & reserve deal priority:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        value={reservedEmail}
                        onChange={(e) => setReservedEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="flex-1 text-xs text-gray-900 bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-deal"
                      />
                      <button
                        type="submit"
                        className="bg-deal hover:bg-deal-dark text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <Bell className="w-4 h-4" />
                        <span>Get Alert</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Deal Alert Saved!</h3>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    We've prioritized your email for {selectedProduct.name} at {selectedProduct.storeName}. You'll be notified first when our app goes live!
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
