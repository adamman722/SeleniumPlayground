import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import "../formStyles.css";

const stackStyles = {
  backgroundColor: "#ffffff",
  width: "50%",
  boxShadow:
    "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
  padding: "1rem",
  marginTop: "1rem"
};

function CreateCert({ data }) {
  //TODO, I could style this more
  const display = (
    <article className="cert-itself">
      <Typography variant="h4" className="cert-title">
        Certificate of Achievement
      </Typography>
      <Typography variant="h4">
        Name: {data.fName} {data.lName}
      </Typography>
      <Typography variant="h5">
        Email: {data.email || "Ummmmm there is nothing here"}
      </Typography>
      <Typography variant="h5">
        Gender: {data.gender || "No need to answer"}
      </Typography>
      <Typography variant="h5">
        Phone Number: {data.phoneNumber || "I'm just trying to span you texts"}
      </Typography>
      <Tooltip title="YYYY-MM-DD format" arrow>
        <Typography variant="h5" style={{}}>
          Date of Birth:{" "}
          {data.DOB || "Don't want to admit how old you are huh?"}
        </Typography>
      </Tooltip>
      <div>
        <Typography variant="h5" style={{ margin: 0 }}>
          Subjects:{" "}
          {data.subjects.length === 0
            ? "Do you even know what you want to do?"
            : null}
        </Typography>
        {data.subjects.length !== 0
          ? data.subjects?.map((subject) => <div>{subject}</div>)
          : null}
      </div>
      <Typography variant="h5" sx={{ display: "flex" }}>
        Picture:{" "}
        <img
          className="profile-pic"
          src={data.fileDataURL}
          alt="A very nice person"
        />
      </Typography>
      <Typography variant="h5">
        Address: {data.address || "Do you know where you live?"}
      </Typography>
      <Typography variant="h5">
        State: {data.selectedState || "Hmmmmmmmm....."}
      </Typography>
      <Typography variant="h5">
        City: {data.selectedCity || ".....you don't do you"}
      </Typography>
    </article>
  );

  return (
    <Box sx={stackStyles} className="animate glow">
      {display}
    </Box>
  );
}

export default CreateCert;
