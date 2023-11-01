"use client";

import React from "react";
import logo from "@/Assets/Images/Logos/Shipex-transparent-logo.png";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
  background: var(--text-color);
  color: var(--white);
  font-family: var(--font);
  padding: 3rem 5rem;

  a {
    text-decoration: none;
    color: var(--white);
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem 2rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;

  .heading {
    width: 100%;
    text-align: left;
    font-size: var(--heading-small);
    font-weight: 600;
    font-family: var(--bold);
    color: var(--white);
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;

    .link {
      font-size: var(--para);
      font-weight: 100;
      font-family: var(--font);
      color: var(--white);
      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--para-color);
        text-decoration: underline;
      }

      .linkss {
        color: var(--white);
        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--para-color);
          text-decoration: underline;
        }
      }

      &:hover {
        color: var(--white-bg);
      }
    }
  }

  @media screen and (max-width: 767px) {
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;

  .logo {
    height: 100%;
    width: 100%;

    .logoimg {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      padding: 0.7rem;
      background: var(--white);
      border-radius: 100px;
    }
  }

  .desc {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: var(--para);
    font-weight: 100;
    color: var(--para-color);

    @media screen and (max-width: 767px) {
      font-size: var(--para-mini);
    }
  }

  .social {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1.5rem;
    margin-top: 1rem;

    .icon {
      color: var(--white);
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 767px) {
    align-items: flex-start;
  }
`;

function Footer() {
  return (
    <div>
      <FooterContainer>
        <Container>
          <LogoContainer>
            <div className="logo">
              <Image className="logoimg" src={logo} alt="Shipexindia logo" />
            </div>
            <div className="desc">
              ShipEx India by ShipLogix Solutions Pvt Ltd is your SME
              cost-cutting shipping partner. Enjoy up to 40% savings with our
              Compare & Ship feature and bulk pricing. Trusted carriers like
              Delhivery, Spoton, and Xpressbees ensure swift, secure deliveries.
              Simplify logistics, maximize savings with ShipEx India.
            </div>
            <div className="social">
              <LinkedInIcon className="icon" />
              <TwitterIcon className="icon" />
              <FacebookIcon className="icon" />
              <InstagramIcon className="icon" />
            </div>
          </LogoContainer>
          <Column>
            <div className="heading">Company</div>
            <div className="links">
              <Link href="/aboutus" className="link">
                About Us
              </Link>
              <Link href="/contactus" className="link">
                Contact Us
              </Link>
              <Link href="/careers" className="link">
                Careers
              </Link>
              <Link href="/blog" className="link">
                Blog
              </Link>
              <Link href="/faq" className="link">
                FAQs
              </Link>
              <Link href="/terms" className="link">
                Terms & Conditions
              </Link>
            </div>
          </Column>
          <Column>
            <div className="heading">Services</div>
            <div className="links">
              <Link href="/services" className="link">
                Direct-to-Consumer (D2C)
              </Link>
              <Link href="/services" className="link">
                Marketplace Sellers
              </Link>
              <Link href="/services" className="link">
                Social Sellers
              </Link>
              <Link href="/services" className="link">
                Small & Medium Enterprises (SMEs)
              </Link>
              <Link href="/services" className="link">
                Service Providers
              </Link>
              <Link href="/services" className="link">
                Manufacturers
              </Link>
            </div>
          </Column>
          <Column>
            <div className="heading">Contact Us</div>
            <div className="links">
              <div className="desc">
                <a href="tel:+919813981344"> +91 9813981344</a>
              </div>
              <div className="desc">
                <a href="mailto:care@shipexindia.in"> care@shipexindia.in</a>
              </div>
              <div className="desc">
                #212 Tech Town, Aerocity, New Airport Road, Mohali, Punjab
                140603 India
              </div>
              <div className="link">
                <Link href="/privacypolicy" className="linkss">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="/refundpolicy" className="linkss">
                  Refund & Cancellation Policy
                </Link>
              </div>
            </div>
          </Column>
        </Container>
      </FooterContainer>
    </div>
  );
}

export default Footer;
