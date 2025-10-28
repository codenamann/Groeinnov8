import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './AllDesplayIcon.css';

export default function AllDesplayIcon() {
  const [showIcon, setShowIcon] = useState(false);

  // Handle scroll visibility of the icon
  const handleScroll = () => {
    // Show the icon after scrolling down 30%
    if (window.scrollY > window.innerHeight * 0.3) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showIcon && (
        <FaArrowUp onClick={scrollToTop} className="arrow-icon-all-desplay" />
      )}
    </div>
  );
}
