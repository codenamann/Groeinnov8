import React from "react";
import { motion } from "framer-motion";
import "./MarketIntelligence.css";
import grcmarketin from "../../assets/grcmarketin.png";
import gkccontent_create from "../../assets/gkccontent-create.jpg";
import client from "../../assets/client.jpg";
import strategic from "../../assets/strategic.png";
import marketIntelligenceImage from "../../assets/business_insights.webp";

import {
  FadeInDown,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  childleftnvariants,
  childupvariants,
  childdownvariants,
  childrighttnvariants,
  StaggeredContainer,
  AnimatedCard,
} from "../animation/animation";

const MarketIntelligence = () => {
  return (
    <div className="market-intelligence-section">
      {/* Strategic Insights */}
      <motion.div className="top-section">
        <div className="intel-content">
          <FadeInDown>
          <h2>Strategic Insights & Advisory</h2>
          </FadeInDown>
          
          <div className="services-grid">
            <div className="services-column">
              <h5>Strategic Planning</h5>
              <StaggeredContainer>
              {[
                "GTM Strategy & Roadmap Development",
                "Operating Model Optimization",
                "Investment Tracking",
                "Offering/ Product Maturity Analysis",
              ].map((item, i) => (
                <AnimatedCard variants={childupvariants} className="service-item" key={i}>
                  <span className="checkmark">✓</span>
                  <span>{item}</span>
                </AnimatedCard >
              ))}
              </StaggeredContainer>

            </div>
          </div>
        </div>
        <FadeInRight className="image-container">
          <img
            src={strategic}
            alt="Strategic Insights"
            className="intelligence-image"
          />
        </FadeInRight>
      </motion.div>

      {/* Market & Competitive Intelligence */}
      <motion.div
        className="top-section top-section-second"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FadeInLeft className="image-container">
          <img
            src={grcmarketin}
            alt="Market Intelligence"
            className="intelligence-image marketing-order-image"
          />
        </FadeInLeft>
        <div className="intel-content marketing-order-content">
          <FadeInRight>
          <h2>Market & Competitive Intelligence</h2>
          </FadeInRight>
          <div className="services-grid">
            <div className="services-column">
              <h5>Market Trends and Analysis</h5>
              <StaggeredContainer>
              {[
                "Business Trends Analysis",
                "Technology Trends Analysis",
                "Market Sizing/ Assessment",
                "Hype Cycles Analysis",
              ].map((item, i) => (
                <AnimatedCard variants={childrighttnvariants} className="service-item" key={i}>
                  <span className="checkmark">✓</span>
                  <span>{item}</span>
                </AnimatedCard>
              ))}
              </StaggeredContainer>
              
            </div>
            <div className="services-column">
              <FadeInRight>
              <h5>Competitive Benchmarking</h5>

              </FadeInRight>
             <StaggeredContainer>
             {[
                "Offerings/Product Portfolio Analysis",
                "Technology Portfolio Analysis",
                "Financial Assessment",
              ].map((item, i) => (
                <AnimatedCard variants={childrighttnvariants} className="service-item" key={i}>
                  <span className="checkmark">✓</span>
                  <span>{item}</span>
                </AnimatedCard>
              ))}
             </StaggeredContainer>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Client / Account Insights */}
      <motion.div
        className="top-section top-section-second"
      >
  
        <motion.div className="intel-content">
          <FadeInUp>
          <h2>Client / Account Insights</h2>
          </FadeInUp>
          <div className="services-grid">
            <div className="services-column">
            <FadeInLeft>
              <h5>Customer Insights</h5>
              </FadeInLeft>
              <StaggeredContainer>
              {[
                "Client Portfolio Analysis",
                "Gap/Opportunity Analysis",
                "Investment Tracking",
              ].map((item, i) => (
                <AnimatedCard variants={childleftnvariants} className="service-item" key={i}>
                  <span className="checkmark">✓</span>
                  <span>{item}</span>
                </AnimatedCard>
              ))}
              </StaggeredContainer>
         
            </div>
            <div className="services-column">
              <h5>Relationship Management</h5>
              <StaggeredContainer>
              {[
                "Key Decision Makers Insights",
                "Executive Profiling",
                "Account Relationships Mapping",
              ].map((item, i) => (
            <AnimatedCard variants={childleftnvariants} className="service-item" key={i}>
                  <span className="checkmark">✓</span>
                  <span>{item}</span>
                </AnimatedCard>
              ))}
              </StaggeredContainer>
            
            </div>
          </div>
        </motion.div>
        <FadeInRight className="image-container">
          <img
            src={client}
            alt="Client Insights"
            className="intelligence-image"
          />
        </FadeInRight>
      </motion.div>

      {/* Content & Creative Design */}
      <motion.div
        className="top-section top-section-second"
     
      >
          <FadeInLeft className="image-container">
          <img
            src={gkccontent_create}
            alt="Creative Design"
            className="intelligence-image"
          />
        </FadeInLeft>
        <motion.div className="intel-content">
          <FadeInUp>
          <h2>Content & Creative Design Services</h2>
          </FadeInUp>
          <div className="services-grid">
            <div className="services-column">
              <FadeInRight>
              <h5>Content Services</h5>
              </FadeInRight>
              <StaggeredContainer>
              {[
                "POVs & Thought Leadership (Whitepaper/ Blogs)",
                "Knowledge Management",
                "Capability Presentations",
                "SWOT Analysis",
                "Excel/Power BI Dashboards",
              ].map((item, i) => (
                <AnimatedCard variants={childrighttnvariants}  className="service-item" key={i}>
                  <span className="checkmark">✓</span>
                  <span>{item}</span>
                </AnimatedCard>
              ))}
              </StaggeredContainer>
             
            </div>
            <div className="services-column">
              <h5>Presentation / Slide design</h5>
              <StaggeredContainer>
              {[
                "Customized theme creation",
                "Style based design",
                "Animation slides",
              ].map((item, i) => (
                <AnimatedCard variants={childrighttnvariants}  className="service-item" key={i}>
                  <span className="checkmark">✓</span>
                  <span>{item}</span>
                </AnimatedCard>
              ))}
              </StaggeredContainer>
              
            </div>
          </div>
        </motion.div>
      

      
      </motion.div>

    </div>
  );
};

export default MarketIntelligence;
