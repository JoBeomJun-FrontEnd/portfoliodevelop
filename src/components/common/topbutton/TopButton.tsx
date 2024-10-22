import { TopButtonContainer, TopButtonImage } from './topbutton.css';
import EditColorAssets from '../../../assets/EditColorAssets';
import useScrollToHook from '../../../hooks/useScrollToHook';

const TopButton = () => {
  const { handleScrollToSection } = useScrollToHook();

  return (
    <div className={TopButtonContainer} onClick={() => handleScrollToSection()}>
      <EditColorAssets className={TopButtonImage} svgName="top_up" />
    </div>
  );
};
export default TopButton;
