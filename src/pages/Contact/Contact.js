import React from "react";
import styled from "styled-components";

import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ContactInfo = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

const ContactContainer = styled.div`
  width: 60%;
  height: 55%;
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

const WhiteSpace = styled.div`
  margin: 1rem;
`;

export default function Contact() {
  return (
    <ContactInfo>
      <ContactContainer>
        <FaEnvelope size={200} color="#90a5f9" cursor="pointer"></FaEnvelope>
        <WhiteSpace></WhiteSpace>
        <FaPhoneSquare
          size={174}
          color="#90a5f9"
          cursor="pointer"
        ></FaPhoneSquare>
        <WhiteSpace></WhiteSpace>
        <FaLinkedinIn
          size={180}
          color="#90a5f9"
          cursor="pointer"
        ></FaLinkedinIn>
      </ContactContainer>
    </ContactInfo>
  );
}
