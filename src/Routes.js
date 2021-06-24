import { Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBrowserHistory } from "history";

import PrivateRoute from "components/molecules/PrivateRoute";
import Header from "components/organisms/Header/Header";
import Copyright from "components/organisms/Footer/Copyright";
import Login from "components/pages/Login";
import Register from "components/pages/Register";
import Home from "components/pages/Home";
import Product from "components/pages/Product";
import Cart from "components/organisms/Cart/Cart";
import NotFound from "components/atoms/NotFound/NotFound";

export const history = createBrowserHistory();

function Routes() {
  const { isCartShow, isUser } = useSelector((state) => state.cart);
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <PrivateRoute
          isAuthenticated={!isUser}
          fallback="/home"
          exact
          path="/"
          component={Login}
        />
        <PrivateRoute
          isAuthenticated={!isUser}
          fallback="/home"
          exact
          path="/register"
          component={Register}
        />
        <PrivateRoute
          isAuthenticated={isUser}
          fallback="/"
          exact
          path="/home"
          component={Home}
        />
        <PrivateRoute
          isAuthenticated={isUser}
          fallback="/"
          exact
          path="/products"
          component={Product}
        />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Copyright />
      {isCartShow && isUser && <Cart />}
    </Router>
  );
}

export default Routes;
