'use client';

import React, { useState } from 'react';
import { Copy, Terminal as TerminalIcon, Check, HelpCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { Command } from '@/types';
import { Terminal } from './Terminal';
import { cn } from '@/lib/utils';

interface CommandBlockProps {
  command: Command;
  mode: 'explanation' | 'quick';
}

export function CommandBlock({ command, mode }: CommandBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command.command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="group mb-6">
      <div className={cn(
        "glass rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--matrix-green)]/30 transition-all duration-300",
        mode === 'quick' ? "p-3" : "p-6"
      )}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-gray-500">{command.description}</span>
            </div>
            <code className="block bg-black/40 px-4 py-3 rounded-lg border border-white/5 text-[var(--matrix-green)] font-mono text-sm break-all group-hover:border-[var(--matrix-green)]/20 transition-colors">
              <span className="text-gray-500 mr-2">$</span>
              {command.command}
            </code>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {isCopied ? 'Copied' : 'Copy'}
            </button>
            {command.simulation && (
              <button
                onClick={() => setIsTerminalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--matrix-green)]/10 hover:bg-[var(--matrix-green)] text-[var(--matrix-green)] hover:text-black text-xs font-bold transition-all border border-[var(--matrix-green)]/20"
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                Simulate
              </button>
            )}
          </div>
        </div>

        {mode === 'explanation' && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/5">
            {command.usage && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[var(--cyber-blue)]">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">When to use</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{command.usage}</p>
              </div>
            )}
            {command.mistakes && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[var(--cyber-red)]">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Common Mistakes</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{command.mistakes}</p>
              </div>
            )}
            {command.tip && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[var(--matrix-green)]">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">CTF Pro Tip</span>
                </div>
                <div className="p-3 bg-[var(--matrix-green)]/5 border border-[var(--matrix-green)]/10 rounded-lg">
                  <p className="text-xs text-gray-300 leading-relaxed italic">"{command.tip}"</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Terminal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        command={command.command}
        initialOutput={command.simulation || ''}
      />
    </div>
  );
}
