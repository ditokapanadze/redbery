import React, { useState } from "react";
import Header from "../Header";
import doctor from "../../assets/doctor2.svg";
import star from "../../assets/star.svg";
import "./thirdquestion.css";
function ThirdQuestion() {
  const [vacinated, setVacinated] = useState("");
  const [showLink, setShowLink] = useState("");
  const [showReg, setShowReg] = useState(false);

  return (
    <>
      <Header />
      <div className="second__content">
        <div className="main_content">
          <p className="question__title">უკვე აცრილი ხარ?*</p>
          <label className="container">
            <p>კი </p>
            <input
              type="radio"
              name="radio"
              value="yes"
              onChange={(e) => setVacinated(e.target.value)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <p>არა </p>
            <input
              type="radio"
              name="radio"
              value="no"
              onChange={(e) => setVacinated(e.target.value)}
            />
            <span className="checkmark"></span>
          </label>
          {vacinated === "yes" && (
            <>
              <p className="question__title">აირჩიე რა ეტაპზე ხარ?*</p>
              <label className="container">
                <p>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე </p>
                <input
                  type="radio"
                  name="radio1"
                  value={true}
                  onChange={() => setShowLink("")}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>სრულად აცრილი ვარ </p>
                <input
                  type="radio"
                  name="radio1"
                  value={true}
                  onChange={() => setShowLink("")}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>პირველი დოზა და არ ვარ დარეგისტრირებული მეორეზე </p>
                <input
                  type="radio"
                  name="radio1"
                  onChange={() => setShowLink("show_first")}
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
          {vacinated === "no" && (
            <>
              <p className="question__title">რას ელოდები?*</p>
              <label className="container">
                <p> დარეგისტრირებული ვარ და ველოდები თარიღს </p>
                <input
                  type="radio"
                  name="radio2"
                  onChange={() => setShowLink("")}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p> არ ვგეგმავ </p>
                <input
                  type="radio"
                  name="radio2"
                  onChange={() => setShowLink("show_second")}
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
                  type="radio"
                  name="radio2"
                  onChange={() => setShowLink("show_third")}
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
        <img className="doctor__img" src={doctor} />
        <img className="star__img" src={star} />
      </div>
    </>
  );
}

export default ThirdQuestion;
