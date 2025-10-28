import React from "react";
import "./whatwedo.css";
import technical_servies from "../../assets/technical-service-a-consulting.webp";
import {  FadeInDown,  ScaleIn, StaggeredContainer, AnimatedCard } from "../animation/animation";
import { Button } from "../common/Button";

export default function Whatwedo() {
  const technicalservice = [
    "Digitization & Automation",
    "Data Analytics",
    "Next Gen Reporting",
    "Business Applications including Low & Custom Apps",
    "Bots powered by GenAI",
    "Cloud Solutions",
  ];
  const childVariants = {
          hidden: { opacity: 0, x: 20 },
          show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        };
  return (
    <div className="wraper-what-we-do-container">
      <div className="container wraper-what-we-do-content">
        <div className="wraper-what-we-do-content-left">
          <FadeInDown className="what-we-do-title">What we do</FadeInDown>
          <ScaleIn>
          <img src={technical_servies} className="what-we-do-left-img" alt="" />
          </ScaleIn>
        </div>
        <div className="wraper-what-we-do-content-right">
          <h3 className="wraper-what-we-do-content-right-header">Technology & Consulting Services</h3>
           <StaggeredContainer className="what-we-do-list-items">
                    {technicalservice.map((item, index) => (
                    <AnimatedCard variants={childVariants} delay={index*20} key={index} className="what-we-do-list-item">
                    {item}
                    </AnimatedCard>
                    ))}
           </StaggeredContainer>
           <div className="what-we-do-button">
           <Button buttoname="Read More" redirect="/our-services"  />

           </div>
        </div>
      </div>
    </div>
  );
}
