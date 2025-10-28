import React from "react";
import "./policy.css"; // Custom CSS for styling

const PrivacyPolicy = () => {
  return (
    <>
      <div className="policy-container">
        <h2>Privacy Policy </h2>
        <p>
          At Groeinnov8, we value your privacy and are committed to protecting
          your personal data. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website
           <a className="text-decoration-none mx-2" href="https://groeinnov8.com">https://groeinnov8.com</a> , use our services, or interact with
          us.
          {/* We at Groeinnov8 are committed to protecting your privacy. This Privacy Policy outlines the type of information we collect, how it is used, and the measures we take to protect your personal data. */}
        </p>
        <p className="fs-6 effective-date-privacy">Effective Date: 1 Jan 2025</p>

        <p>
          {" "}
          By accessing or using our website or services, you consent to the
          collection and use of your information as described in this Privacy
          Policy.
        </p>
        <h3>Information We Collect</h3>
        <p>We may collect the following types of information: </p>
        <ul>
          <li>
            Personal Identifiable Information (PII): This includes but is not
            limited to your name, email address, phone number, company name, and
            job title when you contact us or sign up for our services.
          </li>
          <li>
            Non-Personal Information: This includes technical data such as your
            browser type, operating system, pages visited, and other technical
            information that helps us improve our website and services.
          </li>
          <li>
            Employment and Talent Data: If you are a job applicant or
            contractor, we may collect resumes, employment history, references,
            and other related data necessary to process talent sourcing or
            employment opportunities.
          </li>
        </ul>
        <h3>How We Use Your Information</h3>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>
            To provide IT solutions and talent sourcing services that meet your
            business needs.s
          </li>
          <li>
            To communicate with you, including responding to inquiries,
            providing customer support, and sending relevant updates and offers.
          </li>
          <li>
            For marketing purposes, such as sending newsletters or promotional
            emails about our services (you can opt-out at any time).
          </li>
          <li>
            For legal or regulatory compliance and to enforce our Terms of
            Service.
          </li>
        </ul>
        <h3>How We Protect Your Information</h3>
        <p>
          We take reasonable precautions to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction. This
          includes implementing physical, electronic, and administrative
          safeguards such as encryption, secure servers, and regular security
          audits.
        </p>
        <p>
          However, please be aware that no method of transmitting or storing
          data is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h3>Sharing Your Information</h3>
        <p>
          We do not sell, rent, or trade your personal data to third parties.
          However, we may share your information in the following situations:
        </p>
        <ul>
          <li>
            With service providers who assist us in the delivery of our
            services, such as hosting, customer support, or marketing.
          </li>
          <li>
            To comply with legal obligations or to protect our rights, property,
            or safety, as well as the rights of others.
          </li>
          <li>
            In case of business transfer, such as mergers, acquisitions, or
            sales of assets, your data may be transferred to the new owner.
          </li>
        </ul>
        <h3> Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience on our website. Cookies are small files stored on your
          device that help us analyze website traffic, remember user
          preferences, and improve functionality.
        </p>
        <p>
          You can control cookies through your browser settings and may choose
          to block them, but please note that some features of the website may
          not function properly if cookies are disabled.
        </p>
        <h3>Your Rights and Choices</h3>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul>
          <li>
            Access: You can request access to the personal data we hold about
            you.
          </li>
          <li>
            Correction: You can request corrections to any inaccurate or
            incomplete information.
          </li>
          <li>
            Deletion: You can request the deletion of your personal data,
            subject to applicable legal restrictions.
          </li>
          <p>
            Opt-out of marketing communications: You can unsubscribe from our
            newsletters or promotional emails at any time by following the
            unsubscribe link in the email or contacting us directly.
          </p>
          <p>
            To exercise any of these rights, please contact us at
            <a className="text-decoration-none mx-2" href="mailto:support@groeinnov8.com">support@groeinnov8.com</a>
          </p>
        </ul>
        <h3>Data Retention</h3>
        <p>
          We will retain your personal data for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
        <h3>Children's Privacy</h3>
        <p>
          Our services are not intended for children under the age of 13, and we
          do not knowingly collect personal data from children. If we learn that
          we have collected personal data from a child under the age of 13, we
          will take steps to delete that information.
        </p>
        <h3>International Transfers</h3>
        <p>
          If you are located outside of India, please note that your data may be
          transferred to and processed in India, which may have different data
          protection laws than your country. By using our services, you consent
          to the transfer of your data to this country.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will post any changes on this page with an updated
          effective date. Please review this Privacy Policy periodically for the
          latest information.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or how
          we handle your personal data, please contact us at:
        </p>
        <p className="text-end">Email: <a className="text-decoration-none mx-1" href="mailto:support@groeinnov8.com">support@groeinnov8.com</a></p>
        <p className="text-end">Phone: <a className="text-decoration-none mx-1" href="tel:+918999265389">+918999265389</a></p>
        <p className="text-end policy-text">Address:  <pre><address>OFFICE NO 305 TO 311, 
                                              DASHMESH SQUARE, Pimpri Waghire, Pune, 
                                              Pune City, Maharashtra, 
                                              India, 411017</address></pre> </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
