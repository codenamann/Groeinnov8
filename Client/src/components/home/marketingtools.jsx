import React from 'react'
import './marketingtools.css';
import { ScaleIn} from '../animation/animation';
export default function Marketingtools({ tools }) {
         

          return (
                    <div className='marketing-toolse-container container'>
                              <h2 className='marketing-toolse-heading'>Fuel your processes with market leading tools and cloud services</h2>
                    <div className="marketing-toolse-grid">
              {tools.map((tool, index) => (
                <ScaleIn scale={0.8}  key={index} className="marketing-toolse-card">
                  <img src={tool.icon} alt={tool.title} className="marketing-toolse-icon" />
                  <div className="marketing-toolse-title">{tool.title}</div>
                </ScaleIn>
              ))}
            </div>
                    </div>
            
          );
        }
        
