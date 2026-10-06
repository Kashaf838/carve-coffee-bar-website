import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { toggleThemeWithRadialTransition } from './utils/themeTransition';
import { OpeningExperience } from './components/OpeningExperience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { InteractiveMenu } from './components/InteractiveMenu';
import { CarveRitual } from './components/CarveRitual';
import { CoffeeLab } from './components/CoffeeLab';
import { AtmosphereGallery } from './components/AtmosphereGallery';
import { VisitSection } from './components/VisitSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  // Initialize theme from localStorage or system prefers-color-scheme
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('carve_theme') as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Sync document class, theme attribute, and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', theme);
    localStorage.setItem('carve_theme', theme);
  }, [theme]);

  // Sync document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Handle animated theme toggle
  const handleThemeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    toggleThemeWithRadialTransition(theme, setTheme, event);
  };

  return (
    <div
      className={`min-h-screen bg-theme-canvas text-theme-primary selection:bg-theme-accent selection:text-white transition-colors duration-500 ${
        lang === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Cinematic Opening "ENTER CARVE" Experience */}
      {!hasEntered && (
        <OpeningExperience
          lang={lang}
          onEnter={() => setHasEntered(true)}
        />
      )}

      {/* Main Experience */}
      <div className={hasEntered ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}>
        <Navbar
          lang={lang}
          theme={theme}
          onLanguageChange={setLang}
          onThemeToggle={handleThemeToggle}
        />
        <main>
          <Hero lang={lang} />
          <ExperienceSection lang={lang} />
          <InteractiveMenu lang={lang} />
          <CarveRitual lang={lang} />
          <CoffeeLab lang={lang} />
          <AtmosphereGallery lang={lang} />
          <VisitSection lang={lang} />
          <InstagramSection lang={lang} />
        </main>
        <Footer lang={lang} />
      </div>
    </div>
  );
}
