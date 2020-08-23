import React from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  padding: 0;
  margin: 0;
  background: linear-gradient(to right, #0f8b8d, #399e5a, #ffcf56, #a8201a);
  min-height: 50vh;
`;

const CalculatorGridStyles = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  & > button {
    cursor: pointer;
    font-size: 2rem;
    border: 1px solid white;
    outline: none;
    background-color: rgba(255, 255, 255, 0.75);
    &:hover {
      background-color: rgba(255, 255, 255, 0.92);
    }
  }
  & .span-two {
    grid-column: span 2;
  }
`;

const Calculator = props => {
  console.log(props);
  return (
    <CalculatorWrapper>
      <CalculatorGridStyles>{props.message}</CalculatorGridStyles>
    </CalculatorWrapper>
  );
};

export default Calculator;
