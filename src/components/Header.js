import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoRestaurantOutline } from "react-icons/io5";
import Drawer from "./Drawer";
import { Link as NavHashLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const backgroundNavbar = () => {
    if (window.scrollY > 0) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    backgroundNavbar();
  }, [bgColor]);
  
  window.addEventListener("scroll", backgroundNavbar);

  return (
    <header
      className={bgColor ? "navbar nav-bgColor" : "navbar"}
      data-aos="fade-down"
    >
      <nav className="navbar-wrapper">
        <NavHashLink
          to="inicio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div className="nav-logo">
            Reactstaurant&nbsp;
            <IoRestaurantOutline style={{ fontSize: "25px" }} />
          </div>
        </NavHashLink>

        <div className="nav-menu">
          <Link to="/ingreso" className="nav-link">
            Ingresar
          </Link>
          <Link to="/registro" className="nav-link">
            Registrarse
          </Link>
          <div className="navigation" onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineMenu />
          </div>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
