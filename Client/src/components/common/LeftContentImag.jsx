
import React from 'react';
import { Link } from 'react-router-dom';
import './LeftContentImag.css';
import { FadeInLeft, FadeInRight } from '../animation/animation';
import { motion } from 'framer-motion';
import {Button} from './Button';

export default function LeftContentImag({
  className = '',
  title,
  fullheight = false,
  subtitle,
  image,
  backgroundImage,
  buttoname,
  subtitle2,
  redirect,
  contentorder = '',
  imgorder = '',
  imgclassname,
  titleclassname,
  subtitleclassname
}) {
  return (
    <div
      className={`left-content-image-container ${fullheight ? "fullheight" : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      transition={{ duration: 1 }}
    >
      
      <div className={` container left-content-image ${className}`}>
        
        <div 
          className={`left-content-image-content ${contentorder}`}
        >
          <FadeInLeft >
          <h2 className={` left-content-image-title ${titleclassname}`}>{title}</h2>
          <p className={`left-content-image-subtitle ${subtitleclassname}`}>{subtitle}</p>
{
          subtitle2 && (
            <p className="left-content-image-subtitle">{subtitle2}</p>
          )         
}
          
          <Button buttoname={buttoname} redirect={redirect} />
          </FadeInLeft>
        </div>

        <div 
          className={`left-content-image-image-container ${imgorder}`}
        >
          <FadeInRight>
          <img src={image} alt='left-content-image-image' className={`left-content-image-image ${imgclassname}`} />
          </FadeInRight>
        </div>

      </div>
    </div>
  );
}
