import React from "react";
import Gkchero from "../gkc/gkchero";
import ContentDesignSection from "../common/ServicesSection";
import Services from "../common/Services";
import MarketIntelligence from "../common/MarketIntelligence";
import WhyTrainSection from "../common/WhyTrainSection";
// import Ourserviceshero from "../common/ourserviceshero";
import Ourserviceshero from './ourserviceshero'
import StepsProcess from '../trainingtalent/stepsprocess'
import KeyTrainingAreas from '../common/KeyTrainingAreas'
import Bussiness_insights from "../common/BusinessInsights";
import './OurService.css' ;

const OurService = () => {
  return (
    <div className="our-service-page">
      <div className="our-service-grek-section">
      <Ourserviceshero />

      </div>
      
      <Services />
      <div className="container">
        <h2 className="our-service-groei-heading">Groeinnov8 Knowledge Center (GKC)</h2>
      <MarketIntelligence />
      </div>
      
      {/* <TalentContractingProcess /> */}
      <StepsProcess />
      <KeyTrainingAreas />

      <WhyTrainSection />
    </div>
  );
};

export default OurService;
