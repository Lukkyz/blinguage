import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import MainText from "./components/MainText";
import DetailSection from "./components/DetailSection";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainText />
      <DetailSection />
    </div>
  );
}

export default App;
