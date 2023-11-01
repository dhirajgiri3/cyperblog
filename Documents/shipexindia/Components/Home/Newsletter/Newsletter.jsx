import styled from "@emotion/styled";
import React from "react";

const HomeNewsletterContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  z-index: 0;
  margin: 5rem 0;
  overflow: hidden;
  background: #f1f1f1;
  margin-top: 0;

  @media screen and (max-width: 1024px) {
    height: 30vh;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0;
    height: 60vh;
  }

  .bgvideo {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0 10rem;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;

    @media screen and (max-width: 1024px) {
      padding: 0 5rem;
    }

    @media screen and (max-width: 768px) {
      padding: 0 2rem;
    }

    .title {
      font-size: var(--heading);
      font-family: var(--bold);
      color: var(--text-color);
      text-align: center;

      @media screen and (max-width: 768px) {
        font-size: var(--heading-small);
      }
    }

    .subtitle {
      font-size: var(--para);
      font-family: var(--light-font);
      color: var(--text-grey);
      text-align: center;
    }

    .form {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      input {
        width: 30rem;
        height: 4rem;
        border: none;
        outline: none;
        border-radius: 100px;
        padding: 1rem;
        font-size: var(--para);
        font-family: var(--light-font);
        color: var(--text-grey);
        background: #fff;

        @media screen and (max-width: 768px) {
          width: 90vw;
        }
      }

      button {
        background: var(--primary-color);
        font-size: 0.8rem;
        color: var(--white-bg);
        border-radius: 100px;
        text-decoration: none;
        transition: background 0.3s ease-in-out;
        font-family: var(--font);
        position: relative;
        overflow: hidden;
        z-index: 0;
        height: 4rem;
        border: none;
        outline: none;
        width: 10rem;
        cursor: pointer;

        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background: var(--secondary-color);
          border-radius: 100px;
          transition: width 0.5s ease-in-out;
          z-index: -1;
          transform-origin: right;
        }

        &:hover {
          &::before {
            width: 100%;
          }
        }
      }
    }
  }
`;

function Newsletter() {
  return (
    <div>
      <HomeNewsletterContainer>

          <div className="content">
            <div className="title">Let's Grow Together</div>
            <div className="subtitle">
              Stay informed about all developments and product updates at Shipex
              India!
            </div>
            <div className="form">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
      </HomeNewsletterContainer>
    </div>
  );
}

export default Newsletter;
