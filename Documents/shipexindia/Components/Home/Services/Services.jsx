import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import Framer Motion
import Card from "./Card/Card";
import img1 from "@/Assets/Images/services/Icons/1.png";
import img2 from "@/Assets/Images/services/Icons/2.png";
import img3 from "@/Assets/Images/services/Icons/3.png";
import img4 from "@/Assets/Images/services/Icons/4.png";
import img5 from "@/Assets/Images/services/Icons/5.png";
import img6 from "@/Assets/Images/services/Icons/6.png";

const cardData = [
  {
    imgurl: img1,
    heading: "Direct-to-Consumer (D2C)",
    para: "Empowering D2C businesses with seamless channel integration, enhanced operational efficiency, value-added services, and a user-friendly platform for order management and fulfillment. Plus, we ensure that your shipments can go anywhere, anytime.",
  },
  {
    imgurl: img2,
    heading: "Marketplace Sellers",
    para: 'Empowering marketplace sellers by offering easy integrations with multiple marketplaces and carts, multiple locations for pickup and delivery, and enabling efficient order processing. Plus, our "ship anytime to anywhere" feature ensures your products reach customers globally.',
  },
  {
    imgurl: img3,
    heading: "Social Sellers",
    para: "With no monthly fees, a convenient cash on delivery (COD) facility, reliable tracking information for their customers, and the ability to ship to any destination at any time, Shipyaari is an ideal choice for social sellers.",
  },
  {
    imgurl: img4,
    heading: "Small & Medium Enterprises (SMEs)",
    para: "Providing SMEs with multiple channel integrations, tracking notifications for buyers, multiple pickup locations, and optimized shipping processes. Moreover, we offer the convenience of shipping to any location, 24/7.",
  },
  {
    imgurl: img5,
    heading: "Service Providers",
    para: 'Join hands with ShipEx India Service Providers to supercharge your logistics operations. We empower marketplace sellers with seamless marketplace integrations, multi-location pickup and delivery options, and efficient order processing. With our "ship anytime to anywhere" capability, your products can now effortlessly reach customers on a global scale.',
  },
  {
    imgurl: img6,
    heading: "Manufacturers",
    para: 'Manufacturers benefit from integrations with multiple platforms and marketplaces, enabling efficient order processing and a wide reach. They can also take advantage of our "ship anytime to anywhere" service.',
  },
];

const HomeServiceContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  margin: 5rem 0;

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
  }

  .title {
    width: 70%;
    text-align: center;
    font-family: var(--extra);
    color: var(--white);
    color: var(--text-color);
    font-size: var(--heading-small);
    font-weight: 900;
    margin: 0 auto;
    margin-bottom: 5rem;

    @media screen and (max-width: 768px) {
      width: 95%;
      font-size: var(--norm);
      margin-bottom: 2rem;
      text-align: center;
    }
  }

  .container {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 0 10rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3rem;
    place-items: center;

    @media screen and (max-width: 1024px) and (min-width : 901px) {
      padding: 0 5rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 2rem;
    }

    @media screen and (max-width: 950px) {
      padding: 0 0rem;
    }

    @media screen and (max-width: 767px) {
      padding: 0 1rem;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(6, 1fr);
    }
  }
`;

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <HomeServiceContainer>
        <motion.h1
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="title"
        >
          Enterprise to Social sellers, We provide the best rates and services
          for logistics solutions to businesses of all sizes.
        </motion.h1>
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {cardData.map((data, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                imgurl={data.imgurl}
                heading={data.heading}
                para={data.para}
              />
            </motion.div>
          ))}
        </motion.div>
      </HomeServiceContainer>
    </div>
  );
}

export default Services;
