import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { FaHome, FaUsers } from "react-icons/fa";
import { Link } from "react-scroll";

const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="drawer"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.5 }}
        >
          <div className="drawer-navigation" onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineClose />
          </div>
          <div className="menu">
            <Link
              onClick={() => setIsOpen(false)}
              className="menu-item"
              to="inicio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <FaHome />
              &nbsp; Inicio
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="menu-item"
              to="categorias"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <BiFoodMenu />
              &nbsp; Nuestras categorias
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="menu-item"
              to="menu"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <BiFoodMenu />
              &nbsp; Nuestro menu
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="menu-item"
              to="contacto"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <FaUsers />
              &nbsp; Testimonios
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="menu-item"
              to="contacto"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <MdContacts />
              &nbsp; Contacto
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
