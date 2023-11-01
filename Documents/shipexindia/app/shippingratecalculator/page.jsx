"use client";

import Footer from "@/Components/Common/Footer/Footer";
import Header from "@/Components/Common/Header/Header";
import ShippingRateCalculatorBottom from "@/Components/ShippingRateCalculator/ShippingRateCalculatorBottom";
import ShippingRateCalculatorTop from "@/Components/ShippingRateCalculator/ShippingRateCalculatorTop";
import ShippingRateFaq from "@/Components/ShippingRateCalculator/ShippingRateFaq";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ShippingRateCalculatorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 7rem;
  padding-top: 15vh;
  background: linear-gradient(57deg, #fff, #f7f1ff, #c3b3ff);

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    padding: 2.5rem 5rem;
    padding-top: 15vh;
  }

  @media screen and (max-width: 767px) {
    padding: 2.5rem 1rem;
    padding-top: 15vh;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;
  }
`;

function page() {
  return (
    <>
      <Header />
      <ShippingRateCalculatorContainer>
        <div className="content">
          <ShippingRateCalculatorTop />
          <ShippingRateCalculatorBottom />
        </div>
      </ShippingRateCalculatorContainer>
      <ShippingRateFaq />
      <Footer />
    </>
  );
}

export default page;
