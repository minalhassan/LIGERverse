'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Shield, 
  Cloud, 
  Code2, 
  Award, 
  Flag,
  MonitorSmartphone
} from 'lucide-react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const roadmapData = [
  {
    id: 'fundamentals',
    title: 'Fundamental IT Skills',
    icon: MonitorSmartphone,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    items: [
      'Computer Hardware Components',
      'Connection Types (WiFi, Bluetooth, NFC)',
      'OS-Independent Troubleshooting',
      'Popular Productivity Suites'
    ]
  },
  {
    id: 'os',
    title: 'Operating Systems & Virtualization',
    icon: Server,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    items: [
      'Windows, Linux, MacOS Basics',
      'Navigating GUI and CLI',
      'Permissions & User Management',
      'Virtualization (Hypervisor, VM, ESXi, Proxmox)'
    ]
  },
  {
    id: 'networking',
    title: 'Networking Knowledge',
    icon: Network,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    items: [
      'OSI Model & Topologies',
      'Common Protocols (HTTP/S, SSH, FTP, RDP)',
      'IP Terminology & Subnetting',
      'Troubleshooting Commands (ping, tracert, nmap)'
    ]
  },
  {
    id: 'security',
    title: 'Security Skills & Knowledge',
    icon: Shield,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
    items: [
      'Authentication (MFA, SSO, Kerberos)',
      'Cryptography Basics (Hashing, Keys, Salting)',
      'Attack Types (SQLi, XSS, Buffer Overflow, DoS)',
      'Incident Response & Defense in Depth',
      'Threat Intel & OSINT'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Skills',
    icon: Cloud,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    items: [
      'Common Environments (AWS, GCP, Azure)',
      'Cloud Models (IaaS, PaaS, SaaS)',
      'Infrastructure as Code (IaC)',
      'Serverless Concepts'
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Scripting',
    icon: Code2,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    items: [
      'Python',
      'Bash & Shell Scripting',
      'PowerShell',
      'JavaScript & C++ Basics',
      'Go'
    ]
  },
  {
    id: 'certifications',
    title: 'Certifications',
    icon: Award,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    items: [
      'Beginner: CompTIA A+, Network+, Security+',
      'Intermediate: CEH, CISA, CISM',
      'Advanced: CISSP, OSCP, GIAC'
    ]
  },
  {
    id: 'ctfs',
    title: 'Capture The Flag (CTFs)',
    icon: Flag,
    color: 'text-[var(--matrix-green)]',
    bg: 'bg-[var(--matrix-green)]/10',
    border: 'border-[var(--matrix-green)]/20',
    items: [
      'TryHackMe',
      'HackTheBox',
      'VulnHub',
      'picoCTF',
      'SANS Holiday Hack Challenge'
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto pb-20">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 font-mono text-sm uppercase tracking-widest">
        <ChevronLeft className="w-4 h-4" /> Back to Terminal
      </Link>

      <div className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black tracking-tighter mb-4 text-white"
        >
          CYBER SECURITY <span className="text-[var(--matrix-green)] drop-shadow-[0_0_10px_rgba(0,255,65,0.4)]">ROADMAP</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl leading-relaxed"
        >
          Your structured path from fundamental IT skills to advanced offensive and defensive security expertise. 
          Master each phase to level up your hacking capabilities.
        </motion.p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--matrix-green)] via-gray-700 to-transparent md:left-1/2 md:-translate-x-1/2 opacity-30" />

        <div className="space-y-12">
          {roadmapData.map((section, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "relative flex items-center gap-8 md:justify-between",
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-[var(--matrix-green)] shadow-[0_0_15px_rgba(0,255,65,0.6)] z-10" />

                <div className="pl-20 md:pl-0 w-full md:w-[calc(50%-3rem)]">
                  <div className={cn(
                    "glass p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group",
                    section.border,
                    isEven ? "md:text-right" : "md:text-left"
                  )}>
                    <div className={cn(
                      "absolute top-0 w-full h-1 bg-gradient-to-r to-transparent",
                      isEven ? "right-0 from-transparent" : "left-0",
                      section.bg.replace('/10', '/50') // Slightly hacky but works for valid tailwind classes if defined
                    )} />
                    
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                      section.bg,
                      section.color,
                      isEven ? "md:ml-auto" : ""
                    )}>
                      <section.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4">{section.title}</h3>
                    
                    <ul className={cn(
                      "space-y-3",
                      isEven ? "md:items-end flex flex-col" : ""
                    )}>
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300 group/item">
                          {!isEven && <div className={cn("w-1.5 h-1.5 rounded-full transition-all group-hover/item:scale-150", section.bg.replace('10', '50'))} />}
                          <span className="font-medium tracking-wide">{item}</span>
                          {isEven && <div className={cn("w-1.5 h-1.5 rounded-full transition-all group-hover/item:scale-150", section.bg.replace('10', '50'))} />}
                        </li>
                      ))}
                    </ul>

                    {/* Subtle Background Icon */}
                    <div className={cn(
                      "absolute -bottom-4 opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-150 group-hover:-rotate-12",
                      section.color,
                      isEven ? "-left-4" : "-right-4"
                    )}>
                      <section.icon className="w-40 h-40" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
