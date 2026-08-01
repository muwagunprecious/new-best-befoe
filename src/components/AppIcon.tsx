"use client";

interface AppIconProps {
  size?: number;
  className?: string;
  showText?: boolean;
  dark?: boolean;
}

export default function AppIcon({ size = 40, className = "", showText = false, dark = false }: AppIconProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #4ADE80 0%, #22C55E 60%, #16A34A 100%)",
          boxShadow: "0 4px 14px rgba(34,197,94,0.35)",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-xl pointer-events-none" />
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
          {/* Shopping bag */}
          <path d="M6 8h12l1.5 11H4.5L6 8z" fill="white" fillOpacity="0.95" />
          {/* Handle */}
          <path d="M9 9V6.5C9 5.12 10.12 4 11.5 4h1C13.88 4 15 5.12 15 6.5V9"
            stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          {/* Clock */}
          <circle cx="15.5" cy="14.5" r="3.5" fill="#15803D" />
          <path d="M15.5 12.8v1.7l1.1.9" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold text-[15px] tracking-tight ${dark ? "text-slate-900" : "text-white"}`}>
            Best<span className="text-green-500">Before</span>
          </span>
          <span className={`text-[10px] mt-0.5 tracking-wide font-normal ${dark ? "text-slate-400" : "text-white/60"}`}>
            Clearance Marketplace
          </span>
        </div>
      )}
    </div>
  );
}
