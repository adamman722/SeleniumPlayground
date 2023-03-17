import React, { useState } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CircularProgress } from "@mui/material";
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

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function startProgress() {
    setIsLoading(true);
    for (let i = 0; i <= 100; i++) {
      await sleep(100).then(setProgress(i));
    }
    setIsLoading(false);
  }
  async function resetProgress() {
    setIsLoading(true);

    for (let i = 100; i >= 0; i--) {
      await sleep(100).then(setProgress(i));
    }
    setIsLoading(false);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
      {progress === 0 ? (
        <StyledButton onClick={startProgress} disabled={isLoading}>
          Load
        </StyledButton>
      ) : progress === 100 ? (
        <StyledButton onClick={resetProgress} disabled={isLoading}>
          UnLoad?
        </StyledButton>
      ) : (
        <StyledButton disabled={isLoading}>Loading...</StyledButton>
      )}
      {isLoading && (
        <CircularProgress
          size={24}
          sx={{
            color: "white",
            position: "relative",
            left: "-60px",
            top: "7px"
          }}
        />
      )}
    </Box>
  );
}

export default ProgressBar;
