import useScrollToStore from '../stores/useScrollToStore';

const ScrollToHook = () => {
  const { positions } = useScrollToStore();

  const handleScrollToSection = (key: string) => {
    if (positions[key] !== undefined) {
      window.scrollTo({ top: positions[key], behavior: 'smooth' });
    }
  };

  return { handleScrollToSection };
};
export default ScrollToHook;
