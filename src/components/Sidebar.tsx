'use client';

import React, { useState } from 'react';
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
  ChevronDown,
  Target,
  ShieldAlert,
  MonitorSmartphone,
  BookOpen,
  Radar,
  Map,
  ExternalLink,
  Sparkles,
  PanelLeftOpen,
  PanelLeftClose,
  X,
  Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlobalSearch } from './GlobalSearch';
import { useSidebar } from './SidebarContext';

/* ─── Module Data with Metadata ─── */
const moduleGroups = [
  {
    label: 'Foundation',
    items: [
      { id: 'ethical-hacking', title: 'Ethical Hacking', icon: Shield, difficulty: 'Beginner', color: 'bg-green-500' },
      { id: 'fundamental-of-hacking', title: 'Fundamentals', icon: BookOpen, difficulty: 'Beginner', color: 'bg-green-500', badge: 'NEW' },
    ]
  },
  {
    label: 'Offensive Security',
    items: [
      { id: 'system-hacking', title: 'System Hacking', icon: Cpu, difficulty: 'Intermediate', color: 'bg-yellow-500' },
      { id: 'web-hacking', title: 'Web Hacking', icon: Globe, difficulty: 'Intermediate', color: 'bg-yellow-500' },
      { id: 'privilege-escalation', title: 'Privilege Escalation', icon: Zap, difficulty: 'Advanced', color: 'bg-red-500' },
      { id: 'metasploit-framework', title: 'Metasploit', icon: Target, difficulty: 'Advanced', color: 'bg-red-500' },
    ]
  },
  {
    label: 'Specialized',
    items: [
      { id: 'file-hacking', title: 'File Hacking', icon: FileCode, difficulty: 'Intermediate', color: 'bg-yellow-500' },
      { id: 'cryptography', title: 'Cryptography', icon: Lock, difficulty: 'Intermediate', color: 'bg-yellow-500' },
      { id: 'forensics', title: 'Forensics', icon: Search, difficulty: 'Intermediate', color: 'bg-yellow-500' },
      { id: 'password-cracking', title: 'Password Cracking', icon: ShieldAlert, difficulty: 'Intermediate', color: 'bg-yellow-500' },
      { id: 'owasp-top-10', title: 'OWASP Top 10', icon: ShieldAlert, difficulty: 'Intermediate', color: 'bg-yellow-500' },
    ]
  }
];

const libraryItems = [
  { href: '/tools', title: 'Tool Explorer', icon: Wrench, desc: 'All commands & tools' },
  { href: '/labs', title: 'Practice Labs', icon: GraduationCap, desc: 'Hands-on challenges' },
  { href: '/roadmap', title: 'Career Roadmap', icon: Map, desc: 'Learning path guide' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useSidebar();
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
  
  const toggleGroup = (label: string) => {
    setCollapsedGroups(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      {/* ══════ TOGGLE BUTTON — Always Visible ══════ */}
      <button
        onClick={toggle}
        className={cn(
          "fixed top-4 left-4 z-[100] flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group",
          isOpen 
            ? "bg-transparent hover:bg-white/5"
            : "bg-[#0c0c12] border border-[var(--matrix-green)]/30 hover:border-[var(--matrix-green)]/60 shadow-[0_0_20px_rgba(0,255,65,0.15)] hover:shadow-[0_0_30px_rgba(0,255,65,0.25)]"
        )}
        title={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        ) : (
          <Menu className="w-5 h-5 text-[var(--matrix-green)] group-hover:drop-shadow-[0_0_6px_rgba(0,255,65,0.5)] transition-all" />
        )}
      </button>

      {/* ══════ BACKDROP OVERLAY ══════ */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[59] bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={close}
        />
      )}

      {/* ══════ SIDEBAR PANEL ══════ */}
      <aside className={cn(
        "w-72 h-screen bg-gradient-to-b from-[#060608] via-[#080810] to-[#050508] border-r border-white/[0.06] fixed left-0 top-0 z-[60] flex flex-col shadow-[4px_0_30px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
      
        {/* ══════ LOGO HEADER ══════ */}
        <div className="p-6 pb-4 pt-5 relative overflow-hidden">
          {/* Animated top border */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--matrix-green)]/60 to-transparent" />
          <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent to-[var(--matrix-green)] animate-pulse" />
          
          <div className="flex items-center justify-between">
            <Link href="/" onClick={close} className="flex items-center gap-3 group relative z-10">
              <div className="w-11 h-11 flex items-center justify-center group-hover:scale-105 transition-all duration-500 relative shrink-0">
                <div className="absolute inset-0 bg-[var(--matrix-green)]/15 rounded-xl blur-xl group-hover:bg-[var(--matrix-green)]/30 transition-all duration-500" />
                <div className="w-full h-full rounded-xl border border-[var(--matrix-green)]/20 overflow-hidden relative z-10 bg-black/50">
                  <img 
                    src="/logo.png" 
                    alt="LIGERverse Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(0,255,65,0.5)]"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tighter leading-none text-white">
                  LIGER<span className="text-[var(--matrix-green)] drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]">VERSE</span>
                </h1>
                <span className="text-[9px] font-mono text-gray-500 tracking-[0.2em] uppercase">Cyber Intel Platform</span>
              </div>
            </Link>
            
            {/* Close button inside sidebar */}
            <button
              onClick={close}
              className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all"
              title="Close sidebar"
            >
              <PanelLeftClose className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ══════ SEARCH ══════ */}
        <div className="px-4 mb-2">
          <GlobalSearch />
        </div>
        
        {/* ══════ NAVIGATION ══════ */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-1 scrollbar-thin">
          
          {/* Module Groups */}
          {moduleGroups.map((group) => {
            const isCollapsed = collapsedGroups[group.label];
            const hasActiveItem = group.items.some(item => pathname === `/modules/${item.id}`);
            
            return (
              <div key={group.label} className="mb-1">
                {/* Group Header */}
                <button
                  onClick={() => toggleGroup(group.label)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 group",
                    hasActiveItem ? "text-[var(--matrix-green)]" : "text-gray-500 hover:text-gray-300"
                  )}
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em]">{group.label}</span>
                  <ChevronDown className={cn(
                    "w-3 h-3 transition-transform duration-200",
                    isCollapsed && "-rotate-90"
                  )} />
                </button>

                {/* Group Items */}
                <div className={cn(
                  "space-y-0.5 overflow-hidden transition-all duration-300",
                  isCollapsed ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
                )}>
                  {group.items.map((item) => {
                    const isActive = pathname === `/modules/${item.id}`;
                    return (
                      <Link
                        key={item.id}
                        href={`/modules/${item.id}`}
                        onClick={close}
                        className={cn(
                          "flex items-center gap-3 group/item px-3 py-2.5 rounded-xl transition-all duration-200 relative overflow-hidden",
                          isActive 
                            ? "bg-[var(--matrix-green)]/[0.08] text-[var(--matrix-green)]" 
                            : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                        )}
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[var(--matrix-green)] rounded-r-full shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
                        )}
                        
                        <item.icon className={cn(
                          "w-4 h-4 shrink-0 transition-all duration-200",
                          isActive 
                            ? "text-[var(--matrix-green)] drop-shadow-[0_0_6px_rgba(0,255,65,0.5)]" 
                            : "group-hover/item:scale-110"
                        )} />
                        
                        <span className="flex-1 text-[13px] font-medium truncate">{item.title}</span>
                        
                        {/* Difficulty dot */}
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full shrink-0",
                          item.color,
                          !isActive && "opacity-40"
                        )} title={item.difficulty} />
                        
                        {/* Badge */}
                        {item.badge && (
                          <span className="text-[8px] font-mono font-bold bg-[var(--matrix-green)] text-black px-1.5 py-0.5 rounded-full leading-none">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* ── Divider ── */}
          <div className="py-2 px-3">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          {/* Library Section */}
          <div>
            <div className="px-3 py-2">
              <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-[0.15em]">Library</span>
            </div>
            <div className="space-y-0.5">
              {libraryItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className={cn(
                      "flex items-center gap-3 group/lib px-3 py-2.5 rounded-xl transition-all duration-200 relative overflow-hidden",
                      isActive 
                        ? "bg-[var(--matrix-green)]/[0.08] text-[var(--matrix-green)]" 
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[var(--matrix-green)] rounded-r-full shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
                    )}
                    <item.icon className={cn(
                      "w-4 h-4 shrink-0 transition-all duration-200",
                      isActive ? "text-[var(--matrix-green)] drop-shadow-[0_0_6px_rgba(0,255,65,0.5)]" : "group-hover/lib:scale-110"
                    )} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[13px] font-medium block truncate">{item.title}</span>
                      <span className="text-[9px] font-mono text-gray-600 block truncate">{item.desc}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* ══════ DIFFICULTY LEGEND ══════ */}
        <div className="px-5 py-3 border-t border-white/[0.04]">
          <div className="flex items-center justify-between text-[9px] font-mono text-gray-600 uppercase tracking-wider">
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Beginner</div>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> Intermediate</div>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Advanced</div>
          </div>
        </div>

        {/* ══════ PROFILE FOOTER ══════ */}
        <div className="p-4 border-t border-white/[0.06] bg-gradient-to-t from-black/60 to-transparent relative">
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--matrix-green)]/20 to-[var(--cyber-blue)]/10 border border-white/10 flex items-center justify-center overflow-hidden relative shadow-[0_0_12px_rgba(0,0,0,0.5)]">
              <img 
                src="https://github.com/minalhassan.png" 
                alt="Md Minal Hasan Raj Mim" 
                className="w-full h-full object-cover relative z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-gray-600 font-black text-[10px] absolute z-0">MH</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-white truncate tracking-tight">Minal Hasan</p>
              <p className="text-[9px] font-mono text-gray-500 truncate">B.Tech in CSE</p>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-[var(--matrix-green)]/50" />
          </div>
          
          <div className="flex items-center gap-1.5">
            <a 
              href="https://github.com/minalhassan" 
              title="GitHub"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:border-[var(--matrix-green)]/30 hover:bg-white/[0.08] transition-all group/social"
            >
              <Code className="w-3.5 h-3.5 text-gray-500 group-hover/social:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/minalhasan1/" 
              title="LinkedIn"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:border-[#0077b5]/30 hover:bg-white/[0.08] transition-all group/social"
            >
              <Globe className="w-3.5 h-3.5 text-gray-500 group-hover/social:text-[#0077b5] transition-colors" />
            </a>
            <a 
              href="https://minal-hasan.onrender.com/" 
              title="Portfolio"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:border-[var(--matrix-green)]/30 hover:bg-white/[0.08] transition-all group/social"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/social:text-[var(--matrix-green)] transition-colors" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
