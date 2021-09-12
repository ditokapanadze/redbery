import logo from "./logo.svg";
import "./App.css";
import WelcomeScreen from "./screens/WelcomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstQuestion from "./screens/FirstQuestionScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main__content">
          <Switch>
            <Route path="/firstquestion">
              <FirstQuestion />
            </Route>
            <Route path="/">
              <WelcomeScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
