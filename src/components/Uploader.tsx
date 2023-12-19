import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export const Uploader = () => {
  const [filePresent, setFilePresent] = useState<boolean>(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFilePresent(true);
  };

  //Dropzone functionality
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ onDrop });

  return (
    <>
      <Box
        mt={2}
        sx={{
          border: "solid 1px #a8a8a8",
          borderRadius: "10px",
          padding: "1em",
        }}
      >
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {!isDragActive && (
            // @ts-ignore
            <Grid
              item
              align='center'
              sx={{ border: "dashed 1px #a8a8a8", p: "3em" }}
            >
              <DescriptionIcon sx={{ color: "#cf6304" }} />
              <Typography>
                Drag & Drop Here or <strong>Browse</strong>
              </Typography>
            </Grid>
          )}

          {isDragActive && (
            // @ts-ignore
            <Grid
              item
              align='center'
              sx={{ border: "dashed 1px #a8a8a8", p: "3em" }}
            >
              <Typography>
                <strong>File will be uploaded</strong>
              </Typography>
            </Grid>
          )}
        </div>
        {
          // @ts-ignore
          <Grid item align='center' mt={2}>
            <Button
              size='medium'
              variant='contained'
              onClick={handleSubmit}
              sx={{ backgroundColor: "#181c4f" }}
            >
              Upload Manifest
            </Button>
          </Grid>
        }
      </Box>
      {acceptedFiles[0] && filePresent && (
        <>
          <hr />
          <Grid container>
            <Grid item>
              <CropOriginalIcon sx={{ color: "#cf6304", fontSize: "50px" }} />
            </Grid>
            <Typography mr={"40%"} sx={{ color: "#a8a8a8" }}>
              {acceptedFiles[0].name}
            </Typography>
            <Typography align='right'>{acceptedFiles[0].size} MB</Typography>
            <Grid container>
              <Box width={"100%"}>
                <LinearProgress
                  variant='determinate'
                  value={100}
                  sx={{ color: "#a8a8a8" }}
                />
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
