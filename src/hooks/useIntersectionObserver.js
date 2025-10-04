import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver({ root = null, rootMargin = '0px', threshold = 0.1, triggerOnce = true } = {}) {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      console.warn("Intersection Observer not supported. Element visibility detection will not work.");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Instead of a single boolean, we can use the intersectionRatio for more nuance
      if (entry.isIntersecting) {
        setInView(true);
        if (triggerOnce) {
          hasTriggered.current = true;
          observer.unobserve(entry.target);
        }
      } else if (!triggerOnce) {
        setInView(false);
      }
    }, { root, rootMargin, threshold });

    const currentElement = elementRef.current;
    if (currentElement && !hasTriggered.current) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, root, rootMargin, threshold, triggerOnce]);

  return [elementRef, inView];
}
