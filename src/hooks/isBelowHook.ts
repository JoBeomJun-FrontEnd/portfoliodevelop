import { useEffect, useRef, useState } from 'react';

const isBelowHook = (num: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (elementRef.current) {
            const { isIntersecting, boundingClientRect } = entry;

            setIsVisible(isIntersecting || boundingClientRect.bottom < num);
          }
        });
      },
      {
        rootMargin: `-${num}px`,
        threshold: 0,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { isVisible, elementRef };
};

export default isBelowHook;
