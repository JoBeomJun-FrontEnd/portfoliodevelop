import { HeaderTextContainer, HeaderContainer, HeaderTitle, HeaderText, HeaderWraper } from './header.css';
import useScrollToHook from '../../../hooks/useScrollToHook';
import Button from '../button/Button';
import { HeaderHeight } from '../../../styles/app.css';

const Header = () => {
  const { handleScrollToSection } = useScrollToHook();

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const headerText = event.currentTarget.textContent;
    if (headerText !== null) {
      handleScrollToSection(headerText);
    }
  };

  return (
    <div className={`${HeaderWraper}  ${HeaderHeight}`}>
      <div className={HeaderContainer}>
        <Button className={HeaderTitle} onClick={handleClickButton}>
          Header
        </Button>
        <div className={HeaderTextContainer}>
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
            Projects
          </Button>
          <Button className={HeaderText} onClick={handleClickButton}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
