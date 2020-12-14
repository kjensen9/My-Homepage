import "./main.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hidebar from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Hidebar />
        <div className="content">
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={Blogs} path="/blogs" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
