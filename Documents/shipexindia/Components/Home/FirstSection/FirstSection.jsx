"use client";

import React from "react";
import styled from "styled-components";
import Top from "./Components/Top";

const FirstSectionContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  a {
    text-decoration: none;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // Changed "self-start" to "flex-start"
  padding: 2rem 10rem;
  padding-top: 10vh;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    padding: 2rem 5rem;
    padding-top: 15vh;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 16vh;
  }
`;

function FirstSection() {
  return (
    <FirstSectionContainer>
      <BackgroundImage
        alt="shipexindia first section background"
        src="https://res.cloudinary.com/divbobkmd/image/upload/v1697289408/first-bg_ktnyur.png"
      />
      <ContentContainer>
        <Top />
      </ContentContainer>
    </FirstSectionContainer>
  );
}

export default FirstSection;
