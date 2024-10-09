import { HeaderHeight } from '../../../styles/app.css';
import { HeaderTextContainer, HeaderWraper, HeaderContainer, HeaderTitle, HeaderText } from './header.css';
import ScrollToHook from '../../../hooks/ScrollToHook';

const Header = () => {
  const { handleScrollToSection } = ScrollToHook();

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const headerText = event.currentTarget.textContent;
    if (headerText !== null) {
      handleScrollToSection(headerText);
    }
  };

  return (
    <div className={`${HeaderWraper}  ${HeaderHeight}`}>
      <div className={HeaderContainer}>
        <button className={HeaderTitle} type="button" onClick={handleClickButton}>
          Header
        </button>
        <div className={HeaderTextContainer}>
          <button className={HeaderText} type="button" onClick={handleClickButton}>
            Home
          </button>
          <button className={HeaderText} type="button" onClick={handleClickButton}>
            About Me
          </button>
          <button className={HeaderText} type="button" onClick={handleClickButton}>
            Skills
          </button>
          <button className={HeaderText} type="button" onClick={handleClickButton}>
            Projects
          </button>
          <button className={HeaderText} type="button" onClick={handleClickButton}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
