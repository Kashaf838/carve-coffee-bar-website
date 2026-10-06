import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { Language } from '../types';
import { RITUAL_STEPS } from '../data/carveContent';

interface CarveRitualProps {
  lang: Language;
}

export const CarveRitual: React.FC<CarveRitualProps> = ({ lang }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = RITUAL_STEPS[activeStepIndex];

  const nextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % RITUAL_STEPS.length);
  };

  const prevStep = () => {
    setActiveStepIndex((prev) => (prev - 1 + RITUAL_STEPS.length) % RITUAL_STEPS.length);
  };

  return (
    <section
      id="ritual"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-theme-canvas text-theme-primary relative overflow-hidden transition-colors duration-500"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-theme pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-theme-accent">
              <Compass className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'طقس التجربة' : 'THE FIVE STAGES'}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-light text-theme-primary">
              {lang === 'ar' ? 'طقس القهوة في كارڤ' : 'The CARVE Ritual'}
            </h2>
          </div>
          <p className="text-sm text-theme-secondary max-w-md font-light leading-relaxed">
            {lang === 'ar'
              ? 'خمس محطات تأملية تختصر فلسفة تحضير القهوة، من اختيار حبة البن إلى آخر رشفة هادئة بين جدران المقهى.'
              : 'Five intentional stages tracing the journey of specialty coffee from bean selection to the quiet cadence of Riyadh conversation.'}
          </p>
        </div>

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 border-b border-theme pb-6">
          {RITUAL_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`flex flex-col items-start p-2 sm:p-4 rounded-lg transition-all text-left ${
                activeStepIndex === idx
                  ? 'bg-theme-surface text-theme-primary border-b-2 border-theme-accent shadow-sm'
                  : 'text-theme-muted hover:text-theme-secondary hover:bg-theme-subtle'
              }`}
            >
              <span className="font-mono text-xs sm:text-sm text-theme-accent font-semibold">{step.step}</span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-medium truncate mt-1">
                {step.title[lang]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Ritual Spotlight View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl border border-theme bg-theme-surface shadow-lg dark:shadow-xl">
            <img
              src={currentStep.image}
              alt={`${currentStep.title[lang]} - CARVE Coffee Ritual`}
              className="w-full h-[400px] sm:h-[500px] object-cover object-center transition-all duration-700 filter brightness-[0.94]"
              referrerPolicy="no-referrer"
              key={currentStep.step}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

            {/* Stage Indicator Overlay */}
            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-[#cbb59d]">
              STAGE {currentStep.step} / 05
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-white">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#cbb59d] block">
                  {currentStep.subtitle[lang]}
                </span>
                <span className="text-sm font-medium">
                  {currentStep.details[lang]}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Stage Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-theme-accent">
                {currentStep.step} — {currentStep.title[lang]}
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-light text-theme-primary">
                {currentStep.subtitle[lang]}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
              {currentStep.description[lang]}
            </p>

            <div className="p-4 rounded-xl bg-theme-surface border border-theme text-xs space-y-1">
              <span className="text-theme-muted uppercase tracking-wider block">
                {lang === 'ar' ? 'مواصفات المرحلة' : 'STAGE CALIBRATION'}
              </span>
              <span className="text-theme-primary font-mono block font-medium">
                {currentStep.details[lang]}
              </span>
            </div>

            {/* Stage Navigation Arrows */}
            <div className="flex items-center gap-4 pt-4 border-t border-theme">
              <button
                onClick={prevStep}
                className="p-3 rounded-full border border-theme text-theme-secondary hover:text-theme-primary hover:border-theme-hover hover:bg-theme-subtle transition-all"
                aria-label="Previous ritual stage"
              >
                {lang === 'ar' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              </button>
              <div className="text-xs font-mono text-theme-muted">
                {activeStepIndex + 1} OF {RITUAL_STEPS.length}
              </div>
              <button
                onClick={nextStep}
                className="p-3 rounded-full border border-theme text-theme-secondary hover:text-theme-primary hover:border-theme-hover hover:bg-theme-subtle transition-all"
                aria-label="Next ritual stage"
              >
                {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
