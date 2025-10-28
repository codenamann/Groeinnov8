
import React from 'react';
import './Whoweare.css';
import { FadeInLeft, FadeInRight } from '../animation/animation';
import { Button } from '../common/Button';
import background2 from "../../assets/consulting.webp";

export default function Whoweare({
  className = '',
  contentorder = '',
  imgorder = '',
  imgclassname,
}) {
  return (
    <div
      className={`who-we-are-container`}
      transition={{ duration: 1 }}
    >
        <div className={` container who-we-are ${className}`}>  
        <div 
          className={`who-we-are-content ${contentorder}`}
        >
          <FadeInLeft >
          <h2 className={` who-we-are-title`}>Who we are</h2>
          <p className={`who-we-are-subtitle`}>Groeinnov8 is a forward-thinking digital transformation company. We specialize in leveraging cutting-edge technologies to drive innovation and digital growth.</p>
          <h3>Our expertise spans across</h3>
          <ul>
          <li>Low Code Web/App Development</li>
          <li>Business Process Automation</li>
          <li>Talent Contracting & Sourcing</li>
          <li>Knowledge Services</li>
          </ul>
          <p>Utilizing industry-leading platforms such  Appian, Sales force, Microsoft suit, Tableau, Automation Anywhere etc. Additionally, we offer advanced analytics solutions using tools like MicroStrategy, Fabric/Power BI, and Tableau. We also integrate Generative AI through top-tier platforms including Azure Open AI, AWS Bedrock, Microsoft Co-Pilots, and Google Vertex, helping businesses unlock their full digital potential.</p>
          <p className='mb-4'>We empower businesses worldwide, including in North America, Europe, and Japan, by delivering advanced, tailored IT solutions. Our team of seasoned experts leverages the latest technologies to build, transform, and manage IT operations, ensuring transparency, honesty, and efficiency in everything we do.</p>
          <Button buttoname='Read More'  redirect='/about-us' />
          </FadeInLeft>
        </div>

        <div 
          className={`who-we-are-image-container ${imgorder}`}
        >
          <FadeInRight>
          <img src={background2} alt='who-we-are-image' className={`who-we-are-image  ${imgclassname || ''}`} />
          </FadeInRight>
        </div>

      </div>
    </div>
  );
}
