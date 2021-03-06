import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/Register";
const Routes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/registro" component={Register} />
        <Route exact path="/ingreso" component={Login} />
        <Route exact path="/carrito" component={Cart} />
        <Route component={NotFoundPage} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
