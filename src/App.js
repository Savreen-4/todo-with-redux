import React from "react";
import Home from "./components/Home";
import Page from "./components/Page";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h4>hhhh</h4>
      <div className="App">
        <div>
          <ul>
            {" "}
            <Link to="/">Home</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/page">Page</Link>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page" element={<Page />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
