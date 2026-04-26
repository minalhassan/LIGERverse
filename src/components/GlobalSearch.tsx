'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, Terminal as TerminalIcon, Cpu, Globe, Lock, FileCode, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import hackingData from '@/data/hacking-data.json';
import { Module, Command } from '@/types';
import Link from 'next/link';

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ module: string, tool: string, command: Command }[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchResults: { module: string, tool: string, command: Command }[] = [];
    (hackingData as Module[]).forEach(module => {
      module.tools.forEach(tool => {
        tool.commands.forEach(cmd => {
          if (
            cmd.command.toLowerCase().includes(query.toLowerCase()) ||
            cmd.description.toLowerCase().includes(query.toLowerCase()) ||
            tool.name.toLowerCase().includes(query.toLowerCase())
          ) {
            searchResults.push({ module: module.id, tool: tool.name, command: cmd });
          }
        });
      });
    });
    setResults(searchResults.slice(0, 10));
  }, [query]);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="px-4 mb-6 cursor-pointer"
      >
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-[var(--matrix-green)] transition-colors" />
          <div className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-500 flex items-center justify-between group-hover:border-[var(--matrix-green)]/30 transition-all">
            <span>Search platform...</span>
            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/10">/</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] px-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-white/5 flex items-center gap-4">
                <Search className="w-5 h-5 text-[var(--matrix-green)]" />
                <input 
                  autoFocus
                  type="text"
                  placeholder="Search for tools, commands, or vulnerabilities (e.g. 'nmap', 'sqli')..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-lg"
                />
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto max-h-[60vh]">
                {query.length > 0 && results.length > 0 ? (
                  <div className="p-2">
                    {results.map((result, idx) => (
                      <Link
                        key={idx}
                        href={`/modules/${result.module}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[var(--matrix-green)]/10 flex items-center justify-center text-[var(--matrix-green)]">
                          <TerminalIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono text-[var(--matrix-green)] uppercase tracking-widest">{result.tool}</span>
                            <span className="text-[10px] text-gray-500">•</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{result.module.replace('-', ' ')}</span>
                          </div>
                          <h4 className="text-white font-mono text-sm truncate">{result.command.command}</h4>
                          <p className="text-xs text-gray-500 truncate">{result.command.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-[var(--matrix-green)] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                ) : query.length > 1 ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-6 h-6 text-gray-500" />
                    </div>
                    <p className="text-gray-400 font-mono text-sm">No results found for "{query}"</p>
                  </div>
                ) : (
                  <div className="p-8">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Quick Suggestions</p>
                    <div className="grid grid-cols-2 gap-2">
                      {['Nmap Scanning', 'SQLMap', 'Privilege Escalation', 'Hash Cracking'].map(s => (
                        <button 
                          key={s}
                          onClick={() => setQuery(s)}
                          className="p-3 text-left rounded-xl bg-white/5 border border-white/5 hover:border-[var(--matrix-green)]/30 transition-all text-xs text-gray-400 hover:text-white"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-600">
                <div className="flex gap-4">
                  <span><kbd className="bg-white/10 px-1 rounded">ESC</kbd> to close</span>
                  <span><kbd className="bg-white/10 px-1 rounded">ENTER</kbd> to select</span>
                </div>
                <span>LIGERverse Intel Search v2.0</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
