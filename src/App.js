import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/NavBar";
import MainText from "./components/MainText";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainText />
    </div>
  );
}

export default App;
