import { useEffect, useRef, useState } from 'react';

const useFlipOnViewHook = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const checkVisibility = () => {
    if (elementRef.current) {
      const element = elementRef.current.getBoundingClientRect();
      if (element.top + element.height / 4 >= window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);

    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return { isVisible, elementRef };
};

export default useFlipOnViewHook;
