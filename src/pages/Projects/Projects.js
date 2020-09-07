import React, { useState } from "react";
import styled from "styled-components";
// import Calculator from "./calculator/calculator";
import CovidTracker from "../../ProjectSrcScripts/covid-tracker/src/App.js";
import ExpenseTracker from "../../ProjectSrcScripts/expense-tracker/src/App.js";
// import RecipeBuilder from "../../ProjectSrcScripts/recipe-builder/src/App.js";

//this page displays my projects. Currently some are commented out due to formatting issues
const Display = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  padding: 0;
`;

const SideBar = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: #90a5f9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const ProjectContainer = styled.div`
  width: 85vw;
  height: 100;
  background-color: #fff;
`;

const ProjectButton = styled.div`
  font-size: 1.5rem;
  padding: 0.3rem;
  border-radius: 8px;
  background-color: #e2e7fd;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0.2rem 0.2rem 1.4rem rgba(0, 0, 0, 0.4);
  }
`;

export default function Projects() {
  const [display, setDisplay] = useState("default");

  // const displayCalculator = () => {
  //   setDisplay("calculator");
  // };

  const displayDefault = () => {
    setDisplay("default");
  };
  const displayCovidTracker = () => {
    setDisplay("covidTracker");
  };
  const displayExpenseTracker = () => {
    setDisplay("expenseTracker");
  };
  // const displayRecipe = () => {
  //   setDisplay("recipe");
  // };
  return (
    <Display>
      <SideBar>
        <ProjectButton onClick={displayCovidTracker}>
          Covid Tracker
        </ProjectButton>

        {/* <ProjectButton onClick={displayCalculator}>Calculator</ProjectButton> */}

        <ProjectButton onClick={displayExpenseTracker}>
          Expense Tracker
        </ProjectButton>

        {/* <ProjectButton onClick={displayRecipe}>Recipe Builder</ProjectButton> */}
      </SideBar>
      <ProjectContainer>
        {/* {display == "calculator" ? <Calculator /> : null} */}
        {display == "covidTracker" ? <CovidTracker /> : null}
        {display == "expenseTracker" ? <ExpenseTracker /> : null}
        {/* {display == "recipe" ? <RecipeBuilder /> : null} */}
      </ProjectContainer>
    </Display>
  );
}
