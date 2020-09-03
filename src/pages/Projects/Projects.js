import React, { useState } from "react";
import styled from "styled-components";
import Calculator from "./calculator/calculator";
import CovidTracker from "../../ProjectSrcScripts/covid-tracker/src/App.js";
import ExpenseTracker from "../../ProjectSrcScripts/expense-tracker/src/App.js";
import RecipeBuilder from "../../ProjectSrcScripts/recipe-builder/src/App.js";

const Display = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  padding: 0;
`;

const SideBar = styled.div`
  width: 15vw;
  height: 90vh;
  background-color: grey;
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
  background-color: lightblue;
`;

const ProjectButton = styled.div`
  font-size: 1.5rem;
  padding: 0.3rem;
  border-radius: 8px;
  background-color: lightblue;
  cursor: pointer;
  &:hover {
    background-color: lightyellow;
  }
`;

export default function Projects() {
  const [display, setDisplay] = useState("default");

  const displayCalculator = () => {
    setDisplay("calculator");
  };

  const displayDefault = () => {
    setDisplay("default");
  };
  const displayCovidTracker = () => {
    setDisplay("covidTracker");
  };
  const displayExpenseTracker = () => {
    setDisplay("expenseTracker");
  };
  const displayRecipe = () => {
    setDisplay("recipe");
  };
  return (
    <Display>
      <SideBar>
        <ProjectButton onClick={displayCovidTracker}>
          Covid Tracker
        </ProjectButton>

        <ProjectButton onClick={displayCalculator}>Calculator</ProjectButton>

        <ProjectButton onClick={displayExpenseTracker}>
          Expense Tracker
        </ProjectButton>

        <ProjectButton onClick={displayRecipe}>Recipe Builder</ProjectButton>
      </SideBar>
      <ProjectContainer>
        {display == "calculator" ? <Calculator /> : null}
        {display == "covidTracker" ? <CovidTracker /> : null}
        {display == "expenseTracker" ? <ExpenseTracker /> : null}
        {display == "recipe" ? <RecipeBuilder /> : null}
      </ProjectContainer>
    </Display>
  );
}
