import React from "react";
import RedLogo from "../assets/redLogo.svg";
import "./Header.css";
function Header() {
  return (
    <header>
      <img src={RedLogo} />
      <p>1/4</p>
    </header>
  );
}

export default Header;
