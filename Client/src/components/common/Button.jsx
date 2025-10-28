import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import { motion } from 'motion/react';
import { MdPlayArrow } from "react-icons/md";

export  function Button({buttoname, className, redirect }) {
  return (

    <motion.div whileHover={{ scale: 1.02 }} >
    <Link to={redirect} className={`button-container ${className}`}>
      {buttoname} <MdPlayArrow className="button-container-icon" />
    </Link>
  </motion.div>
  )       
}
