"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import trackimg from "@/Assets/Images/Track/track-order.png";
import Link from "next/link";
import Footer from "@/Components/Common/Footer/Footer";
import TrackOrderSteps from "@/Components/TrackOrder/TrackOrderSteps";
import TrackOrderFaq from "@/Components/TrackOrder/TrackOrderFaq";
import Header from "@/Components/Common/Header/Header";

const TrackOrderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 10rem;
  background: linear-gradient(57deg, #fff, #f7f1ff, #c3b3ff);
  font-family: var(--font);

  @media screen and (max-width: 1024px) {
    padding: 2.5rem 5rem;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 17vh;
    padding-bottom: 5vh;
  }

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 17vh;
    padding-bottom: 5vh;
  }

  padding-top: 18vh;
  padding-bottom: 5vh;

  .content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;
    }

    @media screen and (max-width: 768px) {
      height: 100%;
    }

    .left {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      h1 {
        font-size: var(--heading-big);
        font-family: var(--extra);
        font-weight: 600;
        line-height: 1.2;
        color: var(--text-color);

        span {
          color: var(--secondary-color);
          background: var(--text-gradient-secondary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media screen and (max-width: 1024px) {
          font-size: var(--heading);
        }
      }

      p {
        font-size: var(--para);
        font-weight: 400;
        color: var(--text-grey);
      }

      img {
        height: 45vh;
        width: auto;
        object-fit: contain;
        margin-top: 1rem;

        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
    }

    .right {
      .right-content {
        background: #fff;
        padding: 2.5rem;
        border-radius: 1rem;
        border: 1px solid #5065f950;
        box-shadow: 0px 0px 50px #99999930;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .track {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
        width: 100%;

        h1 {
          font-size: 2rem;
          font-weight: 600;
          color: #000;
        }

        .input {
          width: 100%;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;

          input {
            width: 100%;
            height: 100%;
            padding: 1rem;
            border: 1px solid #5065f950;
            outline: none;
            border-radius: 1rem;
            background-color: #f8f8f8;
            color: var(--text-color);
            font-size: var(--para-mini);
            font-weight: 400;
            transition: all 0.2s ease-in-out;

            &::placeholder {
              color: var(--text-grey);
            }

            &:focus {
              border: 1px solid var(--secondary-color);
            }
          }
        }

        button {
          width: 100%;
          height: 3rem;
          padding: 1rem 2.5rem;
          border-radius: 1rem;
          background: var(--secondary-color);
          color: var(--white);
          border: 1px solid var(--white);
          cursor: pointer;
          font-size: var(--norm);
          transition: all 0.2s ease-in-out;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            background: var(--white);
            color: var(--secondary-color);
            border-color: var(--secondary-color);
          }
        }
      }

      .cant-find {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;

        h1 {
          font-size: var(--norm);
          font-weight: 700;
          color: var(--text-color);
        }

        p {
          font-size: var(--para-mini);
          font-weight: 400;
          color: var(--secondary-color);
        }
      }
    }
  }

  a {
    text-decoration: none;
  }
`;

function page() {
  return (
    <>
      <Header />
      <TrackOrderContainer>
        <div className="content">
          <div className="left">
            <h1>
              Track Your <br /> <span> Order Easily</span>
            </h1>
            <p>Just enter AWB tracking number & it’s done.</p>
            <Image
              src={trackimg}
              alt="track your order powered by shipex india"
            />
          </div>
          <div className="right">
            <div className="right-content">
              <div className="track">
                <h1>Track Your Order</h1>
                <div className="input">
                  <input type="text" placeholder="AWB Tracking Number" />
                </div>
                <button>Track</button>
              </div>
              <div className="cant-find">
                <h1>
                  We sent your AWB tracking number to you via Email & SMS upon
                  order confirmation.
                </h1>
                <Link href="/help">
                  <p>Need help?</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </TrackOrderContainer>
      <TrackOrderSteps />
      <TrackOrderFaq />
      <Footer />
    </>
  );
}

export default page;
