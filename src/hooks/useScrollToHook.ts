import { useEffect, useRef } from 'react';
import useScrollToStore from '../stores/useScrollToStore';

const useScrollToHook = () => {
  const { positions, setIsBelow } = useScrollToStore();
  const learnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { boundingClientRect, isIntersecting } = entry;

          if (isIntersecting) {
            setIsBelow(true);
          } else if (!isIntersecting && boundingClientRect.bottom < 0) {
            setIsBelow(true);
          } else {
            setIsBelow(false);
          }
        });
      },
      {
        threshold: 0, // 요소가 1픽셀이라도 보이면 콜백 실행
      }
    );

    if (learnRef.current) {
      observer.observe(learnRef.current);
    }

    return () => {
      if (learnRef.current) {
        observer.unobserve(learnRef.current);
      }
    };
  }, []);

  const handleScrollToSection = (key?: string) => {
    if (key !== undefined && positions[key] !== undefined) {
      window.scrollTo({ top: positions[key], behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { learnRef, handleScrollToSection };
};
export default useScrollToHook;
