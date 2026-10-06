import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { CARVE_INFO } from '../data/carveContent';

interface InstagramSectionProps {
  lang: Language;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ lang }) => {
  const mosaic = [
    { image: '/carve2.PNG', caption: 'Signature wood-ring cups & banana pudding in silver coupe' },
    { image: '/carve1.PNG', caption: 'The chiseled oak portal & night entrance on Al Urubah' },
    { image: '/carve5.PNG', caption: 'Ruby iced brew & cold manual V60 over clear ice' },
    { image: '/carve3.PNG', caption: 'Artisanal cloches, croissants & scalloped walnut wall' },
    { image: '/carve4.PNG', caption: 'Evening lounge with floating paper sail pendant lamp' },
    { image: '/carve.PNG', caption: 'Daylight storefront and street patio on Al Urubah Rd' },
  ];

  return (
    <section
      className="py-24 sm:py-36 px-6 sm:px-12 bg-theme-canvas text-theme-primary relative overflow-hidden transition-colors duration-500"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-theme pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-theme-accent">
              <Instagram className="w-3.5 h-3.5" />
              <span>{CARVE_INFO.instagram.handle}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-light text-theme-primary">
              {lang === 'ar' ? 'كارڤ على أرض الواقع' : 'CARVE, IRL'}
            </h2>
          </div>

          <a
            href={CARVE_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium bg-theme-surface border border-theme text-theme-primary hover:bg-theme-accent hover:text-white dark:hover:text-[#0c0b0d] transition-all shadow-sm"
          >
            <span>{lang === 'ar' ? 'متابعة كارڤ' : 'FOLLOW CARVE'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Photo Mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {mosaic.map((item, idx) => (
            <a
              key={idx}
              href={CARVE_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl border border-theme bg-theme-surface shadow-md dark:shadow-lg block"
            >
              <img
                src={item.image}
                alt={`CARVE Instagram Feed ${idx + 1}`}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-[0.93]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <Instagram className="w-6 h-6 text-[#cbb59d] mb-2" />
                <span className="text-[10px] text-white font-light line-clamp-2">
                  {item.caption}
                </span>
                <span className="mt-2 text-[9px] uppercase tracking-wider text-[#cbb59d]">
                  @carvecoffee.sa
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
