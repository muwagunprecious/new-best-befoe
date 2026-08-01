"use client";

import { Search, MapPin, ChevronDown, Percent, Star, Plus, ShoppingBag, Sparkles } from "lucide-react";

interface ProfessionalPhoneUIProps {
  step?: number;
  highlightItem?: string;
}

export default function ProfessionalPhoneUI({ step, highlightItem }: ProfessionalPhoneUIProps) {
  const categories = [
    { name: "Dairy", icon: "🥛", bg: "#EEF2FF" },
    { name: "Pantry", icon: "🌾", bg: "#FEF3C7" },
    { name: "Drinks", icon: "🥤", bg: "#ECFEFF" },
    { name: "Bakery", icon: "🍞", bg: "#FFF7ED" },
    { name: "Snacks", icon: "🍫", bg: "#FCE7F3" },
  ];

  const deals = [
    {
      id: 1,
      name: "Peak Organic Whole Milk (Pack of 6)",
      store: "Shoprite Mega Mall",
      location: "Ikeja, Lagos",
      rating: "4.9",
      delivery: "15-25 mins",
      clearancePrice: "₦1,600",
      originalPrice: "₦4,800",
      discount: "67% OFF",
      daysLeft: "3 days left",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Golden Penny Pure Sugar 1kg Box",
      store: "SPAR Supermarket",
      location: "Victoria Island",
      rating: "4.8",
      delivery: "20-30 mins",
      clearancePrice: "₦950",
      originalPrice: "₦2,500",
      discount: "62% OFF",
      daysLeft: "2 days left",
      image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="w-full h-full bg-[#F8FAFC] font-sans text-slate-800 flex flex-col overflow-hidden select-none">

      {/* iPhone Status Bar */}
      <div className="bg-white px-5 pt-3 pb-1 flex items-center justify-between shrink-0">
        <span className="text-xs font-bold text-slate-900 tracking-tight">9:41</span>
        <div className="w-16 h-3.5 bg-slate-900 rounded-full" />
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full border border-slate-900 bg-slate-900" />
          <span className="text-[10px] font-extrabold text-slate-900">5G</span>
        </div>
      </div>

      {/* App Header (Location + Wallet) */}
      <div className="bg-white px-4 py-2.5 border-b border-slate-100 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/70 px-2.5 py-1 rounded-full text-xs font-semibold text-slate-800 transition-colors">
          <MapPin className="w-3.5 h-3.5 text-indigo-600" />
          <span className="font-bold text-[11px]">Yaba, Lagos</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </div>

        <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-100 text-indigo-700 font-black text-[11px] px-2.5 py-1 rounded-full">
          <Sparkles className="w-3 h-3 text-indigo-600" />
          <span>₦10,100 saved</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-white px-4 pb-3 shrink-0">
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 text-xs text-slate-400">
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-500 font-medium truncate text-[11px]">
            {step === 1 ? 'Search "Peak Milk" or "Shoprite"' : 'Search for stores or near due-date products'}
          </span>
        </div>
      </div>

      {/* Main Scrollable App Canvas */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 hide-scrollbar">

        {/* Category Round Icons Row */}
        <div>
          <div className="flex items-center justify-between gap-2 overflow-x-auto hide-scrollbar pb-1">
            {categories.map((cat) => (
              <div key={cat.name} className="flex flex-col items-center gap-1 shrink-0">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shadow-sm border border-slate-100 transition-transform active:scale-95"
                  style={{ background: cat.bg }}
                >
                  {cat.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-600">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar">
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-[10px] font-bold text-slate-700 border border-slate-200">
            Sort by <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
          </button>
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600 text-[10px] font-bold text-white shadow-sm">
            <Percent className="w-2.5 h-2.5" /> Discounts
          </button>
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-[10px] font-bold text-slate-700 border border-slate-200">
            Rating <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
          </button>
        </div>

        {/* Deals Feed */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-slate-900 tracking-tight">Supermarket Clearance Deals</h3>
            <span className="text-[10px] font-extrabold text-indigo-600 hover:underline">See all</span>
          </div>

          <div className="space-y-3">
            {deals.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-3 border transition-all shadow-sm ${
                  step === 2 && item.id === 1
                    ? "border-indigo-600 ring-2 ring-indigo-100 shadow-md"
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <div className="relative h-28 w-full rounded-xl overflow-hidden bg-slate-100 mb-2.5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 bg-indigo-600 text-white font-extrabold text-[9px] px-2 py-0.5 rounded-lg shadow-sm">
                    {item.discount}
                  </div>

                  {/* Expiry Pill */}
                  <div className="absolute bottom-2 right-2 bg-slate-900/85 backdrop-blur-md text-amber-300 text-[9px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                    ⏰ {item.daysLeft}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-bold text-indigo-600">
                    <span className="truncate">{item.store}</span>
                    <span className="text-slate-400 font-normal shrink-0">{item.delivery}</span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1 leading-snug">
                    {item.name}
                  </h4>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-50">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-black text-slate-900">{item.clearancePrice}</span>
                      <span className="text-[10px] text-slate-400 line-through">{item.originalPrice}</span>
                    </div>

                    <button className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-xl shadow-sm transition-all">
                      <Plus className="w-3 h-3" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Nav Bar */}
      <div className="bg-white border-t border-slate-100 px-6 py-2 flex items-center justify-between text-slate-400 shrink-0">
        <div className="flex flex-col items-center gap-0.5 text-indigo-600">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-[9px] font-bold">Deals</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Search className="w-4 h-4" />
          <span className="text-[9px] font-medium">Search</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Sparkles className="w-4 h-4" />
          <span className="text-[9px] font-medium">Stores</span>
        </div>
      </div>
    </div>
  );
}
