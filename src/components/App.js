import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import ItemDetails from "./ItemDetails";
function App(props) {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path={`/items/:itemId`} component={ItemDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
