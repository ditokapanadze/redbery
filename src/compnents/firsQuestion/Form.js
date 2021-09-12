import React, { useState, useEffect } from "react";
import "./Form.css";
import logo from "../../assets/firstQlogo.svg";
import yellowLine from "../../assets/firstline.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [validetaName, setValidetaName] = useState(true);

  useEffect(() => {
    if (name.length < 3) {
    }
  }, [name]);
  return (
    <>
      <div className="test">
        <form>
          <div>
            {" "}
            <label for="first__name">სახელი*</label>{" "}
            <input
              required="true"
              value={name}
              placeholder="შეიყვანეთ სახელი"
              type="text"
              name="first__name"
              id="first__name"
              onChange={(e) => setName(e.target.value.trim())}
            />
            <p
              className={`warning min__length ${
                name.length < 3 && name.length > 0 ? "" : "hidden"
              }`}
            >
              {" "}
              სახელის ველი უნდა შედგებოდეს მინიმუმ სამი სიმბოლოსგან
            </p>
            <p className={`warning ${name.length > 255 ? "" : "hidden"}`}>
              სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან
            </p>
            <p
              className={`warning ${
                name.match(/[^a-zA-Zა-ჰ]/) ? "" : "hidden"
              }`}
            >
              სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს
            </p>
          </div>
          <div>
            {" "}
            <label for="last__name">გვარი*</label>{" "}
            <input
              onChange={(e) => setlastName(e.target.value)}
              value={lastName}
              placeholder="შეიყვანეთ გვარი"
              type="text"
              name="lastst__name"
              id="last__name"
            />{" "}
            <p
              className={`warning min__length ${
                lastName.length < 3 && lastName.length > 0 ? "" : "hidden"
              }`}
            >
              {" "}
              გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან
            </p>
            <p className={`warning ${lastName.length > 255 ? "" : "hidden"}`}>
              გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან
            </p>
            <p
              className={`warning ${
                lastName.match(/[^a-zA-Zა-ჰ]/) ? "" : "hidden"
              }`}
            >
              გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს
            </p>
          </div>

          <div>
            {" "}
            <label for="email">მეილი*</label>{" "}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="შეიყვანეთ მეილი"
              type="email"
              name="email"
              id="email"
            />
            <p
              className={`warning ${
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                  ? "hidden"
                  : ""
              }`}
            >
              თქვენ მიერ შეყვანილი მეილი არასწორია
            </p>
          </div>

          <p className="form__footer">
            {" "}
            *-ით მონიშნული ველების შევსება <br /> სავალდებულოა{" "}
          </p>
        </form>
        <img className="first__logo" src={logo} />
        <img className="yellow__line" src={yellowLine} />
      </div>
      <ArrowForwardIosIcon />
    </>
  );
}

export default Form;
