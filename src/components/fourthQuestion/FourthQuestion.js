import React, { useState, useContext } from "react";
import Header from "../Header";
import "./fourthQuestion.css";
import bike from "../../assets/bike.svg";
import hurt from "../../assets/hurt.svg";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context";
import SecondQuestion from "../secondQuestion/SecondQuestion";
function FourthQuestion() {
  const { fourthPage } = useContext(Context);
  const [fourthQuestion, setFourthQuestion] = fourthPage;
  const [spaceOpinion, setSpaceOpinion] = useState("");
  let history = useHistory();

  window.addEventListener("wheel", (e) => {
    const scrollElement = document.querySelector(".main_content");
    if (e.deltaY < 0) {
      scrollElement.scrollBy(0, -30);
    } else if (e.deltaY > 0) {
      scrollElement.scrollBy(0, 30);
    }
  });

  const meetingFrequency = (e) => {
    console.log(e.target.value);
    if (e.target.value === "კვირაში ორჯერ") {
      setFourthQuestion({
        ...fourthQuestion,
        meetings: e.target.value,
        firstOption_checked: true,
        secondOption_checked: false,
      });
    } else if (e.target.value === "კვირაში ერთხელ") {
      setFourthQuestion({
        ...fourthQuestion,
        fourthOption_checked: false,
        meetings: e.target.value,
        secondOption_checked: true,
        firstOption_checked: false,
      });
    } else if (e.target.value === "ორ კვირაში ერთხელ") {
      setFourthQuestion({
        ...fourthQuestion,
        meetings: e.target.value,
        fourthOption_checked: false,
        firstOption_checked: false,
        secondOption_checked: false,
        thirddOption_checked: true,
      });
    } else if (e.target.value === "თვეში ერთხელ") {
      setFourthQuestion({
        ...fourthQuestion,
        meetings: e.target.value,
        fourthOption_checked: true,
        firstOption_checked: false,
        secondOption_checked: false,
        thirddOption_checked: false,
      });
    }
  };

  const officeWork = (e) => {
    setFourthQuestion({
      ...fourthQuestion,
      officeWork: e.target.value,
    });
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "space_opinion") {
      setFourthQuestion({
        ...fourthQuestion,
        opinioAboutSpace: e.target.value,
      });
    } else if (e.target.name === "meeting_opinion") {
      console.log("test");
      setFourthQuestion({
        ...fourthQuestion,
        opinionAboutMeeting: e.target.value,
      });
    }
  };

  console.log(fourthQuestion);
  return (
    <>
      <Header />
      <div className="content">
        <div className="main_content fourth__content">
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
            <input
              checked={fourthQuestion.firstOption_checked}
              value="კვირაში ორჯერ"
              type="radio"
              name="radio"
              onChange={(e) => meetingFrequency(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> კვირაში ერთხელ </p>
            <input
              value="კვირაში ერთხელ"
              checked={fourthQuestion.secondOption_checked}
              type="radio"
              name="radio"
              onChange={(e) => meetingFrequency(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> ორ კვირაში ერთხელ </p>
            <input
              value="ორ კვირაში ერთხელ"
              checked={fourthQuestion.thirdOption_checked}
              type="radio"
              name="radio"
              onChange={(e) => meetingFrequency(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> თვეში ერთხელ </p>
            <input
              value="თვეში ერთხელ"
              checked={fourthQuestion.fourthOption_checked}
              type="radio"
              name="radio"
              onChange={(e) => meetingFrequency(e)}
            />
            <span className="checkmark"></span>
          </label>
          <p className="question__title">
            კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          </p>
          <label className="container">
            <p> 0 </p>
            <input
              value="0"
              checked={fourthQuestion.officeWork === "0" ? true : false}
              type="radio"
              name="radio2"
              onChange={(e) => officeWork(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> 1 </p>
            <input
              value="1"
              checked={fourthQuestion.officeWork === "1" ? true : false}
              type="radio"
              name="radio2"
              onChange={(e) => officeWork(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> 2 </p>
            <input
              value="2"
              checked={fourthQuestion.officeWork === "2" ? true : false}
              type="radio"
              name="radio2"
              onChange={(e) => officeWork(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> 3 </p>
            <input
              value="3"
              checked={fourthQuestion.officeWork === "3" ? true : false}
              type="radio"
              name="radio2"
              onChange={(e) => officeWork(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p> 4 </p>
            <input
              value="4"
              checked={fourthQuestion.officeWork === "4" ? true : false}
              type="radio"
              name="radio2"
              onChange={(e) => officeWork(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p>5</p>
            <input
              value="5"
              checked={fourthQuestion.officeWork === "5" ? true : false}
              type="radio"
              name="radio2"
              onChange={(e) => officeWork(e)}
            />
            <span className="checkmark"></span>
          </label>
          <p className="question__title">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
          <textarea
            value={fourthQuestion.opinionAboutMeeting}
            onChange={(e) => handleChange(e)}
            name="meeting_opinion"
          />
          <p className="question__title">
            რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?
          </p>
          <textarea
            value={fourthQuestion.opinioAboutSpace}
            onChange={(e) => handleChange(e)}
            name="space_opinion"
          />
          <button className="submit__button">დასრულება</button>
          <button className="chevron__button fourth__chevron">
            <ChevronLeftIcon onClick={() => history.push("/thirdQuestion")} />
          </button>
        </div>

        <img className="bike__img" src={bike} />
        <img className="hurt__img" src={hurt} />
      </div>
    </>
  );
}

export default FourthQuestion;
