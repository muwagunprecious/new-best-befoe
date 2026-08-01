"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SuccessAnimationProps {
  show: boolean;
}

function ConfettiPiece({ delay, color, x, y, rotation }: { delay: number; color: string; x: number; y: number; rotation: number }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-sm"
      style={{ backgroundColor: color }}
      initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [0, x],
        y: [0, y],
        rotate: [0, rotation],
      }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
    />
  );
}

export default function SuccessAnimation({ show }: SuccessAnimationProps) {
  const [particles, setParticles] = useState<Array<{ id: number; color: string; x: number; y: number; rotation: number }>>([]);

  useEffect(() => {
    if (show) {
      const colors = ["#0F8B4C", "#D4A853", "#2563EB", "#EC4899", "#F59E0B"];
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        color: colors[i % colors.length],
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        rotation: Math.random() * 360,
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-2xl p-8 sm:p-12 max-w-md mx-4 text-center relative overflow-hidden shadow-2xl"
          >
            {particles.map((p) => (
              <ConfettiPiece key={p.id} delay={p.id * 0.02} color={p.color} x={p.x} y={p.y} rotation={p.rotation} />
            ))}

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15, delay: 0.2 }}
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15, delay: 0.4 }}
                className="mb-4"
              >
                <svg className="w-12 h-12 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl font-bold text-charcoal mb-2"
              >
                You're officially on the BestBefore waitlist!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-500 text-sm mb-6"
              >
                We'll notify you when we launch. Get ready to transform your expiring inventory into profit.
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => window.location.hash = ""}
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Got it
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
