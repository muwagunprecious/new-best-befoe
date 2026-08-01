"use client";

import ProfessionalPhoneUI from "./ProfessionalPhoneUI";

interface IPhoneMockupProps {
  step?: number;
  width?: number;
  height?: number;
}

export default function IPhoneMockup({ step, width = 285, height = 570 }: IPhoneMockupProps) {
  return (
    <div className="relative flex justify-center items-center">
      {/* Soft Glow behind phone */}
      <div
        className="absolute inset-0 rounded-[50px] blur-3xl opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,63,255,0.4) 0%, transparent 70%)" }}
      />

      {/* Phone outer shell (iPhone 15 Pro Frame) */}
      <div
        className="relative overflow-hidden bg-slate-900 shadow-2xl transition-all duration-300 hover:scale-[1.01]"
        style={{
          width,
          height,
          borderRadius: 46,
          border: "8px solid #0F172A",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.12), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Dynamic Island Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4.5 bg-black rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
        </div>

        {/* Screen Content */}
        <ProfessionalPhoneUI step={step} />

        {/* Bottom Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-300 rounded-full z-30 opacity-60" />
      </div>
    </div>
  );
}
