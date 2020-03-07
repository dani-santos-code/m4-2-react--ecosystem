import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ListItem = styled.li`
  list-style-type: none;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 20px 14px 18px 0px #e7e7fd57;
  margin: 0;
`;

const H1 = styled.h1`
  margin-left: 10px;
  font-family: "Varela Round", sans-serif;
  color: #4406bd;
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
  &:hover {
    color: #dc01d4;
  }
  position: relative;
  &.selected {
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #dc01d4;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;
const StyledLinkLogo = styled(NavLink)`
  text-decoration: none;
  position: relative;
  &:visited {
    color: inherit;
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
              <StyledLink to="/sellers" activeClassName="selected">
                Sellers
              </StyledLink>
            </ListItem>
          </NavUl>
        </NavBar>
      </HeaderWrapper>
    </div>
  );
}

export default Header;
