'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Terminal as TerminalIcon, 
  Target, 
  Cpu, 
  Globe, 
  Lock, 
  Zap, 
  ChevronRight,
  Play,
  Code
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Modules', value: '07' },
  { label: 'Commands', value: '150+' },
  { label: 'Simulations', value: '45' },
  { label: 'Scenarios', value: '12' },
];

const paths = [
  {
    title: 'Beginner',
    desc: 'Foundations of network security and basic tools.',
    color: 'text-green-500',
    icon: Shield,
  },
  {
    title: 'Intermediate',
    desc: 'Web exploitation and active scanning techniques.',
    color: 'text-yellow-500',
    icon: Target,
  },
  {
    title: 'Advanced',
    desc: 'PrivEsc chains and automated vulnerability research.',
    color: 'text-red-500',
    icon: Zap,
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[var(--matrix-green)]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[var(--cyber-blue)]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--matrix-green)] animate-pulse" />
            <span className="text-[10px] font-mono text-[var(--matrix-green)] font-bold uppercase tracking-widest">System Status: Operational</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-8xl font-black tracking-tighter leading-[0.9] text-white"
          >
            ELEVATE YOUR <br />
            <span className="text-[var(--matrix-green)] drop-shadow-[0_0_15px_rgba(0,255,65,0.3)]">CYBER SKILLS</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            The ultimate interactive playground for CTF players and penetration testers. 
            Master the tools, understand the chains, and dominate the leaderboard.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <Link href="/modules/system-hacking" className="cyber-button group flex items-center gap-2">
              Start Learning
              <Play className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all backdrop-blur-md">
              View Roadmap
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass p-6 rounded-3xl text-center border-white/5">
            <h3 className="text-4xl font-black text-white mb-1">{stat.value}</h3>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Learning Paths */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white">CHOOSE YOUR PATH</h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Structured progression from zero to hero</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, idx) => {
            const linkHref = path.title === 'Beginner' ? '/modules/cryptography' : 
                             path.title === 'Intermediate' ? '/modules/system-hacking' : 
                             '/modules/privilege-escalation';
            return (
              <Link href={linkHref} key={idx} className="block group">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-[40px] border-white/5 h-full relative overflow-hidden"
                >
                  <div className={cn("w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", path.color)}>
                    <path.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{path.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{path.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-[var(--matrix-green)] transition-colors">
                    Explore Path <ChevronRight className="w-4 h-4" />
                  </div>
                  
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <path.icon className="w-32 h-32" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Credits Section */}
      <footer className="pt-20 border-t border-white/5 pb-10 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Built & Architected By</p>
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Md Minal Hasan Raj Mim</h2>
          <p className="text-sm font-mono text-[var(--matrix-green)]">B.Tech in Computer Science & Engineering</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/minalhassan" 
            title="GitHub"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--matrix-green)]/30 hover:bg-white/10 transition-all group"
          >
            <Code className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/minalhasan1/" 
            title="LinkedIn"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#0077b5]/30 hover:bg-white/10 transition-all group"
          >
            <Globe className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
          </a>
          <a 
            href="https://minal-hasan.onrender.com/" 
            title="Portfolio"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--matrix-green)]/30 hover:bg-white/10 transition-all group"
          >
            <Zap className="w-5 h-5 text-gray-500 group-hover:text-[var(--matrix-green)] transition-colors" />
          </a>
        </div>
        
        <p className="text-[10px] font-mono text-gray-700 mt-4 uppercase tracking-widest">© 2026 LIGERverse. All rights reserved.</p>
      </footer>
    </div>
  );
}
