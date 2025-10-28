import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBookOpen, FaBriefcase, FaCalendarAlt } from "react-icons/fa";  // Import icons from React Icons

export default function WhyTrainSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="why-train-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="section-title" variants={itemVariants}>
        Why To Train with Groeinnov8?
      </motion.h1>

      <motion.p className="section-subtitle" variants={itemVariants}>
        We provide cutting-edge training programs designed to help professionals
        excel in today's competitive IT landscape.
      </motion.p>

      <div className="cards-row">
        <motion.div className="card" variants={cardVariants}>
          <motion.div className="icon-circle" variants={iconVariants}>
            <FaChalkboardTeacher size={30} color="#0052cc" />
          </motion.div>
          <h2>Expert Instructors</h2>
          <p>
            Our training programs are led by industry experts with deep
            knowledge and hands-on experience in their respective fields,
            ensuring high-quality learning.
          </p>
        </motion.div>

        <motion.div className="card" variants={cardVariants}>
          <motion.div className="icon-circle" variants={iconVariants}>
            <FaBookOpen size={30} color="#0052cc" />
          </motion.div>
          <h2>Comprehensive Curriculum</h2>
          <p>
            Our courses are designed to cover all aspects of the technologies,
            from basic concepts to advanced applications, making them suitable
            for beginners and professionals alike.
          </p>
        </motion.div>
      </div>

      <div className="cards-row">
        <motion.div className="card" variants={cardVariants}>
          <motion.div className="icon-circle" variants={iconVariants}>
            <FaBriefcase size={30} color="#0052cc" />
          </motion.div>
          <h2>Practical Application</h2>
          <p>
            We emphasize practical, hands-on learning, allowing participants to
            apply what they've learned to real-world scenarios.
          </p>
        </motion.div>

        <motion.div className="card" variants={cardVariants}>
          <motion.div className="icon-circle" variants={iconVariants}>
            <FaCalendarAlt size={30} color="#0052cc" />
          </motion.div>
          <h2>Support for Talent Acquisition</h2>
          <p>
            Our training programs not only enhance individual skills but also
            support our Talent Acquisition services by creating a pool of highly
            qualified candidates who are ready to meet the needs of the IT
            industry.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .why-train-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          color: #333;
          text-align: center;
        }

        .section-title {
          font-size: 36px;
          color: #0052cc;
          margin-bottom: 16px;
          font-weight: bold;
        }

        .section-subtitle {
          font-size: 16px;
          color: #555;
          max-width: 800px;
          margin: 0 auto 60px;
          line-height: 1.5;
        }

        .cards-row {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 30px 25px;
          width: calc(50% - 12px);
          max-width: 540px;
          min-width: 300px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }

        .icon-circle {
          width: 70px;
          height: 70px;
          background-color: #e6efff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .card h2 {
          font-size: 20px;
          color: #0052cc;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .card p {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        @media screen and (max-width: 900px) {
          .card {
            width: 100%;
            flex: none;
          }

          .section-title {
            font-size: 32px;
          }
        }

        @media screen and (max-width: 600px) {
          .section-title {
            font-size: 28px;
          }

          .section-subtitle {
            font-size: 15px;
            margin-bottom: 40px;
          }

          .card {
            padding: 20px 15px;
          }

          .icon-circle {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </motion.div>
  );
}
