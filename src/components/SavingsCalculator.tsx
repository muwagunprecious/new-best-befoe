"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PiggyBank, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export default function SavingsCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(80000);
  const monthlySavings = Math.round(monthlySpend * 0.6);
  const yearlySavings = monthlySavings * 12;

  return (
    <section id="calculator" className="py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-3">
            Savings Calculator
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            See what you could save every month.
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Based on average household grocery spend in Nigeria.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-8 sm:p-10 bg-white shadow-card">
          {/* Slider */}
          <div className="space-y-5 pb-8 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Monthly grocery budget</label>
              <div className="text-lg font-bold text-slate-900">
                ₦{monthlySpend.toLocaleString()}
                <span className="text-sm text-slate-500 font-normal"> /mo</span>
              </div>
            </div>

            <input
              type="range"
              min="20000"
              max="500000"
              step="5000"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full cursor-pointer"
            />

            <div className="flex justify-between text-xs text-slate-600">
              <span>₦20,000</span>
              <span>₦250,000</span>
              <span>₦500,000</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid sm:grid-cols-2 gap-6 pt-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                <PiggyBank className="w-4 h-4 text-green-600" />
                Monthly savings
              </div>
              <div className="text-4xl font-bold text-slate-900">
                ₦{monthlySavings.toLocaleString()}
              </div>
              <p className="text-sm text-slate-500">
                Saved each month by shopping near-expiry deals on Best Before.
              </p>
            </div>

            <div className="space-y-2 sm:border-l sm:border-slate-200 sm:pl-6">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-green-600" />
                Annual savings
              </div>
              <div className="text-4xl font-bold text-green-600">
                ₦{yearlySavings.toLocaleString()}
              </div>
              <p className="text-sm text-slate-500">
                Cumulative savings over 12 months on your household budget.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors shadow-green-sm"
            >
              Join Our Waitlist <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
