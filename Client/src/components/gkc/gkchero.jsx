import React from "react";
import "./gkchero.css";
import {
  FadeInLeft,
  FadeInDown,
  StaggeredContainer,
  AnimatedCard,
  childrighttnvariants,
  FadeInUp,
} from "../animation/animation";
import StepsProcess from "../trainingtalent/stepsprocess";
import MarketIntelligence from "../common/MarketIntelligence";

export default function Gkchero() {
  const approachPoints = [
    "Data-driven analytics",
    "Strategic advisory",
    "Competitive intelligence",
    "Market research",
    "Technology assessment",
  ];

  return (
    <div className="container p-4">
      <FadeInUp className="gkc-hero-section-header">GKC</FadeInUp>
      <p className="gkc-hero-section--subltile">
        Groei Knowledge Center (GKC) — the strategic knowledge hub of Groeinnov8
        — transforms complex data into clear, actionable insights that drive
        business success. GKC delivers value across four core pillars:
      </p>
      <div className="gkc-hero-section-devider-section">
        <div className="gkc-hero-section-devider-section-left">
          <h2>Strategic Insights & Advisory</h2>
          <p>
            Our comprehensive suite of business research and insights is
            designed to add value at every stage of our clients' strategic
            decision-making process.
          </p>

          <ul className="gkc-hero-section-devider-lists">
            {approachPoints.map((point, index) => (
              <li key={index} className="gkc-hero-section-devider-list">
                {" "}
                {point}
              </li>
            ))}
          </ul>
        </div>
        <FadeInLeft x={-70} className="gkc-hero-section-devider-section-right">
          <div className="gkc-hero-section-devider-section-right-box1"></div>
          <div className="gkc-hero-section-devider-section-right-box2"></div>
          <div className="gkc-hero-section-devider-section-right-box">
            <div className="gkc-hero-section-devider-section-right-box-main">
              <h3>Our Mission </h3>
              <p>
              mission To empower organizations with actionable intelligence that
                drives sustainable competitive advantage and strategic growth in
                an ever-evolving business landscape.
              </p>
            </div>
          </div>
        </FadeInLeft>
      </div>
    </div>
  );
}
