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
} from "lucide-react";

export default function WaitlistForm() {
  const [role, setRole] = useState<"shopper" | "merchant">("merchant");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateLocation, setStateLocation] = useState("Lagos");
  const [businessCategory, setBusinessCategory] = useState("Supermarket / Hypermarket");
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralCode = useState(() => `BEST-${Math.floor(100000 + Math.random() * 900000)}`)[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && email.trim()) {
      setShowModal(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://bestbefore.ng/join?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="waitlist"
      className="py-20 relative overflow-hidden"
      style={{ background: "#FAFAFA" }}
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full"
            style={{ background: "#EEF2FF", color: "#4F3FFF" }}
          >
            Reserve Your Spot
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to rescue food <span style={{ color: "#4F3FFF" }}>and your wallet?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            Limited spots available for our beta launch. Turn your unwanted store inventory to profit.
          </p>
        </div>

        {/* Clean Form Card */}
        <div
          className="rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 bg-white max-w-2xl mx-auto"
        >
          {/* Role Toggle */}
          <div
            className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl mb-8"
            style={{ background: "#F1F5F9" }}
          >
            {[
              { value: "merchant" as const, icon: Store, label: "I own a store" },
              { value: "shopper" as const, icon: ShoppingBag, label: "I'm a shopper" },
            ].map(({ value, icon: Icon, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setRole(value)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all"
                style={
                  role === value
                    ? {
                        background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)",
                        color: "white",
                        boxShadow: "0 4px 12px rgba(79,63,255,0.3)",
                      }
                    : { color: "#64748B" }
                }
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                  Name <span style={{ color: "#4F3FFF" }}>*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Adewale Johnson"
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                  Email Address <span style={{ color: "#4F3FFF" }}>*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08012345678"
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* State */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                  State <span style={{ color: "#4F3FFF" }}>*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    value={stateLocation}
                    onChange={(e) => setStateLocation(e.target.value)}
                    className="input-field pl-10 appearance-none cursor-pointer"
                  >
                    {NIGERIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Business Category — merchants only */}
            {role === "merchant" && (
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                  Business Category
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    value={businessCategory}
                    onChange={(e) => setBusinessCategory(e.target.value)}
                    className="input-field pl-10 appearance-none cursor-pointer"
                  >
                    {BUSINESS_CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="pt-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-sm font-bold py-4 rounded-xl text-white transition-all hover:scale-[1.01] active:scale-95 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)",
                  boxShadow: "0 8px 24px rgba(79,63,255,0.3)",
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

      {/* Success Pop-up Modal with Tick & Shopping Cart Card */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 text-center space-y-5"
            >
              {/* Close X button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Shopping Cart Card with Success Tick */}
              <div className="relative mx-auto w-20 h-20">
                <div
                  className="w-full h-full rounded-3xl flex items-center justify-center text-white shadow-xl"
                  style={{ background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)" }}
                >
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                {/* Green Checkmark Badge */}
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-white shadow">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              {/* Headline */}
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Thank you! You are on the list.
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  We've reserved your priority spot, <span className="font-bold text-slate-800">{fullName.split(" ")[0]}</span>! We'll notify <span className="font-semibold text-slate-700">{email}</span> the moment BestBefore launches in {stateLocation}.
                </p>
              </div>

              {/* Referral Link Card */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3.5 space-y-2 text-left">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Share & Bump your spot</p>
                <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 p-2">
                  <span className="flex-1 text-xs font-mono text-slate-600 truncate">
                    bestbefore.ng/join?ref={referralCode}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg text-white shrink-0"
                    style={{ background: "#4F3FFF" }}
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-transform active:scale-95"
                style={{ background: "linear-gradient(135deg, #00D4AA, #00B894)" }}
              >
                Got It, Thank You!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
