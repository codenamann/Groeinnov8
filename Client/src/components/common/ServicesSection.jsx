// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./ServicesSection.css";

// const ServicesSection = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const diagramVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="services-container">
//       <div className="services-background">
//         <div className="wave-top"></div>
//       </div>

//       <motion.div
//         className="services-content"
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={controls}
//       >
//         <motion.div className="services-header" variants={titleVariants}>
//           <h1>Our Services</h1>
//           <h3>Technical Services & Consulting</h3>
//         </motion.div>

//         <div className="services-main">
//           <motion.div className="services-diagram" variants={diagramVariants}>
//             <div className="diagram-outer">
//               <div className="diagram-row purple">
//                 <div className="box web-dev">
//                   <span>Web/App Development</span>
//                   <small>
//                     (REACT, Power Apps, AppDev, Mendix and other Market Leaders)
//                   </small>
//                 </div>
//                 <div className="box reporting">
//                   <span>Reporting/Analytics</span>
//                   <small>
//                     (MicroStrategy, Power BI, Tableau and other Market Leaders)
//                   </small>
//                 </div>
//               </div>

//               <div className="diagram-middle blue">
//                 <div className="cloud-service">Cloud Service (Azure/AWS)</div>
//                 <div className="data-layers">
//                   <div className="layer">Aggregate Layer</div>
//                   <div className="layer">Refined Data Product Layer</div>
//                   <div className="layer">Transformation Layer</div>
//                   <div className="layer">Landing Layer</div>
//                   <div className="layer">Data Storage Layer</div>
//                 </div>
//               </div>

//               <div className="diagram-sides">
//                 <div className="side left">
//                   <span className="vertical-text">GenerativeAI</span>
//                   <span className="vertical-text">
//                     (Azure OpenAI, IBM Watson, Google Vertex)
//                   </span>
//                 </div>
//                 <div className="side right">
//                   <span className="vertical-text">Process Automation</span>
//                   <span className="vertical-text">
//                     (UiPath, MS Power Automate, specific industry domain)
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div className="services-text" variants={textVariants}>
//             <p>
//               Groeinnov8 team has deep industry experts delivering multiple
//               technical solutions for different domains & clients globally
//               across different regions/markets. The team believes in delivering
//               not only traditional solutions but adds innovative thinking to
//               make deliverables user friendly and reduce maintenance/operations
//               effort post delivering the solution.
//             </p>
//             <p>
//               Apart from building the technical solutioning, Groei team does
//               provide technical architecture consulting and design reviews for
//               clients who needs third eye to their solution development.
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Add CSS file import
// import "./ServicesSection.css";

// export default ServicesSection;

// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import "./ServicesSection.css"; // Import the CSS file

// const ServicesSection = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         duration: 0.8,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="services-container">
//       {/* Torn paper effect top */}
//       <div className="torn-paper-top"></div>

//       <motion.div
//         className="services-content"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1 variants={titleVariants} className="services-title">
//           Our Services
//         </motion.h1>
//         <motion.h2 variants={titleVariants} className="services-subtitle">
//           Technical Services & Consulting
//         </motion.h2>

//         <div className="services-layout">
//           <motion.div variants={itemVariants} className="services-diagram">
//             <div className="diagram-container">
//               {/* Top panel with Web/App and Reporting */}
//               <div className="top-panels">
//                 <div className="panel webapp">
//                   <p>Web/App Development</p>
//                   <p className="small-text">
//                     (REACT, Power Apps, Appian, Mendix and other Market Leaders)
//                   </p>
//                 </div>
//                 <div className="panel reporting">
//                   <p>Reporting/Analytics</p>
//                   <p className="small-text">
//                     (MicroStrategy, Power BI, Tableau and other Market Leaders)
//                   </p>
//                 </div>
//               </div>

//               {/* Cloud Service Box */}
//               <div className="cloud-service">
//                 <p>Cloud Service (Azure/AWS)</p>

//                 {/* Layers */}
//                 <div className="layer-box">
//                   <div className="layer">Aggregate Layer</div>
//                   <div className="layer">Refined Data Product Layer</div>
//                   <div className="layer">Transformation Layer</div>
//                   <div className="layer">Landing Layer</div>
//                   <div className="layer">Data Storage Layer</div>
//                 </div>
//               </div>

//               {/* Side Labels */}
//               <div className="side-label left-label">
//                 <p className="vertical-text">
//                   Generation AI (Azure OpenAI, BARD, Bedrock, Coq, Vicuna,
//                   Google, Vertex)
//                 </p>
//               </div>
//               <div className="side-label right-label">
//                 <p className="vertical-text">
//                   Process Automation (UiPath, AutomationAnywhere, Power
//                   Automation)
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div variants={itemVariants} className="services-description">
//             <p>
//               Groeinnov8 team has deep industry experts delivering multiple
//               technical solutions for different domains & clients globally
//               across different regions/markets. The team believes in delivering
//               not only traditional solutions but adds innovative thinking to
//               make deliverables user friendly and reduce maintenance/operations
//               effort post delivering the solution.
//             </p>
//             <p>
//               Apart from building the technical solutioning, Groei team does
//               provide technical architecture consulting and design reviews for
//               clients who needs third eye to their solution development.
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Torn paper effect bottom */}
//       <div className="torn-paper-bottom"></div>
//     </div>
//   );
// };

// export default ServicesSection;

import React from "react";
import { motion } from "framer-motion";
import "./ServicesSection.css";
import DesignImage from "./../../assets/content_and_creative_design_services.webp";

const ContentDesignSection = () => {
  return (
    <div className="content-section">
      <motion.div
        className="content-image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={DesignImage} alt="Content Design Illustration" />
      </motion.div>

      <motion.div
        className="content-text"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Content and Creative Design Services</h2>
        <div className="services-list">
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Content Services
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Capability Presentation
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Presentation/Slide Design
            </motion.li>
         
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              POVs (Point of Views) and Thought Leadership (Whitepaper/Blogs)
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              SWOT Analysis
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Customer Theme Creation
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentDesignSection;
