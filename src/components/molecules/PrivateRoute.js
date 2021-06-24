import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "store/cart/cartSlice";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  fallback,
  ...rest
}) => {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("user");

  useEffect(() => {
    dispatch(saveUser(isAuth));
  }, [isAuth]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: fallback, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
