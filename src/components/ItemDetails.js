import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin: 0 auto;
  height: 100vh;
  padding-top: 60px;
`;
const StyledImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  margin-right: 40px;
`;

const H2 = styled.h2`
  font-family: "Varela Round", sans-serif;
  margin: 0;
`;

const StyledSubtitle = styled.span`
  font-family: "Varela Round", sans-serif;
  font-style: italic;
  color: grey;
`;
const StyledItemDescription = styled.div``;

const StyledP = styled.p`
  font-family: "Varela Round", sans-serif;
  margin: 30px 0 0;
`;
const StyledCountryInfo = styled.p`
  margin: 0;
  font-family: "Kanit", sans-serif;
  font-style: italic;
  span {
    font-weight: bold;
  }
`;

const StyledButton = styled.button`
  background-color: #3f00ff;
  font-family: "Kanit", sans-serif;
  color: white;
  border-radius: 7px;
  padding: 10px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin: 20px auto;
  outline: none;
`;

const StyledMessage = styled.div`
  background-color: #856bd5;
  font-family: "Kanit", sans-serif;
  color: white;
  border-radius: 7px;
  padding: 10px;
  font-size: 20px;
  border: none;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const StyledAddress = styled.address`
  display: flex;
  margin-top: 40px;
  font-family: "Varela Round", sans-serif;
`;

const StyledSellerAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60%;
  font-family: "Kanit", sans-serif;
`;

const SellerSpan = styled.span`
  font-weight: bold;
  font-style: normal;
`;

const SellerP = styled.p`
  font-style: normal;
  margin-left: 10px;
`;

function ItemDetails() {
  const { itemId } = useParams();
  const {
    name,
    latinName,
    description,
    imageSrc,
    countryOfOrigin,
    sellerId,
    price,
    quantity
  } = items[itemId];
  const { avatarSrc, storeName } = sellers[sellerId];

  return (
    <>
      <StyledWrapper>
        <StyledImage src={`${imageSrc}`} />
        <StyledItemDescription>
          <H2>{name}</H2>
          <StyledSubtitle>{latinName}</StyledSubtitle>
          <StyledP>{description}</StyledP>
          <StyledCountryInfo>
            Product of <span>{countryOfOrigin}</span>
          </StyledCountryInfo>
          {quantity > 0 ? (
            <StyledButton>${price} - Buy now</StyledButton>
          ) : (
            <StyledMessage>Out of Stock</StyledMessage>
          )}
          <StyledAddress>
            <StyledSellerAvatar src={`${avatarSrc}`} />
            <SellerP>
              Sold by: <SellerSpan>{storeName}</SellerSpan>
            </SellerP>
          </StyledAddress>
        </StyledItemDescription>
      </StyledWrapper>
    </>
  );
}

export default ItemDetails;
