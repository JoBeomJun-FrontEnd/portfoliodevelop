import useScrollToStore from '../stores/useScrollToStore';

const useScrollToHook = () => {
  const { positions } = useScrollToStore();

  const handleScrollToSection = (key?: string) => {
    if (key !== undefined && positions[key] !== undefined) {
      window.scrollTo({ top: positions[key], behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { handleScrollToSection };
};
export default useScrollToHook;
