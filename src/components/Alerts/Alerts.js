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
function promptFunc() {
  prompt("Please enter your name:", "");
}
function alertFunc() {
  alert("HEY SOMETHING HAPPENED");
}
function confirmFunc() {
  window.confirm("Ummmmm you need to confirm this plz");
}
function Alerts() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledButton onClick={alertFunc}>Alert</StyledButton>
      <StyledButton onClick={confirmFunc}>Alert</StyledButton>
      <StyledButton onClick={promptFunc}>Enter your Name</StyledButton>
    </Stack>
  );
}

export default Alerts;
