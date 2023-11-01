import React from "react";
import styles from "./css/CompanyLogo.module.css";
import Image from "next/image";
import img1 from "@/Assets/Companylogo/1.png";
import img2 from "@/Assets/Companylogo/2.jpg";
import img3 from "@/Assets/Companylogo/3.png";
import img4 from "@/Assets/Companylogo/4.png";
import img5 from "@/Assets/Companylogo/5.png";
import img6 from "@/Assets/Companylogo/6.png";
import img7 from "@/Assets/Companylogo/7.jpg";
import img8 from "@/Assets/Companylogo/8.png";
import img9 from "@/Assets/Companylogo/9.png";
import img10 from "@/Assets/Companylogo/10.png";
import img11 from "@/Assets/Companylogo/11.jpeg";
import img12 from "@/Assets/Companylogo/12.jpeg";

const Images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

function CompanyLogo() {
  return (
    <div className={styles.container}>
      <marquee
        width="90%"
        behavior="alternate"
        direction="left"
        loop="infinite"
        scrollamount="7"
        className={styles.marquee}
      >
        {Images.map((image, index) => (
          <Image
            key={index}
            className={styles.logo}
            alt="shipexindia partners"
            title="shipexindia partner"
            src={image}
          />
        ))}
      </marquee>
    </div>
  );
}

export default CompanyLogo;
