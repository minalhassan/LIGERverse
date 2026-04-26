'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, XCircle, ChevronRight, Trophy } from 'lucide-react';
import { Challenge } from '@/types';
import { cn } from '@/lib/utils';

interface PracticeModeProps {
  challenges: Challenge[];
}

export function PracticeMode({ challenges }: PracticeModeProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const currentChallenge = challenges[currentIdx];

  const handleSelect = (option: string) => {
    if (showExplanation) return;
    setSelectedOption(option);
    const correct = option === currentChallenge.answer;
    setIsCorrect(correct);
    setShowExplanation(true);
    if (correct) setScore(score + 1);
  };

  const nextChallenge = () => {
    if (currentIdx < challenges.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowExplanation(false);
    }
  };

  if (challenges.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Progress</span>
          <div className="flex gap-1">
            {challenges.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-8 h-1 rounded-full transition-all duration-500",
                  i === currentIdx ? "bg-[var(--matrix-green)] shadow-[0_0_8px_rgba(0,255,65,0.5)]" : 
                  i < currentIdx ? "bg-[var(--matrix-green)]/30" : "bg-white/10"
                )} 
              />
            ))}
          </div>
        </div>
        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          Score: <span className="text-[var(--matrix-green)]">{score}/{challenges.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="glass p-8 rounded-3xl border-white/5"
        >
          <h3 className="text-xl font-bold mb-8 leading-tight">{currentChallenge.question}</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {currentChallenge.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                disabled={showExplanation}
                className={cn(
                  "w-full p-5 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden",
                  selectedOption === option 
                    ? (isCorrect ? "bg-green-500/10 border-green-500/50" : "bg-red-500/10 border-red-500/50")
                    : "bg-white/5 border-white/10 hover:border-[var(--matrix-green)]/30 hover:bg-white/10",
                  showExplanation && option === currentChallenge.answer && option !== selectedOption ? "border-green-500/50 bg-green-500/5" : ""
                )}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold border transition-colors",
                    selectedOption === option
                      ? (isCorrect ? "bg-green-500 border-green-500 text-black" : "bg-red-500 border-red-500 text-black")
                      : "bg-black/40 border-white/10 group-hover:border-[var(--matrix-green)]/50"
                  )}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className={cn(
                    "text-sm font-medium",
                    selectedOption === option ? "text-white" : "text-gray-300"
                  )}>{option}</span>
                </div>
                
                {showExplanation && option === currentChallenge.answer && (
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <ShieldCheck className="w-6 h-6 text-green-500 animate-pulse" />
                  </div>
                )}
                {showExplanation && option === selectedOption && !isCorrect && (
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3"
              >
                <div className="flex items-center gap-2 text-[var(--cyber-blue)]">
                  <Trophy className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Expert Insight</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  {currentChallenge.explanation}
                </p>
                
                {currentIdx < challenges.length - 1 ? (
                  <button
                    onClick={nextChallenge}
                    className="mt-4 flex items-center gap-2 text-[var(--matrix-green)] text-xs font-bold uppercase tracking-widest hover:translate-x-1 transition-all"
                  >
                    Next Challenge <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="mt-4 text-[var(--matrix-green)] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> Module Knowledge Verified
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
