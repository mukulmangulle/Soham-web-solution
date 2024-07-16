
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiMenu } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";

const AnimatedHamburgerButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <motion.button
      className="hamburger-button"
      onClick={toggleMenu}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} >
      {isOpen ?
        <BiXCircle size={50} /> : <BiMenu size={50} />}
    </motion.button>
  );
};

export default AnimatedHamburgerButton;
