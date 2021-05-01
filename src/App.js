import logo from "./logo.svg";
import "./App.css";
import JoinUs from "./pages/joinUs";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Faculty from "./pages/faculty";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/joinus">
          <JoinUs />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/faculty">
          <Faculty />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
