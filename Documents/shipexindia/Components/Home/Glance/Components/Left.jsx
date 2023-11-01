import Image from "next/image";
import React from "react";
import styled from "styled-components";
import img1 from "@/Assets/Images/Glance/1.png";
import img2 from "@/Assets/Images/Glance/2.png";
import img3 from "@/Assets/Images/Glance/3.png";
import img4 from "@/Assets/Images/Glance/4.png";
import { motion } from "framer-motion";

const GlanceLeftContainer = styled.div`
  .left {
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    background: #eeeeee50;
    backdrop-filter: blur(20px);
    padding: 1rem;
    border-radius: 40px;
    place-items: center;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      min-height: 90vh;
      height: 100%;
    }

    .comp {
      width: 100%;
      height: 40vh;
      overflow-x: hidden;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 1rem;
      gap: 1rem;
      border-radius: 30px;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      transition: transform 0.5s ease-in-out;
      transform: scale(1);
      perspective: 1000;

      @media screen and (max-width: 1024px) {
        min-height: 10vh;
        height: 100%;
      }

      &::-webkit-scrollbar {
        width: 0;
      }

      &:hover {
        transform: scale(1.05);
      }

      img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        border-radius: 100px;
        background: #ffffff70;
        backdrop-filter: blur(20px);
        padding: 1rem;
      }

      h1 {
        font-size: var(--heading-small);
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

    .first {
      background: #5195f930;
    }

    .second {
      background: #8e52ff30;
    }

    .third {
      background: #ff5a9b30;
    }

    .fourth {
      background: #ff914b30;
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

function Left() {
  return (
    <GlanceLeftContainer>
      <div className="left">
        <motion.div
          variants={upVariants}
          initial="hidden"
          whileInView="visible"
          className="first comp"
        >
          <Image src={img1} alt="25000+ Pincodes" />
          <h1>29K+ Pincodes</h1>
          <p>
            With a network spanning over 29,000 pincodes across the country, we
            ensure that your shipments reach every nook and corner of India,
            making us your reliable logistics partner for nationwide delivery.
          </p>
        </motion.div>
        <motion.div
          variants={upVariants}
          initial="hidden"
          whileInView="visible"
          className="second comp"
        >
          <Image src={img2} alt="25000+ Pincodes" />
          <h1>25+ Shipping Partner</h1>
          <p>
            Our collaboration with 25+ shipping partners allows us to offer a
            diverse range of shipping solutions tailored to your specific needs.
            Whether it's speed, cost-efficiency, or specialized handling, we've
            got you covered.
          </p>
        </motion.div>
        <motion.div
          variants={upVariants}
          initial="hidden"
          whileInView="visible"
          className="third comp"
        >
          <Image src={img3} alt="25000+ Pincodes" />
          <h1>20k+ Sellers</h1>
          <p>
            Join a thriving community of over 20,000 sellers who trust our
            logistics services to deliver their products seamlessly. We empower
            businesses of all sizes to scale and grow with confidence.
          </p>
        </motion.div>
        <motion.div
          variants={upVariants}
          initial="hidden"
          whileInView="visible"
          className="fourth comp"
          transition={{
            delay: 0.3, // Adjust this value as needed
          }}
        >
          <Image src={img4} alt="25000+ Pincodes" />
          <h1>50K+ Daily Shipment</h1>
          <p>
            With a staggering 50,000+ shipments dispatched daily, our logistical
            prowess ensures your goods are on the move efficiently. Experience
            the ease of managing your shipping needs with us.
          </p>
        </motion.div>
      </div>
    </GlanceLeftContainer>
  );
}

export default Left;
