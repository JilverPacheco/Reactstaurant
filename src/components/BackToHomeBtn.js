import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToHomeBtn = () => {
  const [homeButton, setHomeButton] = useState(false);
  const BackHome = () => {
    if (window.scrollY > 80) {
      setHomeButton(true);
    } else {
      setHomeButton(false);
    }
  };

  useEffect(() => {
    BackHome();
  }, [homeButton]);

  window.addEventListener("scroll", BackHome);

  return (
    <>
      {homeButton && (
        <Link
          className="back-btn"
          to="inicio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <FaArrowCircleUp />
        </Link>
      )}
    </>
  );
};

export default BackToHomeBtn;
