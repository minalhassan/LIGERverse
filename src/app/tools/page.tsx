'use client';

import React, { useState } from 'react';
import hackingData from '@/data/hacking-data.json';
import { Module, Tool } from '@/types';
import { motion } from 'framer-motion';
import { Search, Wrench, ChevronRight, Terminal as TerminalIcon } from 'lucide-react';
import Link from 'next/link';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all tools from all modules
  const allTools: (Tool & { moduleId: string, moduleTitle: string })[] = [];
  (hackingData as Module[]).forEach(module => {
    module.tools.forEach(tool => {
      allTools.push({ ...tool, moduleId: module.id, moduleTitle: module.title });
    });
  });

  const filteredTools = allTools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.commands.some(cmd => cmd.command.toLowerCase().includes(searchQuery.toLowerCase()))
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <div className="relative">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
        >
          TOOL EXPLORER
        </motion.h1>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          A comprehensive database of all cybersecurity tools featured on the platform. 
          Discover their capabilities, common commands, and when to use them.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input 
            type="text"
            placeholder="Search for a tool (e.g. 'Nmap', 'SQLMap')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-[var(--matrix-green)]/50 transition-all"
          />
        </div>
        <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-mono text-gray-500">
          Total Tools: <span className="text-[var(--matrix-green)]">{filteredTools.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTools.map((tool, idx) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="glass p-8 rounded-[32px] border-white/5 hover:border-[var(--matrix-green)]/30 transition-all group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[var(--matrix-green)]/10 flex items-center justify-center text-[var(--matrix-green)] group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <Link 
                href={`/modules/${tool.moduleId}`}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[var(--matrix-green)] hover:border-[var(--matrix-green)]/30 transition-all"
              >
                {tool.moduleTitle}
              </Link>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">{tool.description}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">
                <TerminalIcon className="w-3 h-3" />
                Common Commands
              </div>
              {tool.commands.slice(0, 3).map((cmd, cIdx) => (
                <div key={cIdx} className="bg-black/40 px-3 py-2 rounded-lg border border-white/5 text-[10px] font-mono text-[var(--matrix-green)]/70 truncate">
                  {cmd.command}
                </div>
              ))}
              {tool.commands.length > 3 && (
                <div className="text-[10px] text-gray-600 italic pl-1">
                  + {tool.commands.length - 3} more commands
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <Link 
                href={`/modules/${tool.moduleId}`}
                className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-widest text-white hover:text-[var(--matrix-green)] transition-all"
              >
                View Full Documentation
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
