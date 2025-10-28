import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import "./ContactInfo.css";
import contactinfo from "../../assets/contactinfom.png";
const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="contact-info-container"
    >
      <div className="contact-content-wrapper">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="contact-image-container"
        >
          <img
            src={contactinfo}
            alt="Customer support representative"
            className="support-image"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="contact-section"
        >
          <h3 className="contact-section-title-contact-title">You can mail us:</h3>
          <a href="mailto:support@groeinnov8.com" className="mail-link">
            <Mail className="mail-icon" />
            <span>support@groeinnov8.com</span>
          </a>
        </motion.div>

      </div>

  
 
    </motion.div>
  );
};

export default ContactInfo;
