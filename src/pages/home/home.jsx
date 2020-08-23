import React from "react";
import styled from "styled-components";

import Cards from "../../components/Cards/Cards";
import About from "../../components/Header/about";
import Theme from "../../themes/theme";

const AboutContainer = styled.div`
  width: 100%;
  background-color: #6885f7;
  margin-top: 10rem;
  height: 45vh;
`;

export default function Home() {
  return (
    <div>
      <Cards />
      <AboutContainer>
        <About>This is a website to learn and display my React skills.</About>
      </AboutContainer>
      <Theme />
    </div>
  );
}
