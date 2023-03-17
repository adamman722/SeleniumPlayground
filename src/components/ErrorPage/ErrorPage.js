import React, { useState } from "react";
import "./errorStyles.css";

import Typewriter from "typewriter-effect";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  border: "none",
  color: "white",
  height: "23rem",
  width: "100%",
  textDecoration: "none",
  fontSize: "6rem",
  backgroundColor: theme.palette.brand.orange,
  "&:hover": {
    border: "none",
    backgroundColor: theme.palette.brand.orange,
    opacity: "75%"
  }
}));

function ErrorPage() {
  const [code, setCode] = useState(null);

  setTimeout(
    () =>
      setCode(
        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledButton className="animate grow">
            Click for a way out
          </StyledButton>
        </Link>
      ),
    9500
  );

  return (
    <main className="error-page">
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(75)
              .typeString(
                "Ohhhhhh noooooo you reached the error page shame that there is no way to get back from here...."
              )
              .start();
          }}
        ></Typewriter>
      </h1>
      {code}
    </main>
  );
}

export default ErrorPage;
