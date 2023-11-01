import styled from "styled-components";
import { motion } from "framer-motion";
import img1 from "@/Assets/Images/Blog/1.png";
import img2 from "@/Assets/Images/Blog/2.png";
import img3 from "@/Assets/Images/Blog/3.png";
import Image from "next/image";
import Link from "next/link";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  padding-bottom: 0;


  .heading {
    font-family: var(--extra);
    font-size: var(--heading);
    color: var(--primary-color);
    letter-spacing: -1px;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: var(--heading-small);
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0 5rem;
    margin-top: 5rem;
  
  }

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;

const BlogWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 5rem 0;
  margin-top: 3rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BlogCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #00c27c10;
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 2rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  gap: 1rem;
  font-family: var(--font);
  height: 100%;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;

const BlogTitle = styled.h3`
  font-size: var(--heading-small);
  font-weight: 700;
  font-family: var(--bold);
  color: var(--text-color);
`;

const BlogDescription = styled.p`
  line-height: 1.5;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: var(--para-mini);
  font-weight: 400;
  font-family: var(--font);
  color: var(--text-grey);
  letter-spacing: 0.5px;
  line-height: 1.8;
`;

const BlogCTA = styled(Link)`
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
  text-decoration: none;

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
  }
`;

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: img1,
      title: "On-Time Delivery: The Vital Metric For...",
      description:
        "Introduction In the fast-paced world of eCommerce, on-time delivery plays a crucial role in customer",
      cta: "Continue Reading",
      link: "/blog",
    },
    {
      id: 2,
      image: img2,
      title: " Accelerating Growth",
      description:
        "In the contemporary, hyper-competitive business environment, swift and efficient shipping serves as a linchpin for the triumph and enlargement of any enterprise. With the ascendancy of e-commerce and ever-increasing customer expectations, expedited shipping has assumed a pivotal role in fortifying customer satisfaction, ",
      cta: "Continue Reading",
      link: "/blog",
    },
    {
      id: 3,
      image: img3,
      title: "Decoding RTO (Return to Origin) ",
      description:
        "In the realm of online business, the return of products, known as Return to Origin (RTO), has become a prevalent challenge. When a product fails to reach its intended destination and finds its way back to the online store, it triggers a series of complications that can affect revenue and profitability.",
      cta: "Continue Reading",
      link: "/blog",
    },
  ];

  return (
    <BlogContainer>
      <h2 className="heading">Some Sugestion For You</h2>
      <BlogWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>
            <BlogImage src={blog.image} alt={blog.title} />
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDescription>{blog.description}</BlogDescription>
            <BlogCTA href={blog.link}>{blog.cta}</BlogCTA>
          </BlogCard>
        ))}
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blog;
