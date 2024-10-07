import { top_up } from '../../../assets/assets';
import { TopButtonContainer, TopButtonImage } from './topbutton.css';

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={TopButtonContainer} onClick={scrollToTop}>
      <img className={TopButtonImage} src={top_up} alt="위로 올라가기" />
    </div>
  );
};
export default TopButton;
