import { useState } from "react";
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, Box, Button, Switch, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const DocModal = () => {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
  }

    return (
      <>
        <button>X</button>

        <Typography variant="h3" align="center">Document Upload</Typography>

        <Grid container spacing={6}>
            <Grid item xs={7} align='left'>
              <FormControl fullWidth>
                <InputLabel>Select Import Name:</InputLabel>
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
              <Typography variant="body1" align="left">No Elapsed Dates!</Typography>

              {/* TOGGLE WINDOW */}
              <Typography variant="body1" align="left">Tolerance Window:</Typography>
              <FormControlLabel control={<Switch defaultChecked />} label="Toggle ON" />
              <Typography variant="body1" align="left"><AccessTimeOutlinedIcon />Select Tolerance Level</Typography>

            </Grid>


            <Grid item xs={5} align='left'>
              <FormControl>
                <Typography variant="body1" align="left">Split schedule using social distancing?</Typography>
                <RadioGroup row >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

              <Typography variant="body1" align="left">Location Checking:</Typography>
              <Typography variant="body1" align="left">All Available!</Typography>

              <FormControl>
                <Typography variant="body1" align="left">Client:</Typography>
                <RadioGroup row >
                  <FormControlLabel value="Single" control={<Radio />} label="Single" />
                  <FormControlLabel value="Multiple" control={<Radio />} label="Multiple" />
                </RadioGroup>
              </FormControl>

              <Grid container alignItems="center">
                <Typography mr={4}>Testing Center 1</Typography>
                <FormControl style={{minWidth: 160}}>
                <InputLabel>Select Client</InputLabel>
                    <Select
                      value={age}
                      label="Select Client"
                      onChange={handleChange}
                      fullWidth
                  >
                    <MenuItem value={'Import name 1'}>Import Name 1</MenuItem>
                    <MenuItem value={'Import name 2'}>Import Name 2</MenuItem>
                  </Select>
                </FormControl>
                <AccessTimeOutlinedIcon />
              </Grid>

              <Grid container alignItems="center">
                <Typography mr={4}>Testing Center 2</Typography>
                <FormControl style={{minWidth: 160}}>
                <InputLabel>Select Client</InputLabel>
                    <Select
                      value={age}
                      label="Select Client"
                      onChange={handleChange}
                      fullWidth
                  >
                    <MenuItem value={'Import name 1'}>Import Name 1</MenuItem>
                    <MenuItem value={'Import name 2'}>Import Name 2</MenuItem>
                  </Select>
                </FormControl>
                <AccessTimeOutlinedIcon />
              </Grid>

              <Grid container alignItems="center">
                <Typography mr={4}>Testing Center 3</Typography>
                <FormControl style={{minWidth: 160}}>
                <InputLabel>Select Client</InputLabel>
                    <Select
                      value={age}
                      label="Select Client"
                      onChange={handleChange}
                      fullWidth
                  >
                    <MenuItem value={'Import name 1'}>Import Name 1</MenuItem>
                    <MenuItem value={'Import name 2'}>Import Name 2</MenuItem>
                  </Select>
                </FormControl>
                <AccessTimeOutlinedIcon />
              </Grid>

              <Grid container alignItems="center">
                <Typography mr={4}>Testing Center 4</Typography>
                <FormControl style={{minWidth: 160}}>
                <InputLabel>Select Client</InputLabel>
                    <Select
                      value={age}
                      label="Select Client"
                      onChange={handleChange}
                      fullWidth
                  >
                    <MenuItem value={'Import name 1'}>Import Name 1</MenuItem>
                    <MenuItem value={'Import name 2'}>Import Name 2</MenuItem>
                  </Select>
                </FormControl>
                <AccessTimeOutlinedIcon />
              </Grid>

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