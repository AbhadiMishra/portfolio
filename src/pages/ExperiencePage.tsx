import React from 'react';
import { experienceData } from '../data/experience';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <SectionHeader
        badge="Career History"
        title="Professional Experience Timeline"
        subtitle="Full-stack web engineering internships, technical instruction, and software debugging roles."
      />

      {/* Timeline Wrapper */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full glass-panel border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-400 transition-all bg-[#090d16]">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="text-sm font-semibold text-blue-400">{exp.company}</div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 glass-card px-3 py-1 rounded-lg text-gray-300 border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 glass-card px-3 py-1 rounded-lg text-gray-300 border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Key Achievements */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Key Achievements
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {exp.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="glass-card px-3 py-2 rounded-xl text-xs text-gray-200 border border-white/5"
                    >
                      {ach}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="gray" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
