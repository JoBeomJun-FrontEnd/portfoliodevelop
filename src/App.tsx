import { Outlet } from 'react-router-dom';
import { AppContainer, HeaderHeight, OutletContainer } from './styles/app.css';
import Header from './components/common/header/Header';
import TopButton from './components/common/topbutton/TopButton';

function App() {
  console.log('리로딩');
  return (
    <>
      <div className={AppContainer}>
        <Header />
        <div className={HeaderHeight}></div>
        <div className={OutletContainer}>
          <Outlet />
        </div>
        <TopButton />
      </div>
    </>
  );
}

export default App;
