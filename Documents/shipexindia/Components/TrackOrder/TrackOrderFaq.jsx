import React, { useState } from "react";
import styled from "styled-components";

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 7rem;
  gap: 1rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 1024px) {
    padding: 2.5rem 5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  .faqtitle {
    h1 {
      font-size: var(--heading);
      color: #000;
      font-family: var(--bold);
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: 1rem;

      span {
        background: var(--text-gradient-secondary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media screen and (max-width: 767px) {
        font-size: var(--heading-small);
      }
    }
  }
`;

const FaqItem = styled.div`
  cursor: pointer;
  transition: box-shadow 0.5s ease-in-out;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 30px #f3f3f3;
  padding: 1rem;
  border: 1px solid #eee;

  &:hover {
    box-shadow: 0px 0px 10px #f3f3f3;
  }
`;

const FaqQuestion = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: font-size 0.5s ease-in-out, color 0.5s ease-in-out;
  font-size: var(--norm);
  color: var(--text-color1);
  font-family: var(--bold);
  font-weight: 400;

  span {
    font-size: var(--heading-small);
    color: var(--text-color1);
    font-family: var(--bold);
    font-weight: 400;
    transition: font-size 0.5s ease-in-out, color 0.5s ease-in-out;
  }
`;

const FaqAnswer = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  margin-top: 10px;
  transition: display 0.5s ease-in-out, margin-top 0.5s ease-in-out, opacity 0.5s ease-in-out;
  font-size: var(--para);
  color: var(--text-grey);
  font-family: var(--font);
  font-weight: 300;
`;

function TrackOrderFaq() {
  const faqItems = [
    {
      question: "What is the tracking process?",
      answer:
        "The tracking process allows you to monitor the current status of your order during shipment.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times can vary, but we aim to deliver your order within 3-5 business days.",
    },
    {
      question: "Can I change my shipping address?",
      answer:
        "Yes, you can change your shipping address before your order is shipped. Please contact our support for assistance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <FaqContainer>
      <div className="faqtitle">
        <h1>
          <span>Frequently</span> Asked Question
        </h1>
      </div>
      {faqItems.map((item, index) => (
        <FaqItem key={index} onClick={() => toggleAnswer(index)}>
          <FaqQuestion>
            {item.question}
            <span> {activeIndex === index ? "-" : "+"}</span>
          </FaqQuestion>
          <FaqAnswer active={activeIndex === index}>{item.answer}</FaqAnswer>
        </FaqItem>
      ))}
    </FaqContainer>
  );
}

export default TrackOrderFaq;
