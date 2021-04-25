import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//react
import { useDispatch, useSelector } from 'react-redux';
import {
  isUserLoggedIn,
  VolunteersAction,
  PartnerFormAction,
  ConsultationsAction,
  GetPartnershipAction,
} from './Redux/actions';

//routes
import { openroute, routes } from './components/HOC/routes';
import PrivateRoute from './components/HOC/privateRoute';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.token);

  useEffect(() => {
    const Auth = auth.authenticate;
    if (!Auth) {
      dispatch(isUserLoggedIn());
      dispatch(VolunteersAction());
      dispatch(PartnerFormAction());
      dispatch(ConsultationsAction());
      dispatch(GetPartnershipAction());
      // dispatch(getPartnerAction());
      // dispatch(VolunteersAction());
      // dispatch(SummitEventAction());
    }
  }, [dispatch, auth.authenticate]);
  return (
    <>
      <Switch>
        {routes.map((route, index) => (
          <PrivateRoute
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>

      <Switch>
        {openroute.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </>
  );
}

export default App;
