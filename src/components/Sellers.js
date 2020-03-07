import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { Link } from "react-router-dom";

import { items, sellers } from "../data";

const StyledP = styled.p`
  margin: 10px;
  font-size: 15px;
  font-family: "Varela Round", sans-serif;
  text-align: center;
`;
const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
`;

function Sellers() {
  return (
    <>
      <StyledP>Here are our sellers:</StyledP>
      <StyledImageWrapper>
        {Object.values(sellers).map(el => (
          <Link to={`/sellers/${el.id}`}>
            <StyledImage src={`${el.avatarSrc}`} />
          </Link>
        ))}
      </StyledImageWrapper>
    </>
  );
}

export default Sellers;
