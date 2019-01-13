import React from "react";
import styled from "styled-components";

import { totalTaxBrackets } from "../../logic/calculateTax";

// Show proportionally spaced notches to represent the income brackets

const NotchContainer = ({ bracket, max }) => {
  const [lowerBound, upperBound, rate] = bracket;
  const range = (upperBound || max) - lowerBound;

  return <Notch size={range}>{(rate * 100).toFixed(0)}%</Notch>;
};

const BracketNotches = ({ max }) => (
  <Container>
    {totalTaxBrackets.map(bracket => (
      <NotchContainer bracket={bracket} max={max} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: red;
`;

const Notch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: ${props => props.size};
  background-color: white;
  border: 1px solid black;
  overflow: visible;
  min-width: 0;
`;

export default BracketNotches;
