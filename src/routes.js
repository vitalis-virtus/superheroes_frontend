import React from "react";
import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";

import { CreatePage } from "./views/CreatePage";
import { SuperheroesListPage } from "./views/SuperheroesListPage";
import { HomePage } from "./views/HomePage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/createhero" exact component={CreatePage} />

        <Route path="/superheroes" exact component={SuperheroesListPage} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routes;
