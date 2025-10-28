import React from "react";
import { motion } from "framer-motion";
import "./MarketIntelligence.css";
import marketIntelligenceImage from "../../assets/business_insights.webp";

const Bussiness_insights = () => {
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="market-intelligence-section">
      <motion.div
        className="market-intelligence-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Top section with image and services */}
        <motion.div className="top-section" variants={itemVariants}>
          <div className="image-container">
            <img
              src={marketIntelligenceImage}
              alt="Market Intelligence Word Cloud"
              className="intelligence-image"
            />
          </div>

          <div className="intel-content">
            <motion.h2 variants={itemVariants}>
              Business Insights & Advisory
            </motion.h2>
            <div className="services-grid">
              <div className="services-column">
                <motion.div className="service-item" variants={itemVariants}>
                  <span className="checkmark">✓</span>
                  <span>Trends and Analysis</span>
                </motion.div>

                <motion.div className="service-item" variants={itemVariants}>
                  <span className="checkmark">✓</span>
                  <span>Market Sizing/Assessment</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bussiness_insights;
