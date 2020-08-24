import React, { useState } from "react";
import styled from "styled-components";

const Display = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  padding: 0;
`;

const SideBar = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ProjectContainer = styled.div`
  width: 85vw;
  height: 100vh;
  background-color: lightblue;
`;

export default function Projects() {
  return (
    <Display>
      <SideBar></SideBar>
      <ProjectContainer></ProjectContainer>
    </Display>
  );
}
