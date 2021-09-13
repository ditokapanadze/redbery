import logo from "./logo.svg";
import "./App.css";
import WelcomeScreen from "./screens/WelcomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstQuestion from "./screens/FirstQuestionScreen";
import SecondQuestionScreen from "./screens/SecondQuestionScreen";
import ThirdQuestion from "./compnents/thirdQuestion/ThirdQuestion";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/firstquestion">
            <FirstQuestion />
          </Route>
          <Route path="/secondquestion">
            <SecondQuestionScreen />{" "}
          </Route>
          <Route path="/thirdQuestion">
            <ThirdQuestion />{" "}
          </Route>
          <Route path="/">
            <WelcomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
