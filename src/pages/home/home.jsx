import React from "react";
import styled from "styled-components";

import About from "../../components/Header/about";
import Theme from "../../themes/theme";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";

//refactor homepage into components and import them from components file

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

const AboutContainer = styled.div`
  padding-top: 9rem;
  width: 100%;
  height: 50vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const AboutScriptContainer = styled.div`
  width: 60%;
  height: 85%;
  border-radius: 3rem;
  background-color: #fff;
  border: 0.5rem solid #90a5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-size: 1.75rem;
  letter-spacing: 0.125rem;

  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: 0.2rem 0.2rem 1.4rem rgba(0, 0, 0, 0.4);
`;

const Slash = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #90a5f9;
  font-size: 5rem;
  padding-left: 1rem;
`;

const BottomContainer = styled.div`
  width: 100%;
  background-color: #fff;

  height: 30vh;
  text-align: center;
  font-size: 1.25rem;
  color: #6885f7;
`;

const IconLinks = styled.div`
  height: 20vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
`;

//fix linkedin link

export default function Home() {
  return (
    <HomeContainer>
      <AboutContainer>
        <FaAngleLeft size={90} color="#90a5f9"></FaAngleLeft>

        <AboutScriptContainer>
          Hello! My name's Will. I am a self taught web developer based out of
          Portland Oregon. My primary goal is to become a front end developer,
          but I am capable of working on backends too! Outside of coding I like
          to enjoy time in nature, lift weights, make art, and play video games
          with my friends.
        </AboutScriptContainer>
        <Slash>/</Slash>
        <FaAngleRight size={90} color="#90a5f9"></FaAngleRight>
      </AboutContainer>
      <BottomContainer>
        <About>Thanks for checking out my website!</About>
        below are links to my github and linkedin.
      </BottomContainer>
      <IconLinks>
        <a href="https://github.com/greengnat">
          <FaGithubSquare
            size={100}
            color="#90a5f9"
            cursor="pointer"
          ></FaGithubSquare>
        </a>

        <a href="https://www.linkedin.com/in/william-lucas-07a38216b/">
          <FaLinkedinIn
            size={100}
            color="#90a5f9"
            cursor="pointer"
          ></FaLinkedinIn>
        </a>
      </IconLinks>
      <Theme />
    </HomeContainer>
  );
}
