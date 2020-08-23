import React from "react";
import styled, { keyframes } from "styled-components";

const slideFromLeft = keyframes`
0% {
    transform: translateX(-100vw)
}
100% {
    transform: translateX(-5rem)
}
`;

const slideFromRight = keyframes`
0% {
    transform: translateX(100vw)
}
100% {
    transform: translateX(5rem)
}
`;

const StyledWelcome = styled.h1`
  padding-top: 12rem;
  margin: auto;
transition: all .5s
  width: 65%;
  height: 100px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 8rem;
  color: black;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  & .design {
    transform: translateX(-5rem);
    animation: ${slideFromLeft} 2s;
  }
  & .develop {
    transform: translateX(5rem);
    animation: ${slideFromRight} 2s;
    margin-bottom: 1rem;
  }
`;

export default function welcome(props) {
  return <StyledWelcome>{props.children}</StyledWelcome>;
}
