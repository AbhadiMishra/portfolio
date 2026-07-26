import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`space-y-3 mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black bg-blue-500/10 text-blue-800 dark:text-blue-400 border border-blue-500/30 shadow-inner">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-slate-900 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto font-extrabold">
          {subtitle}
        </p>
      )}
    </div>
  );
};
