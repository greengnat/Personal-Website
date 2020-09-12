import React from "react";
import styled from "styled-components";
import CSSIMG from "./pics/csslogo.png";
import ReactIMG from "./pics/reactlogo.png";
import JSIMG from "./pics/jslogo.png";

//this page displays cards containing info about my various skills
//to add: notes about each card on the bottom half
//also add github card, html, other as applicable

const CardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8rem;
  padding-right: 8rem;
  padding-bottom: 10rem;
  background-color: #fff;
`;

const card = styled.div`
  width: 21rem;
  height: 33rem;
  margin: 2rem;
  border-radius: 3rem;
  box-shadow: 0.2rem 0.2rem 1.4rem rgba(0, 0, 0, 0.4);
`;
const CardJS = styled(card)`
  background-color: rgb(240, 219, 79);
`;

const CardCSS = styled(card)`
  background-color: lightblue;
  display: flex;
`;

//for some reason this card resizes at smaller screen sizes while the others dont
const CardReact = styled(card)`
  background-color: rgb(28, 28, 28);
  display: flex;
  justify-content: center;
`;

const styledIMG = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 21rem;
  height: 21rem;
  border-radius: 3rem;
`;

const StyledImgReact = styled(styledIMG)`
  background-image: url(${ReactIMG});
  width: 18rem;
  height: 17rem;
`;
const StyledImgJS = styled(styledIMG)`
  background-image: url(${JSIMG});
  background-size: contain;

  width: 21rem;
  height: 10rem;
  border: none;
`;
const StyledImgCSS = styled(styledIMG)`
  background-image: url(${CSSIMG});
`;
export default function Skills() {
  return (
    <CardContainer>
      <CardReact>
        <StyledImgReact></StyledImgReact>
      </CardReact>
      <CardJS>
        <StyledImgJS></StyledImgJS>
      </CardJS>
      <CardCSS>
        <StyledImgCSS></StyledImgCSS>
      </CardCSS>
    </CardContainer>
  );
}
