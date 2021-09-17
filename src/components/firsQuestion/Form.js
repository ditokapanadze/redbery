import React, { useState, useEffect, useContext } from "react";
import "./Form.css";
import logo from "../../assets/firstlogo.png";
import yellowLine from "../../assets/firstline.svg";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [hideChevron, setSHideChevron] = useState(true);
  let history = useHistory();
  const { firstPage } = useContext(Context);
  const [answers, setAnswers] = firstPage;

  console.log(answers);
  useEffect(() => {
    if (
      name.length >= 3 &&
      /[^a-zA-Zა-ჰ]/.test(name) === false &&
      lastName.length >= 3 &&
      name.length < 255 &&
      /[^a-zA-Zა-ჰ]/.test(lastName) === false &&
      email.length > 3 &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === true &&
      email.includes("redberry.ge") === true
    ) {
      setSHideChevron(false);
    } else {
      setSHideChevron(true);
    }
  }, [name, lastName, email]);

  const handleClick = () => {
    setAnswers({
      ...answers,
      name,
      lastName,
      email,
    });
    history.push("/secondquestion");
  };

  return (
    <>
      <div className="content first__content">
        <div className="main_content">
          <form type="submit">
            <div>
              {" "}
              <label for="first__name">სახელი*</label>{" "}
              <input
                required={true}
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
                required={true}
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
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="შეიყვანეთ მეილი"
                type="email"
                name="email"
                id="email"
              />
              <p
                className={`warning ${
                  email.length < 3
                    ? "hidden"
                    : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        email
                      )
                    ? "hidden"
                    : ""
                  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                  //   ? ""
                  //   : "hidden"
                }`}
              >
                თქვენ მიერ შეყვანილი მეილი არასწორია
              </p>
              <p
                className={`warning ${
                  email.length < 3
                    ? "hidden"
                    : email.includes("redberry.ge") &&
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        email
                      )
                    ? "hidden"
                    : ""
                }`}
              >
                გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)
              </p>
            </div>

            <p className="form__footer">
              {" "}
              *-ით მონიშნული ველების შევსება <br /> სავალდებულოა{" "}
            </p>
          </form>
        </div>
        <img className="first__logo" src={logo} alt="person logo" />
        <img className="yellow__line" src={yellowLine} alt="person logo" />
      </div>
      <button
        className="chevron__button first__button"
        disabled={hideChevron}
        onClick={handleClick}
      >
        <ChevronRightIcon />
      </button>
    </>
  );
}

export default Form;
