import { useState } from "react";
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, Box, Button } from "@mui/material";

export const DocModal = () => {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
  }

    return (
      <>
        <button>X</button>

        <Typography variant="h3" align="center">Document Upload</Typography>

        <Grid container spacing={4}>
          <Grid item xs={7} align='center'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Import Name:</InputLabel>
              <Select
                value={age}
                label="Import Name"
                onChange={handleChange}
              >
                <MenuItem value={'Import name 1'}>Import Name 1</MenuItem>
                <MenuItem value={'Import name 2'}>Import Name 2</MenuItem>
              </Select>
            </FormControl>

            {/* UPLOADER */}
            <Typography variant="body1" align="left">Select a manifest that you'd like to import</Typography>

            {/* DATA CHECKING */}
            <Typography variant="body1" align="left">Elapse Data Checking:</Typography>

            {/* TOGGLE WINDOW */}
            <Typography variant="body1" align="left">Tolerance Window:</Typography>
          </Grid>


          <Grid item xs={5} align='center'>
          <Typography variant="body1" align="center">Document Upload</Typography>
          </Grid>

        </Grid>

        <Box align='center'>
          <Typography>Data in the import file is correct. Please continue to import.</Typography>
          <Button>Continue Import</Button>
          <Button>Cancel</Button>
        </Box>
      </>
    );
  };