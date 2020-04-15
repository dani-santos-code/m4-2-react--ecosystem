import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

import ListingGrid from "./ListingGrid";

const H2 = styled.h2`
  font-family: "Varela Round", sans-serif;
  text-align: center;
  margin: 10px;
`;

const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 5px;
`;

function SellerDetails() {
  const { sellerId } = useParams();
  const capitalizedName = sellerId[0].toUpperCase() + sellerId.slice(1);

  const sellerItems = Object.values(items).filter(
    el => el.sellerId === sellerId
  );

  return (
    <>
      <StyledTitleWrapper>
        <StyledAvatar src={`${sellers[sellerId].avatarSrc}`}></StyledAvatar>
        <H2>{capitalizedName}'s products</H2>
      </StyledTitleWrapper>
      <ListingGrid itemList={sellerItems} />
    </>
  );
}

export default SellerDetails;
