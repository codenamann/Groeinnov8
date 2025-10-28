import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Workflow, Brain, Code } from "lucide-react";
import "./KeyTrainingAreas.css";
import businessolution from "../../assets/business-solution.jpg";
import aritifialinteligent from "../../assets/aitifialinegligen.jpg";
import lowcodewebdevelopment from "../../assets/lowcodewebdevelopment.jpg";

const trainingAreas = [
  {
    id: 1,
    title: "Business Process Automation",
    technologies: "Automation Anywhere, Power Automate, Blue Prism, UI Path, and BPM tools",
    objective:
      "Equip participants with the knowledge to automate repetitive tasks and processes, improving efficiency and accuracy across business operations.",
    icon: <Workflow className="area-icon" />,
    color: "blue",
    image: businessolution,
  },
  {
    id: 2,
    title: "Artificial Intelligence/Gen AI & Machine Learning",
    technologies: "Azure AI, Copilot, Large Language Models(LLM), Open AI, TensorFlow, PyTorch, scikit-learn, and Cloud AI platforms",
    objective:
      "Enable participants to leverage AI/ML technologies for data-driven decision making and intelligent automation.",
    icon: <Brain className="area-icon" />,
    color: "purple",
    image: aritifialinteligent,
  },
  {
    id: 3,
    title: "Low-Code Development",
    technologies: "Microsoft Power Platform, OutSystems, Mendix",
    objective:
      "Teach rapid application development using low-code platforms to accelerate digital transformation initiatives.",
    icon: <Code className="area-icon" />,
    color: "green",
    image: lowcodewebdevelopment,
  },
];

const KeyTrainingAreas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + trainingAreas.length) % trainingAreas.length
    );
  };
  const currentArea = trainingAreas[currentIndex];
  return (
    <div className="training-container">
      <div className="training-wrapper">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="training-header"
        >
          <h1 className="training-title">Key Training Areas</h1>
          <p className="training-subtitle">
            Explore our specialized training programs designed to enhance your
            technical capabilities
          </p>
        </motion.div>

        <div className="slider-container">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="slide"
            >
              <div className="slide-content">
                <div className="slide-info">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`icon-container icon-${currentArea.color}`}
                  >
                    {currentArea.icon}
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="area-title"
                  >
                    {currentArea.title}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="area-details"
                  >
                    <h3 className="details-heading">Technologies Covered:</h3>
                    <p className="details-text">{currentArea.technologies}</p>

                    <h3 className="details-heading">Objective:</h3>
                    <p className="details-text">{currentArea.objective}</p>
                  </motion.div>
                </div>

                <div className="slide-image-container">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="image-wrapper"
                  >
                    <img
                      src={currentArea.image}
                      alt={currentArea.title}
                      className="area-image"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="training-slider-buttons">
            <button
              className="nav-button nav-button-prev key-training-areas-prev"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="nav-icon" />
            </button>

            <button
              className="nav-button nav-button-next key-training-areas-next "
              onClick={() => paginate(1)}
            >
              <ChevronRight className="nav-icon" />
            </button>
          </div>

          <div className="slider-dots">
            {trainingAreas.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`dot ${index === currentIndex ? "dot-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTrainingAreas;
