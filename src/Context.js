import React, { useState, createContext } from "react";

export const Context = createContext();

export const StateProvider = (props) => {
  const [firstQuestion, setFirstQuestion] = useState({
    name: "",
    email: "",
    last_name: "",
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
        firstPage: [firstQuestion, setFirstQuestion],
        secondPage: [secondQuestion, setSecondQuestion],
        thirdPage: [thirdQuestion, setThirdQuestion],
        fourthPage: [fourthQuestion, setFourthQuestion],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
