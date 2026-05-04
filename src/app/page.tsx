'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
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
  Code,
  Search,
  FileCode,
  ShieldAlert,
  BookOpen,
  Layers,
  ArrowRight,
  Fingerprint,
  Radar,
  Eye,
  BugOff,
  Server,
  Wifi
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);
  
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Typing Terminal ─── */
function TypingTerminal() {
  const lines = [
    { prompt: '~$', cmd: 'nmap -sV -sC 10.10.10.5', delay: 0 },
    { prompt: '', cmd: 'PORT     STATE SERVICE  VERSION', delay: 1800, isOutput: true },
    { prompt: '', cmd: '22/tcp   open  ssh      OpenSSH 8.9p1', delay: 2200, isOutput: true },
    { prompt: '', cmd: '80/tcp   open  http     Apache 2.4.52', delay: 2600, isOutput: true },
    { prompt: '', cmd: '443/tcp  open  ssl      OpenSSL 1.1.1', delay: 3000, isOutput: true },
    { prompt: '~$', cmd: 'gobuster dir -u http://10.10.10.5 -w common.txt', delay: 4000 },
    { prompt: '', cmd: '/admin         (Status: 301)', delay: 5500, isOutput: true },
    { prompt: '', cmd: '/backup        (Status: 200)', delay: 5900, isOutput: true },
    { prompt: '~$', cmd: 'Access Granted ✓', delay: 7000, isSuccess: true },
  ];
  
  const [visibleLines, setVisibleLines] = useState(0);
  
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    lines.forEach((line, idx) => {
      timers.push(setTimeout(() => setVisibleLines(idx + 1), line.delay));
    });
    // Loop
    timers.push(setTimeout(() => setVisibleLines(0), 9000));
    timers.push(setTimeout(() => {
      lines.forEach((line, idx) => {
        timers.push(setTimeout(() => setVisibleLines(idx + 1), line.delay));
      });
    }, 9500));
    return () => timers.forEach(clearTimeout);
  }, []);
  
  return (
    <div className="font-mono text-xs leading-relaxed">
      {lines.slice(0, visibleLines).map((line, idx) => (
        <div key={idx} className={cn(
          "flex gap-2",
          line.isOutput && "text-gray-500 pl-4",
          line.isSuccess && "text-[var(--matrix-green)] font-bold"
        )}>
          {line.prompt && <span className="text-[var(--matrix-green)]">minal@liger</span>}
          {line.prompt && <span className="text-gray-500">{line.prompt}</span>}
          <span>{line.cmd}</span>
        </div>
      ))}
      <div className="flex gap-2">
        <span className="text-[var(--matrix-green)]">minal@liger</span>
        <span className="text-gray-500">~$</span>
        <span className="terminal-cursor" />
      </div>
    </div>
  );
}

/* ─── Data ─── */
const stats = [
  { label: 'Modules', value: 11, suffix: '' , icon: Layers },
  { label: 'Commands', value: 200, suffix: '+', icon: TerminalIcon },
  { label: 'Simulations', value: 85, suffix: '+', icon: Radar },
  { label: 'Tools Covered', value: 50, suffix: '+', icon: Fingerprint },
];

const featuredModules = [
  { 
    id: 'fundamental-of-hacking', 
    title: 'Fundamentals', 
    desc: 'Linux & Windows internals, exploration tools, and detection techniques.',
    icon: BookOpen, 
    color: 'from-green-500/20 to-emerald-500/5',
    border: 'border-green-500/20 hover:border-green-500/40',
    badge: 'NEW',
    badgeColor: 'bg-green-500'
  },
  { 
    id: 'ethical-hacking', 
    title: 'Ethical Hacking', 
    desc: 'The 5-stage methodology: Recon, Scanning, Access, Persistence, and Covering Tracks.',
    icon: Shield, 
    color: 'from-blue-500/20 to-cyan-500/5',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    badge: 'CORE',
    badgeColor: 'bg-blue-500'
  },
  { 
    id: 'system-hacking', 
    title: 'System Hacking', 
    desc: 'Nmap, Netdiscover, SMB exploitation, and post-exploitation techniques.',
    icon: Cpu, 
    color: 'from-purple-500/20 to-violet-500/5',
    border: 'border-purple-500/20 hover:border-purple-500/40',
    badge: 'POPULAR',
    badgeColor: 'bg-purple-500'
  },
  { 
    id: 'web-hacking', 
    title: 'Web Hacking', 
    desc: 'SQL injection, XSS, CSRF, and web application vulnerability exploitation.',
    icon: Globe, 
    color: 'from-orange-500/20 to-amber-500/5',
    border: 'border-orange-500/20 hover:border-orange-500/40',
  },
  { 
    id: 'privilege-escalation', 
    title: 'Privilege Escalation', 
    desc: 'SUID binaries, kernel exploits, misconfigurations, and lateral movement.',
    icon: Zap, 
    color: 'from-red-500/20 to-rose-500/5',
    border: 'border-red-500/20 hover:border-red-500/40',
    badge: 'ADV',
    badgeColor: 'bg-red-500'
  },
  { 
    id: 'owasp-top-10', 
    title: 'OWASP Top 10', 
    desc: 'The most critical web application security risks explained and demonstrated.',
    icon: ShieldAlert, 
    color: 'from-yellow-500/20 to-amber-500/5',
    border: 'border-yellow-500/20 hover:border-yellow-500/40',
  },
];

const methodology = [
  { step: '01', title: 'Recon', desc: 'Passive & active info gathering', icon: Search, color: 'text-cyan-400' },
  { step: '02', title: 'Scan', desc: 'Port & service enumeration', icon: Radar, color: 'text-blue-400' },
  { step: '03', title: 'Exploit', desc: 'Gain initial access', icon: Target, color: 'text-yellow-400' },
  { step: '04', title: 'Escalate', desc: 'Elevate privileges', icon: Zap, color: 'text-orange-400' },
  { step: '05', title: 'Persist', desc: 'Maintain access', icon: Server, color: 'text-red-400' },
  { step: '06', title: 'Report', desc: 'Document findings', icon: FileCode, color: 'text-green-400' },
];

const toolsArsenal = [
  { name: 'Nmap', desc: 'Port Scanner', icon: Wifi, module: 'system-hacking' },
  { name: 'Gobuster', desc: 'Dir Buster', icon: Search, module: 'fundamental-of-hacking' },
  { name: 'Metasploit', desc: 'Exploitation', icon: Target, module: 'metasploit-framework' },
  { name: 'Burp Suite', desc: 'Web Proxy', icon: Globe, module: 'web-hacking' },
  { name: 'John', desc: 'Password Crack', icon: Lock, module: 'password-cracking' },
  { name: 'Wireshark', desc: 'Packet Analysis', icon: Eye, module: 'forensics' },
  { name: 'SQLMap', desc: 'SQL Injection', icon: Code, module: 'web-hacking' },
  { name: 'Hydra', desc: 'Brute Force', icon: BugOff, module: 'password-cracking' },
];

/* ─── Page ─── */
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-32">
      
      {/* ══════ HERO SECTION ══════ */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Glows */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--matrix-green)]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--cyber-blue)]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--matrix-green)] animate-pulse" />
              <span className="text-[10px] font-mono text-[var(--matrix-green)] font-bold uppercase tracking-widest">System Status: Operational</span>
            </motion.div>

            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-white"
            >
              MASTER THE<br />
              <span className="text-[var(--matrix-green)] drop-shadow-[0_0_20px_rgba(0,255,65,0.4)]">CYBER KILL</span><br />
              <span className="text-[var(--matrix-green)] drop-shadow-[0_0_20px_rgba(0,255,65,0.4)]">CHAIN</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              From reconnaissance to reporting — an immersive platform with real-world 
              terminal simulations, interactive attack chains, and professional-grade 
              cybersecurity training.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <Link href="/modules/fundamental-of-hacking" className="cyber-button group flex items-center gap-2 px-6 py-3">
                Start Learning
                <Play className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/roadmap" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all backdrop-blur-md inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Roadmap
              </Link>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">liger@terminal — pentesting</span>
              </div>
              <div className="p-6 min-h-[250px] bg-black/40">
                <TypingTerminal />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ STATS SECTION ══════ */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-6 rounded-2xl text-center border-white/5 hover:border-[var(--matrix-green)]/20 transition-all group"
          >
            <stat.icon className="w-5 h-5 text-[var(--matrix-green)] mx-auto mb-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-3xl font-black text-white mb-1">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* ══════ METHODOLOGY PIPELINE ══════ */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] font-mono text-[var(--matrix-green)] uppercase tracking-[0.3em]">
            Penetration Testing Methodology
          </motion.p>
          <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-white">
            THE ATTACK LIFECYCLE
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {methodology.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass p-5 rounded-2xl border-white/5 hover:border-white/15 transition-all text-center group cursor-default"
            >
              <div className={cn("text-[10px] font-mono font-bold mb-2", m.color)}>{m.step}</div>
              <m.icon className={cn("w-6 h-6 mx-auto mb-3 transition-transform group-hover:scale-110", m.color)} />
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">{m.title}</h4>
              <p className="text-[10px] font-mono text-gray-500">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════ FEATURED MODULES ══════ */}
      <section className="space-y-12">
        <div className="flex items-end justify-between">
          <div className="space-y-3">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] font-mono text-[var(--matrix-green)] uppercase tracking-[0.3em]">
              Learning Modules
            </motion.p>
            <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-white">
              CHOOSE YOUR PATH
            </motion.h2>
          </div>
          <Link href="/modules/system-hacking" className="hidden md:inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-[var(--matrix-green)] transition-colors">
            View All Modules <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredModules.map((mod, idx) => (
            <Link href={`/modules/${mod.id}`} key={idx} className="block group">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={cn(
                  "relative p-6 rounded-2xl border bg-gradient-to-br h-full transition-all duration-300",
                  mod.color, mod.border
                )}
              >
                {mod.badge && (
                  <span className={cn("absolute top-4 right-4 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold text-white uppercase tracking-wider", mod.badgeColor)}>
                    {mod.badge}
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <mod.icon className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-lg font-black text-white mb-2">{mod.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{mod.desc}</p>
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 group-hover:text-[var(--matrix-green)] transition-colors">
                  Explore <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════ TOOLS ARSENAL ══════ */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] font-mono text-[var(--matrix-green)] uppercase tracking-[0.3em]">
            Tools You Will Master
          </motion.p>
          <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl font-black text-white">
            THE ARSENAL
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {toolsArsenal.map((tool, idx) => (
            <Link href={`/modules/${tool.module}`} key={idx} className="block">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass p-5 rounded-2xl border-white/5 hover:border-[var(--matrix-green)]/30 hover:bg-white/[0.04] transition-all text-center group cursor-pointer h-full"
              >
                <tool.icon className="w-6 h-6 text-gray-500 group-hover:text-[var(--matrix-green)] transition-colors mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-black text-white mb-0.5 group-hover:text-[var(--matrix-green)] transition-colors">{tool.name}</h4>
                <p className="text-[10px] font-mono text-gray-600">{tool.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/tools" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-mono text-gray-400 hover:text-white transition-all">
            <TerminalIcon className="w-4 h-4" /> Explore All Tools & Commands <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="pt-20 border-t border-white/5 pb-10 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Built & Architected By</p>
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Md Minal Hasan Raj Mim</h2>
          <p className="text-sm font-mono text-[var(--matrix-green)]">B.Tech in Computer Science & Engineering</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/minalhassan" title="GitHub" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--matrix-green)]/30 hover:bg-white/10 transition-all group">
            <Code className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/minalhasan1/" title="LinkedIn" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#0077b5]/30 hover:bg-white/10 transition-all group">
            <Globe className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
          </a>
          <a href="https://minal-hasan.onrender.com/" title="Portfolio" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--matrix-green)]/30 hover:bg-white/10 transition-all group">
            <Zap className="w-5 h-5 text-gray-500 group-hover:text-[var(--matrix-green)] transition-colors" />
          </a>
        </div>
        
        <p className="text-[10px] font-mono text-gray-700 mt-4 uppercase tracking-widest">© 2026 LIGERverse. All rights reserved.</p>
      </footer>
    </div>
  );
}
