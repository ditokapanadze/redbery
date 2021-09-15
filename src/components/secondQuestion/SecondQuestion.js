import React, { useState, useEffect, useContext } from "react";
import Header from "../Header";
import "./SecondQuestion.css";
import DatePicker from "react-date-picker";
import SecondLogo from "../../assets/secondlogo.svg";
import SecondLine from "../../assets/secondline.svg";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context";
function SecondQuestion() {
  const [covidPositive, setCovidPositive] = useState(false);
  const [showAntigen, setShowAntigen] = useState("");
  const [antigenValue, setAntigenValue] = useState("");

  const { secondPage } = useContext(Context);
  const [secondQuestion, setSecondQuestion] = secondPage;

  let history = useHistory();

  const handlePositive = (e) => {
    setCovidPositive(true);
    setSecondQuestion({
      ...secondQuestion,
      covid_status: e.target.value,
      positive_checked: true,
      negative_checked: false,
      now_checked: false,
    });
  };

  const handleNegative = (e) => {
    setCovidPositive(false);
    setSecondQuestion({
      ...secondQuestion,
      covid_status: e.target.value,
      negative_checked: true,
      covid_status: "",
      antigen_test: "",
      positive_checked: false,
      antigen_status: "",
      antigen_checked: false,
      antigen_date: "",
      negativeAntigen_checked: false,
      covid_date: "",
    });
  };
  const handleNow = (e) => {
    setCovidPositive(false);
    setSecondQuestion({
      ...secondQuestion,
      covid_status: e.target.value,
      now_checked: true,
      covid_status: "",
      antigen_test: "",
      positive_checked: false,
      negative_checked: false,
      covid_date: "",
      antigen_status: "",
      antigen_checked: false,
      antigen_date: "",
      negativeAntigen_checked: false,
    });
  };

  const handleAntigen = (e) => {
    if (e.target.value === "კი") {
      setSecondQuestion({
        ...secondQuestion,
        negativeAntigen_checked: false,
        antigen_checked: true,
        antigen_status: e.target.value,
      });
    } else if (e.target.value === "არა") {
      setAntigenValue("");
      setSecondQuestion({
        ...secondQuestion,
        antigen_checked: false,
        negativeAntigen_checked: true,
        antigen_status: e.target.value,
        antigen_value: "",
        antigen_date: "",
      });
    }
  };

  const hanldeChange = (e) => {
    setAntigenValue(e.target.value);

    setSecondQuestion({
      ...secondQuestion,
      antigen_value: e.target.value,
    });
  };

  const antigenDateChange = (e) => {
    // setDate(e);
    console.log(e);
    setSecondQuestion({
      ...secondQuestion,
      antigen_date: e,
    });
  };

  const covidDateChange = (e) => {
    setSecondQuestion({
      ...secondQuestion,
      covid_date: e,
    });
  };
  console.log(secondQuestion);
  return (
    <>
      <Header />
      <div className="content">
        <div className="main_content">
          <p className="question__title">გაქვს გადატანილი covid-19?*</p>
          <div className="qqq">
            <label className="container">
              <p>კი </p>
              <input
                checked={secondQuestion.positive_checked}
                type="radio"
                name="radio"
                value="კი"
                onChange={handlePositive}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p>არა </p>
              <input
                value="არა"
                checked={secondQuestion.negative_checked}
                type="radio"
                name="radio"
                onChange={handleNegative}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              <p> ახლა მაქვს </p>
              <input
                value="ახლა მაქვს"
                checked={secondQuestion.now_checked}
                type="radio"
                name="radio"
                onChange={handleNow}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          {secondQuestion.positive_checked && (
            <>
              <p className="question__title">
                ანტისხეულების ტესტი გაკეთბული გაქვს?*
              </p>
              <label className="container">
                <p>კი </p>
                <input
                  checked={secondQuestion.antigen_checked}
                  type="radio"
                  name="radio1"
                  value="კი"
                  onChange={handleAntigen}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>არა </p>
                <input
                  type="radio"
                  name="radio1"
                  value="არა"
                  checked={secondQuestion.negativeAntigen_checked}
                  onChange={handleAntigen}
                />
                <span className="checkmark"></span>
              </label>
            </>
          )}

          {secondQuestion.antigen_checked && (
            <>
              <p className="question__title">
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br /> რიცხვი და
                ანტისხეულების რაოდენობა*
              </p>
              <DatePicker
                onChange={(e) => antigenDateChange(e)}
                // value={
                //   secondQuestion.antigen_date.length > 1
                //     ? secondQuestion.antigen_date
                //     : date
                // }
                value={secondQuestion.antigen_date}
                e
                maxDate={new Date()}
              />
              <form>
                <input
                  value={
                    antigenValue.length > 1
                      ? antigenValue
                      : secondQuestion.antigen_value
                  }
                  type="number"
                  placeholder="ანტისხეულების რაოდენობა"
                  className="antigen__input"
                  onChange={hanldeChange}
                ></input>
              </form>
            </>
          )}

          {secondQuestion.negativeAntigen_checked && (
            <>
              <p className="question__title">
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />
                როდის გქონდა Covid-19*
              </p>
              <DatePicker
                onChange={(e) => covidDateChange(e)}
                value={secondQuestion.covid_date}
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
