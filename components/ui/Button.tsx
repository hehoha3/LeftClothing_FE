import { motion } from "framer-motion";

type ButtonProps = {
  title: string;
  bgColor: string;
  textColor: string;
  fontSize: string;
  classname: string;
};

const Button = (props: ButtonProps) => {
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
