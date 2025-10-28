import React, { useState } from 'react';
import './blockcomment.css';
import { FadeInUp } from '../animation/animation';
import { motion } from 'framer-motion'; // Required for animation
import FormInput from "../UI/FormInput";

const CommentForm = () => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false,
  });

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (!data.saveInfo) {
      newErrors.saveInfo = "You must agree to save your information.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          comment: '',
          name: '',
          email: '',
          website: '',
          saveInfo: false,
        });
      }, 3000);
    }, 1500);
  };

  return (
    <FadeInUp className='comment-form-wrapper'>
      <div className="comment-form-container">
        <h2>Leave a Comment</h2>
        <p>Your email address will not be published. Required fields are marked <span className="required">*</span></p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="success-message"
          >
            <div className="success-icon">
              <svg
                className="checkmark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="success-title">Thank you!</h3>
            <p className="success-text">
              Your message has been sent successfully. We'll get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              name="comment"
              placeholder="Type your comment here..."
              value={formData.comment}
              onChange={handleChange}
            />

            <div className="input-row">
              <div>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              <div>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div>
                <FormInput
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="checkbox-row">
              <input
                type="checkbox"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
              />
              <label>
                Save my name, email, and website in this browser for the next time I comment.
              </label>
       
  
            </div>
            {errors.saveInfo && <p className="error-message">{errors.saveInfo}</p>}

            <button type="submit" className="submit-button">
              {isSubmitting ? "Submitting..." : "Post Comment"}
            </button>
          </form>
        )}
      </div>
    </FadeInUp>
  );
};

export default CommentForm;
