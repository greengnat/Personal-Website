import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  & .previous-operand {
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5rem;
  }
  & .current-operand {
    color: white;
    font-size: 2.5rem;
  }
`;

export default function output() {
  return (
    <Screen>
      <div data-previous-operand className="previous-operand"></div>
      <div data-current-operand className="current-operand"></div>
    </Screen>
  );
}
