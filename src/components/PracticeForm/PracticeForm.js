import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useEffect } from "react";
import { statesCities } from "../../SampleStuff/cities";
import { useRef } from "react";
import CreateCert from "./CreateCert/CreateCert";
import "./formStyles.css";

//styled components
const StyledInput = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "Black"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.brand.orange
    },
    "&:hover fieldset": {
      borderColor: theme.palette.brand.orange
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.brand.orange
    }
  }
}));

const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "Black"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.brand.orange
    },
    "&:hover fieldset": {
      borderColor: theme.palette.brand.orange
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.brand.orange
    }
  }
}));

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
//End of Styled components

function PracticeForm() {
  const timer = useRef();

  //all the states used within form
  const [data, setData] = useState({
    checked: false,
    states: [],
    cities: [],
    isDisabled: true,
    statesLoaded: false,
    DV: "",
    isLoading: false,
    success: false,
    img: null,
    fName: "",
    lName: "",
    email: "",
    gender: null,
    phoneNumber: null,
    DOB: null,
    subjects: [],
    hobbies: null,
    hobbiesSports: false,
    hobbiesReading: false,
    hobbiesMusic: false,
    address: null,
    selectedState: null,
    selectedCity: null,
    fileDataURL: null,
    form: {}
  });

  //all potential error states
  const [errors, setErrors] = useState({
    fNameError: false,
    lNameError: false,
    emailError: false,
    genderError: false,
    phoneNumberError: false,
    DOBError: false
  });

  //grabbing state and city data and formatting it into a state
  useEffect(() => {
    const states = [];
    for (const key in statesCities) {
      states.push(key);
    }
    setData((prev) => {
      const newData = { ...prev, states: states, statesLoaded: true };
      return newData;
    });
  }, []);

  //checking when state is selected then finding the correct cities
  useEffect(() => {
    if (data.selectedState !== null && data.selectedState !== "") {
      setData((prev) => {
        return {
          ...prev,
          cities: statesCities[data.selectedState],
          isDisabled: false
        };
      });
    } else if (data.selectedState === "") {
      setData((prev) => {
        return { ...prev, cities: [], isDisabled: true };
      });
    }
  }, [data.selectedState]);

  //checking and getting the img uploaded file configured to correct formant
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (data.img) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setData((prev) => {
            return { ...prev, fileDataURL: result };
          });
        }
      };
      fileReader.readAsDataURL(data.img);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [data.img]);

  //functions
  const handleButtonClick = () => {
    const ran = Math.floor(Math.random(0, 1) * 10000);

    if (data.fName === "") {
      setErrors((prev) => {
        return { ...prev, fNameError: true };
      });
      return;
    } else if (data.lName === "") {
      setErrors((prev) => {
        return { ...prev, lNameError: true };
      });
      return;
    } else {
      setErrors((prev) => {
        return {
          DOBError: false,
          phoneNumberError: false,
          genderError: false,
          emailError: false,
          lNameError: false,
          fNameError: false
        };
      });
    }
    if (!data.isLoading) {
      setData((prev) => {
        return { ...prev, isLoading: true, success: false };
      });

      timer.current = window.setTimeout(() => {
        setData((prev) => {
          return { ...prev, isLoading: false, success: true };
        });
      }, ran);
    }
  };

  const stackStyles = {
    backgroundColor: "#ffffff",
    width: "50%",
    boxShadow:
      "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
    padding: "1rem",
    marginTop: "1rem"
  };
  const innerStackRow = { justifyContent: "space-between" };

  const subjects = [
    "Language Arts",
    "Mathematics",
    "Science",
    "Health",
    "Handwriting",
    "Physical Education (P.E.)",
    "Art",
    "Music",
    "Instrumental Music – specific instrument",
    "Movement or Eurythmy",
    "Life Lab or gardening",
    "Dramatics",
    "Dance",
    "Spanish or other foreign language",
    "Leadership",
    "Speech",
    "Reading"
  ];

  return (
    <>
      <Typography variant="h2">Student Registration Form</Typography>
      <Box component="form">
        <Stack direction="row" spacing={2}>
          <Stack direction="column" sx={stackStyles} spacing={1}>
            <Stack direction="row" label="Name" sx={innerStackRow}>
              <Typography variant="h6">Name</Typography>
              <Stack
                direction="row"
                sx={{ width: "400px", justifyContent: "space-between" }}
              >
                <StyledInput
                  type="text"
                  variant="outlined"
                  label="First Name"
                  required={true}
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, fName: e.target.value };
                    })
                  }
                />
                <StyledInput
                  type="text"
                  variant="outlined"
                  label="Last Name"
                  required={true}
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, lName: e.target.value };
                    })
                  }
                />
              </Stack>
            </Stack>

            <Stack direction="row" label="Email" sx={innerStackRow}>
              <Typography variant="h6">Email</Typography>
              <Stack direction="row">
                <StyledInput
                  type="email"
                  variant="outlined"
                  label="Email"
                  required={true}
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
                />
              </Stack>
            </Stack>

            <Stack direction="row" sx={innerStackRow}>
              <Typography variant="h6">Gender</Typography>
              <Stack direction="row">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  row
                  name="radio-buttons-group"
                  required={true}
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, gender: e.target.value };
                    })
                  }
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Stack>
            </Stack>

            <Stack direction="row" sx={innerStackRow}>
              <Typography variant="h6">Phone Number</Typography>
              <Stack direction="row">
                <StyledInput
                  type="tel"
                  variant="outlined"
                  label="Phone Number"
                  required
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, phoneNumber: e.target.value };
                    })
                  }
                />
              </Stack>
            </Stack>

            <Stack direction="row" sx={innerStackRow}>
              <Typography variant="h6">Date of Birth</Typography>
              <Stack direction="row">
                <StyledInput
                  type="date"
                  variant="outlined"
                  required
                  inputFormat="MM/DD/YYYY"
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, DOB: e.target.value };
                    })
                  }
                />
              </Stack>
            </Stack>

            <Stack direction="row" sx={innerStackRow}>
              <Typography variant="h6">Subjects</Typography>
              <Stack direction="row">
                <StyledAutoComplete
                  multiple
                  onChange={(e, newVal) =>
                    setData((prev) => {
                      return { ...prev, subjects: newVal };
                    })
                  }
                  id="combo-box-demo"
                  options={subjects}
                  getOptionLabel={(option) => option}
                  sx={{ width: 350 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Subjects" />
                  )}
                />
              </Stack>
            </Stack>

            {/* Hobbies */}
            <Stack direction="row" sx={innerStackRow}>
              <Typography variant="h6">Hobbies</Typography>
              <Stack direction="row">
                {/* Example of nested destructure */}
                <FormControlLabel
                  control={<Checkbox />}
                  label="Sports"
                  value="Sports"
                  onChange={({ target: { checked } }) => {
                    setData((prev) => {
                      return { ...prev, hobbiesSports: checked };
                    });
                  }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Reading"
                  onChange={({ target: { checked } }) => {
                    setData((prev) => {
                      return { ...prev, hobbiesReading: checked };
                    });
                  }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Music"
                  onChange={({ target: { checked } }) => {
                    setData((prev) => {
                      return { ...prev, hobbiesMusic: checked };
                    });
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        setData((prev) => {
                          return { ...prev, checked: e.target.checked };
                        })
                      }
                      checked={data.checked}
                    />
                  }
                  label="Other"
                />
                {data.checked ? (
                  <StyledInput
                    type="text"
                    variant="outlined"
                    label="Hobbies"
                    onChange={(e) =>
                      setData((prev) => {
                        return { ...prev, hobbies: e.target.value };
                      })
                    }
                  />
                ) : null}
              </Stack>
            </Stack>

            <Stack direction="row" sx={innerStackRow}>
              <Typography variant="h6">Picture</Typography>
              <Stack direction="row">
                <StyledButton variant="contained" component="label">
                  Upload
                  {/* NEED TO MOVE IN TO STANDALONE FUNCTION */}
                  <input
                    hidden
                    accept="image/png, image/jpeg"
                    type="file"
                    onChange={(e, values) => {
                      const imageMimeType = /image\/(png|jpg|jpeg)/i;
                      const file = e.target.files[0];
                      if (!file.type.match(imageMimeType)) {
                        alert("Image mime type is not valid");
                        return;
                      }
                      setData((prev) => {
                        return { ...prev, img: file };
                      });
                    }}
                  />
                </StyledButton>
              </Stack>
            </Stack>

            <Stack direction="row" sx={innerStackRow}>
              <Typography variant="h6">Address</Typography>
              <Stack direction="row">
                <StyledInput
                  type="date"
                  variant="outlined"
                  multiline
                  rows={3}
                  sx={{ width: "20rem" }}
                  label="Address plz"
                  required={true}
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, address: e.target.value };
                    })
                  }
                />
              </Stack>
            </Stack>

            <Stack direction="row" sx={innerStackRow}>
              {/* for-in the States into a array => pass them into the first autoComplete => once state is selected, take selected states, find the cities */}
              <Typography variant="h6">State / City</Typography>

              {data.statesLoaded ? (
                <Stack direction="row" spacing={2}>
                  <StyledAutoComplete
                    onInputChange={(e, newInputValue) =>
                      setData((prev) => {
                        return { ...prev, selectedState: newInputValue };
                      })
                    }
                    inputValue={data.selectedState || ""}
                    options={data.states}
                    sx={{ width: 170 }}
                    renderInput={(params) => (
                      <TextField {...params} label="States" />
                    )}
                  />
                  <StyledAutoComplete
                    disabled={data.isDisabled}
                    onInputChange={(e, newInputValue) =>
                      setData((prev) => {
                        return { ...prev, selectedCity: newInputValue };
                      })
                    }
                    inputValue={data.selectedCity || ""}
                    id="combo-box-demo"
                    options={data.cities}
                    sx={{ width: 170 }}
                    renderInput={(params) => (
                      <TextField {...params} label="City" />
                    )}
                  />
                </Stack>
              ) : null}
            </Stack>
          </Stack>
          {/* other data */}
          {data.success ? <CreateCert data={data} /> : null}
          {/* Goes here idiot */}
        </Stack>
        {/* fix text behind the loading */}
        <StyledButton
          type="submit"
          variant="contained"
          disabled={data.isLoading}
          onClick={handleButtonClick}
        >
          {data.isLoading ? " Data is loading" : "Submit Form"}
        </StyledButton>
        {data.isLoading && (
          <CircularProgress
            size={24}
            sx={{
              color: "green",
              position: "relative",
              left: "-80px",
              top: "7px"
            }}
          />
        )}
      </Box>
    </>
  );
}

export default PracticeForm;
