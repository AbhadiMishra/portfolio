import React from 'react';
import { educationData } from '../data/education';
import { SectionHeader } from '../components/common/SectionHeader';
import { GraduationCap, Calendar, School, Award } from 'lucide-react';

export const EducationPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <SectionHeader
        badge="Academic History"
        title="Education & Degrees"
        subtitle="Formal Computer Application degrees specializing in Data Science, Machine Learning, and Software Architecture."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 glass-card px-3 py-1 rounded-xl text-xs font-mono text-blue-300 border border-white/5">
                  <Calendar className="w-3 h-3" />
                  {edu.duration}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <div className="text-sm font-semibold text-blue-400 flex items-center gap-1.5 mt-1">
                  <School className="w-4 h-4" />
                  {edu.institution}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{edu.university}</div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Program Highlights
                </div>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
