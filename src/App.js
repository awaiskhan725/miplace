import React from "react";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  Buy,
  Rent,
  Sold,
  Agent,
  Error,
  Home,
  News,
  BuyPropertyPage,
  RentalPropertyPage,
  SoldPropertyPage,
} from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/rent" component={Rent} />
        <Route exact path="/sold" component={Sold} />
        <Route exact path="/agent" component={Agent} />
        <Route exact path="/news" component={News} />
        <Route exact path="/buy/:slug" component={BuyPropertyPage} />
        <Route exact path="/rent/:slug" component={RentalPropertyPage} />
        <Route exact path="/sold/:slug" component={SoldPropertyPage} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
