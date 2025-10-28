import React from "react";
import { whyUsData } from "../contensts";
import "./homewhay.css";

export default function Homewhay() {
  return (
    <div className="home-whyus-container">
      <div className="container">
        <h2 className="home-why-us-title">Why Us</h2>
        <div className="home-whyus-cards-wrapper">
          {whyUsData.map((item, index) => (
            <div className="home-whyus-card-wrapper" key={index}>
              <div className="home-whyus-card--icon">{item.icon}</div>
              <h3 className="home-whyus-card-title">{item.title}</h3>
              <p className="home-whyus-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
