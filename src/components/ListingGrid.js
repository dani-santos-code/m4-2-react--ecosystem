import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ItemDetails from "./ItemDetails";

const StyledFruitListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 100px;
  margin-top: 77px;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-top: -77px;
`;

const StyledH2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  font-family: "Varela Round", sans-serif;
`;

const StyledP = styled.p`
  font-style: italic;
  color: lightgrey;
  text-align: center;
  font-family: "Varela Round", sans-serif;
`;

const StyledCard = styled.div`
  background-color: white;
  padding: 40px 40px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px rgba(230, 230, 230, 0.75);
`;

const StyleDivider = styled.div`
  background-color: lightgrey;
  width: 20px;
  border: 2px solid lightgrey;
  border-radius: 20px;
  margin: 0 auto;
`;

function ListingGrid({ itemList }) {
  return (
    <StyledFruitListWrapper>
      <Router>
        <Switch>
          <Route path="/items/:itemId">
            <ItemDetails />
          </Route>
        </Switch>
        {itemList.map(el => (
          <StyledCard key={el.id}>
            <Link to={`/items/${el.id}`}>
              <StyledImg src={`${el.imageSrc}`} />
            </Link>
            <StyledH2>{el.name}</StyledH2>
            <StyleDivider />
            <StyledP>{el.latinName}</StyledP>
          </StyledCard>
        ))}
      </Router>
    </StyledFruitListWrapper>
  );
}

export default ListingGrid;
