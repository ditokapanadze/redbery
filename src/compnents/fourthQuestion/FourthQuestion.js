import React from "react";
import Header from "../Header";
import "./fourthQuestion.css";
import bike from "../../assets/bike.svg";
import hurt from "../../assets/hurt.svg";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";
function FourthQuestion() {
  let history = useHistory();
  return (
    <>
      <Header />
      <div className="second__content">
        <div className="main_content">
          <p className="main__text">
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.{" "}
          </p>{" "}
          <p>
            {" "}
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <p className="question__title">
            რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
            სადაც ყველა სურვილისამებრ ჩაერთვება?*
          </p>
          <label className="container">
            <p> კვირაში ორჯერ </p>
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> კვირაში ერთხელ </p>
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> ორ კვირაში ერთხე </p>
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> თვეში ერთხელ </p>
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <p className="question__title">
            კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          </p>
          <label className="container">
            <p> 0 </p>
            <input type="radio" name="radio2" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> 1 </p>
            <input type="radio" name="radio2" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> 3 </p>
            <input type="radio" name="radio2" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> 4 </p>
            <input type="radio" name="radio2" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p>5</p>
            <input type="radio" name="radio2" />
            <span className="checkmark"></span>
          </label>
          <p className="question__title">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
          <textarea />
          <p className="question__title">
            რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?
          </p>
          <textarea />
          <button className="submit__button">დასრულება</button>
          <button className="chevron__button">
            <ChevronLeftIcon onClick={() => history.push("/firstquestion")} />
          </button>
        </div>

        <img className="bike__img" src={bike} />
        <img className="hurt__img" src={hurt} />
      </div>
    </>
  );
}

export default FourthQuestion;
