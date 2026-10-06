import { Theme } from '../types';

export function toggleThemeWithRadialTransition(
  currentTheme: Theme,
  setTheme: (t: Theme) => void,
  event?: React.MouseEvent<HTMLButtonElement>
) {
  const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';

  // Check if prefers-reduced-motion is enabled
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Check if View Transitions API is supported
  const hasViewTransition =
    typeof document !== 'undefined' &&
    'startViewTransition' in document &&
    !prefersReducedMotion;

  if (!hasViewTransition || !event) {
    setTheme(nextTheme);
    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const doc = document as unknown as {
    startViewTransition: (cb: () => void) => {
      ready: Promise<void>;
      finished: Promise<void>;
    };
  };

  try {
    const transition = doc.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      })
      .catch(() => {
        setTheme(nextTheme);
      });
  } catch {
    setTheme(nextTheme);
  }
}
