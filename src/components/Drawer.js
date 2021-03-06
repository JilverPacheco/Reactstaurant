import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { Link as NavHashLink } from "react-scroll";
import { Link } from "react-router-dom";

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
          <Link
            to="/carrito"
            className="drawer-navigation-cart"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineShoppingCart />
          </Link>
          <div className="menu">
            <NavHashLink
              onClick={() => setIsOpen(false)}
              className="menu-item"
              to="inicio"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Inicio
            </NavHashLink>
            <NavHashLink
              onClick={() => setIsOpen(false)}
              className="menu-item"
              to="categorias"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Categorias
            </NavHashLink>
            <NavHashLink
              onClick={() => setIsOpen(false)}
              className="menu-item"
              to="menu"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Menu
            </NavHashLink>
          </div>
          <NavHashLink
            onClick={() => setIsOpen(false)}
            className="contact-button"
            to="contacto"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Agenda tu reserva
          </NavHashLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
