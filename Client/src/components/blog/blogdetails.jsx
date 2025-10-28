import React, {useState} from 'react';
import { articles } from '../contensts';
import './blogdetails.css';
import { useParams, Link } from 'react-router-dom';
import { StaggeredContainer,FadeInUp, AnimatedCard , childrighttnvariants} from '../animation/animation';
import CommentForm from './blockcomment';

export default function BlogDetails() {

  const { id } = useParams();

  const currentIndex = articles.findIndex(
    (article) => article.title.toLowerCase().replaceAll(" ", "-") === id
  );
  const currentArticle = articles[currentIndex];
  const prevArticle = articles[currentIndex - 1];
  const nextArticle = articles[currentIndex + 1];

  return (
    <>
    <div className='blog-details-container'>
      <FadeInUp className='blog-details-wrapper-content'>
        <h2 className='blog-details-wrapper-title'>{currentArticle.title}</h2>
        <p className='blog-details-wrapper-date'>groeinov8 / {currentArticle.date}</p>
        <p className='blog-details-wrapper-intro'>{currentArticle.intro}</p>
        <h3 className='blog-details-wrapper-content-heading'>{currentArticle.subheading}</h3>
        <p className='blog-details-wrapper-content-sub-heading-subtile'>{currentArticle.subheadingdescription}</p>
        <ul>
        <StaggeredContainer>
          {currentArticle.features.map((feature, index) => (
            <AnimatedCard variants={childrighttnvariants} delay={index*30} key={index} >
              <li className='blog-details-wrapper-content-list'>
              <span className="blog-details-wrapper-content-list-title">{feature.title}</span>
              <span className='blog-details-wrapper-content-list-text'>{feature.text}</span>
              </li>

            </AnimatedCard>
          ))}
        </StaggeredContainer>
        </ul>
        <div className='blog-details-wrapper-content-navigation'>
          {prevArticle && (
            <Link to={`/blog/${prevArticle.title.toLowerCase().replaceAll(" ", "-")}`} className='blog-details-wrapper-content-link'>
              ← Previous: {prevArticle.title}
            </Link>
          )}
          {nextArticle ? (
            <Link to={`/blog/${nextArticle.title.toLowerCase().replaceAll(" ", "-")}`} className='blog-details-wrapper-content-link'>
              Next: {nextArticle.title} →
            </Link>
          ) : (
            <span className='blog-details-wrapper-content-done'>🎉 Done reading all blogs!</span>
          )}
        </div>
    
      </FadeInUp>
    </div>
< CommentForm />
    </>
  );
}
