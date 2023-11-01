import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ShippingRateCalculatorTopContainer = styled.div`
  .top {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }

    .left {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.5rem;

      h1 {
        font-size: var(--heading);
        font-weight: 700;
        font-family: var(--bold);
        color: var(--text-color);
        line-height: 1.3;

        span {
          background: var(--text-gradient-secondary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media screen and (max-width: 767px) {
          font-size: var(--heading-small);
        }
      }

      p {
        font-size: var(--para);
        font-weight: 400;
        font-family: var(--font);
        color: var(--text-grey);

        @media screen and (max-width: 767px) {
          font-size: var(--para);
        }
      }

      button {
        padding: 0.8rem 2rem;
        background: var(--secondary-color);
        border: none;
        outline: none;
        border-radius: 10px;
        font-size: var(--normal);
        font-weight: 400;
        font-family: var(--font);
        cursor: pointer;
        transition: 0.3s all ease-in-out;
        border: 1px solid transparent;
        box-shadow: 0px 5px 70px var(--secondary-color-shadow);

        a {
          color: var(--white);
        }

        @media screen and (max-width: 767px) {
          font-size: var(--para);
          padding: 0.5rem 1.5rem;
        }

        &:hover {
          background: var(--white);
          border: 1px solid var(--secondary-color);
          transition: 0.3s all ease-in-out;
          box-shadow: 0px 5px 70px var(--secondary-color-shadow);

          a {
            color: var(--secondary-color);
          }
        }
      }

      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }

    .right {
      img {
        height: 80vh;
        width: 40vw;
        object-fit: cover;

        @media screen and (max-width: 1024px) {
          width: 100%;
          height: 100%;
        }

        @media screen and (max-width: 767px) {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

function ShippingRateCalculatorTop() {
  return (
    <ShippingRateCalculatorTopContainer>
      <div className="top">
        <div className="left">
          <h1>
            {" "}
            <span>Calculate</span> shipping rate instantly
          </h1>
          <p>
            Plan your eCommerce shipments in an instant. Estimate courier
            charges using the Shiprocket price calculator.
          </p>
          <button>
            <Link href="#form">Let's Calculate</Link>
          </button>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/divbobkmd/image/upload/v1697377333/Cyper%20studio/shipex-india-shipping-calculator_zkizbf.png"
            alt="shipex india shipping rate calculator"
          />
        </div>
      </div>
    </ShippingRateCalculatorTopContainer>
  );
}

export default ShippingRateCalculatorTop;
