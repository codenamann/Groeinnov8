import React from "react";
import { articles } from "../contensts";
import "./blog.css";
import { Link } from "react-router-dom";
import {
  StaggeredContainer,
  AnimatedCard,
  childdownvariants,
  childupvariants,
} from "../animation/animation";
const Blog = () => {

  return (
    <div className="blog-page-container">
      <div className="container ">
        <StaggeredContainer className="blog-page-wrapper-cards">
          {articles.map((article, index) => (
            <AnimatedCard
              variants={childdownvariants}
              className="blog-page-wrapper-card-main"
            >
              <Link
                className="blog-page-wrapper-card-link-img"
                to={`${article.title.toLocaleLowerCase().replaceAll(" ", "-")}`}
                key={index}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="blog-page-wrapper-card-link-img-img"
                />
              </Link>
              <div className="our-publications-wrapper-card-content">
                <p className="blog-page-wrapper-card-uncategorized">
                  Uncategorized
                </p>
                <h3 className="blog-page-wrapper-card-title">
                  {article.title}
                </h3>
                <p className="blog-page-wrapper-card-title-date">
                  groeinnov8 / {article.date}
                </p>
                <p className="blog-page-wrapper-card-title-intro">
                  {article.intro.split(" ").length > 20
                    ? article.intro.split(" ").slice(0, 20).join(" ") + "..."
                    : article.intro}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </StaggeredContainer>
    
      </div>
    </div>
  );
};
export default Blog;
