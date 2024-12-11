import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/portfolio/:title',
    element: <PortfolioPage />,
  }
]);

export default router;
