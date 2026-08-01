"use client";

import { motion } from "framer-motion";

export default function ShelfIllustration() {
  const products = [
    { name: "Golden Penny Pasta", price: "₦1,200", badge: "Best Before: 7 days" },
    { name: "Peak Milk", price: "₦2,500", badge: "Best Before: 14 days" },
    { name: "Indomie Noodles", price: "₦800", badge: "Best Before: 5 days" },
    { name: "Milo Drink", price: "₦3,200", badge: "Best Before: 10 days" },
    { name: "Dangote Sugar", price: "₦1,800" },
    { name: "Power Oil", price: "₦2,000", badge: "Best Before: 3 days" },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shelf Structure */}
          <rect x="50" y="340" width="500" height="8" rx="2" fill="#D4A853" opacity="0.6" />
          <rect x="50" y="220" width="500" height="8" rx="2" fill="#D4A853" opacity="0.6" />
          <rect x="50" y="100" width="500" height="8" rx="2" fill="#D4A853" opacity="0.6" />
          <rect x="50" y="340" width="8" height="120" rx="2" fill="#B8923E" opacity="0.4" />
          <rect x="542" y="340" width="8" height="120" rx="2" fill="#B8923E" opacity="0.4" />

          {/* Products - Top Shelf */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <rect x="80" y="115" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="90" y="145" width="50" height="6" rx="3" fill="#0F8B4C" opacity="0.7" />
            <rect x="90" y="160" width="50" height="4" rx="2" fill="#111111" opacity="0.1" />
            <rect x="90" y="170" width="35" height="4" rx="2" fill="#111111" opacity="0.1" />

            <rect x="165" y="115" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="175" y="145" width="50" height="6" rx="3" fill="#2563EB" opacity="0.7" />
            <rect x="175" y="160" width="50" height="4" rx="2" fill="#111111" opacity="0.1" />

            <rect x="250" y="115" width="70" height="95" rx="6" fill="white" stroke="#D4A853" strokeWidth="1.5" />
            <rect x="255" y="140" width="10" height="10" rx="5" fill="#D4A853" />
            <rect x="260" y="145" width="50" height="6" rx="3" fill="#D4A853" opacity="0.8" />
            <rect x="260" y="160" width="50" height="4" rx="2" fill="#111111" opacity="0.1" />
            <text x="280" y="153" fill="white" fontSize="6" textAnchor="middle">BB</text>
          </motion.g>

          {/* Products - Middle Shelf */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <rect x="80" y="235" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="90" y="265" width="50" height="6" rx="3" fill="#D97706" opacity="0.7" />
            <rect x="90" y="280" width="50" height="4" rx="2" fill="#111111" opacity="0.1" />

            <rect x="165" y="235" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="175" y="265" width="50" height="6" rx="3" fill="#0F8B4C" opacity="0.7" />
            <rect x="175" y="280" width="50" height="4" rx="2" fill="#111111" opacity="0.1" />

            <rect x="250" y="235" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="260" y="265" width="50" height="6" rx="3" fill="#EC4899" opacity="0.7" />

            <rect x="335" y="235" width="70" height="95" rx="6" fill="white" stroke="#D4A853" strokeWidth="1.5" />
            <rect x="340" y="260" width="10" height="10" rx="5" fill="#D4A853" />
            <rect x="345" y="265" width="50" height="6" rx="3" fill="#D4A853" opacity="0.8" />
            <text x="365" y="273" fill="white" fontSize="6" textAnchor="middle">BB</text>
          </motion.g>

          {/* Products - Bottom Shelf */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <rect x="80" y="355" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="90" y="385" width="50" height="6" rx="3" fill="#EF4444" opacity="0.7" />

            <rect x="165" y="355" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="175" y="385" width="50" height="6" rx="3" fill="#06B6D4" opacity="0.7" />

            <rect x="250" y="355" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="260" y="385" width="50" height="6" rx="3" fill="#7C3AED" opacity="0.7" />

            <rect x="335" y="355" width="70" height="95" rx="6" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="345" y="385" width="50" height="6" rx="3" fill="#D4A853" opacity="0.7" />
          </motion.g>

          {/* Dashboard */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <rect x="420" y="100" width="140" height="200" rx="10" fill="white" stroke="#E8E8ED" strokeWidth="1" />
            <rect x="430" y="110" width="40" height="4" rx="2" fill="#0F8B4C" />
            <rect x="430" y="125" width="60" height="3" rx="1.5" fill="#111111" opacity="0.05" />
            <rect x="430" y="140" width="80" height="20" rx="4" fill="#0F8B4C" opacity="0.1" />
            <text x="445" y="154" fill="#0F8B4C" fontSize="8" fontWeight="600">₦2.4M Recovered</text>
            <rect x="430" y="170" width="80" height="20" rx="4" fill="#2563EB" opacity="0.1" />
            <text x="445" y="184" fill="#2563EB" fontSize="8" fontWeight="600">342 Products</text>
            <rect x="430" y="200" width="80" height="20" rx="4" fill="#D4A853" opacity="0.1" />
            <text x="445" y="214" fill="#D4A853" fontSize="8" fontWeight="600">28 Stores</text>

            {/* Chart */}
            <rect x="430" y="235" width="120" height="50" rx="6" fill="#F5F5F7" />
            <polyline points="440,270 460,260 480,265 500,250 520,255 540,240" stroke="#0F8B4C" strokeWidth="2" fill="none" />
          </motion.g>

          {/* Money animations */}
          <motion.g
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <text x="395" y="260" fontSize="14">₦</text>
          </motion.g>
          <motion.g
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <text x="380" y="280" fontSize="10">₦</text>
          </motion.g>
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <text x="410" y="250" fontSize="12">₦</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
