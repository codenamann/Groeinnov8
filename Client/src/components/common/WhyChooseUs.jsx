import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaLightbulb, FaChartLine } from "react-icons/fa"; // <-- Import icons
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const iconMap = {
    handshake: <FaHandshake size={24} color="#2563eb" />,
    lightbulb: <FaLightbulb size={24} color="#9333ea" />,
    chart: <FaChartLine size={24} color="#10b981" />
  };

  const features = [
    {
      id: 1,
      title: "Share Your Vision and Challenges",
      description:
        "We take the time to understand your unique business requirements, challenges, and goals. Our collaborative approach ensures that our solutions are perfectly aligned with your vision.",
      icon: "handshake",
      bgColor: "#e0f2fe" // light blue
    },
    {
      id: 2,
      title: "Innovative Solutions Tailored for You",
      description:
        "We don't believe in one-size-fits-all approaches. Each solution we deliver is custom-designed to address your specific needs, leveraging cutting-edge technologies and best practices.",
      icon: "lightbulb",
      bgColor: "#ede9fe" // light purple
    },
    {
      id: 3,
      title: "Demonstrated Impact",
      description:
        "We've helped numerous businesses achieve significant improvements in efficiency, productivity, and revenue through our digital transformation solutions.",
      icon: "chart",
      bgColor: "#d1fae5" // light green
    }
  ];

  return (
    <div className="why-choose-us-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Why Choose Us</h2>
        <div className="blue-underline"></div>
      </motion.div>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Partner with us for your digital transformation journey and experience
        the difference
      </motion.p>

      <div className="features-container">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
          >
            <div className="feature-content">
              <div
                className="icon-container"
                style={{ backgroundColor: feature.bgColor }}
              >
                {iconMap[feature.icon]}
              </div>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
