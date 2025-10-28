import React from "react";
import { motion } from "framer-motion";
import "./ContentCreativeDesignServices.css";

const ContentCreativeDesignServices = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="services-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="services-content">
          <motion.div className="image-wrapper" variants={imageVariants}>
            <div className="image-container">
              <img
                src="/api/placeholder/600/400"
                alt="Design Services Illustration"
                className="services-image"
              />
            </div>
          </motion.div>

          <div className="text-content">
            <motion.h2 className="services-heading" variants={itemVariants}>
              Content and Creative Design Services
            </motion.h2>

            <div className="services-grid">
              <div className="services-column">
                <motion.div className="service-item" variants={itemVariants}>
                  <span className="checkmark">✓</span>
                  <span>Content Services</span>
                </motion.div>

                <motion.div className="service-item" variants={itemVariants}>
                  <span className="checkmark">✓</span>
                  <span>Capability Presentation</span>
                </motion.div>

                <motion.div className="service-item" variants={itemVariants}>
                  <span className="checkmark">✓</span>
                  <span>Presentation/Slide Design</span>
                </motion.div>
                <motion.div className="service-item" variants={itemVariants}>
                  <span className="checkmark">✓</span>
                  <span>
                    PO (Point of Views) and Thought Leadership
                    (Whitepaper/Blogs)
                  </span>
                </motion.div>
              </div>

              <div className="services-column">
               

                <motion.div className="service-item" variants={itemVariants}>
                  <span className="checkmark">✓</span>
                  <span>SWOT Analysis</span>
                </motion.div>

                <motion.div className="service-item" variants={itemVariants}>
                  <span className="checkmark">✓</span>
                  <span>Customer Theme Creation</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-services">
          <motion.div className="bottom-service-item" variants={itemVariants}>
            <span className="checkmark">✓</span>
            <span>PPT based design</span>
          </motion.div>

          <motion.div className="bottom-service-item" variants={itemVariants}>
            <span className="checkmark">✓</span>
            <span>Animation Services</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentCreativeDesignServices;
