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
  Target,
  ShieldAlert
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
  { id: 'owasp-top-10', title: 'OWASP Top 10', icon: ShieldAlert },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-r border-white/5 fixed left-0 top-0 z-50 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.6)]">
      <div className="p-8 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--matrix-green)]/50 to-transparent opacity-50" />
        <Link href="/" className="flex items-center gap-4 group relative z-10">
          <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative">
            <div className="absolute inset-0 bg-[var(--matrix-green)]/20 rounded-full blur-xl group-hover:bg-[var(--matrix-green)]/40 transition-all duration-500" />
            <img 
              src="/logo.png" 
              alt="LIGERverse Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,65,0.6)] relative z-10"
            />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter leading-none text-white drop-shadow-md">LIGER<span className="text-[var(--matrix-green)] drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">VERSE</span></h1>
            <span className="text-gray-500 text-[10px] font-mono tracking-widest uppercase group-hover:text-gray-400 transition-colors">Intel Platform v2.0</span>
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
                "flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden",
                isActive 
                  ? "bg-gradient-to-r from-[var(--matrix-green)]/10 to-transparent text-[var(--matrix-green)] shadow-[inset_2px_0_0_var(--matrix-green)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--matrix-green)]/5 to-transparent pointer-events-none" />
              )}
              <div className="flex items-center gap-3 relative z-10">
                <item.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110 duration-300", isActive && "text-[var(--matrix-green)] drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]")} />
                <span className="font-medium text-sm tracking-wide">{item.title}</span>
              </div>
              <ChevronRight className={cn(
                "w-4 h-4 transition-transform duration-300 relative z-10",
                isActive ? "rotate-90 opacity-100 text-[var(--matrix-green)]" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
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
            "flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden",
            pathname === '/tools' 
              ? "bg-gradient-to-r from-[var(--matrix-green)]/10 to-transparent text-[var(--matrix-green)] shadow-[inset_2px_0_0_var(--matrix-green)]" 
              : "text-gray-400 hover:text-white hover:bg-white/5"
          )}
        >
          {pathname === '/tools' && <div className="absolute inset-0 bg-gradient-to-r from-[var(--matrix-green)]/5 to-transparent pointer-events-none" />}
          <div className="flex items-center gap-3 relative z-10">
            <Wrench className={cn("w-5 h-5 transition-transform group-hover:scale-110 duration-300", pathname === '/tools' && "drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]")} />
            <span className="font-medium text-sm tracking-wide">Tool Explorer</span>
          </div>
          <ChevronRight className={cn(
            "w-4 h-4 transition-all relative z-10",
            pathname === '/tools' ? "opacity-100 rotate-90 text-[var(--matrix-green)]" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
          )} />
        </Link>

        <Link
          href="/labs"
          className={cn(
            "flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden",
            pathname === '/labs' 
              ? "bg-gradient-to-r from-[var(--matrix-green)]/10 to-transparent text-[var(--matrix-green)] shadow-[inset_2px_0_0_var(--matrix-green)]" 
              : "text-gray-400 hover:text-white hover:bg-white/5"
          )}
        >
          {pathname === '/labs' && <div className="absolute inset-0 bg-gradient-to-r from-[var(--matrix-green)]/5 to-transparent pointer-events-none" />}
          <div className="flex items-center gap-3 relative z-10">
            <GraduationCap className={cn("w-5 h-5 transition-transform group-hover:scale-110 duration-300", pathname === '/labs' && "drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]")} />
            <span className="font-medium text-sm tracking-wide">Practice Labs</span>
          </div>
          <ChevronRight className={cn(
            "w-4 h-4 transition-all relative z-10",
            pathname === '/labs' ? "opacity-100 rotate-90 text-[var(--matrix-green)]" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
          )} />
        </Link>
      </nav>

      <div className="p-6 border-t border-white/5 bg-gradient-to-t from-black/50 to-transparent relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-shadow">
              <img 
                src="https://github.com/minalhassan.png" 
                alt="Md Minal Hasan Raj Mim" 
                className="w-full h-full object-cover relative z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-gray-600 font-black text-xs absolute z-0">MH</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-black text-white truncate uppercase tracking-tighter group-hover:text-[var(--matrix-green)] transition-colors">Minal Hasan</p>
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
