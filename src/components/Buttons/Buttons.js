import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  border: "none",
  color: "white",
  backgroundColor: theme.palette.brand.orange,
  "&:hover": {
    border: "none",
    backgroundColor: theme.palette.brand.orange,
    opacity: "75%"
  }
}));

function BrowserWindow() {
  function openWindowMessage() {
    const newWindow = window.open("", "MsgWindow", "width=200,height=100");
    newWindow.document.write(
      "<p>Ayeeeee you got to a new window good for you sport</p>"
    );
  }
  function newWindowOpen() {
    window.open(
      "https://en.wikipedia.org/wiki/Goose",
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=700,height=400"
    );
  }
  function openTab() {
    window.open("http://www.google.com/");
  }
  return (
    <Stack direction="row" spacing={2}>
      <StyledButton onClick={openWindowMessage}>
        New Window Message
      </StyledButton>
      <StyledButton onClick={newWindowOpen}>New Window</StyledButton>
      <StyledButton onClick={openTab}>Open Tab</StyledButton>
    </Stack>
  );
}

export default BrowserWindow;
