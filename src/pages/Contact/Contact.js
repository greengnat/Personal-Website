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
  padding-bottom: 12rem;
  background-color: #fff;
`;

const WhiteSpace = styled.div`
  margin: 1rem;
`;

export default function Contact() {
  return (
    <ContactInfo>
      <FaEnvelope size={200} color="#90a5f9" cursor="pointer"></FaEnvelope>
      <WhiteSpace></WhiteSpace>
      <FaPhoneSquare
        size={174}
        color="#90a5f9"
        cursor="pointer"
      ></FaPhoneSquare>
      <WhiteSpace></WhiteSpace>
      <FaLinkedinIn size={180} color="#90a5f9" cursor="pointer"></FaLinkedinIn>
    </ContactInfo>
  );
}
