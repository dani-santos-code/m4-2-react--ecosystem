import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

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

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 5px;
  color: #4406bd;
  &.selected {
    color: red;
  }
`;
const StyledLinkLogo = styled(NavLink)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
  &.selected {
    color: red;
  }
`;

function Header() {
  return (
    <div>
      <HeaderWrapper>
        <StyledLinkLogo to="/">
          <H1>Fruit Emporium</H1>
        </StyledLinkLogo>
        <NavBar>
          <NavUl>
            <ListItem>
              <StyledLink to="/" activeClassName="selected" exact>
                Home
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/about" activeClassName="selected">
                About
              </StyledLink>
            </ListItem>
          </NavUl>
        </NavBar>
      </HeaderWrapper>
    </div>
  );
}

export default Header;
