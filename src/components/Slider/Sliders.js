import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

function Sliders() {
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  return (
    <>
      <Stack direction="row" spacing={3} sx={{ marginTop: "1rem" }}>
        <Slider
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={sliderValue}
          onChange={handleSliderChange}
          sx={{ width: "500px" }}
        />
        <Typography variant="h6">{sliderValue}</Typography>
      </Stack>
      {sliderValue === 42 ? <h1>THIS IS THE ANSWER TO THE UNIVERSE</h1> : null}
    </>
  );
}

export default Sliders;
