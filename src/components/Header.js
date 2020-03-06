import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import About from "./About";
import Home from "./Home";

const ListItem = styled.li`
  list-style-type: none;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  margin-left: 10px;
  font-family: "Varela Round", sans-serif;
`;
const NavBar = styled.nav`
  margin-right: 70px;
  line-height: 50px;
  font-family: "Varela Round", sans-serif;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 5px;
`;

function Header() {
  return (
    <div>
      <Router>
        <HeaderWrapper>
          <H1>Fruit Emporium</H1>
          <NavBar>
            <NavUl>
              <ListItem>
                <StyledLink to="/">Home</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/about">About</StyledLink>
              </ListItem>
            </NavUl>
          </NavBar>
        </HeaderWrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Header;
