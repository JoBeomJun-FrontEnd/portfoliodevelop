import { HeaderHeight } from '../../../styles/app.css';
import { HeaderContainer, HeaderWraper } from './header.css';

const Header = () => {
  return (
    <div className={`${HeaderWraper}  ${HeaderHeight}`}>
      <div className={HeaderContainer}>
        <a>Header</a>
      </div>
    </div>
  );
};
export default Header;
