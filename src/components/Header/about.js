import React from "react";
import styled from "styled-components";
const StyledAbout = styled.p`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: auto;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  text-align: center;
  padding-top: 8rem;
  color: #6885f7;
  line-height: 4rem;
`;
export default function about(props) {
  return <StyledAbout>{props.children}</StyledAbout>;
}
