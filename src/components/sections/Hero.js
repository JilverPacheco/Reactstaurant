import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="bg-hero" id="inicio">
      <div className="hero-wrapper">
        <div className="title-wrapper">
          <h1 className="principal-title">¡Las mejores Comidas Rapidas!</h1>
        </div>
        <h2 className="slogan">Un placer diferente cada día</h2>
        <Link to="menu" spy={true} smooth={true} offset={0} duration={500}>
          <button className="btn-wide btn-order">
            Ver menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
