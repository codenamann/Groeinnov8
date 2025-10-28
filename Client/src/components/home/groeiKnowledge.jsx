import React from 'react'
import './groeiknowledge.css';
import { FadeInLeft, FadeInRight } from '../animation/animation';
import {Button} from '../common/Button';
import gkc from "../../assets/gkc.png";
export default function Groeiknowledge({
  className = '',
  fullheight = false,

  backgroundImage,
  buttoname,

  redirect,

}) {
          const servicesData = [
                    {
                      title: "Strategic Insights & Advisory",
                      description: "Empowering strategic planning through in-depth market trend analysis."
                    },
                    {
                      title: "Market & Competitor Intelligence",
                      description: "Uncovering growth opportunities with deep competitor and market understanding."
                    },
                    {
                      title: "Content & Creative Design Services",
                      description: "Designing impactful dashboards, visualizations, and infographics that communicate insights effectively."
                    },
                    {
                      title: "Client & Account Insights",
                      description: "Providing detailed customer intelligence and relationship management support."
                    }
                  ];
                  
  return (
    <div
      className={`groei-knowledge-center-container `}
      transition={{ duration: 1 }}
    >
      
      <div className={` container groei-knowledge-center`}>
        
        <div 
          className={`groei-knowledge-center-content `}
        >
          <FadeInLeft >
          <h2 className={` groei-knowledge-center-title`}>GKC - Groei Knowledge Centre</h2>
          <p className={`groei-knowledge-center-subtitle `}>Groei Knowledge Center (GKC) — the strategic knowledge hub of Groeinnov8 transforms complex data into clear, actionable insights that drive business success. GKC delivers value across four core pillars:</p>
          <ul>
                    {servicesData.map((item, index)=>(<li><span className='fw-semibold'>{item.title}: </span>{item.description}</li>))}
          </ul>
          <p className='my-4'>With deep domain expertise, advanced technology, and a client-first approach, GKC enables organizations to innovate faster, operate more efficiently, and achieve sustainable growth through insight-driven decision-making.</p>
          <Button buttoname='Read More' redirect="/gkc-groei-knowledge-center" />
          </FadeInLeft>
        </div>

        <div 
          className={`groei-knowledge-center-image-container`}
        >
          <FadeInRight>
          <img src={gkc} alt='groei-knowledge-center-image' className={`groei-knowledge-center-image`} />
          </FadeInRight>
        </div>

      </div>
    </div>
  );
}
