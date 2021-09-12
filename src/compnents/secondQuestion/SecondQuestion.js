import React from "react";
import Header from "../Header";
import "./SecondQuestion.css";
function SecondQuestion() {
  return (
    <>
      <Header />
      <p className="question__title">გაქვს გადატანილი covid-19?*</p>
      <div className="qqq">
        <label className="container">
          <p>კი </p>
          <input
            type="radio"
            name="radio"
            value="კი"
            onClick={(e) => console.log(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <p>არა </p>
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <p> ახლა მაქვს </p>
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>
      </div>
      <p className="question__title">ანტისხეულების ტესტი გაკეთბული გაქვს?*</p>
      <label className="container">
        <p>კი </p>
        <input type="radio" name="radio" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        <p>არა </p>
        <input type="radio" name="radio" />
        <span className="checkmark"></span>
      </label>
    </>
  );
}

export default SecondQuestion;
