import React from "react";
// import SLOGAN_IMAGE from "../../images/slogan-bg.jpg";

const Card = () => {
  return (
    <div className="slogan-section">
      <div className="slogan-image" data-aos="fade-up">
        <div className="slogan-card">
          <h3 className="slogan-card-title">Un verdadero tesoro escondido</h3>
          <p className="slogan-card-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus
            ante in massa varius, ut pretium orci hendrerit. Ut dapibus libero
            quis quam facilisis convallis. Nam id sapien eros. Donec efficitur
            lectus sed semper faucibus. Cras suscipit ipsum sapien, in maximus
            odio faucibus et. Nullam pharetra nisl at porttitor fringilla. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ex
            vel metus commodo vestibulum.
          </p>

          <span className="slogan-card-writter">- Jilver Pacheco</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
