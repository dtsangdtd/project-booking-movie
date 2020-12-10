import HomePage from '../containers/HomeTemplate/HomePage';
import DashBoardPage from '../containers/AdminTemplates/DashBoardPage';
import DetailPage from '../containers/HomeTemplate/HomePage/DetailPage/DetailPage';
const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: false,
    path: '/detail/:id',
    component: DetailPage,
  },
  // {
  //   exact:false,
  //   path: '/home-page',
  //   component :
  // },
];
const routesAdmin = [
  {
    exact: false,
    path: '/dashboard',
    component: DashBoardPage,
  },
];
export { routesHome, routesAdmin };
