import React, { useState } from 'react';
import { Beaker, Sliders, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { COFFEE_LAB_DATA } from '../data/carveContent';

interface CoffeeLabProps {
  lang: Language;
}

type LabKey = 'espresso' | 'filter' | 'coldBrew' | 'matcha';

export const CoffeeLab: React.FC<CoffeeLabProps> = ({ lang }) => {
  const [activeLabKey, setActiveLabKey] = useState<LabKey>('filter');
  const activeData = COFFEE_LAB_DATA[activeLabKey];

  const labKeys: { key: LabKey; label: { en: string; ar: string } }[] = [
    { key: 'filter', label: { en: 'FILTER / V60', ar: 'الترشيح V60' } },
    { key: 'espresso', label: { en: 'ESPRESSO', ar: 'الإسبريسو' } },
    { key: 'coldBrew', label: { en: 'SLOW COLD', ar: 'الاستخلاص البارد' } },
    { key: 'matcha', label: { en: 'MATCHA', ar: 'الماتشا' } },
  ];

  return (
    <section
      id="lab"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-theme-canvas text-theme-primary relative overflow-hidden transition-colors duration-500"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-theme pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-theme-accent">
              <Beaker className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'الدقة والاستخلاص' : 'EXTRACTION SCIENCE'}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-light text-theme-primary">
              {lang === 'ar' ? 'مختبر كارڤ للقهوة' : 'The CARVE Lab'}
            </h2>
          </div>
          <p className="text-sm text-theme-secondary max-w-md font-light leading-relaxed">
            {lang === 'ar'
              ? 'موازين دقيقة، وهندسة استخلاص محسوبة، ودرجات حرارة موزونة لكل كوب لضمان نقاء تام للإيحاءات.'
              : 'Precision ratios, calibrated water minerals, and micrometer grind distribution. We engineer every parameter so you can simply savor the stillness.'}
          </p>
        </div>

        {/* Method Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-3">
          {labKeys.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveLabKey(item.key)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all border ${
                activeLabKey === item.key
                  ? 'bg-theme-accent text-white dark:text-[#0c0b0d] border-theme-accent shadow-md shadow-black/10 dark:shadow-black/40 font-semibold'
                  : 'bg-theme-surface text-theme-secondary border-theme hover:border-theme-hover hover:text-theme-primary'
              }`}
            >
              {item.label[lang]}
            </button>
          ))}
        </div>

        {/* Dynamic Editorial Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center bg-theme-surface border border-theme rounded-2xl p-6 sm:p-12 relative overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/30">
          {/* Background Ambient Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-theme-accent/5 blur-3xl pointer-events-none" />

          {/* Left Column: Technical Parameters & Method Info */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-theme-accent">
                <Sliders className="w-3.5 h-3.5" />
                <span>{activeData.name[lang]}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-light text-theme-primary">
                {activeData.subtitle[lang]}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
              {activeData.description[lang]}
            </p>

            {/* Parameter Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-theme">
              {activeData.parameters.map((param, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-theme-elevated border border-theme space-y-1 shadow-sm">
                  <span className="text-[11px] uppercase tracking-wider text-theme-muted block">
                    {param.label[lang]}
                  </span>
                  <span className="text-sm font-mono text-theme-primary font-semibold block">
                    {param.val}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-theme-muted">
              <CheckCircle2 className="w-4 h-4 text-theme-accent" />
              <span>{lang === 'ar' ? 'معايرة يومية قبل فتح الأبواب عند 6:00 صباحاً' : 'Calibrated daily before 6:00 AM doors open'}</span>
            </div>
          </div>

          {/* Right Column: Visual of Craft & Setting */}
          <div className="lg:col-span-6 z-10">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-theme group shadow-xl">
              <img
                src={activeData.image}
                alt={`${activeData.name[lang]} Craft - CARVE COFFEE BAR`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.94]"
                referrerPolicy="no-referrer"
                key={activeLabKey}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="text-[#cbb59d] tracking-widest uppercase text-[11px]">
                  {lang === 'ar' ? 'معايير كارڤ' : 'CARVE STANDARDS'}
                </span>
                <span className="font-mono text-[11px] text-white/70">RIYADH SPECIALTY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
