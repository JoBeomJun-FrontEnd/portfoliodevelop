import { HeaderHeight } from '../../../styles/app.css';
import { HeaderTextContainer, HeaderWraper, HeaderContainer, HeaderTitle, HeaderText } from './header.css';

const Header = () => {
  return (
    <div className={`${HeaderWraper}  ${HeaderHeight}`}>
      <div className={HeaderContainer}>
        <a href="" className={HeaderTitle}>
          Header
        </a>
        <div className={HeaderTextContainer}>
          <a href="" className={HeaderText}>
            About
          </a>
          <a href="" className={HeaderText}>
            Skils
          </a>
          <a href="" className={HeaderText}>
            Projects
          </a>
          <a href="" className={HeaderText}>
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
