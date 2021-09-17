import React from "react";
import "./finnish.css";
import bigStar from "../../assets/bigstar.png";
import smallStar from "../../assets/smallstar.png";

function Finish() {
  return (
    <div className="finnish__screen">
      {" "}
      <p>მადლობა</p>
      <img className="big__star" src={bigStar} alt="Star" />
      <img className="small__star" src={smallStar} alt="Star" />
    </div>
  );
}

export default Finish;
