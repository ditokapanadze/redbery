import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstQuestion from "./components/firsQuestion/FirstQuetion";

import ThirdQuestion from "./components/thirdQuestion/ThirdQuestion";
import FourthQuestion from "./components/fourthQuestion/FourthQuestion";
import Welcome from "./components/Welcome";
import SecondQuestion from "./components/secondQuestion/SecondQuestion";
import Finish from "./components/finish/Finish";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/firstquestion">
            <FirstQuestion />
          </Route>
          <Route path="/secondquestion">
            <SecondQuestion />{" "}
          </Route>
          <Route path="/thirdQuestion">
            <ThirdQuestion />{" "}
          </Route>
          <Route path="/fourthQuestion">
            <FourthQuestion />{" "}
          </Route>
          <Route path="/finish">
            <Finish />{" "}
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
