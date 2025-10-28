import React from 'react';
import './Hero.css';
import {Button} from './Button';
import { FadeInLeft , FadeInRight  } from '../animation/animation'; // Adjust the import path as necessary
export default function Hero({
  className = '',
  title,
  fullheight = false,
  subtitle,
  image,
  backgroundImage,
  buttoname,
  redirect,
  animated = true,

}) {
  return (
    <div
      className={`home-hero-container ${fullheight ? "fullheight" : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      transition={{ duration: 1 }}
    >
      <div className={`home-hero container ${className}`}>
        
        <div 
          className="home-hero-content"
        >
          <FadeInLeft >
          <h1 className="home-hero-title">{title}</h1>
          <p className="home-hero-subtitle">{subtitle}</p>

         
            {/* <Link to={redirect} className="home-hero-button">
              {buttoname} <MdPlayArrow className="home-hero-button-icon" />
            </Link> */}
          <Button buttoname={buttoname} redirect={redirect} /><br/>
          </FadeInLeft>
        </div>

        <div
          className="home-hero-image-container"
        >
          <FadeInRight>
          <img src={image} alt="Hero" className="home-hero-image" />
          </FadeInRight>
        </div>

      </div>
    </div>
  );
}
