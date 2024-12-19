import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import ScrollToTop from '../utils/ScrollToTop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ScrollToTop><HomePage /></ScrollToTop>,
  },
  {
    path: '/portfolio/:title',
    element: <ScrollToTop><PortfolioPage /></ScrollToTop>,
  }
]);

export default router;
