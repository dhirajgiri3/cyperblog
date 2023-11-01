import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import logo from "@/Assets/Images/Logos/Shipex-transparent-logo.png";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AnimatePresence } from "framer-motion";

const LoginLink = styled(Link)`
  background: var(--primary-color);
  font-size: 0.8rem;
  color: var(--white-bg);
  padding: 0.7rem 1.5rem;
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.3s ease-in-out;
  font-family: var(--font);
  position: relative;
  overflow: hidden;
  z-index: 0;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: var(--secondary-color);
    border-radius: 100px;
    transition: width 0.5s ease-in-out;
    z-index: -1;
    transform-origin: right;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 70vw;
  height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 3rem;
  transition: 0.3s all ease-in-out;
  padding: 2rem;
  padding-top: 5rem;
  display: none;
  visibility: hidden;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1003;
  width: 100%;
  background: #ffffff;
  backdrop-filter: blur(20px);
  padding: 0 2rem;

  .menu {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    .ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      @media screen and (max-width: 1024px) {
        gap: 3rem;
      }

      @media screen and (max-width: 768px) {
        gap: 2rem;
      }
    }
  }
`;

function Sidebar({
  sidebarRef,
  sidebarToggle,
  H1,
  MenuLink,
  MenuItem,
  LogoImage,
  CtaButtonWrapper,
  Bar,
  dropdownVariants,
  toggleDropdown,
  showDropdown
}) {

  return (
    <div>
      {" "}
      <SidebarContainer ref={sidebarRef}>
        <Bar onClick={sidebarToggle}>
          <H1> &#8592;</H1>
        </Bar>
        <SidebarContent>
          <div className="logo">
            <Link href="/" className="a">
              <LogoImage src={logo} />
            </Link>
          </div>
          <div className="menu">
            <ul className="ul">
              <MenuItem>
                <MenuLink href="/">Home</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={toggleDropdown}>
                  <motion.span
                    variants={dropdownVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    className="menutitle"
                  >
                    Resources
                    {showDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </motion.span>
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        className="dropdown"
                        variants={dropdownVariants}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                      >
                        <Link href="/resource1">Resource 1</Link>
                        <Link href="/resource2">Resource 2</Link>
                        <Link href="/resource2">Resource 2</Link>
                        <Link href="/resource2">Resource 2</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="/services">Service</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="/about">About Us</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="/contact">Contact</MenuLink>
              </MenuItem>
              <MenuItem>
                <div className="ctaButton">
                  <CtaButtonWrapper>Book Shipment</CtaButtonWrapper>
                </div>
              </MenuItem>
            </ul>
          </div>
          <LoginLink href="https://app.shipexindia.in/seller">Login/signUp</LoginLink>
        </SidebarContent>
      </SidebarContainer>
    </div>
  );
}

export default Sidebar;
