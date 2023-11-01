import React from "react";
import styled from "styled-components";
import outfordelivery from "@/Assets/Images/TrackOrder/outfordelivery.png";
import orderpicked from "@/Assets/Images/TrackOrder/orderpicked.png";
import orderrecieved from "@/Assets/Images/TrackOrder/orderrecieved.png";
import transist from "@/Assets/Images/TrackOrder/transist.png";
import reached from "@/Assets/Images/TrackOrder/reached.png";
import Image from "next/image";

const TrackOrderStepsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 7rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1024px) {
    padding: 2.5rem 5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  .trackorderstepscontent {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;

    .top {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      h1 {
        font-size: var(--heading);
        color: var(--text-color);
        font-family: var(--bold);
        font-weight: 700;
        letter-spacing: -1px;

        span {
          background: var(--text-gradient-secondary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media screen and (max-width: 767px) {
          font-size: var(--heading-small);
        }
      }
    }

    .bottom {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(1, 1fr);
      gap: 2.5rem;

      @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
      }

      .step {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .stepimg {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;

          img {
            height: 4rem;
            width: 4rem;
            opacity: 0.9;
          }
        }

        .steptext {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 1rem;

          h2 {
            font-size: var(--norm);
            color: var(--text-color);
            font-family: var(--bold);
            font-weight: 400;
          }

          p {
            font-size: var(--para);
            color: var(--text-grey);
            font-family: var(--font);
            font-weight: 300;
          }
        }
      }
    }
  }
`;

function TrackOrderSteps() {
  return (
    <TrackOrderStepsContainer>
      <div className="trackorderstepscontent">
        <div className="top">
          <h1>
            Learn about different <span>status</span> of orders
          </h1>
        </div>
        <div className="bottom">
          <div className="step">
            <div className="stepimg">
              <Image src={orderrecieved} alt="" />
            </div>
            <div className="steptext">
              <h2>Order Recieved</h2>
              <p>Your order has been received by your courier partner</p>
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <Image src={orderpicked} alt="" />
            </div>
            <div className="steptext">
              <h2>Order Picked</h2>
              <p>Your order has been picked up by your courier partner</p>
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <Image src={transist} alt="" />
            </div>
            <div className="steptext">
              <h2>In Transit</h2>
              <p>Your order is on it’s way to your customer’s address</p>
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <Image src={outfordelivery} alt="" />
            </div>
            <div className="steptext">
              <h2>Out For Delivery</h2>
              <p>
                The courier executive is on its way to deliver the order at your
                customer’s doorstep
              </p>
            </div>
          </div>
          <div className="step">
            <div className="stepimg">
              <Image src={reached} alt="" />
            </div>
            <div className="steptext">
              <h2>Reached</h2>
              <p>Your order has reached your customer’s city</p>
            </div>
          </div>
        </div>
      </div>
    </TrackOrderStepsContainer>
  );
}

export default TrackOrderSteps;
