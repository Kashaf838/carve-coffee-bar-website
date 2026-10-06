import React, { useState } from 'react';
import { Sparkles, X, Coffee, Layers } from 'lucide-react';
import { Language, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/carveContent';

interface InteractiveMenuProps {
  lang: Language;
}

type MenuCategory = 'all' | 'coffee' | 'matcha' | 'cold' | 'desserts' | 'bakes';

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories: { id: MenuCategory; label: { en: string; ar: string } }[] = [
    { id: 'all', label: { en: 'ALL OFFERINGS', ar: 'كافة الأصناف' } },
    { id: 'coffee', label: { en: 'SPECIALTY COFFEE', ar: 'القهوة المختصة' } },
    { id: 'matcha', label: { en: 'MATCHA', ar: 'الماتشا' } },
    { id: 'cold', label: { en: 'COLD DRINKS', ar: 'المشروبات الباردة' } },
    { id: 'desserts', label: { en: 'DESSERTS', ar: 'الحلويات' } },
    { id: 'bakes', label: { en: 'BAKES & CLOCHE', ar: 'المخبوزات' } },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-theme-canvas text-theme-primary relative transition-colors duration-500"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-theme pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-theme-accent">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'قائمة كارڤ المختارة' : 'CURATED OFFERINGS'}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-light text-theme-primary">
              {lang === 'ar' ? 'تذوق ما صُنع بعناية' : 'The Taste of CARVE'}
            </h2>
          </div>
          <p className="text-sm text-theme-secondary max-w-md font-light leading-relaxed">
            {lang === 'ar'
              ? 'مجموعة مدروسة من محاصيل القهوة المختصة، المشروبات الباردة المنعشة، والحلويات التوقيعية كبودنغ الموز في الكوبيه الفضي.'
              : 'A measured collection of single-origin filter coffees, artisanal matcha, cold infusions, and signature desserts served in silver coupe ware.'}
          </p>
        </div>

        {/* Category Segmented Controls (Interactive Filter Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all whitespace-nowrap shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-theme-accent text-white dark:text-[#0c0b0d] border-theme-accent shadow-md shadow-black/10 dark:shadow-black/40 font-semibold'
                  : 'bg-theme-surface text-theme-secondary border-theme hover:border-theme-hover hover:text-theme-primary'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Editorial Menu Grid - Anti-slop, Large Photography & Clean Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer flex flex-col justify-between p-6 rounded-xl bg-theme-elevated border border-theme hover:border-theme-hover transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl shadow-black/5 dark:shadow-black/30"
            >
              <div className="space-y-4">
                {/* Photo Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-theme-surface">
                  <img
                    src={item.image}
                    alt={item.name[lang]}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.94]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {item.presentation && (
                    <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded bg-black/75 backdrop-blur-md text-[11px] text-white border border-white/10 flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#cbb59d] shrink-0" />
                      <span className="truncate">{item.presentation[lang]}</span>
                    </div>
                  )}
                </div>

                {/* Category & Title */}
                <div>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-theme-muted mb-1">
                    <span>{item.category}</span>
                    <span className="text-theme-accent font-mono">{lang === 'ar' ? 'عرض التفاصيل' : 'TAP FOR NOTES'}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-light text-theme-primary group-hover:text-theme-accent transition-colors">
                    {item.name[lang]}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-theme-secondary font-light leading-relaxed line-clamp-2">
                  {item.description[lang]}
                </p>
              </div>

              {/* Tasting Notes Bar */}
              <div className="mt-6 pt-4 border-t border-theme flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[11px] text-theme-accent">
                  <Coffee className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.notes[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Lightbox / Tasting Notes Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-theme-elevated text-theme-primary border border-theme rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-theme-surface text-theme-primary hover:bg-theme-subtle transition-colors z-10 border border-theme"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-theme-surface">
              <img
                src={selectedItem.image}
                alt={selectedItem.name[lang]}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-theme-accent">
                <span>{selectedItem.category}</span>
                <span>·</span>
                <span>CARVE COFFEE BAR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-light text-theme-primary">
                {selectedItem.name[lang]}
              </h3>
              <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
                {selectedItem.description[lang]}
              </p>

              {/* Flavor Profile Callout */}
              <div className="p-4 rounded-xl bg-theme-surface border border-theme space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-theme-muted block">
                  {lang === 'ar' ? 'الإيحاءات والمذاق' : 'FLAVOR ATTRIBUTES & NOTES'}
                </span>
                <span className="text-sm text-theme-primary font-medium block">
                  {selectedItem.notes[lang]}
                </span>
                {selectedItem.presentation && (
                  <span className="text-xs text-theme-secondary block pt-1 border-t border-theme">
                    {lang === 'ar' ? 'طريقة التقديم: ' : 'Vessel: '}
                    {selectedItem.presentation[lang]}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider bg-theme-accent text-white dark:text-[#0c0b0d] hover:bg-theme-accent/90 transition-colors shadow-sm"
              >
                {lang === 'ar' ? 'إغلاق' : 'CLOSE'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
