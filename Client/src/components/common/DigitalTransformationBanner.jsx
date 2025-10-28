// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import "./DigitalTransformationBanner.css";

// const DigitalTransformationBanner = () => {
//   return (
//     <div className="banner-container">
//       <div className="banner-content">
//         <div className="text-content">
//           <motion.h1
//             className="main-heading"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Your strategic partner for end to end digital, innovation & transformation
//             journey
//           </motion.h1>

//           <motion.p
//             className="sub-heading"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Helping businesses leverage emerging technologies to stay ahead of
//             the curve.
//           </motion.p>
//         </div>

//         <motion.div
//           className="image-container"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <img
//             src="/api/placeholder/800/600"
//             alt="Team collaborating on digital transformation"
//             className="banner-image"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default DigitalTransformationBanner;

import React from "react";
import { motion } from "framer-motion";
import "./DigitalTransformationBanner.css";
import HeroImage from "../../assets/ai-img.png"; // Replace with your own image

const DigitalTransformationBanner = () => {
  return (
    <div className="hero-section-Digital">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
        Your strategic partner in digital innovation & transformation
        </h1>
        <p>
          Helping businesses leverage emerging technologies to stay ahead of the
          curve.
        </p>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={HeroImage} alt="Team Presentation" />
      </motion.div>
    </div>
  );
};

export default DigitalTransformationBanner;
