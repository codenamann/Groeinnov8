// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./GenerativeAISection.css";

// const KeyTrainingAreasCarousel = () => {
//   const trainingItems = [
//     {
//       id: 1,
//       title: "Generative AI Tools for Data Analytics",
//       technologies:
//         "Power BI Copilot, Microsoft Copilot, AWS Bedrock, Azure ML/Studio, Google Vertex, ThoughtSpot",
//       objective:
//         "Train individuals in both structured and unstructured data analytics using low-code Gen-AI tools, empowering them to derive actionable insights from vast data sets.",
//       image:
//         "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     },
//     {
//       id: 2,
//       title: "Generative AI Applications in Data Analysis",
//       technologies: "ChatGPT for Data, Bard Analytics, Claude AI, Llama 2",
//       objective:
//         "Explore cutting-edge applications of generative AI in transforming data analysis workflows and decision-making processes.",
//       image:
//         "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     },
//     {
//       id: 3,
//       title: "AI-Powered Data Visualization",
//       technologies: "Tableau GPT, Looker AI, Qlik Sense, Domo AI",
//       objective:
//         "Master AI-enhanced visualization tools that automatically generate insights and recommendations from complex datasets.",
//       image:
//         "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   // Auto-advance carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === trainingItems.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? trainingItems.length - 1 : prevIndex - 1
//     );
//   };

//   const goToSlide = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? "-100%" : "100%",
//       opacity: 0,
//     }),
//   };

//   return (
//     <section className="key-training-carousel">
//       <div className="carousel-container">
//         <h1># Key Training Areas</h1>

//         <div className="carousel-wrapper">
//           <button className="nav-button prev" onClick={goToPrev}>
//             &lt;
//           </button>

//           <div className="carousel">
//             <AnimatePresence custom={direction} initial={false}>
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.5 }}
//                 className="slide"
//               >
//                 <div className="content">
//                   <h2>{trainingItems[currentIndex].title}</h2>
//                   <p className="tech-label">
//                     <strong>Technologies Covered:</strong>
//                   </p>
//                   <p className="tech-list">
//                     {trainingItems[currentIndex].technologies}
//                   </p>
//                   <p className="objective-label">
//                     <strong>Objective:</strong>
//                   </p>
//                   <p className="objective-text">
//                     {trainingItems[currentIndex].objective}
//                   </p>
//                 </div>
//                 <div className="image-container">
//                   <img
//                     src={trainingItems[currentIndex].image}
//                     alt={trainingItems[currentIndex].title}
//                   />
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <button className="nav-button next" onClick={goToNext}>
//             &gt;
//           </button>
//         </div>

//         <div className="indicators">
//           {trainingItems.map((item, index) => (
//             <button
//               key={item.id}
//               className={`indicator ${index === currentIndex ? "active" : ""}`}
//               onClick={() => goToSlide(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyTrainingAreasCarousel;

import React from 'react'

export default function GenerativeAISection() {
  return (
    <div>
      hii
    </div>
  )
}
