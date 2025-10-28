import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="services-sectionn">
      <motion.div
        className="services-containerrr"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

      </motion.div>
    </div>
  );
};

export default Services;
