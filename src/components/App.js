import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import ItemDetails from "./ItemDetails";
import Sellers from "./Sellers";
import SellerDetails from "./SellerDetails";

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
          <Route exact path="/sellers">
            <Sellers />
          </Route>
          <Route path={`/items/:itemId`} component={ItemDetails} />
          <Route path={`/sellers/:sellerId`} component={SellerDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
