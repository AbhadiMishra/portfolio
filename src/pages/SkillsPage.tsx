import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { SectionHeader } from '../components/common/SectionHeader';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Layout, Server, Sparkles, Terminal } from 'lucide-react';

export const SkillsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'frontend': return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'backend': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'databases': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'ai-ml': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'datascience': return <Sparkles className="w-5 h-5 text-amber-400" />;
      default: return <Terminal className="w-5 h-5 text-sky-400" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <SectionHeader
        badge="Technical Proficiency"
        title="Skills & Engineering Capabilities"
        subtitle="Categorized breakdown of programming languages, frameworks, libraries, AI algorithms, and cloud tools."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'glass-card text-gray-400 hover:text-white'
          }`}
        >
          All Skills
        </button>
        {skillsData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === cat.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((cat) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 hover:border-blue-500/40 transition-colors"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                {getCategoryIcon(cat.id)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                <p className="text-xs text-gray-400">{cat.skills.length} Tech Primitives</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card p-4 rounded-xl border border-white/5 space-y-2 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{skill.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono border border-blue-500/20">
                      {skill.level}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-[11px] text-gray-400 leading-tight">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
