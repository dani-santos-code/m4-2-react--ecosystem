import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 82px;
  box-shadow: inset -1px 14px 20px 0px #e7e7fd57;
  display: flex;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  font-size: 20px;
  font-family: "Varela Round", sans-serif;
  align-self: center;
  color: #4406bd;
  font-weight: bold;
`;

function Footer() {
  return (
    <StyledWrapper>
      <StyledH2> Fruit Emporium</StyledH2>
    </StyledWrapper>
  );
}

export default Footer;
