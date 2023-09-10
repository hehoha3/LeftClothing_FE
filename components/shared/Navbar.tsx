"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { NavMenu } from "../elements/NavMenu";
import NavInfo from "../elements/NavInfo";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-30 w-full bg-white shadow-md ">
      <div className="flex flex-row items-center justify-between py-5 px-[15px]">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          href="/"
          className="flex-1 max-w-fit"
        >
          <Image src={logo} alt="logo" className="w-[155px]" />
        </motion.a>
        <nav className="flex-1 pl-16">
          <NavMenu />
        </nav>
        <div className="flex-1 max-w-fit">
          <NavInfo />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
