import {
  HeaderTextContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderText,
  HeaderWraper,
  HeaderTextContainerMove,
  HeaderHambuger,
} from './header.css';
import useScrollToHook from '../../hooks/useScrollToHook';
import Button from '../common/button/Button';
import { HeaderHeight } from '../../styles/app.css';
import { widthSize } from '../../styles/theme';
import { useEffect, useState } from 'react';
import EditColorAssets from '../../assets/EditColorAssets';

const Header = () => {
  const { handleScrollToSection } = useScrollToHook();
  const [active, setActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const headerText = event.currentTarget.textContent;
    if (headerText !== null) {
      handleScrollToSection(headerText);
    }
    setActive(false);
  };

  const handleClickHambuger = () => {
    setActive(state => !state);
  };

  const render = () => {
    return (
      <div
        className={`${HeaderTextContainer} ${
          active && widthSize.mobile > windowWidth ? HeaderTextContainerMove.active : HeaderTextContainerMove.inactive
        }`}
      >
        <Button className={HeaderText} onClick={handleClickButton}>
          Home
        </Button>
        <Button className={HeaderText} onClick={handleClickButton}>
          About Me
        </Button>
        <Button className={HeaderText} onClick={handleClickButton}>
          Skills
        </Button>
        <Button className={HeaderText} onClick={handleClickButton}>
          Learn
        </Button>
        <Button className={HeaderText} onClick={handleClickButton}>
          Projects
        </Button>
      </div>
    );
  };

  return (
    <div className={`${HeaderWraper}  ${HeaderHeight}`}>
      <div className={HeaderContainer}>
        <div className={HeaderTitle}>JBJ's Portfolio</div>
        {render()}
        {widthSize.mobile > windowWidth && (
          <EditColorAssets
            className={HeaderHambuger}
            svgName="hamburger"
            onClick={handleClickHambuger}
          ></EditColorAssets>
        )}
      </div>
    </div>
  );
};
export default Header;
