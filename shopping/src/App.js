import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default App;
