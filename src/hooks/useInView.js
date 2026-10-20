import { useEffect, useState } from "react";

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// True once `ref` has scrolled into view (and stays true). Starts true when the
// visitor prefers reduced motion, so animations render in their final state.
export function useInView(ref, threshold = 0.4) {
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, inView]);

  return inView;
}

// Counts from 0 to `target` once `active` turns true.
export function useCountUp(active, target, duration = 1800) {
  const [value, setValue] = useState(() =>
    prefersReducedMotion() ? target : 0,
  );

  useEffect(() => {
    if (!active || prefersReducedMotion()) return;

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - t, 3)) * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}
