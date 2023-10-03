"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  title: string;
  bgColor: string;
  textColor: string;
  fontSize: string;
  classname: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <motion.button
      whileHover={{ backgroundColor: "#41cde2", color: "#fff" }}
      className={`${props.bgColor} ${props.textColor} ${props.fontSize} ${props.classname} font-normal leading-[45px] tracking-[2px] h-[45px] px-10 overflow-hidden rounded-md`}
    >
      {props.title}
    </motion.button>
  );
};

export default Button;
