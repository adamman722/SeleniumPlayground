import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { pink } from "@mui/material/colors";
import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { useEffect } from "react";

const rowss = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

const StyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: "#ffffff",
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

export default function DataGridd() {
  const theme = useTheme();
  const [rows, setRows] = React.useState(rowss);
  const [fName, setFName] = useState("");

  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");
  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,

      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      type: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />
        ];
      }
    }
  ];

  const StyledButtons = () => {
    const StyledButton = styled(Button)({
      border: "none",
      color: "white",
      backgroundColor: theme.palette.brand.orange,
      "&:hover": {
        border: "none",
        backgroundColor: theme.palette.brand.orange,
        opacity: "75%"
      }
    });

    return (
      <StyledButton variant="contained" onClick={addToRows}>
        Add new row
      </StyledButton>
    );
  };

  //TODO quick add to this is that I want to add a whole new screen function that allows for testing on new screen when it pops up

  //TODO wa a big problem when I was working on it
  function addToRows() {
    const rowsOfIds = rowss.map((row) => row.id);

    setRows((prev) => [
      ...prev,
      {
        id: Math.max(...rowsOfIds) + 1,
        lastName: lName,
        firstName: fName,
        age: age
      }
    ]);
    setFName("");
    setLName("");
    setAge("");
  }
  function hitting() {
    console.log("it");
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-evenly" spacing={3}>
        <Box sx={{ height: 400, width: "50%" }}>
          <DataGrid
            sx={{
              backgroundColor: "#ffffff",
              boxShadow: 2,
              border: "none",

              "& .MuiDataGrid-cell:hover": {
                color: "brand.orange"
              }
            }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            editMode="cell"
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>

        <Box sx={{ height: 400, width: "20%" }}>
          <Stack direction="column" justifyContent="flex-start" spacing={3}>
            <Typography variant="h6">Add a new user: </Typography>
            <StyledInput
              className="custom"
              onBlur={hitting}
              onChange={(e) => setFName(e.target.value)}
              label="First name"
              variant="outlined"
              value={fName}
              required
            />

            <StyledInput
              className="custom"
              onChange={(e) => setLName(e.target.value)}
              label="Last name"
              variant="outlined"
              value={lName}
              required
            />

            <StyledInput
              className="custom"
              type="number"
              onChange={(e) => setAge(e.target.value)}
              label="Age"
              variant="outlined"
              value={age}
            />
            {StyledButtons()}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
