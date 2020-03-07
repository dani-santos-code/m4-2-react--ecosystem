import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  margin: 10px;
  font-size: 15px;
  font-family: "Varela Round", sans-serif;
  max-width: 800px;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
`;

function About(props) {
  return (
    <div>
      <StyledP>
        Fruit emporium is founded on a very simple principle: Fruit is good. We
        carry the finest selection of produce from around the world, from tart
        citrus to sweet cherries.
      </StyledP>
      <StyledP>
        Our sellers are world-class, and your fruit is guaranteed to be worthy
        of auction in Asian markets.
      </StyledP>
    </div>
  );
}

export default About;
