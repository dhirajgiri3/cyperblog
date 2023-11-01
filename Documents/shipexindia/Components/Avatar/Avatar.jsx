import { motion } from "framer-motion";
import styles from "./css/Avatar.module.css";

const Avatar = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1912&q=80",
    "https://images.unsplash.com/photo-1592621385645-e41659e8aabe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80",
  ];

  const upvariants = {
    hidden: {
      y: 100,
      opacity: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const staggerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.07,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className={styles.avatar}
      variants={staggerVariants}
      initial="hidden"
      animate="visible"
    >
      {imageUrls.map((imageUrl, index) => (
        <motion.div className={styles.circle} key={index} variants={upvariants}>
          <motion.div
            className={styles.image}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></motion.div>
        </motion.div>
      ))}
      <motion.div className={styles.circle} variants={upvariants}>
        <p className={styles.p}>1000+</p>
      </motion.div>
    </motion.div>
  );
};

export default Avatar;
