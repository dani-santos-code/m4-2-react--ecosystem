import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { sellers } from "../data";

const SellersWrapper = styled.div`
  height: 100vh;
`;

const StyledP = styled.p`
  margin: 10px;
  font-size: 17px;
  font-family: "Varela Round", sans-serif;
  text-align: center;
  color: #230650d1;
  font-weight: bold;
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
    <SellersWrapper>
      <StyledP>Here are our sellers:</StyledP>
      <StyledImageWrapper>
        {Object.values(sellers).map(el => (
          <Link key={`seller-${el.id}`} to={`/sellers/${el.id}`}>
            <StyledImage src={`${el.avatarSrc}`} />
          </Link>
        ))}
      </StyledImageWrapper>
    </SellersWrapper>
  );
}

export default Sellers;
