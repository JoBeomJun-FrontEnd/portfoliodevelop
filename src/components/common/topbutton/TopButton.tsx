import { TopButtonContainer, TopButtonImage } from './topbutton.css';
import EditColorAssets from '../../../assets/EditColorAssets';
import ScrollToHook from '../../../hooks/ScrollToHook';

const TopButton = () => {
  const { handleScrollToSection } = ScrollToHook();

  return (
    <div className={TopButtonContainer} onClick={() => handleScrollToSection()}>
      <EditColorAssets className={TopButtonImage} svgName="top_up" />
    </div>
  );
};
export default TopButton;
