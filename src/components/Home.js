import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ListingGrid from "./ListingGrid";
import { items } from "../data";

const StyledP = styled.p`
  margin: 10px;
  font-size: 15px;
  font-family: "Varela Round", sans-serif;
`;
function Home(props) {
  return (
    <div>
      <StyledP>
        Fruit emporium sells the finest fruits from this world and beyond.
      </StyledP>
      <ListingGrid itemList={Object.values(items)} />
    </div>
  );
}

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Home;
