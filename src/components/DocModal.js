import { useState } from "react";
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, Box, Button, Switch, Radio, RadioGroup, FormControlLabel, Stack } from "@mui/material";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {Uploader} from './Uploader.tsx'

export const DocModal = () => {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
  }

    return (
      <>
        <Button sx={{color: '#ffffff', backgroundColor: '#181c4f', minWidth: '44px', padding: '6px 8px'}}>
          <CloseOutlinedIcon />
        </Button>

        <Typography variant="h4" align="center" color='#181c4f' mt={-2}>Document Upload</Typography>
        <hr style={{width: '17em', marginTop: '1em', marginBottom: '2em'}}/>

        <Grid container spacing={6}>
            <Grid item xs={7} align='left'>
              <FormControl fullWidth size="small">
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
              <hr style={{width: '20em', marginTop: '1em', marginBottom: '1em'}} align="left" />

              {/* UPLOADER */}
              <Typography variant="body1" align="left" color='#181c4f'>Select a manifest that you'd like to import</Typography>
              <Box>
                <Uploader />
              </Box>

              <hr style={{width: '20em', marginTop: '1em', marginBottom: '1em'}} align="left"/>

              {/* DATA CHECKING */}
              <Typography variant="body1" align="left" color='#181c4f'>Elapse Data Checking:</Typography>
              <Typography variant="body1" align="left" color='#038f2f'>No Elapsed Dates!</Typography>
              <hr style={{width: '20em', marginTop: '1em', marginBottom: '1em'}} align="left" />

              {/* TOGGLE WINDOW */}
              <Typography variant="body1" align="left" color='#181c4f'>Tolerance Window:</Typography>
              <Grid container alignItems="center">
                <FormControlLabel control={<Switch defaultChecked />} label="Toggle ON" color='#181c4f' />
                <AccessTimeOutlinedIcon color='#181c4f' sx={{marginRight: '4px', color: '#181c4f'}}/>
                <Typography variant="body1" align="left" color='#181c4f'>Select Tolerance Level</Typography>
              </Grid>

            </Grid>


            <Grid item xs={5} align='left'>
              <FormControl>
                <Typography variant="body1" align="left" color='#181c4f'>Split schedule using social distancing?</Typography>
                <RadioGroup row >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" color='#181c4f'/>
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <hr style={{width: '20em', marginTop: '1em', marginBottom: '1em'}} align="left"/>


              <Typography variant="body1" align="left" color='#181c4f'>Location Checking:</Typography>
              <Typography variant="body1" align="left" color='#038f2f'>All Available!</Typography>
              <hr style={{width: '20em', marginTop: '1em', marginBottom: '1em'}} align="left"/>

              <FormControl>
                <Typography variant="body1" align="left" color='#181c4f'>Client:</Typography>
                <RadioGroup row >
                  <FormControlLabel value="Single" control={<Radio />} label="Single" />
                  <FormControlLabel value="Multiple" control={<Radio />} label="Multiple" />
                </RadioGroup>
              </FormControl>

              <Grid container alignItems="center" mb={2}>
                <Typography mr={6} color='#181c4f'>Testing Center 1</Typography>
                <FormControl style={{minWidth: 160, marginRight: '2%'}} size="small">
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
                <AccessTimeOutlinedIcon sx={{color: '#181c4f'}}/>
              </Grid>

              <Grid container alignItems="center" mb={2}>
                <Typography mr={6} color='#181c4f'>Testing Center 2</Typography>
                <FormControl style={{minWidth: 160, marginRight: '2%'}} size="small">
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
                <AccessTimeOutlinedIcon sx={{color: '#181c4f'}}/>
              </Grid>

              <Grid container alignItems="center" mb={2}>
                <Typography mr={6} color='#181c4f'>Testing Center 3</Typography>
                <FormControl style={{minWidth: 160, marginRight: '2%'}} size="small">
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
                <AccessTimeOutlinedIcon sx={{color: '#181c4f'}}/>
              </Grid>

              <Grid container alignItems="center" mb={2}>
                <Typography mr={6} color='#181c4f'>Testing Center 4</Typography>
                <FormControl style={{minWidth: 160, marginRight: '2%'}} size="small">
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
                <AccessTimeOutlinedIcon sx={{color: '#181c4f'}}/>
              </Grid>

            </Grid>

        </Grid>

        <Box align='center' mt={2}>
          <Typography color='#181c4f' mb={2}>Data in the import file is correct. Please continue to import.</Typography>
              <Button variant="contained" size='large' sx={{marginRight: '2em', backgroundColor: '#181c4f', width: '15em', p: '1em 0'}}>Continue Import</Button>
              <Button variant="outlined" size='large' sx={{color: '#cf6304', borderColor: '#cf6304', width: '15em', p: '1em 0'}}>Cancel</Button>
        </Box>
      </>
    );
  };