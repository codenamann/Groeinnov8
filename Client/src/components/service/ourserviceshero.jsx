import React from "react";
import "./ourserviceshero.css"; // For styling
import tsc from "../../assets/tsc.webp";
import {
  FadeInLeft,
  ScaleIn,
  FadeInDown,
  FadeInUp,
} from "../animation/animation";

export default function Ourserviceshero() {
  return (
    <div className="our-serivees-container-wraper">
      <div className="container ">
        <FadeInDown y={-40} className="our-services-hero-title">
          Our Services
        </FadeInDown>
        <FadeInUp className="our-services-hero-title-subtitle">
          Technical Services & Consulting
        </FadeInUp>
        <div class="our-services-container-wraper-devider">
          <div class="our-services-container-wraper-left">
            <ScaleIn
              scale={0.8}
              className="our-services-container-wraper-left-box"
            >
              <img
                src={tsc}
                alt="Greenbona"
                className="our-services-hero-imge"
              />
            </ScaleIn>
          </div>
          <div class="our-services-container-wraper-devider-right">
            <FadeInLeft
              x={-70}
              className="our-services-container-wraper-devider-paragraph"
            >
              Groeinnov8 team has deep industry experts delivering multiple
              technical solutions for different domains & clients globally
              across different regions/markets. The team believes in delivering
              not only traditional solutions but adds innovative thinking to
              make deliverables user-friendly and reduce maintenance/operations
              effort post delivering the solution. Apart from building the
              technical solutioning, Groei team does provide technical
              architecture consulting and design reviews for clients who need
              third eye to their solution development.
            </FadeInLeft>
          </div>
        </div>
      </div>
    </div>
  );
}
