import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie/:id" component={MovieDetail} />
    </Switch>
  );
};

export default Routes;
