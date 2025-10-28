import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About us</h2>
          <div className="blue-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Groeinnov8 is a leading digital
            transformation company, dedicated to helping businesses leverage
            emerging technologies to stay ahead of the curve. We specialize in
            Microsoft Dynamics 365 and Power Platform, offering an extensive
            array of services to help our customers thrive on next-generation
            technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Our expertise includes building, transforming, and managing IT
            operations to deliver advanced solutions tailored to your needs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            At  Groei, we bring the expertise of top-tier companies at a more
            affordable rate. Our team of experts, with over a decade of
            experience, has been delivering high-quality IT solutions to clients
            worldwide, including North America, Europe, and Japan. We are
            committed to finding and working with the best talent to ensure
            excellent outcomes for our clients.
          </motion.p>
        </div>
      </section>

      <section className="vision-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Vision</h2>
          <div className="blue-underline"></div>
        </motion.div>

        <motion.div
          className="vision-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Fueling sustainable business growth and client success through
            innovative technology solutions, domain expertise, and cutting-edge
            actionable insights.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutSection;
