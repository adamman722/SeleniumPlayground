import React from "react";

function LoginButton({ setClick }) {
  return (
    <div>
      <button class="glitched-affect" role="button" onClick={setClick}>
        Proceed to Foundation Achieves
      </button>
    </div>
  );
}

export default LoginButton;
