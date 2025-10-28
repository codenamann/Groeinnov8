import React from "react";
import "./ContactPage.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="header">
          <h1 className="contact-title">How can we contact you?</h1>
          <p className="contact-title-subtitle text-center">
            We're here to help—reach out to us anytime, and we'll get back to
            you as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
