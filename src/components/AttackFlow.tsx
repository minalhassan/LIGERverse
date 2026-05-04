'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { AttackStep } from '@/types';
import { cn } from '@/lib/utils';

interface AttackFlowProps {
  steps: AttackStep[];
  activeStep?: string | null;
  onStepClick?: (step: string | null) => void;
}

export function AttackFlow({ steps, activeStep, onStepClick }: AttackFlowProps) {
  return (
    <div className="relative py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {steps.map((step, index) => {
          const isActive = activeStep === step.step;
          
          return (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-1 min-w-[150px] relative"
                onClick={() => onStepClick?.(isActive ? null : step.step)}
              >
                <div className={cn(
                  "group relative cursor-pointer transition-transform hover:scale-105 active:scale-95",
                  isActive && "scale-105"
                )}>
                  {/* Glow Effect */}
                  <div className={cn(
                    "absolute -inset-1 rounded-xl blur transition duration-500",
                    isActive 
                      ? "bg-gradient-to-r from-[var(--matrix-green)] to-[var(--cyber-blue)] opacity-60" 
                      : "bg-gradient-to-r from-[var(--matrix-green)] to-[var(--cyber-blue)] opacity-20 group-hover:opacity-40"
                  )} />
                  
                  <div className={cn(
                    "relative glass p-4 rounded-xl border transition-colors",
                    isActive 
                      ? "border-[var(--matrix-green)] bg-[var(--matrix-green)]/5" 
                      : "border-white/10 hover:border-[var(--matrix-green)]/50"
                  )}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn(
                        "text-[10px] font-mono font-bold",
                        isActive ? "text-white" : "text-[var(--matrix-green)]"
                      )}>0{index + 1}</span>
                      <h4 className={cn(
                        "text-sm font-bold uppercase tracking-wider",
                        isActive ? "text-[var(--matrix-green)]" : "text-white"
                      )}>{step.step}</h4>
                    </div>
                    <p className={cn(
                      "text-xs leading-relaxed",
                      isActive ? "text-gray-200" : "text-gray-400"
                    )}>{step.desc}</p>
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
          );
        })}
      </div>
    </div>
  );
}
