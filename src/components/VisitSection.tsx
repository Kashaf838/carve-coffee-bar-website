import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Copy, Check, Instagram, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { CARVE_INFO } from '../data/carveContent';

interface VisitSectionProps {
  lang: Language;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyAddress = () => {
    const textToCopy = lang === 'ar' ? CARVE_INFO.location.addressAr : CARVE_INFO.location.address;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="visit"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-theme-canvas text-theme-primary relative overflow-hidden transition-colors duration-500"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-theme pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-theme-accent">
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'الموقع وساعات العمل' : 'LOCATION & HOURS'}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-light text-theme-primary">
              {lang === 'ar' ? 'الوصول إلى كارڤ' : 'Find Your Way to CARVE'}
            </h2>
          </div>
          <p className="text-sm text-theme-secondary max-w-md font-light leading-relaxed">
            {lang === 'ar'
              ? 'نستقبلكم يومياً على طريق العروبة في حي الورود بالرياض، بأبواب مفتوحة من الصباح الباكر حتى ما بعد منتصف الليل.'
              : 'Located on Al Urubah Road in Al Wurud, Riyadh. An unhurried destination welcoming you daily from early dawn until late night.'}
          </p>
        </div>

        {/* Location & Details Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Left Column: Architectural Location Visual / Custom Map Card */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl border border-theme bg-theme-surface shadow-lg dark:shadow-xl">
            {/* Real Street Exterior View */}
            <img
              src="/carve.PNG"
              alt="CARVE COFFEE BAR Streetfront on Al Urubah Rd, Riyadh"
              className="w-full h-[420px] sm:h-[500px] object-cover object-center filter dark:brightness-[0.88] brightness-[0.95] group-hover:scale-103 transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            {/* Custom Architectural Location Badge Floating Over Visual */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 space-y-4 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#cbb59d] block">
                    AL WURUD · RIYADH
                  </span>
                  <h3 className="text-lg font-display text-white font-light">
                    {CARVE_INFO.name[lang]}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">
                    {lang === 'ar' ? CARVE_INFO.location.addressAr : CARVE_INFO.location.address}
                  </p>
                </div>
                <div className="text-right font-mono text-xs text-[#cbb59d] shrink-0">
                  {CARVE_INFO.location.coordinates}
                </div>
              </div>

              {/* Action Buttons within Card */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
                <a
                  href={CARVE_INFO.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium bg-[#cbb59d] text-[#0c0b0d] hover:bg-[#decbbb] transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'الاتجاهات عبر الخريطة' : 'GET DIRECTIONS'}</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                </a>

                <button
                  onClick={copyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{lang === 'ar' ? 'تم النسخ!' : 'COPIED!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/70" />
                      <span>{lang === 'ar' ? 'نسخ العنوان' : 'COPY ADDRESS'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Hours & Hospitality Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Opening Hours Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-theme-elevated border border-theme space-y-6 shadow-md dark:shadow-xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-theme-accent">
                <Clock className="w-4 h-4" />
                <span>{lang === 'ar' ? 'ساعات العمل الرسمية' : 'OPENING HOURS'}</span>
              </div>

              <div className="space-y-4">
                {CARVE_INFO.hours.schedule.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm border-b border-theme pb-3">
                    <span className="text-theme-primary font-light">{item.days[lang]}</span>
                    <span className="font-mono text-theme-accent font-medium">{item.time}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-theme-muted font-light italic">
                {lang === 'ar'
                  ? '* نستقبلكم صباحاً بالقهوة والمخبوزات الطازجة، ونستمر معكم حتى ساعات الليل المتأخرة.'
                  : '* Serving fresh morning brews and baked goods from early dawn through unhurried midnight hours.'}
              </p>
            </div>

            {/* Direct Connect Actions */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-theme-muted block">
                {lang === 'ar' ? 'التواصل المباشر' : 'DIRECT CONNECTIONS'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={CARVE_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-theme-surface border border-theme hover:border-theme-hover transition-all text-xs font-medium text-theme-primary hover:bg-theme-subtle shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-theme-accent" />
                  <div className="truncate">
                    <span className="block text-[10px] text-theme-muted uppercase">Instagram</span>
                    <span className="truncate">{CARVE_INFO.instagram.handle}</span>
                  </div>
                </a>

                <a
                  href={CARVE_INFO.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-theme-surface border border-theme hover:border-theme-hover transition-all text-xs font-medium text-theme-primary hover:bg-theme-subtle shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-theme-accent" />
                  <div className="truncate">
                    <span className="block text-[10px] text-theme-muted uppercase">Google Maps</span>
                    <span className="truncate">Al Wurud, Riyadh</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
