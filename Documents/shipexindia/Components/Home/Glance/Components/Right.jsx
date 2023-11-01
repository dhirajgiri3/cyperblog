import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const GlanceRightContainer = styled.div`
  width: 100%;
  height: 90vh;
  background: #5065f920;
  border-radius: 40px !important;
  padding: 2rem;
  color: #111;
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    min-height: 10vh;
    height: 100%;
  }

  h1 {
    font-size: var(--heading);
    font-weight: 700;
    font-family: var(--bold);
    color: var(--text-color);

    @media screen and (max-width: 768px) {
      font-size: var(--heading-small);
    }
  }

  .sliders {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    .slider {
      display: flex;
      overflow-x: hidden;
      position: relative;
    }

    .slide {
      min-width: 100%;
      height: 40vh;
      overflow-x: hidden;
      overflow-y: scroll;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: #5065f920;
      border-radius: 20px;
      color: #111;
      font-family: var(--font);
      text-align: left;
      gap: 1rem;

      @media screen and (max-width: 1024px) {
        height: 20vh;
      }

      @media screen and (max-width: 768px) {
        height: 40vh;
      }

      &::-webkit-scrollbar {
        width: 0rem;
      }

      p {
        font-size: var(--para);
        font-weight: 400;
        font-family: var(--font-light);
        color: var(--text-color);
      }

      .info {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0;
        flex-direction: column;

        h3 {
          font-size: var(--para);
          font-weight: 600;
          font-family: var(--bold);
          color: var(--text-color);
        }

        p {
          font-size: var(--para-mini);
          font-weight: 400;
          font-family: var(--light-font);
          color: var(--text-grey);
        }
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: var(--heading);
        color: #111;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

const upVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      stiffness: 100,
      damping: 15,
    },
  },
};

function Right() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      review:
        "ShipExIndia exceeded my expectations with their efficient shipping services. I highly recommend them!",
      name: "John Doe",
      position: "Customer",
    },
    {
      review:
        "I've been using ShipExIndia for all my logistics needs, and they've never let me down. Great company!",
      name: "Jane Smith",
      position: "Logistics Manager",
    },
    {
      review:
        "ShipExIndia's dedication to on-time deliveries and excellent customer service makes them the best in the business.",
      name: "Michael Johnson",
      position: "Operations Director",
    },
    {
      review:
        "As a long-time partner of ShipExIndia, I can attest to their reliability and professionalism.",
      name: "Sarah Williams",
      position: "Supplier",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div>
      <GlanceRightContainer>
        <motion.h1 variants={upVariants} initial="hidden" animate="visible">
          What Our Clients Think About Us?
        </motion.h1>
        <div className="sliders">
          <motion.div
            variants={upVariants}
            initial="hidden"
            animate="visible"
            className="slider"
          >
            <AnimatePresence custom={activeSlide}>
              <motion.div
                key={activeSlide}
                className="slide"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  duration: 0.3,
                }}
              >
                <p>{slides[activeSlide].review}</p>
                <div className="info">
                  <h3>{slides[activeSlide].name}</h3>
                  <p>{slides[activeSlide].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="buttons">
            <button onClick={prevSlide}>
              <ArrowBackIosIcon />
            </button>
            <button onClick={nextSlide}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </GlanceRightContainer>
    </div>
  );
}

export default Right;
