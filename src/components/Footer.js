import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-content">
      <div className="footer-wrapper">
        <p>{year} &copy; | Desarrollado por Jilver Pacheco</p>
        <div>
          <a href="https://www.instagram.com/jilver.rivera/">
            <AiOutlineInstagram />
          </a>
          <a href="https://twitter.com/JilverRivera">
            <AiOutlineTwitter />
          </a>
          <a href="https://github.com/JilverPacheco">
            <AiOutlineGithub />
          </a>
          <a href="https://github.com/JilverPacheco">
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
