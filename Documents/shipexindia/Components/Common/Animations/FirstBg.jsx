import React from "react";
import styled from "styled-components";

const FirstBgContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  marquee {
    width: 100%;
    h1 {
      font-size: 10rem;
      font-family: var(--extra);
      color: #dedede;

      @media screen and (max-width: 768px) {
        font-size: 7rem;
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background: #ffffff30;
  }
`;

function FirstBg({ Component }) {
  return (
    <FirstBgContainer>
      <marquee
        width="90%"
        behavior="smooth"
        direction="left"
        loop="infinite"
        scrollamount="7"
      >
        <h1>logistic Company</h1>
      </marquee>

      <div className="content">{Component}</div>
    </FirstBgContainer>
  );
}

export default FirstBg;
