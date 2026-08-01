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

const InputField = ({
  icon: Icon,
  label,
  required,
  children,
}: {
  icon: React.ElementType;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-500">
      {label}
      {required && <span className="text-indigo-500">*</span>}
    </label>
    <div className="relative group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none" />
      {children}
    </div>
  </div>
);

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

  const inputClass =
    "w-full pl-11 pr-4 py-3.5 text-sm font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all focus:bg-white focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 placeholder-slate-400";

  const selectClass = inputClass + " appearance-none cursor-pointer";

  return (
    <section
      id="waitlist"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0F0B2E 0%, #1E1653 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, #4F3FFF 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-8 z-10">

        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ background: "rgba(79,63,255,0.25)", color: "#A5B4FC", border: "1px solid rgba(165,180,252,0.25)" }}
          >
            🎯 Limited Beta Spots
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ready to rescue food<br />
            <span style={{ color: "#818CF8" }}>and your wallet?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Turn your unwanted store inventory into profit. Reserve your spot before we launch.
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Role selector header */}
          <div className="p-2 m-4 mb-0 rounded-2xl grid grid-cols-2 gap-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              { value: "merchant" as const, icon: Store, label: "I own a store" },
              { value: "shopper" as const, icon: ShoppingBag, label: "I'm a shopper" },
            ].map(({ value, icon: Icon, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setRole(value)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all"
                style={
                  role === value
                    ? {
                        background: "linear-gradient(135deg, #4F3FFF, #6B5EFF)",
                        color: "white",
                        boxShadow: "0 4px 20px rgba(79,63,255,0.4)",
                      }
                    : { color: "rgba(255,255,255,0.5)" }
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 pt-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <InputField icon={User} label="Full Name" required>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Adewale Johnson"
                  className={inputClass}
                />
              </InputField>

              {/* Email */}
              <InputField icon={Mail} label="Email Address" required>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </InputField>

              {/* Phone */}
              <InputField icon={Phone} label="Phone Number">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08012345678"
                  className={inputClass}
                />
              </InputField>

              {/* State */}
              <InputField icon={MapPin} label="State" required>
                <div className="relative">
                  <select
                    value={stateLocation}
                    onChange={(e) => setStateLocation(e.target.value)}
                    className={selectClass}
                  >
                    {NIGERIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </InputField>
            </div>

            {/* Business Category — merchants only */}
            {role === "merchant" && (
              <InputField icon={Briefcase} label="Business Category">
                <div className="relative">
                  <select
                    value={businessCategory}
                    onChange={(e) => setBusinessCategory(e.target.value)}
                    className={selectClass}
                  >
                    {BUSINESS_CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </InputField>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 text-sm font-extrabold py-4 rounded-xl text-white transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #4F3FFF 0%, #7C3AED 100%)",
                  boxShadow: "0 8px 32px rgba(79,63,255,0.5)",
                }}
              >
                Reserve Your Spot
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-3">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </form>
        </motion.div>

        {/* Social proof below form */}
        <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
          {[
            { value: "500+", label: "Stores joining" },
            { value: "Lagos, Abuja, PHC", label: "Priority cities" },
            { value: "Free", label: "To join beta" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-white font-extrabold text-lg">{s.value}</div>
              <div className="text-slate-500 text-[11px] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="bg-white rounded-3xl max-w-sm w-full p-8 relative shadow-2xl text-center space-y-5"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon */}
              <div className="relative mx-auto w-20 h-20">
                <div
                  className="w-full h-full rounded-3xl flex items-center justify-center shadow-xl"
                  style={{ background: "linear-gradient(135deg, #4F3FFF, #7C3AED)" }}
                >
                  <ShoppingCart className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-white shadow-lg">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  You're on the list! 🎉
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Hey <span className="font-bold text-slate-800">{fullName.split(" ")[0]}</span>, your spot in{" "}
                  <span className="font-semibold text-indigo-600">{stateLocation}</span> is reserved. We'll notify{" "}
                  <span className="font-medium text-slate-700">{email}</span> at launch.
                </p>
              </div>

              {/* Referral */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2 text-left">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Share & move up the list</p>
                <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 px-3 py-2">
                  <span className="flex-1 text-[11px] font-mono text-slate-600 truncate">
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
                className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white shadow-lg transition-transform active:scale-95"
                style={{ background: "linear-gradient(135deg, #4F3FFF, #7C3AED)" }}
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
