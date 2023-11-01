import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ServiceCardContainer = styled.div`
  .article-wrapper {
    max-width: 25rem;
    width: 100%;
    height: 27rem;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: 0.3s all ease-in-out;
    border-radius: 30px;
    padding: 1.5rem;
    cursor: pointer;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    border: 5px solid transparent;
    transition: all 0.5 ease-in-out;

    &::-webkit-scrollbar {
      width: 0rem;
    }

    .icons {
      width: 100%;

      img {
        height: 5rem;
        width: 5rem;
        object-fit: cover;
      }
    }

    .heading {
      width: 100%;
      h1 {
        font-size: var(--heading-small);
        font-family: var(--extra);
        color: var(--text-color);
        font-weight: 700;
      }
    }
  }

  .paragraph {
    width: 100%;

    p {
      font-size: var(--para);
      font-family: var(--font);
      color: var(--text-grey);
      font-weight: 400;
    }
  }

  .article-wrapper:hover {
    box-shadow: 10px 10px 0 #111, 20px 20px 0 #151515;
    transform: translate(-20px, -20px);
    border: 5px solid #111;
  }

  .article-wrapper:active {
    box-shadow: none;
    transform: translate(0, 0);
  }
`;

function Card({ imgurl, heading, para }) {
  return (
    <div>
      <ServiceCardContainer>
        <article className="article-wrapper">
          <div className="icons">
            <Image src={imgurl} />
          </div>
          <div className="heading">
            <h1>{heading}</h1>
          </div>
          <div className="paragraph">
            <p>{para}</p>
          </div>
        </article>
      </ServiceCardContainer>
    </div>
  );
}

export default Card;
