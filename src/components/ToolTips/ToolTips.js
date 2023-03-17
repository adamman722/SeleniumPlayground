import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Button, TextField, Typography } from "@mui/material";
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

function ToolTips() {
  return (
    <Stack direction="column" spacing={3}>
      <Tooltip title="ha ha ha you found meeee" arrow>
        <StyledButton sx={{ width: "300px" }}>
          {" "}
          Hover over me to seeeee
        </StyledButton>
      </Tooltip>
      <Tooltip title="This is an outline text field">
        <TextField
          variant="outlined"
          sx={{ width: "300px" }}
          placeholder="Hover over me to see"
        ></TextField>
      </Tooltip>

      <p>
        <Tooltip title="Some sample text here" arrow>
          <a href="#">Lorem</a>
        </Tooltip>{" "}
        ipsum dolor sit amet consectetur adipisicing elit. Totam soluta
        distinctio maiores voluptatum praesentium aspernatur. Itaque hic ipsa
        pariatur. Cumque non laudantium consequuntur atque praesentium amet sed
        laboriosam{" "}
        <Tooltip title="Some sample text here" arrow>
          <a href="#">recusandae</a>
        </Tooltip>{" "}
        culpa reiciendis veritatis sunt nemo distinctio molestiae ullam
        recusandae quos, illo eveniet eligendi? Molestias consequuntur possimus,
        consectetur saepe nisi cum hic.
      </p>
    </Stack>
  );
}

export default ToolTips;
