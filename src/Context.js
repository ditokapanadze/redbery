import React, { useState, createContext } from "react";

export const Context = createContext();

export const StateProvider = (props) => {
  const [answers, setAnswers] = useState({
    name: "",
    email: "asd",
    last_name: "asd",
  });

  const [secondQuestion, setSecondQuestion] = useState({
    covid_status: "",
    antigen_test: "",
    positive_checked: false,
    negative_checked: false,
    now_checked: false,
    antigen_status: "",
    antigen_checked: false,
    antigen_date: "",
    negativeAntigen_checked: false,
    antigen_value: "",
    antige_date: "",
    covid_date: "",
  });
  const [thirdQuestion, setThirdQuestion] = useState({
    vacinated: "",
    positive_checked: false,
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
  const [fourthQuestion, setFourthQuestion] = useState({
    meetings: "",
    firstOption_checked: false,
    secondOption_checked: false,
    thidOption_checked: false,
    fourthOption_checked: false,
    officeWork: "",
    opinionAboutMeeting: "",
    opinioAboutSpace: "",
  });
  return (
    <Context.Provider
      value={{
        firstPage: [answers, setAnswers],
        secondPage: [secondQuestion, setSecondQuestion],
        thirdPage: [thirdQuestion, setThirdQuestion],
        fourthPage: [fourthQuestion, setFourthQuestion],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
