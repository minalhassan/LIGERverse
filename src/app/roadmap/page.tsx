'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Network, Shield, Cloud, Code2, Award, MonitorSmartphone,
  Cpu, Wrench, AlertTriangle, Activity, Key, BookOpen, ChevronDown,
  ChevronRight, ExternalLink, CheckCircle2, Circle, Zap, Globe,
  Lock, Search, Target, Eye, FileCode, Terminal
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  duration: string;
  icon: any;
  color: string;
  glow: string;
  modules: { name: string; link?: string }[];
  skills: string[];
  tools: string[];
  certs: string[];
}

const phases: RoadmapPhase[] = [
  {
    id: 'p1', phase: 'PHASE 01', title: 'Foundation', duration: '2-3 Months',
    icon: MonitorSmartphone, color: 'text-blue-400', glow: 'rgba(96,165,250,0.3)',
    modules: [
      { name: 'Ethical Hacking Theory', link: '/modules/ethical-hacking' },
      { name: 'Fundamentals of Hacking', link: '/modules/fundamental-of-hacking' },
    ],
    skills: ['Computer Hardware', 'OS Navigation (CLI + GUI)', 'File System & Permissions', 'Networking Basics (OSI, TCP/IP)', 'Linux Shell Mastery', 'Windows Architecture'],
    tools: ['Terminal', 'VirtualBox / VMware', 'ping', 'ifconfig / ipconfig', 'ssh', 'nano / vim'],
    certs: ['CompTIA A+', 'CompTIA Linux+', 'CompTIA Network+'],
  },
  {
    id: 'p2', phase: 'PHASE 02', title: 'Reconnaissance & Scanning', duration: '2-3 Months',
    icon: Search, color: 'text-cyan-400', glow: 'rgba(34,211,238,0.3)',
    modules: [
      { name: 'System Hacking', link: '/modules/system-hacking' },
      { name: 'OWASP Top 10', link: '/modules/owasp-top-10' },
    ],
    skills: ['Port Scanning & Service Enumeration', 'Network Mapping', 'OSINT & Passive Recon', 'DNS Enumeration', 'Web Fingerprinting', 'Vulnerability Assessment'],
    tools: ['Nmap', 'Netdiscover', 'Gobuster', 'Nikto', 'Whatweb', 'Shodan', 'theHarvester'],
    certs: ['CompTIA Security+', 'CEH (Certified Ethical Hacker)'],
  },
  {
    id: 'p3', phase: 'PHASE 03', title: 'Exploitation & Web Hacking', duration: '3-4 Months',
    icon: Target, color: 'text-yellow-400', glow: 'rgba(250,204,21,0.3)',
    modules: [
      { name: 'Web Hacking', link: '/modules/web-hacking' },
      { name: 'Metasploit Framework', link: '/modules/metasploit-framework' },
    ],
    skills: ['SQL Injection (Union, Blind, Error)', 'XSS (Reflected, Stored, DOM)', 'CSRF & SSRF', 'Directory Traversal', 'File Upload Bypass', 'Command Injection', 'Authentication Bypass'],
    tools: ['Burp Suite', 'SQLMap', 'Metasploit', 'Hydra', 'curl', 'Postman', 'OWASP ZAP'],
    certs: ['GWAPT', 'eWPT', 'OSCP (start prep)'],
  },
  {
    id: 'p4', phase: 'PHASE 04', title: 'Post-Exploitation & PrivEsc', duration: '2-3 Months',
    icon: Zap, color: 'text-orange-400', glow: 'rgba(251,146,60,0.3)',
    modules: [
      { name: 'Privilege Escalation', link: '/modules/privilege-escalation' },
      { name: 'Password Cracking', link: '/modules/password-cracking' },
    ],
    skills: ['Linux PrivEsc (SUID, Cron, Kernel)', 'Windows PrivEsc (Services, Registry, Tokens)', 'Password Cracking (Hashes, Wordlists)', 'Lateral Movement', 'Pivoting & Tunneling', 'Persistence Mechanisms'],
    tools: ['LinPEAS', 'WinPEAS', 'John the Ripper', 'Hashcat', 'Mimikatz', 'Chisel', 'sshuttle'],
    certs: ['OSCP', 'GPEN'],
  },
  {
    id: 'p5', phase: 'PHASE 05', title: 'Forensics & Cryptography', duration: '2-3 Months',
    icon: Eye, color: 'text-violet-400', glow: 'rgba(167,139,250,0.3)',
    modules: [
      { name: 'Forensics', link: '/modules/forensics' },
      { name: 'Cryptography', link: '/modules/cryptography' },
      { name: 'File Hacking', link: '/modules/file-hacking' },
    ],
    skills: ['Disk & Memory Forensics', 'Log Analysis & Timeline', 'Steganography', 'Hashing & Salting', 'Symmetric vs Asymmetric Encryption', 'PKI & Certificates', 'Incident Response Lifecycle'],
    tools: ['Wireshark', 'Autopsy', 'Volatility', 'FTK Imager', 'Steghide', 'binwalk', 'exiftool'],
    certs: ['GCFE', 'CHFI', 'GCIH'],
  },
  {
    id: 'p6', phase: 'PHASE 06', title: 'Advanced & Specialization', duration: 'Ongoing',
    icon: Shield, color: 'text-red-400', glow: 'rgba(248,113,113,0.3)',
    modules: [
      { name: 'Tool Explorer', link: '/tools' },
      { name: 'Practice Labs', link: '/labs' },
    ],
    skills: ['Cloud Security (AWS, Azure, GCP)', 'Active Directory Attacks', 'Buffer Overflow & Binary Exploitation', 'Malware Analysis & Reverse Engineering', 'Red Team Operations', 'Threat Hunting & SIEM', 'Report Writing'],
    tools: ['Ghidra', 'IDA Pro', 'BloodHound', 'CrackMapExec', 'Cobalt Strike', 'Splunk', 'ELK Stack'],
    certs: ['OSCP', 'OSCE3', 'CISSP', 'CISM', 'CREST'],
  },
];

const frameworks = [
  { name: 'MITRE ATT&CK', desc: 'Adversary tactics & techniques knowledge base' },
  { name: 'Cyber Kill Chain', desc: 'Lockheed Martin intrusion lifecycle model' },
  { name: 'NIST CSF', desc: 'Identify, Protect, Detect, Respond, Recover' },
  { name: 'OWASP', desc: 'Open Web Application Security Project standards' },
  { name: 'PTES', desc: 'Penetration Testing Execution Standard' },
  { name: 'ISO 27001', desc: 'Information security management systems' },
];

const ctfPlatforms = [
  { name: 'HackTheBox', url: 'https://hackthebox.com' },
  { name: 'TryHackMe', url: 'https://tryhackme.com' },
  { name: 'VulnHub', url: 'https://vulnhub.com' },
  { name: 'picoCTF', url: 'https://picoctf.org' },
  { name: 'PortSwigger Academy', url: 'https://portswigger.net/web-security' },
  { name: 'OverTheWire', url: 'https://overthewire.org' },
];

export default function RoadmapPage() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>('p1');

  return (
    <div className="max-w-6xl mx-auto pb-32 px-4 md:px-8">
      {/* Header */}
      <div className="mb-20 text-center pt-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-[var(--matrix-green)]/5 border border-[var(--matrix-green)]/20 text-[var(--matrix-green)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          Professional Learning Path
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white leading-tight">
          CYBERSECURITY <br/>
          <span className="text-[var(--matrix-green)] drop-shadow-[0_0_20px_rgba(0,255,65,0.4)]">ROADMAP</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A structured 6-phase journey from zero to professional penetration tester.
          Each phase builds on the last with hands-on modules from the LIGERverse platform.
        </motion.p>
      </div>

      {/* Progress Overview */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          {phases.map((p, idx) => (
            <React.Fragment key={p.id}>
              <button onClick={() => setExpandedPhase(expandedPhase === p.id ? null : p.id)}
                className={cn("flex flex-col items-center gap-2 group cursor-pointer transition-all",
                  expandedPhase === p.id ? p.color : "text-gray-600 hover:text-gray-400")}>
                <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border transition-all",
                  expandedPhase === p.id
                    ? `${p.color} bg-white/5 border-current shadow-[0_0_15px_${p.glow}]`
                    : "border-white/10 bg-white/[0.02] group-hover:border-white/20")}>
                  <p.icon className="w-5 h-5" />
                </div>
                <span className="text-[8px] md:text-[9px] font-mono font-bold uppercase tracking-wider hidden md:block">{p.title}</span>
              </button>
              {idx < phases.length - 1 && (
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-white/5 mx-1 md:mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Phase Cards */}
      <div className="space-y-6 mb-24">
        {phases.map((phase, idx) => {
          const isOpen = expandedPhase === phase.id;
          return (
            <motion.div key={phase.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
              className={cn("rounded-2xl border transition-all duration-300 overflow-hidden",
                isOpen ? `border-current ${phase.color} bg-white/[0.02]` : "border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03]")}>
              
              {/* Phase Header — Always Visible */}
              <button onClick={() => setExpandedPhase(isOpen ? null : phase.id)}
                className="w-full flex items-center gap-4 p-5 md:p-6 text-left group">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all",
                  isOpen ? `${phase.color} bg-white/10` : "bg-white/5 text-gray-500 group-hover:text-gray-300")}>
                  <phase.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={cn("text-[10px] font-mono font-bold uppercase tracking-[0.15em]", isOpen ? phase.color : "text-gray-500")}>{phase.phase}</span>
                    <span className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-0.5 rounded-full">{phase.duration}</span>
                  </div>
                  <h3 className={cn("text-xl font-black tracking-tight", isOpen ? "text-white" : "text-gray-300")}>{phase.title}</h3>
                </div>
                <ChevronDown className={cn("w-5 h-5 shrink-0 transition-transform duration-300 text-gray-500",
                  isOpen && "rotate-180")} />
              </button>

              {/* Expanded Content */}
              <div className={cn("transition-all duration-300 overflow-hidden",
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0")}>
                <div className="px-5 md:px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Left: LIGERverse Modules + Skills */}
                  <div className="space-y-6">
                    {/* Linked Modules */}
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                        <BookOpen className="w-3 h-3" /> LIGERverse Modules
                      </h4>
                      <div className="space-y-2">
                        {phase.modules.map((m, i) => (
                          <Link key={i} href={m.link || '#'} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[var(--matrix-green)]/30 hover:bg-white/[0.05] transition-all group/mod">
                            <Terminal className="w-4 h-4 text-[var(--matrix-green)] shrink-0" />
                            <span className="text-sm font-medium text-gray-300 group-hover/mod:text-white transition-colors">{m.name}</span>
                            <ChevronRight className="w-3 h-3 text-gray-600 group-hover/mod:text-[var(--matrix-green)] ml-auto transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3" /> Skills You'll Learn
                      </h4>
                      <div className="space-y-1.5">
                        {phase.skills.map((s, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <Circle className={cn("w-1.5 h-1.5 mt-1.5 shrink-0 fill-current", phase.color)} />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Tools + Certs */}
                  <div className="space-y-6">
                    {/* Tools */}
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                        <Wrench className="w-3 h-3" /> Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.tools.map((t, i) => (
                          <span key={i} className={cn("px-3 py-1.5 text-[11px] font-bold rounded-lg border backdrop-blur-sm",
                            `${phase.color} bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] transition-all cursor-default`)}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                        <Award className="w-3 h-3" /> Target Certifications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.certs.map((c, i) => (
                          <span key={i} className="px-3 py-1.5 text-[11px] font-bold rounded-lg bg-amber-400/5 border border-amber-400/15 text-amber-400 cursor-default">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Frameworks & Standards */}
      <section className="mb-24">
        <div className="text-center mb-10">
          <p className="text-[11px] font-mono text-[var(--matrix-green)] uppercase tracking-[0.3em] mb-2">Know Your Standards</p>
          <h2 className="text-3xl font-black text-white">FRAMEWORKS & METHODOLOGIES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {frameworks.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-400/20 transition-all">
              <h4 className="text-sm font-black text-white mb-1">{f.name}</h4>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTF Platforms */}
      <section className="mb-24">
        <div className="text-center mb-10">
          <p className="text-[11px] font-mono text-[var(--matrix-green)] uppercase tracking-[0.3em] mb-2">Sharpen Your Skills</p>
          <h2 className="text-3xl font-black text-white">PRACTICE PLATFORMS</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ctfPlatforms.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--matrix-green)]/20 hover:bg-white/[0.04] transition-all group">
              <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{p.name}</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-[var(--matrix-green)] transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* Career Paths */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <p className="text-[11px] font-mono text-[var(--matrix-green)] uppercase tracking-[0.3em] mb-2">Where Skills Meet Opportunity</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">CAREER PATHS IN CYBERSECURITY</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">After mastering the phases above and earning key certifications, these are the professional roles you can pursue.</p>
        </div>

        {/* Offensive Security Track */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <h3 className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-[0.2em]">Offensive Security</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Penetration Tester', salary: '$85K – $140K', certs: ['OSCP', 'GPEN', 'CEH'], desc: 'Simulate real-world attacks to find vulnerabilities before criminals do. Work with Nmap, Metasploit, and Burp Suite daily.' },
              { title: 'Red Team Operator', salary: '$110K – $180K', certs: ['OSCP', 'OSCE3', 'CRTO'], desc: 'Conduct advanced adversary simulations against enterprise networks. Emulate APT groups using custom C2 frameworks.' },
              { title: 'Bug Bounty Hunter', salary: '$50K – $500K+', certs: ['eWPT', 'OSCP', 'BSCP'], desc: 'Find and report vulnerabilities in live applications for rewards. Top hunters earn six figures from platforms like HackerOne & Bugcrowd.' },
            ].map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-red-400/10 hover:border-red-400/25 transition-all group">
                <h4 className="text-base font-black text-white mb-1 group-hover:text-red-400 transition-colors">{job.title}</h4>
                <p className="text-[10px] font-mono text-red-400/70 mb-3">{job.salary}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.certs.map((c, j) => (
                    <span key={j} className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-red-400/5 border border-red-400/15 text-red-400">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Defensive Security Track */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <h3 className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-[0.2em]">Defensive Security</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'SOC Analyst (L1-L3)', salary: '$60K – $120K', certs: ['Security+', 'CySA+', 'GCIH'], desc: 'Monitor security events in real-time using SIEM tools. Triage alerts, investigate incidents, and escalate threats.' },
              { title: 'Incident Responder', salary: '$90K – $150K', certs: ['GCIH', 'GCFE', 'CHFI'], desc: 'Lead investigation and containment of active breaches. Perform forensic analysis and coordinate remediation efforts.' },
              { title: 'Threat Hunter', salary: '$100K – $160K', certs: ['GCTI', 'GREM', 'OSCP'], desc: 'Proactively search for hidden threats in networks. Develop detection rules and analyze adversary TTPs using MITRE ATT&CK.' },
            ].map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-blue-400/10 hover:border-blue-400/25 transition-all group">
                <h4 className="text-base font-black text-white mb-1 group-hover:text-blue-400 transition-colors">{job.title}</h4>
                <p className="text-[10px] font-mono text-blue-400/70 mb-3">{job.salary}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.certs.map((c, j) => (
                    <span key={j} className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-blue-400/5 border border-blue-400/15 text-blue-400">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering Track */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <h3 className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-[0.2em]">Security Engineering</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Security Engineer', salary: '$100K – $170K', certs: ['CISSP', 'Security+', 'AWS SAA'], desc: 'Design and implement security controls across infrastructure. Build firewalls, IDS/IPS, and secure CI/CD pipelines.' },
              { title: 'Cloud Security Engineer', salary: '$120K – $190K', certs: ['CCSP', 'AWS Security', 'AZ-500'], desc: 'Secure cloud infrastructure on AWS, Azure, or GCP. Configure IAM policies, encryption, and container security.' },
              { title: 'DevSecOps Engineer', salary: '$110K – $175K', certs: ['CISSP', 'CKS', 'AWS DevOps'], desc: 'Integrate security into software development lifecycle. Automate vulnerability scanning, SAST/DAST, and compliance checks.' },
            ].map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-emerald-400/10 hover:border-emerald-400/25 transition-all group">
                <h4 className="text-base font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">{job.title}</h4>
                <p className="text-[10px] font-mono text-emerald-400/70 mb-3">{job.salary}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.certs.map((c, j) => (
                    <span key={j} className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-emerald-400/5 border border-emerald-400/15 text-emerald-400">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Track */}
        <div>
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <h3 className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.2em]">Leadership & Governance</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Security Architect', salary: '$130K – $200K', certs: ['CISSP', 'TOGAF', 'SABSA'], desc: 'Design enterprise-wide security architecture. Define security blueprints, zero-trust models, and risk frameworks.' },
              { title: 'GRC Analyst', salary: '$80K – $130K', certs: ['CISA', 'CRISC', 'CISM'], desc: 'Manage governance, risk, and compliance programs. Conduct audits, assess vendors, and ensure regulatory compliance (SOC 2, GDPR, HIPAA).' },
              { title: 'CISO', salary: '$180K – $350K+', certs: ['CISSP', 'CISM', 'MBA'], desc: 'Chief Information Security Officer — lead the entire security organization. Set strategy, manage budgets, and report to the board on cyber risk.' },
            ].map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-amber-400/10 hover:border-amber-400/25 transition-all group">
                <h4 className="text-base font-black text-white mb-1 group-hover:text-amber-400 transition-colors">{job.title}</h4>
                <p className="text-[10px] font-mono text-amber-400/70 mb-3">{job.salary}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.certs.map((c, j) => (
                    <span key={j} className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-amber-400/5 border border-amber-400/15 text-amber-400">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <div className="glass p-10 rounded-3xl border border-white/[0.06] inline-block">
          <h3 className="text-2xl font-black text-white mb-3">Ready to Begin?</h3>
          <p className="text-sm text-gray-400 mb-6 max-w-md">Start with Phase 01 and work through each module on the platform.</p>
          <Link href="/modules/fundamental-of-hacking"
            className="cyber-button inline-flex items-center gap-2 px-6 py-3">
            Start Phase 01 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
