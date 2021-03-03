import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoRestaurantOutline } from "react-icons/io5";
import Drawer from "./Drawer";
import { Link } from "react-scroll";

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
    <div
      className={bgColor ? "navbar nav-bgColor" : "navbar"}
      data-aos="fade-down"
    >
      <nav className="navbar-wrapper">
        <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}>
          <div className="nav-logo">
            Reactstaurant&nbsp;
            <IoRestaurantOutline style={{ fontSize: "25px" }} />
          </div>
        </Link>
        <div className="navigation" onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu />
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
