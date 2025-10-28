import React from 'react';
import { motion } from 'framer-motion';
import './talentcontracting.css';

const TalentContractingProcess = () => {
  // Animation variants for the down arrow
  const blinkingArrow = {
    animate: {
      opacity: [1, 0.5, 1],
      y: [0, 3, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="talent-contracting-container">
      <h1 className="talent-title">Talent Contracting Process</h1>
      
      {/* Step 1 */}
      <div className="step-card">
        <h2 className="step-heading">Step 1: Requirement Requisition from Clients</h2>
        <p className="step-description">
          Receive detailed requirements from clients outlining the specific skills, experience, and attributes needed for the talent acquisition.
        </p>
        <div className="arrow-container">
          <motion.div 
            className="arrow-down"
            variants={blinkingArrow}
            animate="animate"
          >
            ↓
          </motion.div>
        </div>
      </div>
      
      {/* Step 2 */}
      <div className="step-card">
        <h2 className="step-heading">Step 2: Initial Talent Sourcing Decision</h2>
        <p className="step-description">
          Assess whether the required talent is available within the internal talent pool.
        </p>
        <div className="arrow-container">
          <motion.div 
            className="arrow-down"
            variants={blinkingArrow}
            animate="animate"
          >
            ↓
          </motion.div>
        </div>
      </div>
      
      {/* Step 3 options */}
      <div className="decision-container">
        <div className="decision-card yes-card">
          <h3 className="decision-heading">Yes</h3>
          <p className="decision-description">
            Internal Talent Available (Proceed to Step 3A)
          </p>
        </div>
        
        <div className="decision-card no-card">
          <h3 className="decision-heading">No</h3>
          <p className="decision-description">
            Internal Talent Not Available (Proceed to Step 3B)
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalentContractingProcess;