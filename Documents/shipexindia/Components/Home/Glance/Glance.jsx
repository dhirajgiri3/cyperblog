import React from "react";
import styled from "styled-components";
import Left from "./Components/Left";
import Right from "./Components/Right";

const GlanceContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  margin: 5rem 0;
  padding: 0 10rem;
  margin-bottom: 0;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;
    min-height: 50vh;
    height: 100%;
    gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    min-height: 100vh;
    height: 100%;
  }
`;

function Glance() {
  return (
    <div>
      <GlanceContainer>
        <div>
          <Left />
        </div>
        <div>
          <Right />
        </div>
      </GlanceContainer>
    </div>
  );
}

export default Glance;
