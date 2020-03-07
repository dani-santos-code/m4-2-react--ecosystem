import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { items } from "../data";

const StyledP = styled.p`
  margin: 10px;
  font-size: 17px;
  font-family: "Varela Round", sans-serif;
  color: #230650d1;
  text-align: center;
  font-weight: bold;
`;
function Home(props) {
  return (
    <>
      <StyledP>
        Fruit emporium sells the finest fruits from this world and beyond.
      </StyledP>
      <ListingGrid itemList={Object.values(items)} />
    </>
  );
}

export default Home;
