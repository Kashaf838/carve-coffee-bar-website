import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { CARVE_INFO } from '../data/carveContent';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const scrollToExplore = () => {
    const target = document.querySelector('#experience');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 overflow-hidden bg-theme-canvas"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Hero Image with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/carve.PNG"
          alt="CARVE COFFEE BAR Storefront Exterior on Al Urubah Rd, Riyadh"
          className="w-full h-full object-cover object-center scale-105 filter dark:brightness-[0.72] brightness-[0.88] dark:contrast-[1.08] contrast-[1.02] transition-all duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Dynamic theme-aware multi-stop gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f4ed] via-[#f7f4ed]/70 to-[#f7f4ed]/30 dark:from-[#0c0b0d] dark:via-[#0c0b0d]/60 dark:to-[#0c0b0d]/40 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ed]/80 dark:from-[#0c0b0d]/70 via-transparent to-transparent transition-colors duration-500" />
        <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
      </div>

      {/* Top Editorial Kicker Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between text-xs tracking-[0.25em] text-theme-accent">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
          <span>{lang === 'ar' ? 'الرياض · المملكة العربية السعودية' : 'RIYADH · KINGDOM OF SAUDI ARABIA'}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-theme-muted text-[11px]">
          <span>{CARVE_INFO.location.coordinates}</span>
          <span>·</span>
          <span>{lang === 'ar' ? 'طريق العروبة، حي الورود' : 'AL URUBAH RD, AL WURUD'}</span>
        </div>
      </div>

      {/* Center Cinematic Editorial Lockup */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-12 flex flex-col items-start justify-center">
        {/* Subtle wood insignia badge */}
        <div className="mb-4 inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-theme-muted">
          <span className="w-6 h-[1px] bg-theme-accent" />
          <span>{lang === 'ar' ? 'ملاذ القهوة المختصة' : 'SPECIALTY COFFEE SANCTUARY'}</span>
        </div>

        {/* Main Brand Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-light tracking-[0.08em] text-theme-primary uppercase leading-none">
          CARVE
        </h1>

        <div className="flex flex-wrap items-baseline gap-4 sm:gap-6 mt-3 text-xl sm:text-2xl md:text-3xl text-theme-accent tracking-[0.2em]">
          <span className="font-light tracking-[0.3em]">COFFEE BAR</span>
          <span className="opacity-40">/</span>
          <span className="font-arabic font-normal tracking-normal text-2xl sm:text-3xl text-theme-primary">
            قهوة كارڤ
          </span>
        </div>

        {/* Atmospheric Tagline */}
        <p className="mt-8 text-lg sm:text-2xl md:text-3xl font-light text-theme-primary max-w-2xl leading-relaxed">
          &ldquo;{CARVE_INFO.tagline[lang]}&rdquo;
        </p>

        <p className="mt-3 text-sm sm:text-base text-theme-secondary font-light max-w-xl leading-relaxed">
          {CARVE_INFO.subtagline[lang]}
        </p>

        {/* Quick Highlights: Coffee · Craft · Calm · Riyadh */}
        <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs tracking-[0.2em] text-theme-muted uppercase">
          <span>{lang === 'ar' ? 'قهوة' : 'COFFEE'}</span>
          <span className="w-1 h-1 rounded-full bg-theme-accent" />
          <span>{lang === 'ar' ? 'حرفة' : 'CRAFT'}</span>
          <span className="w-1 h-1 rounded-full bg-theme-accent" />
          <span>{lang === 'ar' ? 'هدوء' : 'CALM'}</span>
          <span className="w-1 h-1 rounded-full bg-theme-accent" />
          <span>{lang === 'ar' ? 'تصميم' : 'DESIGN'}</span>
          <span className="w-1 h-1 rounded-full bg-theme-accent" />
          <span>{lang === 'ar' ? 'الرياض' : 'RIYADH'}</span>
        </div>
      </div>

      {/* Bottom Exploration Cue */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between border-t border-theme pt-6">
        <div className="text-xs text-theme-muted tracking-wider">
          <span className="text-theme-accent font-mono">01 / 06</span>
          <span className="mx-2">·</span>
          <span>{lang === 'ar' ? 'البوابة المعمارية' : 'ARCHITECTURAL PORTAL'}</span>
        </div>

        <button
          onClick={scrollToExplore}
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-theme-primary hover:text-theme-accent transition-colors py-2 px-3"
          aria-label="Scroll to explore CARVE experience"
        >
          <span>{lang === 'ar' ? 'استكشف كارڤ' : 'EXPLORE CARVE'}</span>
          <ChevronDown className="w-4 h-4 text-theme-accent animate-bounce transition-transform group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
};
