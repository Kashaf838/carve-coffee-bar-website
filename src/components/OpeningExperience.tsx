import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface OpeningExperienceProps {
  lang: Language;
  onEnter: () => void;
}

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({ lang, onEnter }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Stage 1: Line carving animation
    const t1 = setTimeout(() => setPhase(1), 300);
    // Stage 2: Logo reveal
    const t2 = setTimeout(() => setPhase(2), 900);
    // Stage 3: Full identity & CTA ready
    const t3 = setTimeout(() => setPhase(3), 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-8 sm:p-12 bg-[#0c0b0d] text-[#ede7de] transition-all duration-700 select-none ${
        isExiting ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Top bar with location and skip button */}
      <div className="w-full max-w-5xl flex items-center justify-between text-xs tracking-widest text-[#a89f91]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#cbb59d]" />
          <span>{lang === 'ar' ? 'الرياض · حي الورود' : 'RIYADH · AL WURUD'}</span>
        </div>
        <button
          onClick={handleEnter}
          className="text-xs uppercase tracking-wider text-[#a89f91] hover:text-[#ede7de] transition-colors py-1 px-3 border border-white/10 hover:border-white/30 rounded-full"
        >
          {lang === 'ar' ? 'تخطي' : 'SKIP'}
        </button>
      </div>

      {/* Center Cinematic Carving Reveal */}
      <div className="flex flex-col items-center text-center my-auto max-w-2xl px-4">
        {/* Subtle geometric carved wood emblem */}
        <div
          className={`relative mb-8 transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#cbb59d]/40 rounded-full flex items-center justify-center p-2 relative overflow-hidden group">
            {/* Annual wood growth ring motif inspired by real CARVE cups */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#cbb59d] stroke-current fill-none stroke-[1.2] opacity-80">
              <circle cx="50" cy="50" r="10" />
              <circle cx="50" cy="50" r="22" strokeDasharray="3 2" />
              <circle cx="50" cy="50" r="34" />
              <circle cx="50" cy="50" r="44" strokeDasharray="6 3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0d]/60 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Identity Typography */}
        <div
          className={`space-y-3 transition-all duration-1000 transform ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display tracking-[0.2em] font-light text-[#f5f1eb]">
            CARVE
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm tracking-[0.35em] text-[#cbb59d] uppercase">
            <span>COFFEE BAR</span>
            <span className="opacity-40">·</span>
            <span className="font-arabic font-normal tracking-normal text-sm sm:text-base">قهوة كارڤ</span>
          </div>
        </div>

        {/* Atmospheric subtitle */}
        <p
          className={`mt-6 text-sm sm:text-base text-[#a89f91] font-light max-w-md transition-all duration-1000 delay-200 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {lang === 'ar'
            ? 'ملاذ معماري هادئ وتجربة قهوة مختصة متأنية.'
            : 'An architectural coffee sanctuary in the heart of Riyadh.'}
        </p>

        {/* Enter CTA Button */}
        <div
          className={`mt-10 transition-all duration-700 delay-300 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleEnter}
            autoFocus
            className="group relative inline-flex items-center gap-4 px-8 py-3.5 rounded-full bg-[#1b191e] border border-[#cbb59d]/40 text-[#f5f1eb] hover:bg-[#cbb59d] hover:text-[#0c0b0d] hover:border-[#cbb59d] transition-all duration-300 shadow-xl shadow-black/40 focus:outline-none focus:ring-2 focus:ring-[#cbb59d]"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
              {lang === 'ar' ? 'ادخل كارڤ' : 'ENTER CARVE'}
            </span>
            {lang === 'ar' ? (
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Coordinates & verified info */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#787165] gap-2">
        <span>24.7176° N, 46.6853° E · AL URUBAH RD</span>
        <span>{lang === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'RIYADH, SAUDI ARABIA'}</span>
      </div>
    </div>
  );
};
