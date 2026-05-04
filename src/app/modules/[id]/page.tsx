'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import hackingData from '@/data/hacking-data.json';
import { Module } from '@/types';
import { CommandBlock } from '@/components/CommandBlock';
import { AttackFlow } from '@/components/AttackFlow';
import { PracticeMode } from '@/components/PracticeMode';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  BookOpen, 
  Layout, 
  Terminal as TerminalIcon,
  Search,
  BadgeAlert,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ModulePage() {
  const { id } = useParams();
  const module = (hackingData as Module[]).find(m => m.id === id);
  const [mode, setMode] = useState<'explanation' | 'quick'>('explanation');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <BadgeAlert className="w-16 h-16 text-[var(--cyber-red)] mb-4 animate-pulse" />
        <h1 className="text-3xl font-black mb-2">MODULE NOT FOUND</h1>
        <p className="text-gray-500 font-mono">The requested hacking module does not exist in our database.</p>
      </div>
    );
  }

  // Filter tools and commands based on search and selected attack chain step
  const filteredTools = module.tools.map(tool => ({
    ...tool,
    commands: tool.commands.filter(cmd => 
      cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(tool => {
    const matchesSearch = tool.commands.length > 0 || tool.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStep = selectedStep ? tool.name.toLowerCase().includes(selectedStep.toLowerCase()) : true;
    return matchesSearch && matchesStep;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Module Header */}
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
            module.difficulty === 'Beginner' ? "bg-green-500/10 text-green-500 border-green-500/20" :
            module.difficulty === 'Intermediate' ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" :
            "bg-red-500/10 text-red-500 border-red-500/20"
          )}>
            {module.difficulty}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
        >
          {module.title.toUpperCase()}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 max-w-3xl leading-relaxed"
        >
          {module.description}
        </motion.p>
      </div>

      {/* Concept Section */}
      <section className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <BookOpen className="w-32 h-32" />
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[var(--cyber-blue)]/20 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-[var(--cyber-blue)]" />
          </div>
          <h2 className="text-xl uppercase tracking-widest font-black">The Concept</h2>
        </div>
        <p className="text-gray-300 leading-relaxed relative z-10 font-medium">
          {module.concept}
        </p>
      </section>

      {/* Attack Chain Visualizer */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--matrix-green)]/20 flex items-center justify-center">
              <Layout className="w-4 h-4 text-[var(--matrix-green)]" />
            </div>
            <h2 className="text-xl uppercase tracking-widest font-black">Attack Chain Flow</h2>
          </div>
          {selectedStep && (
            <button 
              onClick={() => setSelectedStep(null)}
              className="text-[10px] font-mono text-[var(--matrix-green)] hover:text-white transition-colors border border-[var(--matrix-green)]/30 px-3 py-1 rounded-full bg-[var(--matrix-green)]/5"
            >
              RESET FILTER [X]
            </button>
          )}
        </div>
        <AttackFlow 
          steps={module.attackChain} 
          activeStep={selectedStep}
          onStepClick={setSelectedStep}
        />
      </section>

      {/* Controls & Tools */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--matrix-green)]/20 flex items-center justify-center">
              <TerminalIcon className="w-4 h-4 text-[var(--matrix-green)]" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl uppercase tracking-widest font-black">Tool Explorer</h2>
              {selectedStep && (
                <span className="text-[10px] font-mono text-[var(--matrix-green)] animate-pulse">
                  FILTERED BY: {selectedStep.toUpperCase()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text"
                placeholder="Search commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[var(--matrix-green)]/50 transition-all w-64"
              />
            </div>

            {/* Mode Toggle */}
            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setMode('explanation')}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                  mode === 'explanation' ? "bg-[var(--matrix-green)] text-black" : "text-gray-500 hover:text-white"
                )}
              >
                Detailed
              </button>
              <button
                onClick={() => setMode('quick')}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                  mode === 'quick' ? "bg-[var(--matrix-green)] text-black" : "text-gray-500 hover:text-white"
                )}
              >
                Quick
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <div key={tool.name} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-black text-white">{tool.name}</h3>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <p className="text-sm text-gray-500 font-mono italic mb-6">{tool.description}</p>
                <div className="grid grid-cols-1 gap-4">
                  {tool.commands.map((cmd, idx) => (
                    <CommandBlock key={idx} command={cmd} mode={mode} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center glass rounded-3xl border-dashed">
              <p className="text-gray-500 font-mono">
                No commands found matching {selectedStep ? `"${selectedStep}" in ` : ""} "{searchQuery}"
              </p>
              {selectedStep && (
                <button 
                  onClick={() => setSelectedStep(null)}
                  className="mt-4 text-xs text-[var(--matrix-green)] underline underline-offset-4"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      {module.resources && module.resources.length > 0 && (
        <section className="pt-12 border-t border-white/5">
          <h2 className="text-3xl font-black text-white mb-8 tracking-tighter flex items-center gap-4">
            EXTERNAL RESOURCES
            <div className="flex-1 h-px bg-white/10" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {module.resources.map((res, idx) => (
              <a 
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[var(--matrix-green)]/30 hover:bg-white/10 transition-all group flex items-center justify-between"
              >
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Learning Resource</p>
                  <h4 className="text-white font-bold">{res.title}</h4>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-[var(--matrix-green)] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Practice Section */}
      {module.challenges.length > 0 && (
        <section className="pt-12 border-t border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-[var(--cyber-blue)]/20 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-[var(--cyber-blue)]" />
            </div>
            <h2 className="text-xl uppercase tracking-widest font-black">Knowledge Check</h2>
          </div>
          
          <PracticeMode challenges={module.challenges} />
        </section>
      )}
    </div>
  );
}
