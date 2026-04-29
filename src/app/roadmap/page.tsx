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
  MonitorSmartphone,
  Cpu,
  Wrench,
  AlertTriangle,
  Activity,
  Key,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubCategory {
  title: string;
  items: string[];
}

interface RoadmapSection {
  id: string;
  title: string;
  icon: any;
  color: string;
  bg: string;
  border: string;
  subcategories: SubCategory[];
}

const roadmapData: RoadmapSection[] = [
  {
    id: 'fundamentals',
    title: 'Fundamentals',
    icon: MonitorSmartphone,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    subcategories: [
      { title: 'IT Skills', items: ['Computer Hardware Components', 'Connection Types and Functions', 'OS-Independent Troubleshooting', 'Popular Suites Basics'] },
      { title: 'Networking Basics', items: ['NFC', 'WiFi', 'Bluetooth', 'Infrared'] },
      { title: 'Cloud & Tools', items: ['iCloud', 'Google Suite', 'MS Office Suite'] },
      { title: 'CTF Platforms', items: ['HackTheBox', 'TryHackMe', 'VulnHub', 'picoCTF', 'SANS Holiday Hack Challenge'] }
    ]
  },
  {
    id: 'certifications',
    title: 'Certifications',
    icon: Award,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    subcategories: [
      { title: 'Beginner', items: ['CompTIA A+', 'CompTIA Linux+', 'CompTIA Network+', 'CCNA', 'CompTIA Security+'] },
      { title: 'Advanced', items: ['CEH', 'CISA', 'CISM', 'GSEC', 'GPEN', 'GWAPT', 'GIAC', 'OSCP', 'CREST', 'CISSP'] }
    ]
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    icon: Server,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    subcategories: [
      { title: 'Types', items: ['Windows', 'Linux', 'MacOS'] },
      { title: 'Skills', items: ['Installation and Configuration', 'GUI and CLI Navigation', 'Permissions', 'Software Installation', 'File CRUD Operations', 'Troubleshooting', 'Common Commands'] }
    ]
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: Network,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    subcategories: [
      { title: 'Core Concepts', items: ['OSI Model', 'Protocols', 'Ports', 'SSL/TLS', 'Subnetting', 'Public vs Private IP', 'CIDR', 'Subnet Mask', 'Default Gateway'] },
      { title: 'Terminology', items: ['VLAN', 'DMZ', 'ARP', 'DHCP', 'DNS', 'NAT', 'VPN'] },
      { title: 'Topologies', items: ['Star', 'Ring', 'Mesh', 'Bus'] },
      { title: 'Protocols', items: ['SSH', 'RDP', 'FTP', 'SFTP', 'HTTP', 'HTTPS'] }
    ]
  },
  {
    id: 'virtualization',
    title: 'Virtualization',
    icon: Cpu,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
    subcategories: [
      { title: 'Tools', items: ['VMWare', 'VirtualBox', 'ESXi', 'Proxmox'] },
      { title: 'Concepts', items: ['Hypervisor', 'VM', 'GuestOS', 'HostOS'] }
    ]
  },
  {
    id: 'security-concepts',
    title: 'Security Concepts',
    icon: Shield,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
    subcategories: [
      { title: 'Core', items: ['Defense in Depth', 'Zero Trust', 'Risk Management', 'Backups and Resiliency', 'CIA Triad'] },
      { title: 'Authentication', items: ['Kerberos', 'RADIUS', 'LDAP', 'SSO', 'MFA', '2FA'] },
      { title: 'Monitoring', items: ['SIEM', 'SOAR'] },
      { title: 'Teams', items: ['Red Team', 'Blue Team', 'Purple Team'] }
    ]
  },
  {
    id: 'tools',
    title: 'Hacking & Analysis Tools',
    icon: Wrench,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    border: 'border-indigo-400/20',
    subcategories: [
      { title: 'Networking', items: ['nmap', 'ping', 'tracert', 'nslookup', 'tcpdump', 'dig'] },
      { title: 'Forensics', items: ['Wireshark', 'FTK Imager', 'Autopsy', 'WinHex', 'memdump'] },
      { title: 'General', items: ['curl', 'hping', 'grep', 'cat', 'dd'] }
    ]
  },
  {
    id: 'threats-attacks',
    title: 'Threats & Attacks',
    icon: AlertTriangle,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
    subcategories: [
      { title: 'Social Engineering', items: ['Phishing', 'Whaling', 'Smishing', 'Tailgating', 'Impersonation'] },
      { title: 'Network Attacks', items: ['DoS', 'DDoS', 'MITM', 'Spoofing', 'DNS Poisoning', 'Evil Twin'] },
      { title: 'Web Attacks', items: ['SQL Injection', 'XSS', 'CSRF', 'Directory Traversal'] },
      { title: 'Advanced', items: ['Buffer Overflow', 'Replay Attack', 'Pass the Hash', 'Privilege Escalation'] }
    ]
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    icon: Activity,
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20',
    subcategories: [
      { title: 'Steps', items: ['Preparation', 'Identification', 'Containment', 'Eradication', 'Recovery', 'Lessons Learned'] }
    ]
  },
  {
    id: 'cryptography',
    title: 'Cryptography',
    icon: Key,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
    subcategories: [
      { title: 'Concepts', items: ['Hashing', 'Salting', 'Key Exchange', 'PKI', 'Public vs Private Keys'] }
    ]
  },
  {
    id: 'standards',
    title: 'Standards & Frameworks',
    icon: BookOpen,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
    subcategories: [
      { title: 'Frameworks', items: ['MITRE ATT&CK', 'Diamond Model', 'Cyber Kill Chain'] },
      { title: 'Standards', items: ['ISO', 'NIST', 'RMF', 'CIS CSF'] }
    ]
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    icon: Cloud,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    subcategories: [
      { title: 'Concepts', items: ['SaaS', 'PaaS', 'IaaS', 'Serverless', 'Infrastructure as Code'] },
      { title: 'Platforms', items: ['AWS', 'GCP', 'Azure'] },
      { title: 'Storage', items: ['S3', 'Dropbox', 'OneDrive', 'Google Drive', 'iCloud'] }
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Scripting',
    icon: Code2,
    color: 'text-[var(--matrix-green)]',
    bg: 'bg-[var(--matrix-green)]/10',
    border: 'border-[var(--matrix-green)]/20',
    subcategories: [
      { title: 'Languages', items: ['Python', 'Go', 'JavaScript', 'C++', 'Bash', 'PowerShell'] }
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="max-w-6xl mx-auto pb-32 px-4 md:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 mt-12 font-mono text-xs uppercase tracking-widest group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Terminal
      </Link>

      <div className="mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-[var(--matrix-green)]/5 border border-[var(--matrix-green)]/20 text-[var(--matrix-green)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
        >
          Learning Path 2024
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white leading-tight"
        >
          CYBER SECURITY <br/>
          <span className="text-[var(--matrix-green)] drop-shadow-[0_0_20px_rgba(0,255,65,0.4)]">ROADMAP</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          A battle-tested guide to mastering the digital domain, from hardware fundamentals to advanced exploit development.
        </motion.p>
      </div>

      <div className="relative">
        {/* Animated Glow Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--matrix-green)]/40 to-transparent md:-translate-x-1/2" />
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[8px] bg-[var(--matrix-green)]/10 blur-md md:-translate-x-1/2" />

        <div className="space-y-24">
          {roadmapData.map((section, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center justify-between w-full group",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Desktop Spacer */}
                <div className="hidden md:block w-[45%]" />

                {/* Timeline Node Ring */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border-[3px] border-[var(--matrix-green)] shadow-[0_0_25px_rgba(0,255,65,0.8)] z-10 transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(0,255,65,1)]" />

                {/* Content Card */}
                <div className="pl-12 md:pl-0 w-full md:w-[45%] relative z-20">
                  <div className={cn(
                    "glass p-6 md:p-10 rounded-[2.5rem] border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] relative overflow-hidden group/card",
                    section.border,
                    "hover:border-opacity-40"
                  )}>
                    {/* Corner Accent */}
                    <div className={cn(
                      "absolute top-0 w-32 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50",
                      isEven ? "right-10" : "left-10",
                      section.color
                    )} />
                    
                    {/* Header */}
                    <div className={cn(
                      "flex items-center gap-5 mb-10",
                      isEven ? "flex-row" : "flex-row-reverse"
                    )}>
                      <div className={cn(
                        "w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-700 group-hover/card:rotate-[360deg] group-hover/card:scale-110 shadow-2xl",
                        section.bg,
                        section.color
                      )}>
                        <section.icon className="w-8 h-8" />
                      </div>
                      <h3 className={cn("text-3xl font-black text-white tracking-tighter", !isEven && "md:text-right")}>
                        {section.title}
                      </h3>
                    </div>
                    
                    {/* Subcategories */}
                    <div className="space-y-10">
                      {section.subcategories.map((sub, i) => (
                        <div key={i} className={cn("flex flex-col", !isEven ? "md:items-end" : "md:items-start")}>
                          <div className="flex items-center gap-2 mb-4">
                             {isEven ? <div className={cn("w-1 h-3 rounded-full", section.bg.replace('10', '60'))} /> : null}
                             <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.25em]">{sub.title}</h4>
                             {!isEven ? <div className={cn("w-1 h-3 rounded-full", section.bg.replace('10', '60'))} /> : null}
                          </div>
                          <div className={cn("flex flex-wrap gap-2", !isEven ? "md:justify-end" : "md:justify-start")}>
                            {sub.items.map((item, j) => (
                              <span key={j} className={cn(
                                "px-4 py-2 text-[11px] font-black rounded-xl border backdrop-blur-xl transition-all duration-500 cursor-default hover:translate-y-[-2px] hover:shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)]",
                                section.border, 
                                section.color, 
                                section.bg,
                                "hover:bg-opacity-25 hover:border-opacity-50"
                              )}>
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Watermark Icon */}
                    <div className={cn(
                      "absolute -bottom-10 opacity-[0.03] pointer-events-none transition-all duration-1000 group-hover/card:scale-125 group-hover/card:opacity-[0.07]",
                      section.color,
                      isEven ? "-left-10" : "-right-10"
                    )}>
                      <section.icon className="w-64 h-64" />
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
