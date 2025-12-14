import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = ({ translations }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="mobile-projects-hero"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="hero-container">
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          {translations.mobileProjectsTitle}
        </motion.h1>
        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          {translations.mobileProjectsDescription}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default React.memo(HeroSection);

