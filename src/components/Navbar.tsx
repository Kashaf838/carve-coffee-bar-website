import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MapPin } from 'lucide-react';
import { Language, Theme } from '../types';
import { CARVE_INFO } from '../data/carveContent';
import { AudioAmbiance } from './AudioAmbiance';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  lang: Language;
  theme: Theme;
  onLanguageChange: (lang: Language) => void;
  onThemeToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  theme,
  onLanguageChange,
  onThemeToggle
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: { en: 'HOME', ar: 'الرئيسية' } },
    { href: '#menu', label: { en: 'MENU', ar: 'القائمة' } },
    { href: '#ritual', label: { en: 'THE RITUAL', ar: 'طقس القهوة' } },
    { href: '#lab', label: { en: 'COFFEE LAB', ar: 'المختبر' } },
    { href: '#atmosphere', label: { en: 'ATMOSPHERE', ar: 'الأجواء' } },
    { href: '#visit', label: { en: 'VISIT', ar: 'زيارة كارڤ' } },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-theme-canvas/92 backdrop-blur-md border-b border-theme shadow-md shadow-black/5 dark:shadow-black/40'
            : 'py-6 bg-transparent'
        }`}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-display tracking-[0.25em] text-theme-primary group-hover:text-theme-accent transition-colors">
              CARVE
            </span>
            <span className="hidden sm:inline text-[10px] tracking-widest text-theme-muted uppercase">
              {lang === 'ar' ? 'قهوة كارڤ' : 'COFFEE BAR'}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-[0.18em] text-theme-secondary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-theme-primary transition-colors py-1 relative group"
              >
                <span>{link.label[lang]}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-theme-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Theme Toggle, Audio, Language, Instagram, Visit CTA) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Theme Switcher Toggle */}
            <ThemeToggle
              theme={theme}
              lang={lang}
              onToggle={onThemeToggle}
              variant="navbar"
            />

            <AudioAmbiance lang={lang} />

            {/* Language Switcher */}
            <div className="flex items-center text-xs font-medium tracking-wider bg-theme-subtle border border-theme rounded-full p-0.5">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-theme-accent text-white dark:text-[#0c0b0d] font-semibold shadow-sm'
                    : 'text-theme-muted hover:text-theme-primary'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 rounded-full transition-all font-arabic ${
                  lang === 'ar'
                    ? 'bg-theme-accent text-white dark:text-[#0c0b0d] font-semibold shadow-sm'
                    : 'text-theme-muted hover:text-theme-primary'
                }`}
              >
                العربية
              </button>
            </div>

            {/* Instagram Link */}
            <a
              href={CARVE_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-theme hover:border-theme-hover text-theme-secondary hover:text-theme-primary bg-theme-subtle transition-all"
              title="Instagram @carvecoffee.sa"
              aria-label="Instagram @carvecoffee.sa"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Visit / Directions CTA */}
            <a
              href="#visit"
              onClick={(e) => handleNavClick(e, '#visit')}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wider uppercase font-medium bg-theme-surface border border-theme text-theme-primary hover:bg-theme-accent hover:text-white dark:hover:text-[#0c0b0d] transition-all shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-theme-accent" />
              <span>{lang === 'ar' ? 'الموقع' : 'FIND CARVE'}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-theme-secondary hover:text-theme-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-theme-canvas/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-theme-muted">
                {lang === 'ar' ? 'فهرس التجربة' : 'EXPERIENCE INDEX'}
              </span>
              <div className="w-32">
                <ThemeToggle
                  theme={theme}
                  lang={lang}
                  onToggle={onThemeToggle}
                  variant="mobile"
                />
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-display tracking-widest text-theme-primary hover:text-theme-accent transition-colors flex items-center justify-between border-b border-theme pb-3"
                >
                  <span>{link.label[lang]}</span>
                  <span className="text-xs font-mono text-theme-muted">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-theme">
            <div className="flex items-center justify-between text-xs text-theme-muted">
              <span>{lang === 'ar' ? CARVE_INFO.location.cityAr : CARVE_INFO.location.city}</span>
              <span>{lang === 'ar' ? CARVE_INFO.hours.ar : CARVE_INFO.hours.en}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={CARVE_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-theme text-xs font-medium uppercase tracking-wider text-theme-primary hover:bg-theme-subtle transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{CARVE_INFO.instagram.handle}</span>
              </a>
              <a
                href={CARVE_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-theme-accent text-white dark:text-[#0c0b0d] text-xs font-medium uppercase tracking-wider transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>{lang === 'ar' ? 'الاتجاهات' : 'DIRECTIONS'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

