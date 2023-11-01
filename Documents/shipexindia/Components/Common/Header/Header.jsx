"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import logo from "@/Assets/Images/Logos/Shipex-transparent-logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Sidebar from "./Sidebar";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff50;
  backdrop-filter: blur(20px);
  width: 90vw;
  height: 8vh;
  padding: 1.5rem;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 100px;

  .right-header {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    height: 6vh;
  }

  .pc {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: 7vh;
    width: 95vw;
    top: 0.5rem;
  }
`;

const Menu = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MenuItem = styled.li`
  margin-right: 1rem;
`;

const LogoImage = styled(Image)`
  height: auto;
  width: 7rem;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 5.5rem;
  }
`;

const MenuLink = styled.div`
  position: relative; /* Add relative positioning */
  font-size: var(--para);
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-family: var(--font);
  cursor: pointer;

  &:hover {
    color: var(--secondary-color);
    mix-blend-mode: normal;
  }

  .menutitle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
    transition: color 0.3s ease-in-out;
  }

  .dropdown {
    position: absolute;
    top: 200%;
    left: calc(-100% + 2rem);
    background-color: #1f1f1f;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 1rem 2rem;
    z-index: 1000;
    opacity: 0;
    transform-origin: top center;
    min-width: 15rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      top: 100%;
      left: 0;
      min-width: 15rem;
    }

    & a {
      display: block;
      padding: 5px 10px;
      color: var(--white);
      text-decoration: none;
      white-space: nowrap;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #ffffff99;
      }
    }
  }
`;

const MenuLink2 = styled.div`
  position: relative;
  font-size: var(--para);
  color: var(--secondary-color);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-family: var(--font);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  font-weight: 700;
  letter-spacing: 0.5px;

  &:hover {
    border-bottom: 2px solid var(--secondary-color);
  }
`;

const LoginLinkMobile = styled.a`
  background: var(--primary-color);
  font-size: 0.8rem;
  color: var(--white-bg);
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.3s ease-in-out;
  font-family: var(--font);
  position: relative;
  overflow: hidden;
  z-index: 0;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }

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

const CtaButtonWrapper = styled.button`
  font-family: var(--font);
  font-size: 0.8rem;
  color: var(--text-color);
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid var(--text-color);
  background: transparent;
  box-shadow: 5px 5px var(--text-color);
  margin-top: -5px;
  cursor: pointer;

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
  }
`;

const Bar = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  right: 1rem;

  @media screen and (max-width: 1024px) {
    display: block;

    h1 {
      font-family: var(--font);
      font-size: 1.3rem;
      color: var(--text-color);
      text-decoration: none;
      letter-spacing: 0.5px;
    }
  }
`;

const SidebarBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  transition: background 1s ease-in-out;
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: var(--text-color);
  text-decoration: none;
  letter-spacing: 0.5px;
`;

const TrackOrder = styled(Link)`
  font-size: var(--para);
  color: var(--text-color);
  text-decoration: none;
  transition: 0.3s ease-in-out;
  font-family: var(--bold);
  border-bottom: 2px solid var(--secondary-color);

  &:hover {
    color: var(--secondary-color);
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const sidebarRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const bg = bgRef.current;
    if (showSidebar) {
      sidebar.style.transform = "translateX(0)";
      sidebar.style.visibility = "visible";
      bg.style.background = "#00000099";
      bg.style.display = "block";
    } else {
      sidebar.style.transform = "translateX(-150vw)";
      bg.style.background = "transparent";
      bg.style.display = "none";
      sidebar.style.visibility = "hidden";
    }
  }, [showSidebar]);

  const sidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (showDropdown) {
        if (!event.target.closest(".dropdown")) {
          setShowDropdown(false);
        }
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div>
      <Navbar>
        <div className="logo">
          <Link href="/">
            <LogoImage src={logo} />
          </Link>
        </div>
        <Menu>
          <MenuList>
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
                      <Link href="/shippingratecalculator">
                        Shipping Rate Calculator
                      </Link>
                      <Link href="/resource2">
                        Wolumetric Weight Calculator
                      </Link>
                      <Link href="/resource2">Blogs</Link>
                      <Link href="/resource2">Shipping Terms & Conditions</Link>
                      <Link href="/resource2">FAQs</Link>
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
              <MenuLink2 href="/">Book Shipment</MenuLink2>
            </MenuItem>
          </MenuList>
        </Menu>
        <div className="right-header">
          <TrackOrder className="pc" href="/trackorder">
            Track Order
          </TrackOrder>
          <LoginLinkMobile
            className="pc screen"
            href="https://app.shipexindia.in/seller"
          >
            Login/signUp
          </LoginLinkMobile>
        </div>
        <Bar onClick={sidebarToggle}>
          <H1>Menu</H1>
        </Bar>
      </Navbar>
      <SidebarBg ref={bgRef} onClick={sidebarToggle}></SidebarBg>
      <Sidebar
        H1={H1}
        MenuItem={MenuItem}
        MenuLink={MenuLink}
        LogoImage={LogoImage}
        CtaButtonWrapper={CtaButtonWrapper}
        Bar={Bar}
        sidebarRef={sidebarRef}
        sidebarToggle={sidebarToggle}
        dropdownVariants={dropdownVariants}
        toggleDropdown={toggleDropdown}
        showDropdown={showDropdown}
      />
    </div>
  );
}
