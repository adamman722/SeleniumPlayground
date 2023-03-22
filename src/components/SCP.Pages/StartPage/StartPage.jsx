import { useState } from "react";
import styled from "styled-components";
import "../SCP.css";
import LoginButton from "../StartPage.LoginBtn/LoginButton";
import BackGround from "../SCP.img/WhiteSCPLogo.png";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

function StartPage() {
  const [isClicked, setIsClicked] = useState(false);
  //   const isClicked = useSelector((state) => state.button.value);

  const Image = styled.img`
    position: inherit;
    height: 500px;
    width: 500px;
    animation: App-logo-spin infinite 20s linear;
    align-items: center;
  `;
  const ClickedImage = styled.img`
    position: inherit;
    height: 500px;
    width: 500px;
    animation: Start-Entry 6s linear;
    align-items: center;
  `;
  const AfterEffectButton = styled.button`
    width: 500px;
    height: 86px;
    line-height: 88px;
    font-size: 25px;
    font-family: "Bebas Neue", sans-serif;
    background-color: black;
    border: 0;
    color: rgb(0, 0, 0);
    letter-spacing: 3px;
    cursor: pointer;
    outline: transparent;
    position: initial;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    animation: 0.85s closeGraident;
  `;

  let navigate = useNavigate();
  function setClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="App">
      {isClicked ? (
        <ClickedImage src={BackGround} alt="" />
      ) : (
        <Image src={BackGround} alt="" />
      )}

      <h1>Hello loser</h1>
      {isClicked ? (
        <AfterEffectButton>Proceed to Foundation Archives</AfterEffectButton>
      ) : (
        <LoginButton setClick={setClick} />
      )}
      {isClicked
        ? setTimeout(() => {
            navigate("Introduction");
          }, 4500)
        : null}
    </div>
  );
}

export default StartPage;
