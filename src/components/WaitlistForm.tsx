"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NIGERIAN_STATES, BUSINESS_CATEGORIES } from "@/lib/constants";
import {
  CheckCircle2,
  Copy,
  Check,
  MapPin,
  Mail,
  Phone,
  User,
  ArrowRight,
  Briefcase,
  Store,
  ShoppingBag,
  ShoppingCart,
  X,
  ChevronDown,
} from "lucide-react";

export default function WaitlistForm() {
  const [role, setRole] = useState<"shopper" | "merchant">("merchant");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateLocation, setStateLocation] = useState("Lagos");
  const [businessCategory, setBusinessCategory] = useState("Supermarket / Hypermarket");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralCode = useState(() => `BEST-${Math.floor(100000 + Math.random() * 900000)}`)[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && email.trim()) setShowModal(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://bestbefore.ng/join?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="waitlist"
      className="relative py-24 overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-xl px-5 sm:px-6">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.12em] text-indigo-600 mb-4">
            Reserve Your Spot
          </span>
          <h2 className="text-3xl sm:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-tight">
            Ready to rescue food<br />and your wallet?
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            Limited spots available for our beta launch. Turn your unwanted store inventory to profit.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">

          {/* Role Toggle */}
          <div className="flex border-b border-slate-100">
            {[
              { value: "merchant" as const, icon: Store, label: "I own a store" },
              { value: "shopper" as const, icon: ShoppingBag, label: "I want to shop" },
            ].map(({ value, icon: Icon, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setRole(value)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all border-b-2 ${
                  role === value
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50/60"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Full Name <span className="text-indigo-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[17px] h-[17px] text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Adewale Johnson"
                  className="w-full pl-10 pr-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none transition focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email Address <span className="text-indigo-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[17px] h-[17px] text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none transition focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[17px] h-[17px] text-slate-400 pointer-events-none" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08012345678"
                  className="w-full pl-10 pr-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none transition focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 placeholder-slate-400"
                />
              </div>
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                State <span className="text-indigo-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[17px] h-[17px] text-slate-400 pointer-events-none" />
                <select
                  value={stateLocation}
                  onChange={(e) => setStateLocation(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none appearance-none transition focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                >
                  {NIGERIAN_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Business Category — merchants only */}
            {role === "merchant" && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Business Category
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[17px] h-[17px] text-slate-400 pointer-events-none" />
                  <select
                    value={businessCategory}
                    onChange={(e) => setBusinessCategory(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none appearance-none transition focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                  >
                    {BUSINESS_CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            )}

            {/* Submit */}
            <div className="pt-1">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-sm font-bold py-3.5 rounded-xl text-white transition-all hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "#4F3FFF",
                  boxShadow: "0 4px 16px rgba(79,63,255,0.35)",
                }}
              >
                Reserve Your Spot
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-400 text-center mt-3">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="bg-white rounded-3xl max-w-sm w-full p-8 relative shadow-2xl text-center space-y-5 border border-slate-100"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon */}
              <div className="relative mx-auto w-[72px] h-[72px]">
                <div
                  className="w-full h-full rounded-[22px] flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg, #4F3FFF, #7C3AED)" }}
                >
                  <ShoppingCart className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 rounded-full p-1 border-2 border-white">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  You're on the list!
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Hey <span className="font-semibold text-slate-800">{fullName.split(" ")[0]}</span>, we'll
                  notify <span className="font-medium text-indigo-600">{email}</span> the moment
                  BestBefore launches in {stateLocation}.
                </p>
              </div>

              {/* Referral */}
              <div className="text-left bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Share to move up the list
                </p>
                <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 px-3 py-2">
                  <span className="flex-1 text-[11px] font-mono text-slate-500 truncate">
                    bestbefore.ng/join?ref={referralCode}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-lg text-white shrink-0 transition-all"
                    style={{ background: "#4F3FFF" }}
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white active:scale-95 transition-transform"
                style={{ background: "#4F3FFF" }}
              >
                Got it, thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
