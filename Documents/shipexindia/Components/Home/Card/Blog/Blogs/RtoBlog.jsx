"use client";

import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import Footer from "@/Components/Common/Footer/Footer";
import BlogSlider from "./BlogSlider";
import Mid from "./Mid";

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const RtoBlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14vh;

  @media screen and (max-width: 1024px) {
    padding-top: 10vh;
  }

  @media screen and (max-width: 768px) {
    padding-top: 12vh;
  }

  .top {
    width: 100%;
    height: 86vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
      height: 40vh;
    }

    @media screen and (max-width: 768px) {
      height: 50vh;
    }

    .badge {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f7f7f7;
      border-radius: 100px;
      padding: 0.3rem 1rem;
      h3 {
        font-family: var(--light-font);
        font-size: var(--para-mini);
        font-weight: 100;
        color: var(--text-grey);
        font-family: var(--bold);
      }

      @media screen and (max-width: 1024px) {
        padding: 0.5rem 1.4rem;

        h3 {
          font-size: var(--para);
        }
      }
    }

    .heading {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      h1 {
        font-size: var(--heading-big);
        font-weight: 300;
        color: var(--text-color);
        font-family: var(--font);
      }

      @media screen and (max-width: 1024px) {
        width: 90%;

        h1 {
          font-size: var(--heading);
        }
      }

      @media screen and (max-width: 768px) {
        width: 95%;
      }
    }

    .time {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .duration {
        font-size: var(--para-mini);
        font-weight: 400;
        font-family: var(--light-font);
        color: var(--text-grey);
      }

      .date {
        font-size: var(--para-mini);
        font-weight: 400;
        font-family: var(--light-font);
        color: var(--text-grey);
      }
    }
  }

  .mid {
    @media screen and (max-width: 768px) {
      margin-top: 3rem;
    }
  }
`;

function RtoBlog() {
  return (
    <>
      <RtoBlogContainer>
        <div className="top">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="badge"
          >
            <h3>Blog</h3>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="heading"
          >
            <h1>Understanding RTO and 10 Ways to Reduce it.</h1>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="time"
          >
            <p className="duration">2 min</p> |{" "}
            <p className="date">12th May 2021</p>
          </motion.div>
        </div>
        <div className="mids">
          <Mid />
        </div>
        <BlogSlider />
      </RtoBlogContainer>
      <Footer />
    </>
  );
}

export default RtoBlog;
