import React from 'react';
import './stepsprocess.css'; // For styling
import traningcontactring from '../../assets/traningcontactring.png'
const StepsProcess = () => {
  const steps = [
    {
      title: "Step 3B: External Talent Acquisition Process",
      actions: [
        "Begin the external recruitment process by defining the job description and required qualifications based on the client’s requisition.",
        "Source candidates through various channels, including job portals, recruitment agencies, social media, and professional networks.",
        "Review resumes to shortlist candidates who meet the required qualifications and experience.",
        "Greenbona conduct preliminary assessment rounds, which include technical and aptitude tests tailored to the job requirements.",
        "Expert Interviews: Interviews conducted by subject matter experts to evaluate candidates’ skills, experience, and cultural fit.",
        "Shortlist the top-performing candidates based on the preliminary assessments.",
        "Prepare and present detailed profiles of the shortlisted candidates to the client for final selection."
      ]
    },
    {
      title: "Step 4: Final Selection & Onboarding",
      actions: [
        "Assist the client in the final selection process, which may include additional interviews or assessments.",
        "Facilitate the onboarding process for the selected candidates, ensuring a smooth transition into the client’s organization.",
        "Provide ongoing support and training as needed to help new hires integrate and succeed in their roles."
      ]
    },

  ];

  return (
    <div className="steps-container ">
      <div className='container' style={{maxWidth:'1200px'}}>
        <h2 className='steps-container-headings'>Our Talent Sourcing Process</h2>
      {/* {steps.map((step, index) => (
        <div key={index} className="step-box">
          <h3 className="step-title">{step.title}</h3>
          <ul className="action-list">
            {step.actions.map((action, idx) => (
              <li key={idx} className="action-item">
                {step.title !== "Tech Training" && (
                  <strong>Action {idx + 1}:</strong>
                )}
                {" "} <span className='text-gray'>{action}</span>
              </li>
            ))}

          </ul>
          
        </div>
      ))} */}
      <img src={traningcontactring} className='steps-container-image' />
       <div className="step-box">
            <h3 className="step-title">Tech Training</h3>
            <p>Tech Training is designed to equip individuals and organizations with the skills needed to thrive in today’s rapidly evolving IT landscape. We provide specialized training in the latest high-demand technologies, including Low Code Business Applications, Generative AI (GenAI) tools, and Business Process Automation, ensuring that our clients are at the forefront of innovation.</p>
            </div>
      </div>
     
    
    </div>
  );
};

export default StepsProcess;
