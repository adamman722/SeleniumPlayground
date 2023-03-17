import React from "react";
import sampleText from "../../SampleStuff/test.txt";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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

function DownloadUpload() {
  return (
    <>
      <StyledButton>
        <a
          href={sampleText}
          download
          style={{ color: "white", textDecoration: "none" }}
        >
          DownLoad Sample Text
        </a>
      </StyledButton>
      <br />
      <input type="file" name="fileUpload" />
    </>
  );
}

export default DownloadUpload;
