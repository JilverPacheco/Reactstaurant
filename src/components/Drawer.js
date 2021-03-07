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
          className="sidebar"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sidebar-navigation" onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineClose />
          </div>
          <Link
            to="/carrito"
            className="sidebar-navigation-cart"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineShoppingCart />
          </Link>
          <div className="sidebar-menu">
            <div className="sidebar-btn-link-wrapper">
              <Link to="/ingreso" className="sidebar-link btn-link">
                Ingresar
              </Link>
              <Link to="/registro" className="sidebar-link btn-link">
                Registrarse
              </Link>
            </div>
            <NavHashLink
              onClick={() => setIsOpen(false)}
              className="sidebar-menu-item"
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
              className="sidebar-menu-item"
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
              className="sidebar-menu-item"
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
