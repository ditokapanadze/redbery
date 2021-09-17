import React from "react";
import "./welcome.css";
import Logo from "../assets/logo.svg";
import { useHistory } from "react-router-dom";

function Welcome() {
  let history = useHistory();
  return (
    <div>
      <img className="logo" src={Logo} alt="logo" />
      <p
        onClick={() => history.push("/firstquestion")}
        className="welcome__text"
      >
        კითხვარის <br /> დაწყება
      </p>
    </div>
  );
}

export default Welcome;
