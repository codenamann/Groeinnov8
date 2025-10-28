import React from "react";
import { motion } from "framer-motion";
import "./Button.css";

const Button = ({
  children,
  type = "button",
  onClick,
  isLoading = false,
  variant = "primary",
  fullWidth = false,
  disabled = false,
}) => {
  const getButtonClasses = () => {
    let classes = "button";

    if (variant) classes += ` button-${variant}`;
    if (fullWidth) classes += " button-full";
    if (disabled || isLoading) classes += " button-disabled";

    return classes;
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={getButtonClasses()}
      whileTap={{ scale: 0.98 }}
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
    >
      {isLoading ? (
        <div className="loading-container">
          <svg
            className="loading-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="loading-circle"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="loading-path"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
