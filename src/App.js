import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from "styled-components";

import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Header/welcome";
import About from "./components/Header/about";
import Theme from "./themes/theme";
import "./App.css";

import Home from "./pages/home/home";
import Projects from "./pages/Projects/Projects.js";
import Skills from "./pages/Skills/Skills.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar color>
          <Link to="/">Home</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/projects">Projects</Link>
        </NavBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Skills" exact component={Skills} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
