import { Outlet } from 'react-router-dom';
import Header from './components/common/header/Header';
import { HeaderHeight } from './styles/app.css';

function App() {
  return (
    <div>
      <Header />
      <div className={HeaderHeight}></div>
      <Outlet />
    </div>
  );
}

export default App;
