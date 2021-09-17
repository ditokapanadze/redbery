import React from "react";
import RedLogo from "../assets/redLogo.svg";
import "./Header.css";
function Header({ page }) {
  return (
    <header>
      <img src={RedLogo} alt="redberry logo" />
      <p>{page}/4</p>
    </header>
  );
}

export default Header;
