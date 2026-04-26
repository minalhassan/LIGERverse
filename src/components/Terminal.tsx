'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, RotateCcw, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
  initialOutput: string;
  command: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Terminal({ initialOutput, command, isOpen, onClose }: TerminalProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setDisplayedText('');
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(initialOutput.slice(0, i));
        i += 5; // Speed of typing
        if (i >= initialOutput.length) {
          setDisplayedText(initialOutput);
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isOpen, initialOutput]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedText]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-4xl h-[600px] glass rounded-2xl overflow-hidden flex flex-col shadow-2xl border-[var(--matrix-green)]/30"
          >
            {/* Terminal Header */}
            <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TerminalIcon className="w-4 h-4 text-[var(--matrix-green)]" />
                <span className="text-xs font-mono text-gray-400">bash — {command}</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={copyToClipboard}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                  title="Copy Command"
                >
                  {isCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <button onClick={onClose} className="p-1.5 hover:bg-red-500/20 rounded-md transition-colors text-gray-400 hover:text-red-500">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              className="flex-1 bg-black/40 p-8 font-mono text-sm overflow-y-auto leading-relaxed"
            >
              <div className="flex items-center gap-2 text-[var(--matrix-green)] mb-4">
                <span>$</span>
                <span className="text-white">{command}</span>
              </div>
              
              <pre className="text-gray-300 whitespace-pre-wrap">
                {displayedText}
                {isTyping && <span className="terminal-cursor" />}
              </pre>

              {!isTyping && (
                <div className="mt-4 flex items-center gap-2 text-[var(--matrix-green)]">
                  <span>$</span>
                  <span className="terminal-cursor" />
                </div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="bg-black/40 px-6 py-3 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-mono">
              <div className="flex gap-4">
                <span>Status: Connected</span>
                <span>Latency: 42ms</span>
              </div>
              <span>UTF-8 | LF | Bash</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
