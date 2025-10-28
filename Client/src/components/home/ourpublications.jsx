import React from "react";
import { articles } from "../contensts";
import "./ourpublications.css";
import { Link } from "react-router-dom";
const OurPublications = () => {
  return (
    <div className="our-publications-container">
      <div className="container">
        <h2 className="our-publications-wrapper-heading">Our Publications</h2>
        <div className="our-publications-wrapper-cards">
          {articles.map((article, index) => (
            <div className="our-publications-wrapper-card" key={index}>
              <Link
                className="our-publications-links"
                to={`blog/${article.title
                  .toLocaleLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="our-publications-wrapper-card-image"
                />
                <div className="our-publications-wrapper-card-content">
                  <h3 className="our-publications-wraper-cards-title">
                    {article.title}
                  </h3>
                  <p className="our-publications-wraper-cards-date">
                    {article.date}
                  </p>
                  <p> Read More ➤</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurPublications;
