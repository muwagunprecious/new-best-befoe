"use client";

import { Search, MapPin, Tag, ShoppingBag, Sparkles } from "lucide-react";

export default function PhoneAppScreen() {
  const products = [
    {
      name: "Peak Organic Whole Milk (Pack of 6)",
      store: "Shoprite Mega Mall",
      location: "Ikeja, Lagos",
      price: "₦1,600",
      was: "₦4,800",
      discount: "67% OFF",
      daysLeft: "3 days left",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Golden Penny Sugar 1kg",
      store: "SPAR Supermarket",
      location: "VI, Lagos",
      price: "₦950",
      was: "₦2,500",
      discount: "62% OFF",
      daysLeft: "2 days left",
      image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Indomie Onion Chicken (Box of 40)",
      store: "Hubmart Stores",
      location: "Lekki Phase 1",
      price: "₦3,800",
      was: "₦9,500",
      discount: "60% OFF",
      daysLeft: "4 days left",
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Devon King's Vegetable Oil 5L",
      store: "Ebeano Supermarket",
      location: "Chevron, Lagos",
      price: "₦4,500",
      was: "₦11,000",
      discount: "59% OFF",
      daysLeft: "5 days left",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-slate-800 select-none overflow-hidden pt-9">
      {/* Header bar */}
      <div className="bg-white px-3.5 pt-2 pb-3 border-b border-slate-100 shadow-sm shrink-0">
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-1 text-indigo-600 font-bold">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-[11px]">Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 text-amber-700 font-extrabold text-[10px] px-2 py-0.5 rounded-full border border-amber-200">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Clearance Deals
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-1.5 text-xs text-slate-400">
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate text-[11px]">Search supermarkets or products...</span>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pt-2.5">
          {["All Deals", "Dairy & Eggs", "Pantry", "Beverages", "Bakery"].map((cat, i) => (
            <span
              key={cat}
              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg shrink-0 ${
                i === 0
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Main product feed */}
      <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-2.5 hide-scrollbar">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-slate-900 tracking-tight">
            Near Due-Date Supermarket Deals
          </span>
          <span className="text-[10px] font-bold text-indigo-600">See all</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-100 p-2 shadow-sm flex flex-col justify-between"
            >
              <div className="relative h-20 w-full rounded-lg overflow-hidden bg-slate-100 mb-1.5">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <span className="absolute top-1 left-1 bg-indigo-600 text-white font-extrabold text-[8px] px-1.5 py-0.5 rounded shadow">
                  {p.discount}
                </span>
                <span className="absolute bottom-1 right-1 bg-slate-900/80 backdrop-blur-sm text-amber-300 text-[8px] font-bold px-1 rounded">
                  {p.daysLeft}
                </span>
              </div>
              <div>
                <div className="text-[9px] font-bold text-slate-400 truncate">{p.store}</div>
                <h4 className="text-[10px] font-bold text-slate-800 line-clamp-1 leading-tight mb-1">
                  {p.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-black text-indigo-600">{p.price}</span>
                  <span className="text-[9px] text-slate-400 line-through">{p.was}</span>
                </div>
              </div>
              <button className="w-full mt-1.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-[9px] font-bold rounded-lg flex items-center justify-center gap-1">
                <ShoppingBag className="w-2.5 h-2.5" /> Reserve
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
