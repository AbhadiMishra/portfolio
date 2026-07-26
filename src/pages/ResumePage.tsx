import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons';
import { Download, FileText, Mail, Phone, MapPin } from 'lucide-react';

export const ResumePage: React.FC = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <SectionHeader
        badge="Curriculum Vitae"
        title="Resume & Professional Background"
        subtitle="View or download Abhinav Mishra's complete verified technical resume."
      />

      {/* Action Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Abhinav_Mishra_Resume.pdf</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Verified March 2026 Edition</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            <Download className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Printable / Rendered Resume Document */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-black/10 dark:border-white/10 space-y-10 bg-white/95 dark:bg-[#0b101c]/95 text-slate-800 dark:text-slate-200 shadow-2xl">
        {/* Header */}
        <div className="border-b border-black/10 dark:border-white/10 pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{profileData.name}</h1>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-bold mt-1">
                (Aspiring Data Scientist, ML Engineer & MERN Developer)
              </p>
            </div>
            <div className="text-xs text-slate-700 dark:text-slate-300 font-medium space-y-1 sm:text-right font-mono">
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{profileData.socials.email}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{profileData.socials.phone}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{profileData.socials.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-semibold pt-2">
            <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>linkedin.com/in/abhadimishra</span>
            </a>
            <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/AbhadiMishra</span>
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-1">
            Executive Summary
          </h2>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
            {profileData.summary}
          </p>
        </div>

        {/* Relevant Skills */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-1">
            Relevant Technical Skills
          </h2>
          <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-mono font-medium">
            ReactJS, NodeJS, MongoDB, SQL, ExpressJS, NextJS, Data Science/Analysis, Machine Learning (PyTorch, Scikit-Learn, Keras, TensorFlow, OpenCV), MySQL, SQL Server, Django, Power BI & Tableau, Python.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-1">
            Work Experience
          </h2>
          <div className="space-y-4">
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-wrap justify-between text-xs font-bold text-slate-900 dark:text-white">
                  <span>{exp.role} — <span className="text-blue-600 dark:text-blue-400">{exp.company}</span></span>
                  <span className="text-slate-600 dark:text-slate-400 font-mono font-medium">{exp.duration} ({exp.location})</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 font-medium space-y-1">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-1">
            Educational Qualifications
          </h2>
          <div className="space-y-3">
            {educationData.map((edu) => (
              <div key={edu.id} className="flex flex-wrap justify-between text-xs text-slate-800 dark:text-slate-200 font-medium">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">{edu.degree}</span> — {edu.institution} ({edu.university})
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-mono">{edu.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Certifications */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest border-b border-blue-500/20 pb-1">
            Courses & Certifications
          </h2>
          <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 font-medium space-y-1">
            {certificationsData.map((c) => (
              <li key={c.id}>
                <strong>{c.title}</strong> — {c.provider} ({c.status})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
