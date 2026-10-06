import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Language } from '../types';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-theme-canvas text-theme-primary relative overflow-hidden"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-theme pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-theme-accent">
              {lang === 'ar' ? 'المفهوم والهوية' : 'THE CONCEPT'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light tracking-wide text-theme-primary">
              {lang === 'ar' ? 'منحوتٌ من السكينة' : 'Carved from Stillness'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-theme-secondary max-w-md font-light leading-relaxed">
            {lang === 'ar'
              ? 'مساحة صُممت لتمنح وقتك إيقاعاً أهدأ، حيث تتلاقى دقة القهوة المختصة مع حوار الخشب المنحوت والحجر المصقول في الرياض.'
              : 'A space designed to slow your pace. Specialty coffee meets the visceral dialogue of chiseled wood, honed stone, and gentle light in Riyadh.'}
          </p>
        </div>

        {/* Narrative Composition 1: The Entrance Portal & Tactile Wood */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Main Visual: Entrance Door at Night */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-xl border border-theme bg-theme-surface shadow-md dark:shadow-xl">
            <img
              src="/carve1.PNG"
              alt="CARVE Chiseled Wood Door and Architectural Entrance at Dusk"
              className="w-full h-[460px] sm:h-[560px] object-cover object-center group-hover:scale-103 transition-transform duration-700 filter brightness-[0.92]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-white">
              <div>
                <span className="block text-[#cbb59d] tracking-widest uppercase text-[11px]">
                  {lang === 'ar' ? 'البوابة الحرفية' : 'THE PORTAL'}
                </span>
                <span className="text-sm font-medium tracking-wide">
                  {lang === 'ar' ? 'باب خشب البلوط المنحوت ومقبض الحجر الطبيعي' : 'Modular Chiseled Oak & Organic Pebble Handle'}
                </span>
              </div>
              <span className="font-mono text-white/70">2023 · RIYADH</span>
            </div>
          </div>

          {/* Editorial Text Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-theme-accent">01 / ARCHITECTURAL IDENTITY</div>
            <h3 className="text-2xl sm:text-3xl font-display font-light leading-snug text-theme-primary">
              {lang === 'ar'
                ? 'الباب الذي يدعوك لترك صخب المدينة خلفك'
                : 'A Door That Invites You to Leave the Rush Behind'}
            </h3>
            <p className="text-sm text-theme-secondary font-light leading-relaxed">
              {lang === 'ar'
                ? 'تبدأ تجربة كارڤ من اللحظة التي تلمس فيها المقبض الحجري الناعم المثبت على الباب الخشبي الثقيل. مكعبات الخشب المنحوتة تمنح المكان هيبة دافئة وخصوصية مريحة تحمي هدوء اللحظة بالداخل.'
                : 'The CARVE experience begins before the first sip. A smooth organic pebble handle invites your hand against heavy geometric block-carved timber. It marks a clear threshold from the buzz of Al Urubah Road into unhurried contemplation.'}
            </p>
            <div className="pt-4 border-t border-theme grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="block text-theme-muted uppercase tracking-wider">{lang === 'ar' ? 'المواد' : 'MATERIALS'}</span>
                <span className="font-medium text-theme-primary">{lang === 'ar' ? 'بلوط داكن، حجر جيري' : 'Dark Oak, Honed Stone'}</span>
              </div>
              <div>
                <span className="block text-theme-muted uppercase tracking-wider">{lang === 'ar' ? 'الإضاءة' : 'LIGHTING'}</span>
                <span className="font-medium text-theme-primary">{lang === 'ar' ? 'دافئة ومدروسة' : 'Warm Ambient Downs'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Composition 2: The Evening Lounge & Coffee Ritual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Editorial Text Block */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="text-xs font-mono text-theme-accent">02 / SANCTUARY & COMMUNITY</div>
            <h3 className="text-2xl sm:text-3xl font-display font-light leading-snug text-theme-primary">
              {lang === 'ar'
                ? 'جلسات رحبة وتفاصيل صُممت للتأمل والحوار'
                : 'Sculptural Furniture & Thoughtful Proportions'}
            </h3>
            <p className="text-sm text-theme-secondary font-light leading-relaxed">
              {lang === 'ar'
                ? 'داخل كارڤ، تتدلى ثريا ورقية تشبه الشراع المضيء فوق طاولة أوريغامي هندسية سوداء ومقاعد كتانية مريحة. هنا يجد مجتمع الرياض مكاناً للاسترخاء، وتبادل الأحاديث، وتذوق القهوة في أجواء عصرية استثنائية.'
                : 'Inside, a luminous curved paper sail hangs gently above faceted black coffee tables, ivory lounge seating, and linen sling chairs. It is a natural gathering place for Riyadh’s coffee community, thinkers, and conversationalists.'}
            </p>
            <div className="pt-4 border-t border-theme flex items-center gap-6">
              <a
                href="#ritual"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-theme-accent hover:text-theme-primary transition-colors font-medium"
              >
                <span>{lang === 'ar' ? 'اكتشف طقس القهوة' : 'DISCOVER THE RITUAL'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-theme-muted hover:text-theme-primary transition-colors font-medium"
              >
                <span>{lang === 'ar' ? 'قائمة المشروبات والحلويات' : 'VIEW MENU'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Visual: Interior Lounge View */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative group overflow-hidden rounded-xl border border-theme bg-theme-surface shadow-md dark:shadow-xl">
            <img
              src="/carve4.PNG"
              alt="CARVE Architectural Lounge with Floating Paper Sail Pendant Light"
              className="w-full h-[460px] sm:h-[560px] object-cover object-center group-hover:scale-103 transition-transform duration-700 filter brightness-[0.92]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-white">
              <div>
                <span className="block text-[#cbb59d] tracking-widest uppercase text-[11px]">
                  {lang === 'ar' ? 'المساحة الداخلية' : 'THE SANCTUARY'}
                </span>
                <span className="text-sm font-medium tracking-wide">
                  {lang === 'ar' ? 'صالة المساء وثريا الشراع الورقي المعلق' : 'Suspended Paper Sail & Minimalist Lounge'}
                </span>
              </div>
              <span className="font-mono text-white/70">AL WURUD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
