export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export interface MenuItem {
  id: string;
  name: { en: string; ar: string };
  category: 'coffee' | 'matcha' | 'cold' | 'desserts' | 'bakes';
  description: { en: string; ar: string };
  notes: { en: string; ar: string };
  presentation?: { en: string; ar: string };
  image: string;
}

export interface RitualStep {
  step: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  description: { en: string; ar: string };
  details: { en: string; ar: string };
  image: string;
}

export interface AtmosphereItem {
  id: string;
  title: { en: string; ar: string };
  caption: { en: string; ar: string };
  material: { en: string; ar: string };
  image: string;
  tag: { en: string; ar: string };
}
