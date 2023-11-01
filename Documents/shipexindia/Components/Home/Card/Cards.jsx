import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
  padding: 0 10rem;
  font-family: var(--font);
  margin-bottom: 5rem;

  @media screen and (max-width: 1024px) {
    padding: 0 5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    margin: 3rem 0;

  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 2rem;
    margin:0;
  }
`;

const CardLayout = styled.div`
  height: 100%;
  width: 100%;
  .card {
    width: 100%;
    height: 80vh;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    color: var(--text-grey);
    display: flex;
    align-items: center;
    border-radius: 30px;
    justify-content: center;
    transform: rotateY(0deg);
    font-size: var(--para);
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;
    max-width: 30vw;
    box-shadow: 10px 10px var(--white);
    border: 5px solid var(--white);

    @media screen and (max-width: 1024px) {
      max-width: 40vw;
    }

    @media screen and (max-width: 768px) {
      max-width: 95vw;
    }

    .button {
      position: absolute;
      top: 5px;
      right: 5px;
      background: var(--white);
      padding: 0.3rem 1rem;
      border-bottom-left-radius: 10px;
      border-top-right-radius: 20px;
      color: var(--text-color);
      display: none;

      @media screen and (max-width: 768px) {
        display: block;
      }

      &:hover {
        cursor: pointer;
        background: var(--white-bg);
      }
    }

    h1 {
      text-align: left;
      font-family: var(--font-mid);
      font-size: var(--heading-big);
      color: var(--text-grey);
      color: var(--white);
      letter-spacing: -1px;
      font-weight: 700;
      text-align: center;

      @media screen and (max-width: 768px) {
        font-size: var(--heading);
      }
    }

    p {
      font-family: var(--font);
      font-size: var(--para);
      color: var(--text-para);
      text-align: left;
      width: 90%;
      line-height: 1.5;
      font-weight: 300;
      letter-spacing: 0.5px;

      @media screen and (max-width: 768px) {
        width: 95%;
      }
    }
  }

  .card-back {
    color: var(--white);
    display: flex;
    align-items: center;
    border-radius: 30px;
    justify-content: center;
    transform: rotateY(180deg);

    @media screen and (max-width: 1024px) {
      max-width: 40vw;
    }

    @media screen and (max-width: 768px) {
      max-width: 95vw;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 30px;
    }
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  padding: 0 5rem;
  width: 100%;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  h1 {
    text-align: center;
    font-family: var(--bold);
    font-size: var(--heading);
    color: var(--white);
    letter-spacing: -1px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: var(--heading-small);
    }
  }

  p {
    font-family: var(--font);
    font-size: var(--para);
    color: var(--text-para);
    text-align: center;
    width: 80%;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const CardsConatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const cardsData = [
  {
    imageUrl:
      "https://res.cloudinary.com/divbobkmd/image/upload/v1694693073/domestic_qleuvu.png",
    title: "Domestic Shipping",
    description:
      "When it comes to road transport, we navigate the highways with precision. Your products are handled with the utmost care and attention to detail, ensuring that they arrive at their destination on time and in pristine condition. Our road transport services are the heartbeat of local and national distribution, connecting you to markets near and far.",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/divbobkmd/image/upload/v1694693074/international_uh8aka.png",
    title: "International Shipping",
    description:
      "Air freight represents swift and efficient shipping. ShipEx India's air cargo solutions ensure your products take flight promptly. We understand the importance of timely deliveries and provide the speed you need, whether it's across the country or around the world.",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/divbobkmd/image/upload/v1694693074/b2b_xitnen.png",
    title: "B2B & Bulk Shipping",
    description:
      "Shipping by sea involves navigating vast waters, and we do so with utmost care. Our ocean shipping services are perfect for international deliveries and large cargo. With ShipEx India, your products are safe as they voyage across the world's oceans.",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/divbobkmd/image/upload/v1694693076/hyperlocal_hqs6ix.png",
    title: "Hyperlocal Shipping",
    description:
      "Shipping by sea involves navigating vast waters, and we do so with utmost care. Our ocean shipping services are perfect for international deliveries and large cargo. With ShipEx India, your products are safe as they voyage across the world's oceans.",
  },
];

function Cards() {
  return (
    <CardsConatiner>
      <Heading>
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          Our Comprehensive Logistics Services
        </motion.h1>
        <motion.p variants={variants} initial="hidden" whileInView="visible">
          Welcome to ShipEx India, where we deliver more than just
          transportation services. We provide comprehensive logistics solutions
          tailored to your needs, ensuring a seamless journey for your products
          from start to finish. Whether it's road, air, or water transportation,
          we've got you covered with reliable, precision-driven services that
          will exceed your expectations.
        </motion.p>
      </Heading>
      <CardContainer>
        {cardsData.map((card, index) => (
          <div className={`card-${index}`} key={index}>
            <CardLayout>
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                className="card"
              >
                <div className="card-inner">
                  <div className="card-front">
                    <h1>{card.title}</h1>
                    {/* <p>{card.description}</p> */}
                    <div className="button">Know more</div>
                  </div>
                  <div className="card-back">
                    <img src={card.imageUrl} alt={card.title} />
                  </div>
                </div>
              </motion.div>
            </CardLayout>
          </div>
        ))}
      </CardContainer>
    </CardsConatiner>
  );
}

export default Cards;
