import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { Parallax } from "react-parallax";

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const MidContainer = styled.div`
  .mid {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10rem;

    @media screen and (max-width: 1024px) {
      padding: 0 5rem;
    }

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 3rem;

      .img {
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .paraimg {
          width: 100%;
          height: 70vh;
          object-fit: cover;
          border-radius: 30px;

          @media screen and (max-width: 1000px) {
            height: 30vh;
          }

          @media screen and (max-width: 768px) {
            height: 50vh;
          }
        }

        @media screen and (max-width: 1000px) {
          height: 30vh;
        }

        @media screen and (max-width: 768px) {
          height: 50vh;
        }


      }

      .para {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;

        h2 {
          font-size: var(--heading-small);
          font-weight: 300;
          color: var(--text-color);
          font-family: var(--bold);
        }

        p {
          font-size: var(--para);
          font-weight: 400;
          color: var(--text-grey);
          font-family: var(--font);
          letter-spacing: 0.5px;
        }

        ul {
          list-style: disc;
          padding-left: 2rem;
          li {
            font-size: var(--para);
            font-weight: 400;
            color: var(--text-grey);
            font-family: var(--font);
            letter-spacing: 0.5px;
            margin: 1rem 0;
          }
        }

        ol {
          list-style: decimal;
          padding-left: 2rem;
          li {
            font-size: var(--para);
            font-weight: 400;
            color: var(--text-grey);
            font-family: var(--font);
            letter-spacing: 0.5px;
            margin: 1rem 0;
          }
        }
      }
    }
  }
`;

function Mid() {
  return (
    <div>
      <MidContainer>
        <div className="mid">
          <div className="content">
            <div className="img">
              <Parallax
                bgImage="https://res.cloudinary.com/divbobkmd/image/upload/v1694858120/1_cci0j0.png"
                bgImageAlt="Shipexindia Blog"
                strength={-200}
                className="paraimg"
              />
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="para"
            >
              <h2>Introduction</h2>
              <p>
                In the realm of online commerce, product returns have become
                increasingly prevalent. When a delivered item fails to reach its
                intended destination and makes its way back to the online store,
                it's categorized as a "Return to Origin" or RTO.
              </p>

              <p>
                The management of returns poses considerable challenges for
                e-commerce companies as it directly impacts their revenue and
                profitability. As India's e-commerce sector continues to
                experience rapid growth, with an expected 84% increase by 2024,
                the likelihood of encountering RTO scenarios also rises.
                Consequently, the need to find effective strategies to mitigate
                and reduce RTO becomes paramount.
              </p>

              <p>
                Online stores meticulously assess product quality, package items
                carefully, and dispatch them to the correct addresses. However,
                when these products return to their point of origin, it
                represents a setback for e-commerce businesses. RTO disrupts the
                supply chain and incurs additional costs associated with
                retrieval, repackaging, and transportation.
              </p>

              <p>
                E-commerce companies are increasingly optimizing their
                operational processes to address RTO challenges. This includes
                implementing measures to minimize delivery failures, such as
                enhancing address verification systems and leveraging real-time
                tracking technologies. Additionally, clear and transparent
                return policies, coupled with quality checks prior to shipping,
                help reduce customer dissatisfaction and subsequent returns.
              </p>

              <p>
                In this blog, we will delve into the complexities of RTO,
                shedding light on its causes and providing insights into how
                Shipyaari can effectively assist in mitigating its impact.
              </p>
            </motion.div>
            <div className="img">
              <Parallax
                bgImage="https://res.cloudinary.com/divbobkmd/image/upload/v1694858120/2_gbkg2m.png"
                bgImageAlt="Shipexindia Blog"
                strength={-200}
                className="paraimg"
              />
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="para"
            >
              <h2>Why RTO Occurs</h2>
              <ul>
                <li>
                  <strong>Incorrect Delivery Address:</strong> RTO can occur
                  when the customer provides an incomplete, inaccurate, or
                  inaccessible delivery address, making it impossible for the
                  courier to complete the delivery.
                </li>
                <li>
                  <strong>Unavailability of the Recipient:</strong> If the
                  recipient is unavailable after multiple delivery attempts at
                  the specified location, the package may be returned to the
                  origin.
                </li>
                <li>
                  <strong>Damaged Goods:</strong> Products may get damaged
                  during transit due to mishandling, inadequate packaging, or
                  accidents during transportation, necessitating RTO.
                </li>
                <li>
                  <strong>Unsatisfied Customers:</strong> When customers receive
                  products that don't meet their expectations in terms of size,
                  color, or quality, they may initiate returns, leading to RTO.
                </li>
                <li>
                  <strong>Shipping and Handling Errors:</strong> Mistakes in the
                  shipping and handling process, such as mixing up orders or
                  shipping the wrong products, can result in the need for RTO.
                </li>
                <li>
                  <strong>Failed Delivery Attempts:</strong> If the courier or
                  delivery personnel cannot locate the recipient or access the
                  delivery address after multiple attempts, the package may be
                  returned to the origin due to failed delivery.
                </li>
                <li>
                  <strong>Customer Cancellations:</strong> Customers may cancel
                  orders after placement but before delivery, potentially
                  leading to RTO if the products have already been dispatched or
                  are in transit.
                </li>
              </ul>

              <h2>How to Reduce RTO in E-commerce</h2>
              <ol>
                <li>
                  <strong>Ensure Timely Delivery:</strong> In today's
                  competitive e-commerce landscape, meeting customer
                  expectations for delivery speed is crucial. Offering same-day
                  or expedited delivery options can help lower RTO, and
                  Shipyaari can assist with non-robotic NDR services and a
                  nationwide network of warehouses.
                </li>
                <li>
                  <strong>Provide Detailed Product Information:</strong> Lack of
                  clear product information is a major cause of returns. Sellers
                  should offer comprehensive product descriptions to ensure
                  customers make informed choices and reduce the need for
                  unnecessary returns.
                </li>
                <li>
                  <strong>Control NDR Reports:</strong> Shipyaari's non-robotic
                  NDR (Non-Delivery Report) management tool plays a significant
                  role in reducing RTO by providing visibility to take
                  preventive measures.
                </li>
                <li>
                  <strong>Verify Contact Information:</strong> Confirming the
                  accuracy of customer-provided contact information, including
                  phone numbers and addresses, is crucial to avoid delivery
                  issues that lead to returns.
                </li>
                <li>
                  <strong>Offer Reliable Tracking:</strong> Regular order
                  updates through email, SMS, or WhatsApp can reduce customer
                  anxiety and lower the likelihood of returns and cancellations.
                </li>
                <li>
                  <strong>Gather Customer Testimonials:</strong> Promoting
                  customer reviews and feedback can help identify and address
                  issues, build trust, and decrease return rates.
                </li>
                <li>
                  <strong>Promote Online Payments:</strong> Encourage online
                  payments over cash on delivery to reduce the majority of RTOs
                  associated with cash transactions.
                </li>
                <li>
                  <strong>Prioritize Delivery Preferences:</strong> Allow
                  customers to choose their preferred delivery time slots and
                  reschedule options to increase confidence and minimize missed
                  deliveries.
                </li>
                <li>
                  <strong>Enhance Product Packaging:</strong> Strong and
                  attractive packaging can make a positive impression and reduce
                  the chances of product damage and subsequent RTO.
                </li>
                <li>
                  <strong>Offer Gifts or Discounts:</strong> Incentives like
                  free gifts or discount coupons can boost customer satisfaction
                  and reduce return rates.
                </li>
              </ol>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="para"
            >
              <h2>Conclusion</h2>
              <p>
                In today's fast-paced digital landscape, effective RTO
                management is essential for the continuity of e-commerce
                businesses. Well-managed RTO ensures quick recovery and
                minimizes disruptions to stakeholders and customers.
              </p>
              <p>
                Through reliable delivery services, Shipyaari, a SaaS-based
                logistics company, plays a vital role in lowering RTO.
                Leveraging a vast logistics network and advanced technology,
                Shipyaari reduces transit times, optimizes delivery routes, and
                provides end-to-end tracking and customer support to ensure
                successful deliveries, thereby mitigating the risk of returns.
              </p>
            </motion.div>
          </div>
        </div>
      </MidContainer>
    </div>
  );
}

export default Mid;
