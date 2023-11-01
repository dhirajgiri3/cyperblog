import React from "react";
import styled from "styled-components";
import Right from "../Home/Glance/Components/Right";
import ImageSlider from "./Components/ImageSlider";
import LoginForm from "./Components/LoginForm";

const LoginpageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 3rem 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  .content {
    display: flex;
    background: #fff;
    box-shadow: 0px 0px 100px #eee;
    border-radius: 50px;
    border: 1px solid #f5f5f5;
    height: 90vh;

    @media screen and (max-width: 1024px) {
      min-height: 50vh;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      min-height: 100vh;
      background: #fff;
      box-shadow: none;
    }

    .form {
      width: 100%;
      flex: 1;
      padding: 2.5rem 7rem;
      overflow: hidden;
      overflow-y: scroll;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        width: 0.3rem;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      &::-webkit-scrollbar-thumb {
        background: #bbb;
        border-radius: 10rem;
      }

      @media screen and (max-width: 1024px) {
        padding: 2.5rem 5rem;
      }

      @media screen and (max-width: 768px) {
        padding: 2.5rem 1rem;
      }
    }
    .showcase {
      width: 40vw;
      flex: 1;
      padding: 1rem;
      background: #5065f9;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      justify-content: flex-start;
      align-items: center;

      @media screen and (max-width: 1024px) {
        display: none;
      }

      .title {
        margin: 2rem auto;
        h1 {
          font-size: var(--norm);
          color: var(--white);
          font-family: var(--mid-font);
          font-weight: 300;
        }
      }
    }
  }
`;

function Loginpage() {
  return (
    <LoginpageContainer>
      <div className="content">
        <div className="form">
          <LoginForm />
        </div>
        <div className="showcase">
          <div className="title">
            <h1>
              Start <span>Shipping</span> In Just 4 Steps
            </h1>
          </div>
          <div>
            <ImageSlider />
          </div>
        </div>
      </div>
    </LoginpageContainer>
  );
}

export default Loginpage;
