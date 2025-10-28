import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  const footerLinks = [
    { label: "About us", href: "/about-us" },
    { label: "Privacy Policy", href: "/policy-terms" },
    { label: "Disclaimer", href: "/desclaimer-details" },
  ];
  return (
    <div className="footer-container-wrapper">
      <div className="container footer-container-content">
        <div className="footer-content">
          <p>© 2025 | All Rights Reserved | Groeinnov8</p>
        </div>
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <Link key={index} to={`${link.href}`} className="footer-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
