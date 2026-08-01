"use client";

import { motion } from "framer-motion";
import { Navigation, Sparkles } from "lucide-react";

export default function CoverageMapSection() {
  const mapLocations = [
    { label: "Agege", x: 260, y: 150 },
    { label: "Ikeja", x: 480, y: 220 },
    { label: "Magodo", x: 720, y: 180 },
    { label: "Lekki", x: 760, y: 460 },
    { label: "Abuja (FCT)", x: 860, y: 280 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Container styled like Swoop reference image #3 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[40px] overflow-hidden border border-slate-200 shadow-2xl bg-[#E2E8F0] min-h-[460px] flex items-center"
        >
          {/* Vector Map Canvas Background — identical to Swoop reference image #3 */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-cover"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Land background */}
              <rect width="1000" height="500" fill="#E2E8F0" />

              {/* Zone Polygons (Orange/Peach urban blocks like Swoop map) */}
              <polygon points="200,40 380,40 350,180 180,160" fill="#FDE68A" opacity="0.85" />
              <polygon points="620,320 950,280 920,480 580,460" fill="#FED7AA" opacity="0.9" />
              <polygon points="600,100 800,80 820,200 620,180" fill="#FEF08A" opacity="0.8" />

              {/* Green Park Polygon */}
              <polygon points="640,40 780,40 760,140 650,140" fill="#22C55E" opacity="0.9" />

              {/* Blue Lagoon / River Waterway */}
              <path
                d="M 620,0 C 600,120 650,220 740,320 C 820,410 700,500 680,500 L 1000,500 L 1000,0 Z"
                fill="#0EA5E9"
                opacity="0.9"
              />

              {/* Road Network (Thick White Intersecting Roads) */}
              <g stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" opacity="0.95">
                <line x1="100" y1="120" x2="900" y2="120" />
                <line x1="300" y1="40" x2="300" y2="480" />
                <line x1="500" y1="40" x2="850" y2="450" />
                <line x1="200" y1="360" x2="950" y2="360" />
                <line x1="700" y1="120" x2="700" y2="480" />
                <line x1="400" y1="240" x2="980" y2="240" />
              </g>

              {/* Secondary fine road lines */}
              <g stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.8">
                <line x1="150" y1="200" x2="450" y2="200" />
                <line x1="600" y1="40" x2="600" y2="280" />
                <line x1="250" y1="400" x2="750" y2="400" />
              </g>
            </svg>
          </div>

          {/* Map Location Capsules — matching Swoop map labels */}
          <div className="absolute inset-0 pointer-events-none">
            {mapLocations.map((loc) => (
              <div
                key={loc.label}
                className="absolute hidden sm:block transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(loc.x / 1000) * 100}%`, top: `${(loc.y / 500) * 100}%` }}
              >
                <div className="bg-white/95 backdrop-blur-md text-slate-800 font-extrabold text-[11px] px-3.5 py-1.5 rounded-full shadow-md border border-slate-200/80">
                  {loc.label}
                </div>
              </div>
            ))}

            {/* Central Dark Blue Pin for "Nigeria" — identical to Swoop's Yaba pin */}
            <div
              className="absolute left-[65%] top-[45%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <div className="bg-[#0F0B2E] text-white font-extrabold text-xs px-4 py-2 rounded-2xl shadow-2xl border border-indigo-400/40 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Nigeria</span>
              </div>
              <div className="w-4 h-4 bg-[#0F0B2E] transform rotate-45 -mt-2 rounded-sm shadow-md" />
            </div>
          </div>

          {/* Overlay Glassmorphism Card — exact match to Swoop reference image #3 */}
          <div className="relative z-10 p-6 sm:p-10 max-w-lg">
            <div
              className="rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl border border-white/60"
              style={{
                background: "rgba(255, 255, 255, 0.88)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
              }}
            >
              <div
                className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "#EEF2FF", color: "#4F3FFF" }}
              >
                <Sparkles className="w-3.5 h-3.5" /> Nationwide Expansion
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Coming soon in <span style={{ color: "#4F3FFF" }}>Nigeria.</span>
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                BestBefore connects supermarkets with budget-conscious shoppers across Lagos, Abuja, Port Harcourt, Ibadan, and surrounding commercial areas. More locations launching soon.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano"].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-bold px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm"
                  >
                    📍 {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
