import React from "react";

import logoImg from "../../assets/images/logo.svg";

import "./styles.css";

function Logo() {
  return (
    <div className="side">
      <div className="side-background">
        <div className="side-logo">
          <img src={logoImg} alt="Proffy" />
          <h3>
            Sua plataforma de <br />
            estudos online.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Logo;
