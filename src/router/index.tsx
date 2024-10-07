import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/not-found/NotFound';
import { MyPage } from '../pages/mypage/MyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/', element: <MyPage /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
