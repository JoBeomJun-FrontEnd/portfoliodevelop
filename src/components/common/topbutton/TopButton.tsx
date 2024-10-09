import { TopButtonContainer, TopButtonImage } from './topbutton.css';
import EditColorAssets from '../../../assets/EditColorAssets';

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={TopButtonContainer} onClick={scrollToTop}>
      <EditColorAssets className={TopButtonImage} svgName="top_up" />
    </div>
  );
};
export default TopButton;
