import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { Language, AtmosphereItem } from '../types';
import { ATMOSPHERE_GALLERY } from '../data/carveContent';

interface AtmosphereGalleryProps {
  lang: Language;
}

export const AtmosphereGallery: React.FC<AtmosphereGalleryProps> = ({ lang }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<AtmosphereItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (item: AtmosphereItem, idx: number) => {
    setSelectedPhoto(item);
    setCurrentIndex(idx);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % ATMOSPHERE_GALLERY.length;
    setCurrentIndex(nextIdx);
    setSelectedPhoto(ATMOSPHERE_GALLERY[nextIdx]);
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + ATMOSPHERE_GALLERY.length) % ATMOSPHERE_GALLERY.length;
    setCurrentIndex(prevIdx);
    setSelectedPhoto(ATMOSPHERE_GALLERY[prevIdx]);
  };

  return (
    <section
      id="atmosphere"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-theme-canvas text-theme-primary relative overflow-hidden transition-colors duration-500"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title Lockup: "A PLACE TO SLOW DOWN" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-theme pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-theme-accent">
              {lang === 'ar' ? 'العمارة والمكان' : 'ARCHITECTURE & PRESENCE'}
            </span>
            <h2 className="mt-3 text-3xl sm:text-6xl font-display font-light text-theme-primary">
              {lang === 'ar' ? 'مساحة للهدوء والتأني' : 'A Place to Slow Down'}
            </h2>
          </div>
          <p className="text-sm text-theme-secondary max-w-md font-light leading-relaxed">
            {lang === 'ar'
              ? 'تتحدث تفاصيل كارڤ بلغة المواد الطبيعية: خشب الجوز المحفور يدوياً، حجر الترافرتين الدافئ، والضوء الشاعري المنبعث من شراع الورق المعلق.'
              : 'Every corner speaks the quiet language of honest materials: hand-chiseled walnut walls, fluted travertine counters, and the luminous grace of sculpted paper in Riyadh.'}
          </p>
        </div>

        {/* Gallery Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ATMOSPHERE_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, idx)}
              className="group cursor-pointer relative overflow-hidden rounded-xl border border-theme bg-theme-surface shadow-md dark:shadow-xl hover:border-theme-hover transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 filter brightness-[0.93]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Floating Tag */}
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-wider text-[#cbb59d] border border-white/10">
                {item.tag[lang]}
              </div>

              {/* Hover Prompt Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Content Caption */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1 text-white">
                <h3 className="text-lg font-display font-light text-white group-hover:text-[#cbb59d] transition-colors">
                  {item.title[lang]}
                </h3>
                <p className="text-xs text-white/80 font-light line-clamp-2 leading-relaxed">
                  {item.caption[lang]}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-white/60">
                  <Layers className="w-3 h-3 text-[#cbb59d]" />
                  <span>{item.material[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Close photo view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next controls */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Previous photo"
          >
            {lang === 'ar' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>
          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Next photo"
          >
            {lang === 'ar' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Expanded Container */}
          <div
            className="relative w-full max-w-4xl bg-theme-elevated text-theme-primary border border-theme rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title[lang]}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-2 px-2">
              <div className="flex items-center justify-between text-xs text-theme-accent">
                <span className="font-mono tracking-wider">{selectedPhoto.tag[lang]}</span>
                <span className="font-mono text-theme-muted">
                  {currentIndex + 1} / {ATMOSPHERE_GALLERY.length}
                </span>
              </div>
              <h3 className="text-2xl font-display font-light text-theme-primary">
                {selectedPhoto.title[lang]}
              </h3>
              <p className="text-sm text-theme-secondary font-light leading-relaxed">
                {selectedPhoto.caption[lang]}
              </p>
              <div className="pt-2 border-t border-theme text-xs text-theme-muted flex items-center gap-2">
                <span className="text-theme-accent">{lang === 'ar' ? 'المواد المعمارية:' : 'Architectural Materials:'}</span>
                <span>{selectedPhoto.material[lang]}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
