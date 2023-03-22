import React, { useRef } from "react";
import { useState } from "react";
import goose from "../../imgs/goose2.jpg";
import "./styles.css";

function AboutMe() {
  const [aThing, setAThing] = useState(null);
  const styles = {
    display: "flex",
    gap: "5px",
    flexDirection: "column",
    alignItems: "center",
  };

  const ran = Math.floor(Math.random(0, 1) * 10000);

  window.setTimeout(() => {
    setAThing(<h3 className="fade">...Or is it</h3>);
  }, ran);

  return (
    <article style={styles}>
      <div className="">
        <img
          src={goose}
          alt="Pic of a goose"
          width={250}
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="user-name">You are a goose</div>
      <div>That is all...</div>
      {aThing === null ? null : aThing}
    </article>
  );
}

export default AboutMe;
