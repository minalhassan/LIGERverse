'use client';

import React from 'react';
import practiceRooms from '@/data/practice-rooms.json';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function LabsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="px-3 py-1 rounded-full bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/20 text-[10px] font-bold uppercase tracking-widest text-[var(--matrix-green)]">
            Bonus Content
          </div>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
        >
          PRACTICE LABS
        </motion.h1>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          Curated collection of free TryHackMe rooms to reinforce your learning. 
          From Linux fundamentals to advanced exploitation, these labs provide the hands-on experience needed for professional pentesting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {practiceRooms.map((category, catIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: catIdx * 0.1 }}
            className="glass p-8 rounded-[32px] border-white/5 hover:border-white/10 transition-all flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">{category.category}</h2>
            </div>

            <div className="space-y-3 flex-1">
              {category.rooms.map((room, idx) => (
                <a
                  key={idx}
                  href={room.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[var(--matrix-green)]/30 hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-gray-600 group-hover:text-[var(--matrix-green)] transition-colors" />
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{room.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-[var(--matrix-green)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="p-12 rounded-[40px] bg-gradient-to-br from-[var(--matrix-green)]/10 to-transparent border border-[var(--matrix-green)]/20 flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-[var(--matrix-green)] flex items-center justify-center text-black mb-6">
          <ExternalLink className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-black text-white mb-4">Want more challenges?</h3>
        <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
          TryHackMe has hundreds of more rooms covering every aspect of cybersecurity. 
          Create a free account and start your journey today.
        </p>
        <a 
          href="https://tryhackme.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[var(--matrix-green)] text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,65,0.4)]"
        >
          Go to TryHackMe
        </a>
      </motion.div>
    </div>
  );
}
