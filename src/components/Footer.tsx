import React from 'react';
import { ArrowUp, Instagram, MapPin } from 'lucide-react';
import { Language } from '../types';
import { CARVE_INFO } from '../data/carveContent';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-16 sm:py-24 px-6 sm:px-12 bg-theme-surface text-theme-primary border-t border-theme transition-colors duration-500"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-display font-light tracking-[0.2em] text-theme-primary">
              CARVE
            </h2>
            <div className="flex items-center gap-3 text-xs tracking-widest text-theme-accent uppercase">
              <span>COFFEE BAR</span>
              <span>·</span>
              <span className="font-arabic font-normal tracking-normal text-sm">قهوة كارڤ</span>
            </div>
            <p className="text-xs sm:text-sm text-theme-secondary font-light max-w-sm leading-relaxed">
              {lang === 'ar'
                ? 'ملاذ للقهوة المختصة والسكينة المعمارية على طريق العروبة في الرياض. كُتب وصُمم ليكون امتداداً لهوية المكان.'
                : 'A specialty coffee bar and architectural sanctuary on Al Urubah Road, Riyadh. Designed as the unhurried digital extension of physical craft.'}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 text-xs">
            <span className="text-theme-accent uppercase tracking-widest font-mono block">
              {lang === 'ar' ? 'الفهرس' : 'INDEX'}
            </span>
            <ul className="space-y-2 text-theme-secondary">
              <li>
                <a href="#home" className="hover:text-theme-primary transition-colors">
                  {lang === 'ar' ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-theme-primary transition-colors">
                  {lang === 'ar' ? 'المفهوم والهوية' : 'Experience'}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-theme-primary transition-colors">
                  {lang === 'ar' ? 'القائمة' : 'Curated Menu'}
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-theme-primary transition-colors">
                  {lang === 'ar' ? 'طقس القهوة' : 'The Ritual'}
                </a>
              </li>
              <li>
                <a href="#lab" className="hover:text-theme-primary transition-colors">
                  {lang === 'ar' ? 'المختبر' : 'Coffee Lab'}
                </a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-theme-primary transition-colors">
                  {lang === 'ar' ? 'الأجواء والعمارة' : 'Atmosphere'}
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-3 text-xs">
            <span className="text-theme-accent uppercase tracking-widest font-mono block">
              {lang === 'ar' ? 'الزيارة' : 'VISIT'}
            </span>
            <div className="space-y-1.5 text-theme-secondary">
              <p className="text-theme-primary font-medium">Al Urubah Rd, Al Wurud</p>
              <p>Riyadh 12251, Saudi Arabia</p>
              <p className="font-mono text-theme-accent pt-2">{CARVE_INFO.location.coordinates}</p>
              <p className="text-theme-muted pt-1">Daily 6:00 AM – 1:00 AM</p>
            </div>
          </div>

          {/* Connect Column */}
          <div className="space-y-3 text-xs">
            <span className="text-theme-accent uppercase tracking-widest font-mono block">
              {lang === 'ar' ? 'التواصل' : 'CONNECT'}
            </span>
            <div className="space-y-2">
              <a
                href={CARVE_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-theme-secondary hover:text-theme-primary transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{CARVE_INFO.instagram.handle}</span>
              </a>
              <a
                href={CARVE_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-theme-secondary hover:text-theme-primary transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'خرائط قوقل' : 'Google Maps'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between text-[11px] text-theme-muted gap-4">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} CARVE COFFEE BAR.</span>
            <span>·</span>
            <span>{lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved.'}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-theme-secondary hover:text-theme-primary transition-colors"
          >
            <span>{lang === 'ar' ? 'العودة للأعلى' : 'BACK TO TOP'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
