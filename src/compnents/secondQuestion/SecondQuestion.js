import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./SecondQuestion.css";
import DatePicker from "react-date-picker";
import SecondLogo from "../../assets/secondlogo.svg";
import SecondLine from "../../assets/secondline.svg";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";
function SecondQuestion() {
  const [covidPositive, setCovidPositive] = useState(false);
  const [showAntigen, setShowAntigen] = useState("");
  const [value, onChange] = useState(new Date());
  let history = useHistory();

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <div className="second__content">
        <div className="main_content">
          <p className="question__title">გაქვს გადატანილი covid-19?*</p>
          <div className="qqq">
            <label className="container">
              <p>კი </p>
              <input
                type="radio"
                name="radio"
                value={true}
                onClick={() => setCovidPositive(true)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p>არა </p>
              <input
                type="radio"
                name="radio"
                onChange={() => {
                  setCovidPositive(false);
                  setShowAntigen("");
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p> ახლა მაქვს </p>
              <input
                type="radio"
                name="radio"
                onChange={() => {
                  setCovidPositive(false);
                  setShowAntigen("");
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          {covidPositive && (
            <>
              <p className="question__title">
                ანტისხეულების ტესტი გაკეთბული გაქვს?*
              </p>
              <label className="container">
                <p>კი </p>
                <input
                  type="radio"
                  name="radio1"
                  value="antigen"
                  onChange={(e) => setShowAntigen(e.target.value)}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>არა </p>
                <input
                  type="radio"
                  name="radio1"
                  value="noAntigen"
                  onChange={(e) => {
                    setShowAntigen(e.target.value);
                  }}
                />
                <span className="checkmark"></span>
              </label>
            </>
          )}

          {showAntigen === "antigen" && (
            <>
              <p className="question__title">
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br /> რიცხვი და
                ანტისხეულების რაოდენობა*
              </p>
              <DatePicker
                onChange={onChange}
                value={value}
                maxDate={new Date()}
              />
              <form>
                <input
                  type="number"
                  placeholder="ანტისხეულების რაოდენობა"
                  className="antigen__input"
                ></input>
              </form>
            </>
          )}

          {showAntigen === "noAntigen" && (
            <>
              <p className="question__title">
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />
                როდის გქონდა Covid-19*
              </p>
              <DatePicker
                onChange={onChange}
                value={value}
                maxDate={new Date()}
              />
            </>
          )}
        </div>
        <img className="second__logo" src={SecondLogo} />
        <img className="second__line" src={SecondLine} />
      </div>
      <button className="chevron__button">
        <ChevronLeftIcon onClick={() => history.push("/firstquestion")} />
      </button>

      <button
        className="chevron__button"
        // disabled={true}
        onClick={() => history.push("/thirdQuestion")}
      >
        <ChevronRightIcon />
      </button>
    </>
  );
}

export default SecondQuestion;
