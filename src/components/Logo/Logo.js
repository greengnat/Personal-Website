import React from "react";

import styled from "styled-components";

import Smiley from "./Smiley/Smiley";

const StyledLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #f7f7f7;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  margin: auto 1rem;
  min-width: 7.5rem;
  & span {
    margin-left: 1rem;
    font-weight: 300;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Smiley></Smiley>
      <span>Will</span>
    </StyledLogo>
  );
}

export default Logo;
