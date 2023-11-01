import Avatar from "@/Components/Avatar/Avatar";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const Heading1 = styled(motion.h1)`
  background: var(--text-gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-family: var(--heading-font-gort);
  font-weight: 100;
  width: 70%;
  line-height: 1.1;

  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    width: 100%;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 0.8rem;
  font-family: var(--light-font);
  line-height: 1.5;
  text-align: left;
  width: 50%;
  color: var(--text-grey);
  letter-spacing: 0.5px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const AvatarContainer = styled(motion.div)`
  margin: 1rem 0;
`;

const RightContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstSectionImage = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    height: 40vh;
  }

  @media screen and (max-width: 768px) {
    height: 40vh;
    object-fit: contain;
  }
`;

const ButtonLink = styled(Link)`
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

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
  }
`;

// const upvariants = {
//   hidden: {
//     y: 100,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//       delay: 1,
//     },
//   },
//   exit: {
//     y: 100,
//     opacity: 0,
//     transition: {
//       duration: 0.3,
//     },
//   },
// };

function Top() {
  return (
    <div>
      <TopContainer>
        <LeftContainer>
          <Heading1>We Deliver Your Dreams In Any Way.</Heading1>
          <Paragraph>
            From start to finish, we approach every task with confidence,
            offering you seamless transportation solutions to help you and your
            business thrive.
          </Paragraph>
          <AvatarContainer>
            <Avatar />
          </AvatarContainer>
          <motion.div>
            <ButtonLink href="https://app.shipexindia.in/seller">Get Started For Free</ButtonLink>
          </motion.div>
        </LeftContainer>
        <RightContainer>
          <FirstSectionImage
            src="https://res.cloudinary.com/divbobkmd/image/upload/v1694586850/first-sec_blx3n2.png"
            alt="Shipexindia Introduction"
          />
        </RightContainer>
      </TopContainer>
    </div>
  );
}

export default Top;
