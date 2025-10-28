import React from "react";
import "./header.css";
import logo from "../../assets/Groeinnov8_logo.webp";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/our-services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact us", href: "/contact-us" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex ms-3 align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            height="42"
            width="auto"
            className="me-2"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end pe-5"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLinks.map((link, index) => (
              <li className="nav-item me-2 " key={index}>
                <Link
                  to={link.href}
                  className={`nav-link mx-2  ${
                    location.pathname === link.href
                      ? "text-primary fw-semibold"
                      : "text-dark fw-semibold"
                  }`}
                  style={{ fontSize: "1.1rem" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
