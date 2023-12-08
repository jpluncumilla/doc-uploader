import { Button } from "@mui/material"
import React from "react"

export const Uploader = () => {
    const handleSubmit = () => {

    }
    
    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement & { files: FileList }
        console.log('files', target.files)
    }
    return (
        <>
        <h1>Uploader</h1>
        <input type="file" name="manifest" onChange={handleOnChange}/>
        <Button onSubmit={handleSubmit}>Upload Manifest</Button>
        </>
    )
}