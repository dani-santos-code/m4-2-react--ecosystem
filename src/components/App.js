import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Home from "./Home";
import ItemDetails from "./ItemDetails";
import Sellers from "./Sellers";
import SellerDetails from "./SellerDetails";
import Footer from "./Footer";

const StyledBodyWrapper = styled.div`
  background-color: #fcfaff;
`;

function App(props) {
  return (
    <div>
      <Router>
        <Header />
        <StyledBodyWrapper>
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
        </StyledBodyWrapper>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
