"use client";

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import FirstSection from "@/Components/Home/FirstSection/FirstSection";
import CompanyLogo from "@/Components/Home/CompanyLogo/CompanyLogo";
import Mockup1 from "@/Components/Home/Mockup1/Mockup1";
import Timeline from "@/Components/Home/Timeline/Timeline";
import Services from "@/Components/Home/Services/Services";
import Glance from "@/Components/Home/Glance/Glance";
import Blog from "@/Components/Home/Card/Blog/Blog";
import Footer from "@/Components/Common/Footer/Footer";
import Newsletter from "@/Components/Home/Newsletter/Newsletter";
import Header from "@/Components/Common/Header/Header";

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.bgColor || "transparent"};
  transition: background-color 1s ease-in-out;
`;

function Page() {
  return (
    <>
      <Header />
      <HomeContainer>
        <FirstSection />
        <CompanyLogo />
        <Mockup1 />
        {/* <Timeline /> */}
        <Services />
        <Glance />
        <Blog />
        <Newsletter />
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Page;
