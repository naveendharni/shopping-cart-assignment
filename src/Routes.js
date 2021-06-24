import { Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBrowserHistory } from "history";

import PrivateRoute from "components/Shared/PrivateRoute";
import Header from "components/organisms/Header/Header";
import Copyright from "components/organisms/Footer/Copyright";
import Login from "components/pages/Login";
import Register from "components/pages/Register";
import Home from "components/pages/Home";
import Product from "components/pages/Product";
import Cart from "components/Cart/Cart";
import NotFound from "components/Shared/NotFound";

export const history = createBrowserHistory();

function Routes() {
  const { isCartShow } = useSelector((state) => state.cart);
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/products" component={Product} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Copyright />
      {isCartShow && <Cart />}
    </Router>
  );
}

export default Routes;
