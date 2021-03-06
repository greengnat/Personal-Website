import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from "styled-components";

import NavBar from "./components/NavBar/NavBar";

import About from "./components/Header/about";
import Theme from "./themes/theme";
import "./App.css";

import Home from "./pages/home/home";
import Projects from "./pages/Projects/Projects.js";
import Skills from "./pages/Skills/Skills.js";
import Contact from "./pages/Contact/Contact.js";

//add a resume page displaying resume pdf

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar color>
          <Link to="/">Home</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </NavBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Skills" exact component={Skills} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
