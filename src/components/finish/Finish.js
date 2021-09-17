import React, { useEffect, useState } from "react";
import "./finnish.css";
import bigStar from "../../assets/bigstar.png";
import smallStar from "../../assets/smallstar.png";

function Finish() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div className="finnish__screen">
      {" "}
      <p>მადლობა</p>
      <img className="big__star" src={bigStar} />
      <img className="small__star" src={smallStar} />
    </div>
  );
}

export default Finish;
