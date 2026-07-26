import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'emerald' | 'gray';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
}) => {
  const variantStyles = {
    blue: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30 font-bold',
    purple: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30 font-bold',
    emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 font-bold',
    gray: 'bg-slate-200/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 border-black/10 dark:border-white/10 font-bold',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg border backdrop-blur-md transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
};
