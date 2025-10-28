import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./GKCSection.css";

const GKCSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.4 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const missionCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const services = [
    "Data-driven analytics",
    "Strategic advisory",
    "Competitive intelligence",
    "Market research",
    "Technology assessment",
  ];

  return (
    <motion.div
      className="gkc-container"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="gkc-content">
        <div className="gkc-left">
          <motion.h1 className="gkc-title" variants={titleVariants}>
            GKC
          </motion.h1>

          <motion.p className="gkc-description" variants={descriptionVariants}>
            Green Knowledge Services (GKC) is a key offering of GreenInnovaBiz,
            dedicated to driving and shaping business decisions through the
            strategic use of knowledge, research, and technology across various
            industry verticals.
          </motion.p>

          <motion.h2 className="gkc-heading" variants={headingVariants}>
            Our Comprehensive Approach
          </motion.h2>

          <motion.p className="gkc-subtext" variants={textVariants}>
            Our comprehensive suite of business research and insights is
            designed to add value at every stage of our clients' strategic
            decision-making process.
          </motion.p>

          <ul className="gkc-list">
            {services.map((service, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemVariants}
                className="gkc-list-item"
              >
                <span className="checkmark">✓</span> {service}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="gkc-right">
          <motion.div
            className="mission-card-container"
            variants={missionCardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mission-card">
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To empower organizations with actionable intelligence that
                drives sustainable competitive advantage and strategic growth in
                an ever-evolving business landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GKCSection;
