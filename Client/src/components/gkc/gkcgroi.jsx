import React from "react";
import ContentDesignSection from "../common/ServicesSection";
import MarketIntelligence from "../common/MarketIntelligence";
import Services from "../common/Services";
import { FadeInUp } from "../animation/animation";

export default function Gkcgroi() {
  return (
    <>
      {/* <Gkchero /> */}

      <div className="container">
        <FadeInUp className="gkc-hero-section-header-updates">GKC</FadeInUp>
        <p className="gkc-hero-section--subltile--upadates">
          Our mission is to empower organizations with actionable intelligence
          that drives sustainable competitive advantage and strategic growth in
          an ever-evolving business landscape.
        </p>
      </div>
      
      <MarketIntelligence />
      <Services />
      
    
      {/* <TechnicalServicesSection /> */}
    </>
  );
}
