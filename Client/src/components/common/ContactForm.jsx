import React, { useState } from "react";
import { motion } from "framer-motion";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";
import "./ContactForm.css";

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const API_BASE_URL = import.meta.env.VITE_SERVER_URI;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    if (submitError) {
      setSubmitError("");
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (value.trim().length > 100)
          return "Name must be less than 100 characters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email format";
        return "";

      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 5)
          return "Subject must be at least 5 characters";
        if (value.trim().length > 200)
          return "Subject must be less than 200 characters";
        return "";

      case "message":
        if (value.length > 2000)
          return "Message must be less than 2000 characters";
        return "";

      default:
        return "";
    }
  };

  const validateForm = (data) => {
    const newErrors = {};

    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setSubmitError("");

    // Validate form
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Attempting to connect to:", `${API_BASE_URL}/api/contact`);

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (data.success) {
        setIsSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }, 4000);
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submit error:", error);

      if (
        error.message.includes("Failed to fetch") ||
        error.name === "TypeError"
      ) {
        setSubmitError(
          "Network error. Please check if the server is running and try again."
        );
      } else if (error.message.includes("Too many")) {
        setSubmitError(
          "Too many requests. Please wait a moment before trying again."
        );
      } else {
        setSubmitError(
          error.message || "Failed to send message. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="contact-form-container"
    >
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
          <h3 className="success-title">Message Sent Successfully!</h3>
          <p className="success-text">
            Thank you for reaching out! We've received your message and will get
            back to you shortly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="error-banner"
              style={{
                background: "#fee",
                border: "1px solid #fcc",
                borderRadius: "5px",
                padding: "12px",
                marginBottom: "20px",
                color: "#c33",
              }}
            >
              <svg
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {submitError}
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            <FormInput
              label="Your name"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Enter your name"
              disabled={isSubmitting}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormInput
              label="Your email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormInput
              label="Subject"
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder="Enter subject"
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="error-message">{errors.subject}</p>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="textarea-container">
            <label htmlFor="message" className="textarea-label">
              Your message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="textarea-field"
              placeholder="Enter your message"
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
            <div
              className="character-count"
              style={{
                fontSize: "12px",
                color: "#666",
                textAlign: "right",
                marginTop: "5px",
              }}
            >
              {formData.message.length}/2000
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="form-button-container">
            <Button
              className="contact-submit-button"
              type="submit"
              isLoading={isSubmitting}
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default ContactForm;
