import React from "react";
import "../style/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import Success from "./Success";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="title">
          <Header />
        </header>

        <Route path="/" exact component={Form} />
        <Route path="/success" component={Success} />
      </div>
    </Router>
  );
};

export default App;
