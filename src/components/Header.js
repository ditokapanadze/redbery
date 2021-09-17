import React from "react";
import RedLogo from "../assets/redLogo.svg";
import "./Header.css";
function Header({ page }) {
  return (
    <header>
      <img src={RedLogo} />
      <p>{page}/4</p>
    </header>
  );
}

export default Header;
