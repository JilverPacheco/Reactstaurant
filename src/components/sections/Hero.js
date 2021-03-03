import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="bg-hero" id="inicio">
      <h1 className="principal-title">¡Bienvenidos a Reactstaurant!</h1>
      <h2 className="slogan">Un placer diferente cada día</h2>
      <Link to="menu" spy={true} smooth={true} offset={0} duration={500}>
        <button className="btn btn-order btn-hover">Ver menu y ordernar</button>
      </Link>
    </div>
  );
};

export default Hero;
