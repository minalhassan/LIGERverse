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
                <div className="flex gap-1.5 mr-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <TerminalIcon className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-mono text-gray-400 font-bold">root@ligerverse: ~</span>
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
              className="flex-1 bg-[#0a0a0a] p-6 font-mono text-[15px] overflow-y-auto leading-relaxed shadow-inner"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-red-500 font-bold">root@ligerverse</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400 font-bold">~</span>
                <span className="text-gray-400">#</span>
                <span className="text-green-400">{command}</span>
              </div>
              
              <pre className="text-gray-300 whitespace-pre-wrap font-medium">
                {displayedText}
                {isTyping && <span className="inline-block w-2 h-4 bg-gray-400 ml-1 animate-pulse" />}
              </pre>

              {!isTyping && (
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-red-500 font-bold">root@ligerverse</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-blue-400 font-bold">~</span>
                  <span className="text-gray-400">#</span>
                  <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse" />
                </div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="bg-[#111] px-4 py-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-mono">
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
