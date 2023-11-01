import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import img1 from "@/Assets/Images/Blog/1.png";
import img2 from "@/Assets/Images/Blog/2.png";
import img3 from "@/Assets/Images/Blog/3.png";
import Image from "next/image";

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

const SliderContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    margin: 3rem 0;
    gap: 2rem;
  }

  .title {
    font-size: var(--heading-big);
    font-weight: 600;
    color: var(--text-color);
    font-family: var(--bold);

    @media screen and (max-width: 768px) {
      font-size: var(--heading);
    }
  }

  .sliderbutton {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

const SliderItemContainer = styled.div`
  width: 35vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 60vw;
  }

  @media screen and (max-width: 768px) {
    width: 95vw;
  }

  .slideritem {
    width: 100%;
    height: 80vh;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem;
    border-radius: 40px;
    background: #f8f8f8;

    @media screen and (max-width: 1024px) {
      height: 50vh;
    }

    &::-webkit-scrollbar {
      width: 0;
    }

    .sliderimg {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 20px;
    }

    .title {
      font-size: var(--heading-small);
      font-weight: 600;
      color: var(--text-color);
      font-family: var(--bold);
    }

    .desc {
      font-size: var(--para);
      font-weight: 400;
      color: var(--text-grey);
      font-family: var(--light-font);
    }
  }
`;

const BlogCTA = styled(Link)`
  font-family: var(--font);
  font-size: 0.8rem;
  color: var(--text-color);
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid var(--text-color);
  background: transparent;
  box-shadow: 5px 5px var(--text-color);
  cursor: pointer;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  -o-border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
  }
`;

const SliderButton = styled.button`
  background: var(--white);
  color: var(--text-color);
  padding: 0.7rem 2rem;
  border-radius: 100px;
  border: 1px var(--text-color) solid;
  box-shadow: 5px 5px var(--text-color);
  cursor: pointer;
`;

const blogData = [
  {
    title: "On-Time Delivery: The Vital Metric For E-commerce Success",
    description:
      "Introduction In the fast-paced world of eCommerce, on-time delivery is a crucial metric for success. Customers expect...",
    image: img1,
    link: "/blog/post1",
  },
  {
    title: "The Importance of Customer Satisfaction in E-commerce",
    description:
      "In today's competitive e-commerce landscape, customer satisfaction is the key to success...",
    image: img2,
    link: "/blog/post2",
  },
  {
    title: "Maximizing Sales Through Effective Product Descriptions",
    description:
      "Product descriptions play a critical role in influencing customer purchase decisions...",
    image: img3,
    link: "/blog/post3",
  },
];

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogData.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      <AnimatePresence mode="wait">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          className="title"
        >
          Keep Exploring
        </motion.h1>
        <SliderItemContainer>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "spring",
              stiffness: 200, // spring force
              damping: 20, // velocity
            }}
            className="slideritem"
          >
            <Image
              className="sliderimg"
              src={blogData[currentIndex].image}
              alt="shipexindia blogs"
              width={300}
              height={400}
            />
            <h1 className="title">{blogData[currentIndex].title}</h1>
            <p className="desc">
              {blogData[currentIndex].description
                .split(" ")
                .slice(0, 15)
                .join(" ")}
            </p>
            <BlogCTA href={blogData[currentIndex].link}>
              Continue Reading
            </BlogCTA>
          </motion.div>
        </SliderItemContainer>
      </AnimatePresence>
      <div className="sliderbutton">
        <SliderButton onClick={prevSlide}>Prev</SliderButton>
        <SliderButton onClick={nextSlide}>Next</SliderButton>
      </div>
    </SliderContainer>
  );
};

export default BlogSlider;
