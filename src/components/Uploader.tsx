import { Box, Button, Grid, Typography } from "@mui/material"
import DescriptionIcon from '@mui/icons-material/Description';
import React, { useState, useCallback } from "react"
import {useDropzone} from 'react-dropzone'

export const Uploader = () => {
    const [file, setFile] = useState<File | undefined>()

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (typeof file === 'undefined') return
        const formData = new FormData()
        formData.append('file', file)

        //TODO: Add cloud storage for upload with axios POST request for loader
        console.log('STORED to state ====>', file)
    }
    
    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement & { files: FileList }
        //TODO remove console log
        console.log('files', target.files)

        setFile(target.files[0])
    }
    //Dropzone functionality
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
    
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <>
        <Box mt={2} sx={{border: 'solid 1px #a8a8a8', borderRadius:'10px',padding:'1em'}}>
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            { !isDragActive && (
                // @ts-ignore
                <Grid item align='center' sx={{border:'dashed 1px #a8a8a8', p: '3em'}}>
                    <DescriptionIcon sx={{color:'#cf6304'}}/>
                    <Typography>Drag & Drop Here or <strong>Browse</strong></Typography>
                </Grid>
            )
            }

            { isDragActive && (
                // @ts-ignore
                <Grid item align='center' sx={{border:'dashed 1px #a8a8a8', p: '3em'}}>
                    <Typography><strong>File will be uploaded</strong></Typography>
                </Grid>
            )
            }
            </div>
            {// @ts-ignore
            <Grid item align='center' mt={2}>
            <Button size="medium" variant="contained" onClick={handleSubmit}>Upload Manifest</Button>
            </Grid>  }      
        </Box>
        </>
    )
}