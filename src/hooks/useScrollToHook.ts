import { useEffect, useState } from 'react';
import useScrollToStore from '../stores/useScrollToStore';

const useScrollToHook = () => {
  const [isBelow, setIsBelow] = useState(false);
  const { positions } = useScrollToStore();

  useEffect(() => {
    window.addEventListener('scroll', isBelowLearnSection);
    isBelowLearnSection();

    return () => {
      window.removeEventListener('scroll', isBelowLearnSection);
    };
  }, [positions]);

  const isBelowLearnSection = () => {
    const scrollY = window.scrollY;
    setIsBelow(scrollY > positions['Learn'] - 600);
  };

  const handleScrollToSection = (key?: string) => {
    if (key !== undefined && positions[key] !== undefined) {
      window.scrollTo({ top: positions[key], behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { isBelow, handleScrollToSection };
};
export default useScrollToHook;
