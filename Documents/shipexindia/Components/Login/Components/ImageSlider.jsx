import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GlanceRightContainer = styled.div`
  width: 100%;
  height: 80vh;
  background: #5065f920;
  border-radius: 40px;
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    align-items: center;
    gap: 1.5rem;

    .slider {
      display: flex;
      position: relative;
      width: 100%;
    }

    .slide {
      min-width: 100%;
      height: 60vh;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #5065f920;
      border-radius: 20px;
      color: var(--white);
      font-family: var(--font);
      text-align: left;
      gap: 2rem;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }

      @media screen and (max-width: 1024px) {
        height: 20vh;
      }

      @media screen and (max-width: 768px) {
        height: 40vh;
      }

      &::-webkit-scrollbar {
        width: 0rem;
      }

      .info {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0;
        flex-direction: column;

        p {
          font-size: 1.5rem;
          font-weight: 400;
          font-family: var(--bold);
          color: var(--white);
        }
      }
    }

    .dots {
      display: flex;
      gap: 10px;
      margin-top: 1rem;
      justify-content: center;
      align-items: center;

      button {
        width: 7px;
        height: 7px;
        background: var(--para-color);
        border-radius: 50%;
        cursor: pointer;
        transition: background 0.3s ease-in-out;
        border: none;
        outline: none;

        &.active {
          background: var(--white);
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;

const upVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      stiffness: 100,
      damping: 15,
    },
  },
};

function ImageSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      img: require("@/Assets/Images/Login/1.png"),
      text: "Signup with ShipEx India",
    },
    {
      img: require("@/Assets/Images/Login/2.png"),
      text: "Complete Your Ekyc",
    },
    {
      img: require("@/Assets/Images/Login/3.png"),
      text: "Recharge Your ShipEx India Wallet",
    },
    {
      img: require("@/Assets/Images/Login/4.png"),
      text: "Start Shipping With ShipEx India",
    },
  ];

  const selectSlide = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, slides]);

  return (
    <div>
      <GlanceRightContainer>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  duration: 0.5,
                }}
              >
                <Image
                  src={slides[activeSlide].img}
                  alt={slides[activeSlide].text}
                  width={600}
                  height={400}
                />
                <div className="info">
                  <p>{slides[activeSlide].text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => selectSlide(index)}
                className={index === activeSlide ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </GlanceRightContainer>
    </div>
  );
}

export default ImageSlider;
