import { Router } from '@material-ui/icons';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routesHome, routesAdmin } from './routes';
import PageNotFound from './containers/PageNotFound';
import HomeTemplates from './containers/HomeTemplate';
import AdminTemplates from './containers/AdminTemplates';
import Authentication from './containers/AdminTemplates/Auth';
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplates
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplates
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showLayoutHome(routesHome)}
          {showLayoutAdmin(routesAdmin)}
          <Route exact={false} path='/auth' component={Authentication} />
          <Route path='' component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
