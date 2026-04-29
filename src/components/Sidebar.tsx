'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Shield, 
  Terminal as TerminalIcon, 
  Globe, 
  FileCode, 
  Lock, 
  Search, 
  Cpu, 
  Zap,
  Wrench,
  GraduationCap,
  Code,
  ChevronRight,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlobalSearch } from './GlobalSearch';

const navItems = [
  { id: 'system-hacking', title: 'System Hacking', icon: Cpu },
  { id: 'web-hacking', title: 'Web Hacking', icon: Globe },
  { id: 'file-hacking', title: 'File Hacking', icon: FileCode },
  { id: 'cryptography', title: 'Cryptography', icon: Lock },
  { id: 'forensics', title: 'Forensics', icon: Search },
  { id: 'password-cracking', title: 'Password Cracking', icon: Shield },
  { id: 'privilege-escalation', title: 'Privilege Escalation', icon: Zap },
  { id: 'metasploit-framework', title: 'Metasploit Framework', icon: Target },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-black/80 backdrop-blur-xl border-r border-white/10 fixed left-0 top-0 z-50 flex flex-col">
      <div className="p-8 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <img 
              src="/logo.png" 
              alt="LIGERverse Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]"
            />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-none text-white">LIGER<span className="text-[var(--matrix-green)]">VERSE</span></h1>
            <span className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">Intel Platform v2.0</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {/* Global Search Component */}
        <GlobalSearch />

        <div className="px-4 mb-4">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Main Modules</p>
        </div>
        
        {navItems.map((item) => {
          const isActive = pathname === `/modules/${item.id}`;
          return (
            <Link
              key={item.id}
              href={`/modules/${item.id}`}
              className={cn(
                "flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/20 text-[var(--matrix-green)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-5 h-5", isActive && "text-[var(--matrix-green)]")} />
                <span className="font-medium text-sm">{item.title}</span>
              </div>
              <ChevronRight className={cn(
                "w-4 h-4 transition-transform duration-300",
                isActive ? "rotate-90 opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
              )} />
            </Link>
          );
        })}

        <div className="pt-6 px-4 mb-4">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Library</p>
        </div>
        <Link
          href="/tools"
          className={cn(
            "flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300",
            pathname === '/tools' 
              ? "bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/20 text-[var(--matrix-green)]" 
              : "text-gray-400 hover:text-white hover:bg-white/5"
          )}
        >
          <div className="flex items-center gap-3">
            <Wrench className="w-5 h-5" />
            <span className="font-medium text-sm">Tool Explorer</span>
          </div>
          <ChevronRight className={cn(
            "w-4 h-4 transition-all",
            pathname === '/tools' ? "opacity-100 rotate-90" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
          )} />
        </Link>

        <Link
          href="/labs"
          className={cn(
            "flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300",
            pathname === '/labs' 
              ? "bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/20 text-[var(--matrix-green)]" 
              : "text-gray-400 hover:text-white hover:bg-white/5"
          )}
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium text-sm">Practice Labs</span>
          </div>
          <ChevronRight className={cn(
            "w-4 h-4 transition-all",
            pathname === '/labs' ? "opacity-100 rotate-90" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
          )} />
        </Link>
      </nav>

      <div className="p-6 border-t border-white/10 bg-white/[0.02]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <img 
                src="https://github.com/minalhassan.png" 
                alt="Md Minal Hasan Raj Mim" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-gray-600 font-black text-xs">MH</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-black text-white truncate uppercase tracking-tighter">Minal Hasan</p>
              <p className="text-[9px] font-mono text-gray-500 truncate">B.Tech in CSE</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/minalhassan" 
              title="GitHub"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--matrix-green)]/30 hover:bg-white/10 transition-all group"
            >
              <Code className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/minalhasan1/" 
              title="LinkedIn"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#0077b5]/30 hover:bg-white/10 transition-all group"
            >
              <Globe className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://minal-hasan.onrender.com/" 
              title="Portfolio"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--matrix-green)]/30 hover:bg-white/10 transition-all group"
            >
              <Zap className="w-3.5 h-3.5 text-gray-500 group-hover:text-[var(--matrix-green)] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
