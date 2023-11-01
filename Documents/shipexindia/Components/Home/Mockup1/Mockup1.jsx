import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@/Assets/Images/mockup1.png";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 10rem;
  height: 100%;
  width: 100%;
  padding-bottom: 0;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    padding: 0rem 5rem;
    padding-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 1rem;
    padding-bottom: 0;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    text-align: center;
    font-family: var(--bold);
    font-size: var(--heading);
    color: var(--text-color);
    letter-spacing: -1px;
    font-weight: 700;

    span {
      background: var(--text-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }

    @media screen and (max-width: 768px) {
      font-size: var(--heading-small);
    }
  }

  p {
    font-family: var(--font);
    font-size: var(--para);
    color: var(--text-color);
    text-align: center;
    width: 70%;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Images = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
};

const Mockup1 = () => {
  return (
    <AnimatePresence>
      <Container>
        <motion.div>
          <Heading>
            <motion.h1
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              Ship your product from <span>anywhere</span> to{" "}
              <span>anywhere.</span>
            </motion.h1>

            <motion.p
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              We are a global logistics company that is driven by technology and
              innovation to provide the best experience for our customers around
              the world.
            </motion.p>
          </Heading>
        </motion.div>
        <motion.div variants={variants} initial="hidden" whileInView="visible">
          <Images src={img1} alt="Centered Image" />
        </motion.div>
      </Container>{" "}
    </AnimatePresence>
  );
};

export default Mockup1;
