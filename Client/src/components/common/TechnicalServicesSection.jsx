import React from "react";
import { motion } from "framer-motion";

export default function TechnicalServicesSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="technical-services-container-warper">
 <motion.div
      className="technical-services-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="section-title" variants={titleVariants}>
        Technical Services & Consulting
      </motion.h1>

      <div className="services-row row-1">
        <motion.div className="service-card large p-4 " variants={cardVariants}>
          <div className="icon blue-icon"></div>
          <span className="fs-6" >Gen AI Powered Layer</span>
        </motion.div>

        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon green-icon"></div>
          <span className="fs-6">Form Recogniser</span>
        </motion.div>

        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon purple-icon"></div>
          <span className="fs-6">Azure Playground</span>
        </motion.div>

        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon teal-icon"></div>
          <span className="fs-6">Azure Open AI</span>
        </motion.div>

        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon yellow-icon"></div>
          <span className="fs-6">Azure Function</span>
        </motion.div>
      </div>

      <div className="services-row row-2">
        <motion.div className="service-card medium" variants={cardVariants}>
          <div className="icon blue-icon"></div>
          <span className="fs-6">Azure AI Studio / Services (AI Powered Copilot)</span>
        </motion.div>

        <motion.div className="service-card medium" variants={cardVariants}>
          <div className="icon purple-icon"></div>
          <span className="fs-6">AI Powered Chatbots to help resolve a range of requests</span>
        </motion.div>

        <motion.div className="service-card medium" variants={cardVariants}>
          <div className="icon red-icon"></div>
          <span className="fs-6">Custom Web Application Layer</span>
        </motion.div>
      </div>

      <div className="services-row row-3">
        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon orange-icon"></div>
          <span className="fs-6">Dynamics CRM</span>
        </motion.div>

        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon green-icon"></div>
          <span className="fs-6">Web Application / User Interaction Layer</span>
        </motion.div>

        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon pink-icon"></div>
          <span className="fs-6">Augmented Analytics / Reporting Layer</span>
        </motion.div>

        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon orange-icon"></div>
          <span className="fs-6">Data Transformation Layer</span>
        </motion.div>
      </div>

      <div className="services-row row-4">
        <motion.div className="service-card medium" variants={cardVariants}>
          <div className="icon navy-icon"></div>
          <span className="fs-6">Azure / AWS Cloud Services | Data Engine</span>
        </motion.div>

        <motion.div className="service-card large" variants={cardVariants}>
          <div className="icon blue-icon"></div>
          <span className="fs-6">Microsoft Fabric</span>
        </motion.div>
      </div>

      <style jsx>{`
      .technical-services-container-warper{
      background-color:rgb(188, 188, 188);
      }
        .technical-services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
         
          min-height: 100vh;
        }

        .section-title {
          font-size: 28px;
          color: #1a2b40;
          text-align: center;
          margin-bottom: 40px;
          font-weight: 600;
        }

        .services-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .service-card {
          background: white;
          border-radius: 8px;
          border: 2px solid rgb(137, 169, 227);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .service-card.large {
          min-width: 180px;
          max-width: 240px;
        }

        .service-card.medium {
          min-width: 260px;
          max-width: 360px;
        }

        .service-card.large {
          min-width: 340px;
          max-width: 380px;
        }

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 16px;
        }

        .blue-icon {
          background-color: #e6f0ff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230066ff'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z'/%3E%3C/svg%3E");
        }

        .green-icon {
          background-color: #e6f8f0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300b377'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'/%3E%3C/svg%3E");
        }

        .purple-icon {
          background-color: #f0e6ff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237c3aed'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h2v2h-2V5zm0 4h2v2h-2V9zm-4 4h2v2H8v-2zm0-4h2v2H8V9zm0-4h2v2H8V5zm8 8h-2v-2h2v2zm0-4h-2V7h2v2z'/%3E%3C/svg%3E");
        }

        .teal-icon {
          background-color: #e6f8fa;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300b3b3'%3E%3Cpath d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z'/%3E%3C/svg%3E");
        }

        .yellow-icon {
          background-color: #fff8e6;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffbf00'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z'/%3E%3C/svg%3E");
        }

        .red-icon {
          background-color: #ffe6e6;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff4d4d'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h2v2h-2V5zm0 4h2v2h-2V9zm-4 4h2v2H8v-2zm0-4h2v2H8V9zm0-4h2v2H8V5zm8 8h-2v-2h2v2zm0-4h-2V7h2v2z'/%3E%3C/svg%3E");
        }

        .orange-icon {
          background-color: #fff0e6;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff8c1a'%3E%3Cpath d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/%3E%3C/svg%3E");
        }

        .pink-icon {
          background-color: #ffe6f0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff3399'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/%3E%3C/svg%3E");
        }

        .navy-icon {
          background-color: #e6eeff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23003399'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E");
        }

        span {
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }

        @media screen and (max-width: 768px) {
          .services-row {
            flex-direction: column;
            align-items: center;
          }

          .service-card {
            width: 90%;
            max-width: 90%;
          }

          .service-card.large,
          .service-card.medium,
          .service-card.large {
            min-width: auto;
            max-width: 100%;
            width: 100%;
          }
        }
      `}</style>
    </motion.div>
    </div>
   
  );
}
