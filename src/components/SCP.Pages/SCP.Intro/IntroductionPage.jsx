import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

function IntroductionPage() {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState({ color: "#39FF14" });
  let navigate = useNavigate();

  const secondIntro = (
    <div className="typewriter2">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(75)
            .typeString("...We have been waiting for you")
            .start()
            .pauseFor(2000)
            .deleteAll();
        }}
        className="typewriter2"
      />
    </div>
  );

  setTimeout(() => {
    setIsActive(true);
    console.log("active ");
  }, 3500);

  setTimeout(() => {
    setColor({ color: "#000000" });
  }, 13000);
  setTimeout(() => {
    navigate("/SCP/MainPage/Landing");
  }, 14000);
  return (
    <div style={color} className="App">
      <div className="typewriter1">
        <Typewriter
          className="nameeee"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(75)
              .typeString("Hello Dr.■■■■■■")
              .pauseFor(500)
              .typeString(".")
              .pauseFor(500)
              .typeString(".")
              .pauseFor(500)
              .typeString(".")
              .start()
              .pauseFor(7500)
              .deleteAll();
          }}
        />
      </div>
      {isActive ? secondIntro : null}
    </div>
  );
}

export default IntroductionPage;
