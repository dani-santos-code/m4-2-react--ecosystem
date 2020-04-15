import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
`;

const StyledP = styled.p`
  margin: 10px 90px;
  font-size: 17px;
  font-family: "Varela Round", sans-serif;
  max-width: 800px;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
  color: #230650d1;
  padding: 40px;
`;

function About(props) {
  return (
    <StyledWrapper>
      <StyledP>
        Fruit emporium is founded on a very simple principle: Fruit is good. We
        carry the finest selection of produce from around the world, from tart
        citrus to sweet cherries. Our sellers are world-class, and your fruit is
        guaranteed to be worthy of auction in Asian markets.
      </StyledP>
    </StyledWrapper>
  );
}

export default About;
