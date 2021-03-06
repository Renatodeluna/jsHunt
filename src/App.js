import React from "react";
import Routes from "./routes";

import Header from "./components/Header";

import "./global.css";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
