import React from 'react';
import { certificationsData } from '../data/certifications';
import { SectionHeader } from '../components/common/SectionHeader';
import { Award, CheckCircle2, Clock } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <SectionHeader
        badge="Credentials & Achievements"
        title="Certifications & National Honors"
        subtitle="Verified professional certifications and national recognition in science and technology."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Award className="w-5 h-5" />
                </div>
                {cert.status === 'Completed' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Completed
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    <Clock className="w-3 h-3 animate-spin" />
                    In-Progress
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white leading-snug">
                {cert.title}
              </h3>

              <div className="text-xs text-gray-400 font-medium">
                {cert.provider}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-mono">{cert.date}</span>
              {cert.badgeText && (
                <span className="px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono text-[10px] border border-white/5">
                  {cert.badgeText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
