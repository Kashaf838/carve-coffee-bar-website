import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme, Language } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  lang: Language;
  onToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'navbar' | 'mobile';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  lang,
  onToggle,
  variant = 'navbar'
}) => {
  const isDark = theme === 'dark';

  const tooltipText = isDark
    ? lang === 'ar' ? 'التحول إلى كارڤ نهاراً (الوضع الفاتح)' : 'Switch to Day at CARVE (Light)'
    : lang === 'ar' ? 'التحول إلى كارڤ ليلاً (الوضع الداكن)' : 'Switch to CARVE After Dark (Dark)';

  const labelText = isDark
    ? lang === 'ar' ? 'كارڤ نهاراً' : 'Day at CARVE'
    : lang === 'ar' ? 'كارڤ ليلاً' : 'CARVE After Dark';

  if (variant === 'mobile') {
    return (
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3.5 rounded-xl border border-theme bg-theme-surface hover:bg-theme-subtle transition-all text-xs font-medium text-theme-primary"
        aria-label={tooltipText}
        title={tooltipText}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-theme-subtle flex items-center justify-center text-theme-accent">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </div>
          <span>{labelText}</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-theme-muted font-mono">
          {isDark ? 'LIGHT' : 'DARK'}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={onToggle}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-theme hover:border-theme-hover bg-theme-subtle transition-all duration-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-accent text-theme-primary"
      aria-label={tooltipText}
      title={tooltipText}
    >
      <div className="relative w-4 h-4 flex items-center justify-center text-theme-accent transition-transform duration-500 group-hover:rotate-45">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 transition-transform" />
        ) : (
          <Moon className="w-3.5 h-3.5 transition-transform" />
        )}
      </div>

      <span className="hidden xl:inline text-[11px] tracking-wider text-theme-secondary font-medium">
        {isDark ? (lang === 'ar' ? 'نهاراً' : 'Day') : (lang === 'ar' ? 'ليلاً' : 'Night')}
      </span>
    </button>
  );
};
