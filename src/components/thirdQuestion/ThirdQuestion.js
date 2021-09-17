import React, { useState, useContext, useEffect } from "react";
import Header from "../Header";
import doctor from "../../assets/doctor2.svg";
import star from "../../assets/star.svg";
import "./thirdquestion.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";
import { Context } from "../../Context";

function ThirdQuestion() {
  const [showLink, setShowLink] = useState("");
  const { thirdPage } = useContext(Context);
  const [thirdQuestion, setThirdQuestion] = thirdPage;
  const [disableButton, setDisableButton] = useState(true);

  let history = useHistory();

  const hanldeChange = (e) => {
    if (e.target.value === "კი") {
      setThirdQuestion({
        ...thirdQuestion,
        vacinated: e.target.value,
        positive_checked: true,
        negative_checked: false,
        vacinated_status: "",
        notRegistered_checked: false,
        full_checked: false,
        firstDose_checked: false,
        wating_for: "",
        registered_cheked: false,
        notPlanning_checked: false,
        planning_checked: false,
      });
    } else if (e.target.value === "არა") {
      {
        setThirdQuestion({
          ...thirdQuestion,
          vacinated: e.target.value,
          positive_checked: false,
          negative_checked: true,
          vacinated_status: "",
          notRegistered_checked: false,
          full_checked: false,
          firstDose_checked: false,
        });
      }
    }
  };
  console.log(thirdQuestion);

  const handleStatusChange = (e) => {
    if (e.target.value === "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე") {
      setThirdQuestion({
        ...thirdQuestion,
        vacinated_status: e.target.value,
        notRegistered_checked: false,
        full_checked: false,
        firstDose_checked: true,
      });
    } else if (e.target.value === "სრულად აცრილი ვარ") {
      setThirdQuestion({
        ...thirdQuestion,
        vacinated_status: e.target.value,
        notRegistered_checked: false,
        full_checked: true,
        firstDose_checked: false,
      });
    } else if (
      e.target.value === "პირველი დოზა და არ ვარ დარეგისტრირებული მეორეზე"
    ) {
      setThirdQuestion({
        ...thirdQuestion,
        vacinated_status: e.target.value,
        notRegistered_checked: true,
        full_checked: false,
        firstDose_checked: false,
      });
    }
  };
  const waitingStatus = (e) => {
    console.log(e.target.value);
    if (e.target.value === "დარეგისტრირებული ვარ და ველოდები თარიღს") {
      setThirdQuestion({
        ...thirdQuestion,
        wating_for: e.target.value,
        registered_cheked: true,
        notPlanning_checked: false,
        planning_checked: false,
      });
    } else if (e.target.value === "არ ვგეგმავ") {
      setThirdQuestion({
        ...thirdQuestion,
        wating_for: e.target.value,
        registered_cheked: false,
        notPlanning_checked: true,
        planning_checked: false,
      });
    } else if (e.target.value === "გადატანილი მაქვს და ვგეგმავ აცრას") {
      setThirdQuestion({
        ...thirdQuestion,
        wating_for: e.target.value,
        registered_cheked: false,
        notPlanning_checked: false,
        planning_checked: true,
      });
    }
  };

  useEffect(() => {
    if (
      thirdQuestion.vacinated.length > 1 &&
      (thirdQuestion.wating_for.length > 1 ||
        thirdQuestion.vacinated_status.length > 1)
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [thirdQuestion]);

  return (
    <>
      <Header page={"3"} />
      <div className="content">
        <div className="main_content">
          <p className="question__title">უკვე აცრილი ხარ?*</p>
          <label className="container">
            <p>კი </p>
            <input
              checked={thirdQuestion.positive_checked}
              type="radio"
              name="radio"
              value="კი"
              onChange={(e) => hanldeChange(e)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p>არა </p>
            <input
              checked={thirdQuestion.negative_checked}
              type="radio"
              name="radio"
              value="არა"
              onChange={(e) => hanldeChange(e)}
            />
            <span className="checkmark"></span>
          </label>
          {thirdQuestion.positive_checked && (
            <>
              <p className="question__title">აირჩიე რა ეტაპზე ხარ?*</p>
              <label className="container">
                <p>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე </p>
                <input
                  checked={thirdQuestion.firstDose_checked}
                  type="radio"
                  name="radio1"
                  value="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                  onChange={(e) => handleStatusChange(e)}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>სრულად აცრილი ვარ </p>
                <input
                  checked={thirdQuestion.full_checked}
                  type="radio"
                  name="radio1"
                  value="სრულად აცრილი ვარ"
                  onChange={(e) => {
                    handleStatusChange(e);
                    setShowLink("");
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>პირველი დოზა და არ ვარ დარეგისტრირებული მეორეზე </p>
                <input
                  checked={thirdQuestion.notRegistered_checked}
                  value="პირველი დოზა და არ ვარ დარეგისტრირებული მეორეზე"
                  type="radio"
                  name="radio1"
                  onChange={(e) => {
                    handleStatusChange(e);
                    setShowLink("show_first");
                  }}
                />
                <span className="checkmark"></span>
              </label>
              {showLink === "show_first" && (
                <p className="register">
                  რომ არ გადადო, <br /> ბარემ ახლავე დარეგისტრირდი <br />
                  <a href="https://booking.moh.gov.ge/" target="blank">
                    https://booking.moh.gov.ge/
                  </a>
                </p>
              )}
            </>
          )}
          {thirdQuestion.negative_checked && (
            <>
              <p className="question__title">რას ელოდები?*</p>
              <label className="container">
                <p> დარეგისტრირებული ვარ და ველოდები თარიღს </p>
                <input
                  checked={thirdQuestion.registered_cheked}
                  type="radio"
                  name="radio2"
                  value="დარეგისტრირებული ვარ და ველოდები თარიღს"
                  onChange={(e) => {
                    waitingStatus(e);
                    setShowLink("");
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p> არ ვგეგმავ </p>
                <input
                  checked={thirdQuestion.notPlanning_checked}
                  value="არ ვგეგმავ"
                  type="radio"
                  name="radio2"
                  onChange={(e) => {
                    waitingStatus(e);
                    setShowLink("show_second");
                  }}
                />

                <span className="checkmark"></span>
              </label>
              {showLink === "show_second" && (
                <a
                  className="register"
                  href="https://booking.moh.gov.ge/"
                  target="_blank"
                >
                  👉 https://booking.moh.gov.ge/
                </a>
              )}

              <label className="container">
                <p> გადატანილი მაქვს და ვგეგმავ აცრას </p>
                <input
                  checked={thirdQuestion.planning_checked}
                  value="გადატანილი მაქვს და ვგეგმავ აცრას"
                  type="radio"
                  name="radio2"
                  onChange={(e) => {
                    waitingStatus(e);
                    setShowLink("show_third");
                  }}
                />
                <span className="checkmark"></span>
              </label>

              {showLink === "show_third" && (
                <>
                  <p className="register">
                    ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br /> თვის შემდეგ
                    შეგიძლიათ ვაქცინის გაკეთება
                  </p>
                  <p className="register">
                    👉 რეგისტრაიის ბმული <br />
                    <a
                      className="register"
                      href="https://booking.moh.gov.ge/"
                      target="_blank"
                    >
                      https://booking.moh.gov.ge/
                    </a>
                  </p>
                </>
              )}
            </>
          )}
        </div>
        <img className="doctor__img" src={doctor} alt="doctor" />
        <img className="star__img" src={star} alt="doctor" />
      </div>
      <button className="chevron__button third__chevron__button">
        <ChevronLeftIcon onClick={() => history.push("/secondquestion")} />
      </button>

      <button
        disabled={disableButton}
        className="chevron__button third__chevron__button"
        // disabled={true}
        onClick={() => history.push("/fourthQuestion")}
      >
        <ChevronRightIcon />
      </button>
    </>
  );
}

export default ThirdQuestion;
