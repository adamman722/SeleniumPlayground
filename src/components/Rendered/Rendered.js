import React, { useState, useRef, useEffect } from "react";
import "../../App.css";

function Rendered() {
  const [name, setName] = useState("");
  // const rendered = useRef(0)

  const whatever = useRef();
  // { current: 0 }

  return (
    <>
      <input
        ref={whatever}
        className="rendered-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <div>My name is {name} </div>
      <button onClick={() => whatever.current.focus()}>HIT MEEEEEE</button>
      {/* <div>I have rendered {rendered.current} times </div> */}
    </>
  );
}

export default Rendered;

{
  /*
<button onClick={() => { console.log(inputRef.current.focus()) }}>Focus plz</button> */
}
// const [renderCount, setRenderCount] = useState(0)
// const rendered = useRef(0);
