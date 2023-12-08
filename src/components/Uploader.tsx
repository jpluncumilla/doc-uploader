import { Button } from "@mui/material"
import React, { useState } from "react"

export const Uploader = () => {
    const [file, setFile] = useState<File | undefined>()

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (typeof file === 'undefined') return
        const formData = new FormData()
        formData.append('file', file)

        //TODO: Add cloud storage for upload
        console.log('STORED to state ====>', file)
    }
    
    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement & { files: FileList }
        //TODO remove console log
        console.log('files', target.files)

        setFile(target.files[0])

    }
    return (
        <>
        <h1>Uploader</h1>
        <input type="file" name="manifest" onChange={handleOnChange}/>
        <Button onClick={handleSubmit}>Upload Manifest</Button>
        </>
    )
}