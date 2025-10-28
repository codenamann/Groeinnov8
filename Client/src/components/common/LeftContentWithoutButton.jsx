import React from 'react';
import './LeftContentWithoutButton.css';
import { FadeInLeft, FadeInRight } from '../animation/animation';
export default function LeftContentWithoutButton({ title, subtitle, imgsrc, reverse = false }) {
  return (
    <div className="left-contetn-without-button-wrapper">
     <div className='container'> <div className={`left-contetn-without-button-inner ${reverse ? 'left-contetn-without-button-reverse' : ''}`}>
        <FadeInLeft className="left-contetn-without-button-text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </FadeInLeft>
        <FadeInRight className="left-contetn-without-button-image">
          <img src={imgsrc} alt={title} className="left-contetn-without-button-img" />
        </FadeInRight>
      </div></div>
    </div>
  );
}
