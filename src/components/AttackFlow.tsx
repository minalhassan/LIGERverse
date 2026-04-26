'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { AttackStep } from '@/types';

interface AttackFlowProps {
  steps: AttackStep[];
}

export function AttackFlow({ steps }: AttackFlowProps) {
  return (
    <div className="relative py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 min-w-[150px] relative"
            >
              <div className="group relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--matrix-green)] to-[var(--cyber-blue)] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                
                <div className="relative glass p-4 rounded-xl border border-white/10 hover:border-[var(--matrix-green)]/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-[var(--matrix-green)] font-bold">0{index + 1}</span>
                    <h4 className="text-sm font-bold uppercase tracking-wider">{step.step}</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>

            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="hidden lg:block text-[var(--matrix-green)]/30"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
