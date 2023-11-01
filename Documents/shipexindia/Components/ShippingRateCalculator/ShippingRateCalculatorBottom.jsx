import React from "react";
import styled from "styled-components";

const ShippingRateCalculatorBottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .bottom {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
    background: #fff;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 100px #e9e9e9;

    @media screen and (max-width: 767px) {
      gap: 2rem;
    }

    .title {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;

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
    }

    .form {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;

      form {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 3rem;

        @media screen and (max-width: 767px) {
          gap: 1.5rem;
        }

        .first {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: row;
          gap: 3rem;

          @media screen and (max-width: 767px) {
            flex-direction: column;
            gap: 1rem;
          }

          .left {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;

            label {
              font-size: var(--para);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-grey);
            }

            input {
              min-width: 20rem;
              width: 100%;
              height: 100%;
              padding: 0.7rem 1.5rem;
              background: var(--white);
              border: 0.5px solid var(--secondary-color-shadow);
              border-radius: 5px;
              font-size: var(--para-mini);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-color);
              outline: none;
              transition: 0.3s all ease-in-out;

              &::placeholder {
                font-size: var(--normal);
                font-weight: 400;
                font-family: var(--font);
                color: var(--text-grey);
              }

              &:focus {
                border: 1px solid var(--secondary-color);
                transition: 0.3s all ease-in-out;
              }

              @media screen and (max-width: 1024px) {
                min-width: 10rem;
              }
              @media screen and (max-width: 767px) {
                min-width: 85vw;
                padding: 0.5rem 1rem;
              }
            }
          }

          .right {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;

            label {
              font-size: var(--para);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-grey);
            }

            input {
              min-width: 20rem;
              width: 100%;
              height: 100%;
              padding: 0.7rem 1.5rem;
              background: var(--white);
              border: 1px solid var(--secondary-color-shadow);
              border-radius: 5px;
              font-size: var(--para-mini);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-color);
              outline: none;
              transition: 0.3s all ease-in-out;

              &::placeholder {
                font-size: var(--normal);
                font-weight: 400;
                font-family: var(--font);
                color: var(--text-grey);
              }

              &:focus {
                border: 1px solid var(--secondary-color);
                transition: 0.3s all ease-in-out;
              }

              @media screen and (max-width: 1024px) {
                min-width: 10rem;
              }

              @media screen and (max-width: 767px) {
                min-width: 85vw;
                padding: 0.5rem 1rem;
              }
            }
          }
        }
        .second {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: row;
          gap: 3rem;

          @media screen and (max-width: 767px) {
            flex-direction: column;
            gap: 1rem;
          }

          .left {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;

            label {
              font-size: var(--para);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-grey);
            }

            input {
              min-width: 20rem;
              width: 100%;
              height: 100%;
              padding: 0.7rem 1.5rem;
              background: var(--white);
              border: 0.5px solid var(--secondary-color-shadow);
              border-radius: 5px;
              font-size: var(--para-mini);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-color);
              outline: none;
              transition: 0.3s all ease-in-out;

              &::placeholder {
                font-size: var(--normal);
                font-weight: 400;
                font-family: var(--font);
                color: var(--text-grey);
              }

              &:focus {
                border: 1px solid var(--secondary-color);
                transition: 0.3s all ease-in-out;
              }

              @media screen and (max-width: 1024px) {
                min-width: 10rem;
              }

              @media screen and (max-width: 767px) {
                min-width: 85vw;
                padding: 0.5rem 1rem;
              }
            }
          }

          .right {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;

            label {
              font-size: var(--para);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-grey);
            }

            .input-group {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              flex-direction: row;
              gap: 1rem;

              @media screen and (max-width: 1024px) {
                flex-wrap: wrap;
              }

              input {
                min-width: 10rem;
                width: 100%;
                height: 100%;
                padding: 0.7rem 1.5rem;
                background: var(--white);
                border: 0.5px solid var(--secondary-color-shadow);
                border-radius: 5px;
                font-size: var(--para-mini);
                font-weight: 400;
                font-family: var(--font);
                color: var(--text-color);
                outline: none;
                transition: 0.3s all ease-in-out;

                &::placeholder {
                  font-size: var(--normal);
                  font-weight: 400;
                  font-family: var(--font);
                  color: var(--text-grey);
                }

                &:focus {
                  border: 1px solid var(--secondary-color);
                  transition: 0.3s all ease-in-out;
                }

                @media screen and (max-width: 1024px) {
                  min-width: 10rem;
                }

                @media screen and (max-width: 767px) {
                  min-width: 85vw;
                  flex-direction: column;
                  padding: 0.5rem 1rem;
                }
              }
            }
          }
        }
        .third {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: row;
          gap: 3rem;

          @media screen and (max-width: 767px) {
            flex-direction: column;
            gap: 1rem;
          }

          .left {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;

            label {
              font-size: var(--para);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-grey);
            }

            select {
              min-width: 20rem;
              width: 100%;
              height: 100%;
              padding: 0.7rem 1.5rem;
              background: var(--white);
              border: 0.5px solid var(--secondary-color-shadow);
              border-radius: 5px;
              font-size: var(--para-mini);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-color);
              outline: none;
              transition: 0.3s all ease-in-out;
              cursor: pointer;

              option {
                cursor: pointer;
              }

              &:focus {
                border: 1px solid var(--secondary-color);
                transition: 0.3s all ease-in-out;
              }

              @media screen and (max-width: 767px) {
                min-width: 85vw;
                padding: 0.5rem 1rem;
              }
            }
          }

          .right {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;

            label {
              font-size: var(--para);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-grey);
            }

            input {
              min-width: 20rem;
              width: 100%;
              height: 100%;
              padding: 0.7rem 1.5rem;
              background: var(--white);
              border: 0.5px solid var(--secondary-color-shadow);
              border-radius: 5px;
              font-size: var(--para-mini);
              font-weight: 400;
              font-family: var(--font);
              color: var(--text-color);
              outline: none;
              transition: 0.3s all ease-in-out;

              &::placeholder {
                font-size: var(--normal);
                font-weight: 400;
                font-family: var(--font);
                color: var(--text-grey);
              }

              &:focus {
                border: 1px solid var(--secondary-color);
                transition: 0.3s all ease-in-out;
              }

              @media screen and (max-width: 1024px) {
                min-width: 10rem;
              }

              @media screen and (max-width: 767px) {
                min-width: 85vw;
                padding: 0.5rem 1rem;
              }
            }
          }
        }
        .fourth {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 3rem;

          @media screen and (max-width: 767px) {
            margin-top: 1rem;
            gap: 2rem;
          }

          .submit {
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
            color: var(--white);

            @media screen and (max-width: 767px) {
              font-size: var(--para);
              padding: 0.5rem 1.5rem;
            }

            &:hover {
              background: var(--white);
              border: 1px solid var(--secondary-color);
              transition: 0.3s all ease-in-out;
              box-shadow: 0px 5px 70px var(--secondary-color-shadow);
              color: var(--secondary-color);

              a {
                color: var(--secondary-color);
              }
            }
          }

          .reset {
            padding: 0.8rem 2rem;
            background: transparent;
            border: none;
            outline: none;
            border-radius: 10px;
            font-size: var(--normal);
            font-weight: 400;
            font-family: var(--font);
            cursor: pointer;
            transition: 0.3s all ease-in-out;
            border: 1px solid var(--secondary-color);
            box-shadow: 0px 5px 70px var(--secondary-color-shadow);
            color: var(--secondary-color);

            @media screen and (max-width: 767px) {
              font-size: var(--para);
              padding: 0.5rem 1.5rem;
            }

            &:hover {
              background: var(--secondary-color);
              border: 1px solid var(--white);
              transition: 0.3s all ease-in-out;
              box-shadow: 0px 5px 70px var(--secondary-color-shadow);
              color: var(--white);

              a {
                color: var(--white);
              }
            }
          }
        }
      }
    }
  }
`;

function ShippingRateCalculatorBottom() {
  return (
    <ShippingRateCalculatorBottomContainer>
      {" "}
      <div className="bottom" id="#form" >
        <div className="title">
          <h1>
            Shipping Rate <span>Calculator</span>{" "}
          </h1>
        </div>
        <div className="form">
          <form action="submit">
            <div className="first">
              <div className="left">
                <label aria-required htmlFor="pickupareapincode">
                  Pickup Area Pincode*
                </label>
                <input
                  type="text"
                  name="pickupareapincode"
                  id="pickupareapincode"
                  placeholder="Enter 6 digit pincode"
                  aria-required
                />
              </div>
              <div className="right">
                <label aria-required htmlFor="deliveryareapincode">
                  Delivery Area Pincode*
                </label>
                <input
                  type="text"
                  name="deliveryareapincode"
                  id="deliveryareapincode"
                  placeholder="Enter 6 digit pincode"
                  aria-required
                />
              </div>
            </div>
            <div className="second">
              <div className="left">
                <label aria-required htmlFor="weight">
                  Weight*
                </label>
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  placeholder="Enter weight in grams"
                  aria-required
                />
              </div>
              <div className="right">
                <label aria-required htmlFor="weight">
                  Dimension <span>(optional)</span>
                </label>
                <div className="input-group">
                  <input type="text" placeholder="length" />
                  <input type="text" placeholder="breadth" />
                  <input type="text" placeholder="height" />
                </div>
              </div>
            </div>

            <div className="third">
              <div className="left">
                <label htmlFor="paymentmethod">Payment method*</label>
                <select name="paymentmethod" id="paymentmethod">
                  <option value="prepaid">Prepaid</option>
                  <option value="cod">COD</option>
                </select>
              </div>
              <div className="right">
                <label htmlFor="shipmentvalue">Shipment value*</label>
                <input
                  type="text"
                  name="shipmentvalue"
                  id="shipmentvalue"
                  placeholder="Enter shipment value"
                />
              </div>
            </div>
            <div className="fourth">
              <button className="submit" type="submit">
                Submit
              </button>
              <button className="reset">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </ShippingRateCalculatorBottomContainer>
  );
}

export default ShippingRateCalculatorBottom;
